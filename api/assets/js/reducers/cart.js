const initialState = {
  books: [],
  total: 0,
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (typeof action.book.quantity === 'undefined') {
        action.book.quantity = 1;
      }

      state.books.forEach(function (book, index, books) {
        if (book.id === action.book.id) {
          action.book.quantity = book.quantity + 1;
          books.splice(index, 1);
        }
      });

      return {
        ...state,
        books: [...state.books, action.book],
        total: state.total + 1,
      };
    case 'REMOVE_FROM_CART': {
      const bookQuantity = action.quantity;
      state.books.forEach(function (book, index, books) {
        if (book.id === action.id) {
          books.splice(index, 1);
        }
      });

      return {
        ...state,
        books: [...state.books],
        total: state.total - bookQuantity,
      };
    }
    case 'ITEMS_NUMBER':
      return state.length;
    default:
      return state;
  }
};

export default cartItems;
