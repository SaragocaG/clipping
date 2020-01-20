<template>
  <div class="">
    <div id="toggler" v-if="!isVisible" @click="toggleVisible()" class="pointer">
      <i class="fas fa-shopping-cart" />
      <sup>
        <small>
          <span class="badge badge-info">
            {{ products.length }}
          </span>
        </small>
      </sup>
    </div>

    <div id="cart" :class="classVisible">
      <div class="pb-5">
        <div id="products" class="container">
          <div class="mb-3">
            <h3 @click="toggleVisible" class="fas fa-times pointer" />
          </div>
          <h4>
            <i class="fas fa-shopping-cart" />
            Carrinho <sup><small class="badge badge-info">{{ products.length }}</small></sup>
          </h4>

          <table class="table table-sm table-hover table-striped mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product.id">
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price|money }}</td>
                <td class="text-center">
                  <i @click="removeProduct(index)" class="fas fa-trash-alt pointer" />
                </td>
              </tr>
              <tr v-if="products.length > 0">
                <th colspan="2">
                  Total
                </th>
                <th>
                  {{ totalValue|money }}
                </th>
              </tr>
            </tbody>
          </table>

          <div v-if="products.length > 0" class="col-12 mt-3 text-center">
            <span @click="endShopping()" class="btn btn-sm btn-orange mx-auto text-light">
              FINALIZAR COMPRA
            </span>
            <hr>
            <div>
              <code lang="javascript">
                axios.post('https://APIAddress/order', {{ JSON.stringify(products) }})
                .then((res) => {
                ...
                })
                .catch((err) => {
                ...
                })
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  filters: {
    money (val) {
      return 'R$ ' + val.toFixed(2).toLocaleString()
    }
  },
  data () {
    return {
      isVisible: false,
      classVisible: 'hidden'
    }
  },
  computed: {
    products () {
      return this.$store.state.cart.products
    },
    totalValue () {
      return this.products.reduce((ant, cur) => ant + cur.price, 0)
    }
  },
  methods: {
    toggleVisible () {
      this.isVisible = !this.isVisible
      this.classVisible = this.isVisible ? 'visible' : 'hidden'
    },
    removeProduct (productIndex) {
      if (confirm(`Deseja realmente remover o produto: \n${this.$store.state.cart.products[productIndex].name}?`)) {
        this.$store.commit('cart/removeProduct', productIndex)
      }
    },
    endShopping () {
      alert('Redirect para a página de checkout')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }

  .hidden {
    left:100vw;
  }
  .visible {
    left: calc(100vw - 472px)
  }

  .btn-orange {
    border-radius: 10px;
    background-color: #f58220;
  }

  #cart {
    padding-top: 80px;
    transition: all 200ms ease;
    position: fixed;
    background:whitesmoke;
    height: 100vh;
    z-index: 1;
    width: 468px;
    overflow: hidden;
    overflow-y: auto
  }

  @media screen and (max-width: 468px){
    #cart {
      width: 100vw;
    }
    .visible {
      left: 0
    }
  }

  #toggler {
    background-color: #f58220;
    position: fixed;
    height: 70px;
    width: 70px;
    top: calc(100vh - 150px);
    left: calc(100vw - 85px);
    z-index: 2;
    font-size: xx-large;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    border-radius: 10px 0px 0px 10px
  }

  td, th {
    text-align: center
  }
</style>
