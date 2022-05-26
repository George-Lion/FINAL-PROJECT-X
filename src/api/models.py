from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=True)
    firstname = db.Column(db.String(120), unique=False, nullable=True)
    lastname = db.Column(db.String(120), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    city_of_residence = db.Column(db.String(120), unique=False, nullable=True)
    profile_picture = db.Column(db.String(120), unique=False, nullable=True)
    created_trip = db.relationship("Trip", backref="User")

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "city_of_residence": self.city_of_residence,
            "profile_picture": self.profile_picture,
        }


class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id_of_trip_creator = db.Column(db.Integer, db.ForeignKey("user.id"))
    destination = db.Column(db.String(120), unique=False, nullable=False)
    date_of_the_trip = db.Column(db.Date(), unique=False, nullable=False)
    people = db.Column(db.Integer, unique=False, nullable=False)
    transport = db.Column(db.String(120), unique=False, nullable=False)
    cost = db.Column(db.Integer, unique=False, nullable=False)
    trip_in_match = db.relationship("MatchTrip")

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


class MatchTrip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    trip_id = db.Column(db.Integer, db.ForeignKey("trip.id"))
    user = db.relationship("User")
    trip = db.relationship("Trip")
    message = db.Column(db.Text, unique=False, nullable=False)
    accepted = db.Column(db.Boolean, unique=False,
                         nullable=True, default=False)
    rejected = db.Column(db.Boolean, unique=False,
                         nullable=True, default=False)

    def serialize(self):
        return {
            "id": self.id,
            "message": self.message,
            "accepted": self.accepted,
            "rejected": self.rejected,
        }


class Help(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    faq = db.Column(db.Text, unique=False, nullable=False)
    recomendations = db.Column(db.Text, unique=False, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "faq": self.faq,
            "recomendations": self.recomendations,
        }