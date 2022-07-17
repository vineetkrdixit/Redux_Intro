const initialState = {};

const UserReducer = (store = initialState, action) => {
  console.log("UserReducer", action);

  switch (action.type) {
    case "Login": {
      return {
        Username: "Vineet",
      };
    }
    default: {
      return store;
    }
  }
};

export default UserReducer;
