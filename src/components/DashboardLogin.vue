<template>
  <div class="hello">
    <h1>{{ pageTitle }}</h1>
    <app-login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm'
export default {
  name: 'DashboardLogin',
  data () {
    return {
      pageTitle: 'Welcome to Dashboard log in page'
    }
  },
  components: {
    AppLoginForm: LoginForm
  }
}
</script>

<style scoped>
</style>
