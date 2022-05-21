from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    fullname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    profilePicture = db.Column(db.String(120), unique=False, nullable=False)
    createdTrip = db.relationship("Trip", backref="User")

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "fullname": self.fullname,
            "email": self.email,
            "city": self.city,
            "profilePicture": self.profilePicture,
        }


class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    destination = db.Column(db.String(120), unique=False, nullable=False)
    date = db.Column(db.Integer, unique=False, nullable=False)
    people = db.Column(db.Integer, unique=False, nullable=False)
    transport = db.Column(db.String(120), unique=False, nullable=False)
    cost = db.Column(db.Integer, unique=False, nullable=False)
    TripInFeed = db.relationship("Feed", backref="Trip")

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "accepted_Trip_List": self.acceptedTripList,
            "destination": self.destination,
            "date": self.date,
            "people": self.people,
            "transport": self.transport,
            "cost": self.cost,
        }


class Feed(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id_trip = db.Column(db.Integer, db.ForeignKey("trip.id"))

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,

        }
