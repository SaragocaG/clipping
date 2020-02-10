<template>
  <footer id="footer" class="pt-3 pb-5 text-light text-center">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 col-md-4">
          <hr>
          Copyright {{ companyName }}&copy; - {{ currentYear }}
        </div>

        <div class="col-12 col-md-4">
          <hr>
          <ul>
            <li v-for="(service, index) in services" :key="index">
              {{ service }}
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-4">
          <hr>
          {{ companyAddress }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      services: this.$store.state.setup.services,
      companyName: this.$store.state.setup.companyName,
      companyAddress: this.$store.state.setup.companyAddress
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
  #footer{
    min-height: 20vh;
    background-color: rgb(30,30,30);
    font-size: 10pt;
  }
  ul {
    list-style: none;
  }
  hr {
    border-color: rgb(50,50,50);
  }
</style>
