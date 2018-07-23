<template>
    <div>
        <h2>Login to access files</h2>
        <div class="container">
            <input type="text" class="form-control" placeholder="Username">
            <input type="text" class="form-control" placeholder="Password">
            <button class="btn btn-secondary" v-on:click='login'>Login</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login: function () {
      this.$router.push('/data')
    }
  }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    input {
        width: 50%;
        margin: 2vh
    }
</style>
