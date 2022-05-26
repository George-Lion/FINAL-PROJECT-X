"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, MatchTrip, Trip
from api.utils import generate_sitemap, APIException
import cloudinary
import cloudinary.uploader
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def login_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by(email=body_email).filter_by(
            password=body_password).first()
        if user:
            token = create_access_token(identity=user.id)
            return jsonify({"logged": True, "token": token, "user": user.serialize()}), 200
        else:
            return jsonify({"logged": False, "msg": "Bad info"}), 400
    else:
        return jsonify({"logged": False, "msg": "Missing info"}), 400


@api.route("/register", methods=["POST"])
def register_user():
    body_username = request.json.get("username")
    body_firstname = request.json.get("firstname")
    body_lastname = request.json.get("lastname")
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_city_of_residence = request.json.get("city_of_residence")

    if body_email and body_password:
        new_user = User(username=body_username, firstname=body_firstname, lastname=body_lastname,
                        email=body_email, password=body_password, city_of_residence=body_city_of_residence)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created": True, "user": new_user.serialize()}), 200
    else:
        return jsonify({"created": False, "msg": "Falta información"}), 200


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        return jsonify({"logged_in": True}), 200
    else:
        return jsonify({"logged_in": False}), 400

# @api.route("/user", methods=["PUT"]) FALTA ESTO


@api.route("/user", methods=["GET"])
@jwt_required()
def getUser():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        return jsonify({"user": user.serialize()}), 200
    else:
        return jsonify({"error": "Usuario no encontrado"}), 400


@api.route("/user", methods=["PUT"])
@jwt_required()
def editUser():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    body_username = request.json.get("username")
    body_firstname = request.json.get("firstname")
    body_lastname = request.json.get("lastname")
    body_city_of_residence = request.json.get("city_of_residence")
    body_profile_picture = cloudinary.uploader.upload(
        request.files['profile_image'])
    body_description = request.json.get("description")
    body_country = request.json.get("country")

    if body_username and body_firstname and body_lastname and body_city_of_residence and body_profile_picture and body_description and body_country:
        user.username = body_username
        user.firstname = body_firstname
        user.lastname = body_lastname
        user.city_of_residence = body_city_of_residence
        user.profile_picture = result['secure_url']
        user.description = body_description
        user.country = body_country
        db.session.commit()
        return jsonify({"edited": True, "user": user.serialize()}), 200
    else:
        return jsonify({"edited": False, "msg": "Falta información"}), 200


@api.route("/trips", methods=["GET"])
@jwt_required()
def get_user_trips():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        return jsonify({"trips": list(map(lambda trip: trip.serialize(), user.created_trip))}), 200
    else:
        return jsonify({"error": "Usuario no encontrado"}), 400


@api.route("/user/profiles", methods=["GET"])
@jwt_required()
def get_user_profiles():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        # Esto no funciona por ahora --------------------------------------------
        user_profiles = MatchTrip.query.filter_by(
            user_id=current_id).filter_by(accepted=True)
        return jsonify({"profiles": list(map(lambda profile: profile.serialize(), user_profiles))}), 200
    else:
        return jsonify({"error": "Usuario no encontrado"}), 400


@api.route("/create/trip", methods=["POST"])
@jwt_required()
def create_trip():
    current_id = get_jwt_identity()
    body_destination = request.json.get("destination")
    body_date_of_the_trip = request.json.get("date_of_the_trip")
    body_people = request.json.get("people")
    body_transport = request.json.get("transport")
    body_cost = request.json.get("cost")

    if body_destination and body_date_of_the_trip and body_people and body_transport and body_cost:
        new_trip = Trip(user_id_of_trip_creator=current_id, destination=body_destination, date_of_the_trip=body_date_of_the_trip, people=body_people,
                        transport=body_transport, cost=body_cost)
        db.session.add(new_trip)
        db.session.commit()
        return jsonify({"created": True, "trip": new_trip.serialize()}), 200
    else:
        return jsonify({"created": False, "msg": "Falta información"}), 200
