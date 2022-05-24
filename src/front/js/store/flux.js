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
      logged: null,
    },

    actions: {
      verify: async () => {
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu45.gitpod.io/api/protected",
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
        try {
          const resp = await fetch(
            "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu45.gitpod.io/api/user/",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(user),
            }
          );
        } catch (e) {}
        // setStore({ user: user });
      },
    },
  };
};

export default getState;
