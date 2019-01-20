<template>
  <div>
    <h1>{{ pageName }} page</h1>
    <HomePageButton></HomePageButton>
  </div>
</template>

<script>

export default {
  name: 'SignIn',
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
