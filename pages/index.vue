<template>
  <div>
    <Cart />
    <Navbar />
    <Header />
    <Products />
    <Footer />
  </div>
</template>

<script>
import Cart from '~/components/Cart'
import Navbar from '~/components/Navbar'
import Header from '~/components/Header'
import Products from '~/components/Products'
import Footer from '~/components/Footer'
export default {
  components: {
    Cart,
    Navbar,
    Header,
    Products,
    Footer
  }
}
</script>

<style scoped>

</style>
