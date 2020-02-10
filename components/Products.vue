<template>
  <div class="container py-5">
    <div id="filtersArea" class="row">
      <div class="col-12 col-md-8">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Pesquisar</span>
          </div>
          <input v-model="search" type="text" class="form-control" placeholder="Pesquisar">
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="dropdown">
          <span id="dropdownOrderBy" class="btn btn-info dropdown-toggle text-light" role="button" data-toggle="dropdown">
            Ordenar Por: {{ orderBy }}
          </span>

          <ul class="dropdown-menu" aria-labelledby="dropdownOrderBy">
            <li v-for="(orderOption, index) in orderByOptions" :key="index" @click="setOrderBy(orderOption)" class="dropdown-item">
              {{ orderOption }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="search !== ''" class="col-12">
        <small>({{ filteredProducts.length }}) resultados da pesquisa por <b>"{{ search }}"</b></small>
        <hr>
      </div>
    </div>

    <div id="productsArea" class="row py-3">
      <div v-for="product in filteredProducts" :key="product.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card my-2 mx-2">
          <img src="https://picsum.photos/200/300.jpg" class="card-img-top product-img mx-auto" alt="...">
          <div class="card-body text-center">
            <h4>
              {{ product.name }}
            </h4>
            <br>
            <h5>{{ product.price|money }}</h5>
            <hr>
            <span @click="addToCart(product)" class="btn btn-sm btn-orange text-light">
              <small>
                ADICIONAR PRODUTO AO CARRINHO <i class="fas fa-cart-plus" />
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-if="$store.state.cart.productCount > 0" class="col-12 text-center">
        <span>Finalizar Compra</span>
      </div>
    </div>
  </div>
</template>

<script>
import allProducts from '../static/products.js'
export default {
  filters: {
    money (val) {
      return 'R$ ' + val.toFixed(2).toLocaleString()
    }
  },
  data () {
    return {
      allProducts,
      search: '',
      orderBy: '',
      orderByOptions: [
        'Ordem Alfabética',
        'Menor Preço',
        'Maior Preço'
      ]
    }
  },
  computed: {
    filteredProducts () {
      const order = this.orderBy
      return this.allProducts.filter((item) => {
        return this.search === '' ? true : item.name.toUpperCase().includes(this.search.toUpperCase())
      })
        .sort((a, b) => {
          switch (order) {
            case 'Ordem Alfabetica' :
              return a.name > b.name
            case 'Maior Preço' :
              return a.price < b.price
            case 'Menor Preço' :
              return a.price > b.price
            default :
              return a.name > b.name
          }
        })
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('cart/addProduct', product)
      alert('Produto: "' + product.name + '" adicionado com sucesso!')
    },
    setOrderBy (order) {
      this.orderBy = order
    }
  }
}
</script>

<style scoped>
  .dropdown-item {
    cursor: pointer;
  }
  .product-img {
    width:100px
  }
  .btn-orange {
    border-radius: 10px;
    background-color: #f58220;
  }
  #productsArea {
    min-height: 60vh;
  }
</style>
