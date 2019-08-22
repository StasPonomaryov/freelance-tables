<template>
  <b-container>
    <b-row>
      <b-col col md="6" lg="4" class="mx-auto">
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            id="firstGroup"
            label="Email address:"
            label-for="firstGroup"
          >
            <b-form-input
              id="userEmail"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="secondGroup"
            label="Password:"
            label-for="secondGroup"
          >
            <b-form-input
              id="userPassword"
              v-model="form.password"
              required
              type="password"></b-form-input>
          </b-form-group>
          <b-button
            id="loginButton"
            type="submit"
            variant="primary"
          >Sign in</b-button>
          <div id="msg" class="alert mt-2 "></div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      show: true,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      console.log('Go!')
    }
  }
}
</script>

<style scoped>
</style>
