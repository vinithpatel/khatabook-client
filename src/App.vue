<template>
  <img class= "logo" alt="Vue logo" src="https://img.freepik.com/free-vector/electronic-documentation-man-with-registration-checking-repository-log-online-approval-screen-form-validation-page-expense-chronicles-vector-isolated-concept-metaphor-illustration_335657-4323.jpg?t=st=1706447604~exp=1706448204~hmac=fde5065ccfc4861836e7764466952b45153342af057c7ef036177f7d1066c86b">
  <HelloWorld msg="Welcome to Khatabook"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  height: 300px;
}
</style>
