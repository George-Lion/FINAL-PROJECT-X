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


@api.route("/trip/<int:trip_id>", methods=["GET"])
@jwt_required()
def trip(trip_id):
    trip = Trip.query.get(trip_id)
    if trip:
        return jsonify({"trip": trip.serialize()}), 200
    else:
        return jsonify({"error": "no trip"}), 400


@api.route("/trip", methods=["PUT"])
@jwt_required()
def editTrip():
    current_id = get_jwt_identity()
    trip = Trip.query.get(current_id)
    body_destination = request.form.get("destination", None)
    body_start_of_the_trip = request.form.get("start_of_the_trip", None)
    body_end_of_the_trip = request.form.get("end_of_the_trip", None)
    body_people = request.form.get("people", None)
    body_transport = request.form.get("transport", None)
    body_cost = request.form.get("cost", None)

    if body_destination != "" and body_start_of_the_trip != "" and body_end_of_the_trip != "" and body_people != "" and body_transport != "" and body_cost != "":
        if "destination_picture" in request.files:
            body_destination_picture = cloudinary.uploader.upload(
                request.files['destination_picture'])
        trip.destination_picture = body_destination_picture['secure_url']
        trip.destination = body_destination
        trip.start_of_the_trip = body_start_of_the_trip
        trip.end_of_the_trip = body_end_of_the_trip
        trip.people = body_people
        trip.transport = body_transport
        trip.cost = body_cost
        db.session.commit()
        return jsonify({"edited": True, "trip": trip.serialize()}), 200
    else:
        return jsonify({"edited": False, "msg": "Falta información"}), 400


@api.route("/trips", methods=["GET"])
@jwt_required()
def get_trips():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        trips = Trip.query.all()
        return jsonify({"trips": list(map(lambda trip: trip.serialize(), trips))}), 200
    else:
        return jsonify({"error": "error"}), 400
