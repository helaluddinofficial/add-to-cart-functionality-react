const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};

export { Reducer };

  // product reducer
const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_FILTER':
      return {
        ...state,
        sort: action.payload,
      };

    case 'FILTER_BY_STOCK':
      return {
        ...state,
        byStock: !state.byStock,
      };

    case 'FILTER_BY_DELIVERY':
      return {
        ...state,
        byFastDelivery: action.payload, // could also toggle if you want
      };

    case 'FILTER_BY_RATING':
      return {
        ...state,
        byRating: action.payload,
      };

    case 'FILTER_BY_SEARCH':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: '',
        
      };

    default:
      return state; // ✅ fallback so state never becomes undefined
  }
};

export { ProductReducer };
