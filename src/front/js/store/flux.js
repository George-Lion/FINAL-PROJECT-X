const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: null,
    },
    actions: {
      setStoreUser: (user) => {
        setStore({ user: user });
      },

      getUser: async () => {
        const response = await fetch(
          "https://3001-georgelion-finalproject-d16qehmb8rn.ws-eu45.gitpod.io/api/user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        getActions().setStoreUser(data.user);
      },
    },
  };
};

export default getState;
