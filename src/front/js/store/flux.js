const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {
        username: " ",
        firstname: " ",
        lastname: " ",
        country: "England",
        city_of_residence: " ",
        description:
          "I like meeting new people, going out and have a good time, forget about the day to day and live the moment, I love the sea.",
      },
      trips: [],
      logged: null,
      trip: [],
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
          setStore({ logged: data.logged_in || false });
        } catch (e) {
          setStore({ logged: false });
        }
      },
      logout: async () => {
        localStorage.clear();
        setStore({ logged: false });
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
          if (resp.status == 200) {
            console.log("###################");
            return data.trip;
          } else {
            console.log("@@@@@@@@@@@");
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
    },
  };
};

export default getState;
