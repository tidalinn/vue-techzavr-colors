import Vue from 'vue';
import Vuex from 'vuex';
import catalog from '@/data/catalog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      { productId: 1, amount: 1 },
    ],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const itemIsInCart = state.cartProducts.find((item) => item.productId === productId);

      if (amount > 0) {
        if (itemIsInCart) {
          itemIsInCart.amount += amount;
        } else {
          state.cartProducts.push({
            productId,
            amount,
          });
        }
      }
    },
    updateCartProductAmount(state, { productId, amount }) {
      const itemIsInCart = state.cartProducts.find((item) => item.productId === productId);

      if (itemIsInCart) {
        if (amount > 0) {
          itemIsInCart.amount = amount;
        }
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },
  },
  getters: {
    cartDetailProduct(state) {
      /* eslint-disable */
      return state.cartProducts.map((item) => {
        return {
          ...item,
          product: catalog.find((p) => p.id === item.productId),
        };
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProduct.reduce((acc, item) => (item.product.price * item.amount) + acc, 0)
    },
    cartTotalAmount(state, getters) {
      return getters.cartDetailProduct.reduce((acc, item) => (item.amount) + acc, 0)
    }
  },
});