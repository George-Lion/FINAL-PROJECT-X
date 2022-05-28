const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      userProfiles: [],
      userTrips: [],
      logged: null,
      url: "https://3001-georgelion-finalproject-v1hglk0kvbi.ws-eu46.gitpod.io/api/",
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
          const resp = await fetch(getStore().url + "create/trip", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(trip),
          });
          const data = await resp.json();
          getActions().getUserTrips();
        } catch (e) {}
      },
    },
  };
};

export default getState;
