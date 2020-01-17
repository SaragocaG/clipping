<template>
  <div class="container">
      <h3>
        Valor Total: R$ {{ totalValue }}
      </h3>
      <div class="row">
        <div v-for="product in products" class="card col-6 col-md-4 col-lg-3 my-2 mx-2">
          <img src="#" class="card-img-top" alt="...">
          <div class="card-body text-center">
              <h4>
                {{ product.name }}
              </h4>
              <br>
              <h5>R$ {{ product.price }}</h5>
              <label :for="'check_' + product.id">Selecionar curso</label>
              <input type="checkbox" :value="product.id" :id="'check_' + product.id" @click="selectProduct(product.id)">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import products from '../static/products.js'
export default {
  data () {
    return {
      products,
      totalValue: 0
    }
  },
  methods: {
    selectProduct (productId) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === productId) {
          this.products[i].checked = !this.products[i].checked
          this.totalValue += this.products[i].price * (this.products[i].checked ? 1 : -1)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
