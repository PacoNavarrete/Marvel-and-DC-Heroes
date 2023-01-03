export const authReducer = (state = {}, action) => {
  //action contiene lo siguiente: action.type, action.payload

  const type = {
    '[Auth] Login': {
      ...state,
      logged: true,
      user: action.payload,
    },
    '[Auth] Logout': {
      logged: false,
    },
  };

  return type[action.type] || state;
};
