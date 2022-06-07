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
            # identity es un parametro de la libreria de token JWT. Aca dentro de todo el token se encuentra el parametro que yo desee. EN este caso, user.id
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
        return jsonify({"logged_in": True, "user_id": current_id}), 200
    else:
        return jsonify({"logged_in": False}), 400


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
    body_username = request.form.get("username", None)
    if body_username == "" or body_username == None:
        body_username = "Username"
    body_firstname = request.form.get("firstname", None)
    if body_firstname == "" or body_firstname == None:
        body_firstname = "First Name"
    body_lastname = request.form.get("lastname", None)
    if body_lastname == "" or body_lastname == None:
        body_lastname = "Last Name"
    body_city_of_residence = request.form.get("city_of_residence", None)
    if body_city_of_residence == "" or body_city_of_residence == None:
        body_city_of_residence = "City"
    body_description = request.form.get("description", None)
    if body_description == "" or body_description == None:
        body_description = ""
    body_country = request.form.get("country", None)
    if body_country == "" or body_country == None:
        body_country = "Country"
    if "banner_picture" in request.files:
        body_banner_picture = cloudinary.uploader.upload(
            request.files['banner_picture'])
        user.banner_picture = body_banner_picture['secure_url']

    if "profile_picture" in request.files:
        body_profile_picture = cloudinary.uploader.upload(
            request.files['profile_picture'])
        user.profile_picture = body_profile_picture['secure_url']

    user.username = body_username
    user.firstname = body_firstname
    user.lastname = body_lastname
    user.city_of_residence = body_city_of_residence
    user.description = body_description
    user.country = body_country
    db.session.commit()
    return jsonify({"edited": True, "user": user.serialize()}), 200


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
    body_trip_id = request.form.get("id")
    trip = Trip.query.get(body_trip_id)
    body_destination = request.form.get("destination", None)
    if body_destination == "" or body_destination == None:
        body_destination = "Destination"
    body_start_of_the_trip = request.form.get("start_of_the_trip", None)
    if body_start_of_the_trip == "" or body_start_of_the_trip == None:
        body_start_of_the_trip = "Start"
    body_end_of_the_trip = request.form.get("end_of_the_trip", None)
    if body_end_of_the_trip == "" or body_end_of_the_trip == None:
        body_end_of_the_trip = "End"
    body_people = request.form.get("people", None)
    if body_people == "" or body_people == None:
        body_people = "0"
    body_transport = request.form.get("transport", None)
    if body_transport == "" or body_transport == None:
        body_transport = "None"
    body_cost = request.form.get("cost", None)
    if body_cost == "" or body_cost == None:
        body_cost = "0"
    body_text = request.form.get("text", None)
    if body_text == "" or body_text == None:
        body_text = ""

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
    trip.text = body_text
    db.session.commit()
    return jsonify({"edited": True, "trip": trip.serialize()}), 200


@api.route("/trips", methods=["GET"])
@jwt_required()
def get_user_trips():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        return jsonify({"trips": list(map(lambda trip: trip.serialize(), user.created_trip))}), 200
    else:
        return jsonify({"error": "Usuario no encontrado"}), 400


@api.route("/tripLikes", methods=["POST"])
@jwt_required()
def add_like_trip():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    body_trip_id = request.json.get("trip_id", None)
    if user:
        trip = Trip.query.get(body_trip_id)
        if user.id != trip.user_id_of_trip_creator:
            trip.likes.append(user)
            db.session.commit()
            return jsonify({"likeAdded": True}), 200
        else:
            return jsonify({"error": "error"}), 400
    else:
        return jsonify({"error": "error"}), 400


@api.route("/user/profiles", methods=["GET"])
@jwt_required()
def get_user_profiles():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        user_profiles = MatchTrip.query.filter_by(
            user_id=current_id).filter_by(accepted=True)
        return jsonify({"profiles": list(map(lambda profile: profile.serialize(), user_profiles))}), 200
    else:
        return jsonify({"error": "Usuario no encontrado"}), 400


@api.route("/create/trip", methods=["POST"])
@jwt_required()
def create_trip():
    current_id = get_jwt_identity()
    body_destination = request.form.get("destination")
    body_start_of_the_trip = request.form.get("start_of_the_trip")
    body_end_of_the_trip = request.form.get("end_of_the_trip")
    body_people = request.form.get("people")
    body_transport = request.form.get("transport")
    body_cost = request.form.get("cost")
    body_destination_picture = "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    if "destination_picture" in request.files:
        body_destination_picture = cloudinary.uploader.upload(
            request.files['destination_picture'])['secure_url']

    if body_destination and body_start_of_the_trip and body_end_of_the_trip and body_people and body_transport and body_cost and body_destination_picture:
        new_trip = Trip(user_id_of_trip_creator=current_id, destination=body_destination, start_of_the_trip=body_start_of_the_trip, end_of_the_trip=body_end_of_the_trip, people=body_people,
                        transport=body_transport, cost=body_cost, destination_picture=body_destination_picture)
        print(new_trip)
        db.session.add(new_trip)
        db.session.commit()
        return jsonify({"created": True, "trip": new_trip.serialize()}), 200
    else:
        return jsonify({"created": False, "msg": "Falta información"}), 400


@api.route("/allTrips", methods=["GET"])
@jwt_required()
def get_trips():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        trips = Trip.query.all()
        # aca me hace un mapeo de una lista de instancia de clases.
        return jsonify({"trips": list(map(lambda trip: trip.serialize(), trips))}), 200
    else:
        return jsonify({"error": "error"}), 400


@api.route("/search", methods=["GET", "POST"])
def get_trips_search():
    requested_destination = request.json.get("destination")
    requested_start_date = request.json.get("date")
    requested_end_date = request.json.get("end_date")
    queries = []
    if requested_destination:
        queries.append(Trip.destination == requested_destination)
    if requested_start_date:
        queries.append(Trip.start_of_the_trip == requested_start_date)
    if requested_end_date:
        queries.append(Trip.end_of_the_trip == requested_end_date)
    destination_match = Trip.query.filter(*queries)
    return jsonify({"trip": list(map(lambda trip: trip.serialize(), destination_match))}), 200
