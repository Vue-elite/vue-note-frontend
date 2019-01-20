<template>
  <div class="form registration-form">
    <h1>Register</h1>
    <Form>
      <Input label="First Name" id="first-name"/>
      <Input label="Last Name" id="last-name"/>
      <Input label="Email Id" id="email-id"/>
      <Input label="Password" id="password"/>
      <Input label="Password Confirmation" id="confirm-password"/>
      <button>Save</button>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      pageName: '',
    };
  },
  created() {
    this.pageName = this.$attrs.pageName;
  },
};
</script>

<style scoped>
  .form form {
    display: flex;
    flex-direction: column;
  }
</style>
