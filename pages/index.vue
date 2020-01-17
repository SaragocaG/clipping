<template>
  <div>
    <Navbar/>
    <Header/>
    <Products/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Header from '~/components/Header'
import Products from '~/components/Products'
import Footer from '~/components/Footer'
export default {
  components: {
    Navbar,
    Header,
    Products,
    Footer
  }
}
</script>

<style scoped>

</style>
