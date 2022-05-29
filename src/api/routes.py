"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Trip
from api.utils import generate_sitemap, APIException
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


@api.route("/search", methods=["GET", "POST"])
def get_trips_search():
    requested_destination = request.json.get("destination")
    requested_date = request.json.get("date")
    if requested_destination and requested_date:
        destination_match = Trip.query.filter_by(
            destination=requested_destination).filter_by(
            start_of_the_trip=requested_date).first()
        return jsonify({"trip": destination_match.serialize()}), 200
    else:
        return jsonify({"msg": "Missing info"}), 400
