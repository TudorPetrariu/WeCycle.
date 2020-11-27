export const state = () => ({
  cartItems: [],
  totalCartPrice: 0
})

const mutations = {
  setProductToCart(state, { name, description, sizes, id, quantity, price }) {
    const record = state.cartItems.find((element) => element.id === id)
    !record
      ? state.cartItems.push({ name, description, sizes, id, quantity, price })
      : (record.quantity = quantity + record.quantity)
    state.totalCartPrice += quantity * price
    console.log(state.totalCartPrice)
  }
}

export default { namespaced: true, state, mutations }
