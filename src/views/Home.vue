<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola mundo</h1>
    <button
      @click="goToEntries"
      class="btn btn-info"
    >Enty list</button>
  </div>
</template>

<script>
export default{
  methods: {
    goToEntries(){
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>