export const addToCart = book => ({
  type: 'ADD_TO_CART',
  book: book,
});

export const removeFromCart = (id, quantity) => ({
  type: 'REMOVE_FROM_CART',
  id,
  quantity,
});
