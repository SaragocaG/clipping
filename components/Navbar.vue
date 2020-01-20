<template>
  <nav :class="'navbar navbar-expand-lg navbar-dark bg-dark fixed-top' + navbarBg">
    <a class="navbar-brand" href="#">{{ companyName }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li v-for="item in routes" :key="item.address" class="nav-item">
          <router-link :to="item.address" class="nav-link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navbarBg: '',
      routes: [
        // { address: '', title: '' }
      ],
      companyName: this.$store.state.setup.companyName
    }
  },

  mounted () {
    window.onscroll = () => {
      this.navbarBg = window.scrollY === 0 ? ' transparentBg' : ''
    }
    this.navbarBg = window.scrollY === 0 ? ' transparentBg' : ''
  }
}
</script>

<style scoped>
  .navbar {
    transition: all 500ms;
    z-index: 4 !important;
  }
  .transparentBg {
    background-color: transparent !important;
  }
  .nav-link, .navbar-brand {
    text-shadow: 1px 1px rgb(50, 50, 50);
  }
</style>
