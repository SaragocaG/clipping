const cart = {
  state: () => {
    return {
      products: []
    }
  },
  mutations: {
    addProduct (state, product) {
      state.products.push(product)
    },
    removeProduct (state, index) {
      state.products.splice(index, 1)
    }
  },
  actions: {

  },
  getters: {
    productsCount (state) {
      return state.products.length
    }
  }
}

export default cart
