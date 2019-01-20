<template>
  <h1>{{ pageName }} page</h1>
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

</style>
