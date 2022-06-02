const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      user_id: null,
      trips: [],
      logged: null,
      trip: {},
      searchedTrip: [],
    },

    actions: {
      verify: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu46.gitpod.io/api/protected",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
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
        setStore({ logged: false, user_id: null });
      },
      setUser: (loggedUser) => {
        setStore({ user: loggedUser });
      },
      editUser: async (user) => {
        //Aquí agregamos el fetch cuando tengamos la BBDD
        setStore({ user: user });
      },

      getTrip: async (id) => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu46.gitpod.io/api/trip/" +
              id,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await resp.json();
          data.trip.start_of_the_trip = new Date(data.trip.start_of_the_trip)
            .toISOString()
            .split("T")[0]; //new Date se encarga de cambiar un string a date(fecha), luego .toISOString().split('T')[0] aplica el formato a yyyy-mm-dd
          data.trip.end_of_the_trip = new Date(data.trip.end_of_the_trip)
            .toISOString()
            .split("T")[0]; //new Date se encarga de cambiar un string a date(fecha), luego .toISOString().split('T')[0] aplica el formato a yyyy-mm-dd
          if (resp.status == 200) {
            setStore({ trip: data.trip });
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      },

      getTrips: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu46.gitpod.io/api/trips",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await resp.json();
          setStore({ trips: data.trips });
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
          const resp = await fetch(
            "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu46.gitpod.io/api/trip",
            {
              //acceso a la base de datos.
              method: "PUT", //Metodo PUT para modificar la base de datos. si el metodo no se especifica por default es un metodo GET.
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: body,
            }
          );
          const data = await resp.json();
          setStore({ trip: data.trip });
        } catch (e) {}
      },
    },
  };
};

export default getState;
