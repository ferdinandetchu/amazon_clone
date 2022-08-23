export const initailState = {
  basket: [],
};

// selector

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default reducer;
