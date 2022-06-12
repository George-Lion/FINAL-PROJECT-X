const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      profile: {},
      userProfiles: [],
      userTrips: [],
      url: "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu47.gitpod.io/api/",
      user_id: null,
      trips: [],
      logged: null,
      trip: { likes: [] },
      searchedTrip: [],
      match: [],
    },

    actions: {
      verify: async () => {
        try {
          const resp = await fetch(getStore().url + "protected", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });

          const data = await resp.json();
          if (data.user_id) {
            setStore({ user_id: data.user_id });
          }
          setStore({ logged: data.logged_in || false });
        } catch (e) {
          setStore({ logged: false });
        }
      },
      logout: async () => {
        localStorage.clear();
        setStore({
          logged: false,
          user_id: null,
          user: {},
          trips: [],
          trip: {},
          match: [],
        });
      },
      setUser: (loggedUser) => {
        setStore({ user: loggedUser });
      },
      getUser: async () => {
        try {
          const resp = await fetch(getStore().url + "user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ user: data.user });
        } catch (e) {}
      },

      getProfile: async (id) => {
        try {
          const resp = await fetch(getStore().url + "profile/" + id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ profile: data.user });
        } catch (e) {}
      },

      getUserTrips: async () => {
        try {
          const resp = await fetch(getStore().url + "trips", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ userTrips: data.trips });
          console.log(data.trips);
          console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
          for (let x = 0; x < data.trips.length; x++) {
            console.log(data.trips[x].trip_in_match);
            console.log("#########################");
            for (let i in data.trips[x].trip_in_match) {
              console.log(data.trips[x].trip_in_match[i]);
              console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOO");
              setStore({
                match: [...getStore().match, data.trips[x].trip_in_match[i]],
              });
            }
          }
        } catch (e) {}
      },

      getUserProfiles: async () => {
        try {
          const resp = await fetch(getStore().url + "user/profiles", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ userProfiles: data.profiles });
        } catch (e) {}
      },

      editUser: async (user) => {
        try {
          let body = new FormData();
          for (let key in user) {
            body.append(key, user[key]);
          }
          const resp = await fetch(getStore().url + "user", {
            method: "PUT",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: body,
          });
          const data = await resp.json();
          setStore({ user: data.user });
        } catch (e) {}
      },

      createTrip: async (trip) => {
        try {
          let body = new FormData();
          for (let key in trip) {
            body.append(key, trip[key]);
          }
          const resp = await fetch(getStore().url + "create/trip", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: body,
          });
          const data = await resp.json();
          getActions().getUserTrips();
        } catch (e) {}
      },

      getTrip: async (id) => {
        try {
          const resp = await fetch(getStore().url + "trip/" + id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          /*   data.trip.start_of_the_trip = new Date(data.trip.start_of_the_trip)
              .toISOString()
              .split("T")[0]; */ //new Date se encarga de cambiar un string a date(fecha), luego .toISOString().split('T')[0] aplica el formato a yyyy-mm-dd
          /*  data.trip.end_of_the_trip = new Date(data.trip.end_of_the_trip)
             .toISOString()
             .split("T")[0]; */ //new Date se encarga de cambiar un string a date(fecha), luego .toISOString().split('T')[0] aplica el formato a yyyy-mm-dd
          if (resp.status == 200) {
            setStore({ trip: data.trip });
            console.log("€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€");
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      },

      getTrips: async () => {
        try {
          const resp = await fetch(getStore().url + "allTrips", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = await resp.json();
          setStore({ trips: data.trips });
        } catch (e) {}
      },

      sendMatch: async (match) => {
        console.log(match);
        try {
          const resp = await fetch(getStore().url + "send/match", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(match),
          });
          const data = await resp.json();
        } catch (e) {}
      },

      acceptMatch: async (trip) => {
        try {
          const resp = await fetch(getStore().url + "accept", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(trip),
          });
          const data = await resp.json();
        } catch (e) {}
      },

      getMatch: async (user) => {
        try {
          const resp = await fetch(getStore().url + "match", {
            method: "GET",
            headers: {
              "Content-Type":
                "application/json" /* le dice al fetch que va a traer un JSON */,
              Authorization:
                "Bearer " +
                localStorage.getItem(
                  "token"
                ) /* para que se ejecute este fetch se necesita en el local storage algo que se llame token */,
            },
          });
          const data =
            await resp.json(); /* establece que la constante data va a guardar la respuesta de la API en formato JSON */
          setStore({
            match: data.match.trip_in_match,
          }); /* setStore busca la key match y la rellena con el contenido de data */
        } catch (e) {}
      },

      editTrip: async (trip) => {
        //función para editar el viaje.
        try {
          let body = new FormData();
          for (let key in trip) {
            //Iteramos trip en su index.
            body.append(key, trip[key]);
          }
          const resp = await fetch(getStore().url + "trip", {
            //acceso a la base de datos.
            method: "PUT", //Metodo PUT para modificar la base de datos. si el metodo no se especifica por default es un metodo GET.
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: body,
          });
          const data = await resp.json();
          setStore({ trip: data.trip });
        } catch (e) {}
      },

      changeFavorite: async (id, page) => {
        const resp = await fetch(getStore().url + "tripLikes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({ trip_id: id }),
        });
        if (resp.ok) {
          if (page == "feed") {
            getActions().getTrips();
            getActions().getUser();
          } else if (page == "trip") {
            getActions().getTrip(id);
            getActions().getUser();
          }
        }
      },
    },
  };
};

export default getState;
