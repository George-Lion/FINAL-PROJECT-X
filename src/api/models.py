from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    fullname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    city_of_residence = db.Column(db.String(120), unique=False, nullable=False)
    profile_picture = db.Column(db.String(120), unique=False, nullable=False)
    created_trip = db.relationship("Trip", backref="User")

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "fullname": self.fullname,
            "email": self.email,
            "city_of_residence": self.city_of_residence,
            "profile_picture": self.profile_picture,
        }


class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id_of_trip_creator = db.Column(db.Integer, db.ForeignKey("user.id"))
    destination = db.Column(db.String(120), unique=False, nullable=False)
    date_of_the_trip = db.Column(db.Integer, unique=False, nullable=False)
    people = db.Column(db.Integer, unique=False, nullable=False)
    transport = db.Column(db.String(120), unique=False, nullable=False)
    cost = db.Column(db.Integer, unique=False, nullable=False)
    Trip_in_website_feed = db.relationship("Feed", backref="Trip")

    def serialize(self):
        return {
            "id": self.id,
            "user_id_of_trip_creator": self.user_id_of_trip_creator,
            "destination": self.destination,
            "date_of_the_trip": self.date_of_the_trip,
            "people": self.people,
            "transport": self.transport,
            "cost": self.cost,
        }


class Feed(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    creator_of_the_trip = db.Column(db.Integer, db.ForeignKey("user.id"))
    Owner_of_trip1 = db.relationship("User")
    trip_of_an_user = db.Column(db.Integer, db.ForeignKey("trip.id"))
    Owner_of_trip = db.relationship("Trip")

    def serialize(self):
        return {
            "id": self.id,
        }


class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_of_social_network = db.Column(db.Integer, db.ForeignKey("user.id"))
    trip_of_social_network = db.Column(db.Integer, db.ForeignKey("trip.id"))
    favorite_user_of_social_network = db.relationship("User")
    favorite_trip_of_social_network = db.relationship("Trip")

    def serialize(self):
        return {
            "id": self.id,
        }


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    def serialize(self):
        return {
            "id": self.id,
        }
