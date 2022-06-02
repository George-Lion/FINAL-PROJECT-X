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
    country = db.Column(db.String(120), unique=False, nullable=True)
    profile_picture = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.Text, unique=False, nullable=True)
    created_trip = db.relationship("Trip", backref="User")

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email,
            "city_of_residence": self.city_of_residence,
            "country": self.country,
            "profile_picture": self.profile_picture,
            "description": self.description
        }


class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id_of_trip_creator = db.Column(db.Integer, db.ForeignKey("user.id"))
    destination = db.Column(db.String(120), unique=False, nullable=True)
    start_of_the_trip = db.Column(db.Date, unique=False, nullable=True)
    end_of_the_trip = db.Column(db.Date, unique=False, nullable=True)
    people = db.Column(db.Integer, unique=False, nullable=True)
    transport = db.Column(db.String(120), unique=False, nullable=True)
    cost = db.Column(db.Integer, unique=False, nullable=True)
    text = db.Column(db.String(120), unique=False, nullable=True)
    destination_picture = db.Column(
        db.String(300), unique=False, nullable=True)
    trip_in_match = db.relationship("MatchTrip")

    def serialize(self):
        user = User.query.get(self.user_id_of_trip_creator)
        return {
            "username": user.username,
            "user_firstname": user.firstname,
            "user_lastname": user.lastname,
            "profile_picture": user.profile_picture,
            "user_city_of_residence": user.city_of_residence,
            "user_country": user.country,
            "id": self.id,
            "user_id_of_trip_creator": self.user_id_of_trip_creator,
            "destination": self.destination,
            "start_of_the_trip": self.start_of_the_trip,
            "end_of_the_trip": self.end_of_the_trip,
            "people": self.people,
            "transport": self.transport,
            "cost": self.cost,
            "text": self.text,
            "destination_picture": self.destination_picture,
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
