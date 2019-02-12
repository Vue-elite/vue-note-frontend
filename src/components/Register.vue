<template>
  <div class="form registration-form">
    <h1>Register</h1>
    <Form>
      <Input label="First Name"
             id="first-name"
             :value="firstName"
             @input="firstName = $event"/>
      <Input label="Last Name"
             id="last-name"
             :value="lastName"
             @input="lastName = $event"/>
      <Input label="Email Id"
             id="email-id"
             :value="emailId"
             @input="emailId = $event"/>
      <Input label="Password"
             id="password"
             :value="password"
             @input="password = $event"/>
      <Input label="Password Confirmation"
             id="confirm-password"
             :value="passwordConfirmation"
             @input="passwordConfirmation = $event"/>
      <button v-on:click="registerUser">Save</button>
    </Form>
  </div>
</template>

<script>
import { registerUser } from '../utils/Actions';

export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      emailId: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  created() {
    this.pageName = this.$attrs.pageName;
  },
  methods: {
    registerUser(e) {
      e.preventDefault();
      registerUser(this.$data)
        .then((response) => {
          alert('Success ', JSON.stringify(response));
        })
        .catch((err) => {
          alert('Err ', JSON.stringify(err));
        });
    },
  },
};
</script>

<style scoped>
  .form form {
    display: flex;
    flex-direction: column;
  }
</style>
