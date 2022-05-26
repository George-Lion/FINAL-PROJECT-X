const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      userProfiles: [],
      userTrips: [],
      logged: null,
    },

    actions: {
      verify: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/protected",
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

      getUser: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/user/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await resp.json();
          setStore({ user: data.user });
        } catch (e) {}
      },

      getUserTrips: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/trips/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await resp.json();
          console.log(data);
          setStore({ userTrips: data.trips });
        } catch (e) {}
      },

      getUserProfiles: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/user/profiles",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await resp.json();
          setStore({ userProfiles: data.profiles });
        } catch (e) {}
      },

      editUser: async (user) => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/user/",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(user),
            }
          );
          const data = await resp.json();
          setStore({ user: data.user });
        } catch (e) {}
      },

      createTrip: async (trip) => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/create/trip",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(trip),
            }
          );
          const data = await resp.json();
          getActions().getUserTrips();
        } catch (e) {}
      },
    },
  };
};

export default getState;
