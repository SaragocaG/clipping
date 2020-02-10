<template>
  <header class="pt-5">
    <div class="container py-5">
      <h1 id="headerCaption" class="display-4">
        Cursos
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  header {
    background-image: url('/examples/ecommerce/images/headerBg.svg');
    background-position-y: center;
    background-size: cover;
  }
  h1 {
    font-weight: bolder;
    color: white;
  }
  #headerCaption {
    text-shadow: 2px 2px rgb(50, 50, 50);
  }
</style>
