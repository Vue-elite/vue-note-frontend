<template>
  <div>
    <h1>{{ pageName }} page</h1>
    <home-page-button></home-page-button>
  </div>
</template>

<script>
import HomePageButton from './_base-HomePageButton';

export default {
  name: 'SignIn',
  components: { HomePageButton },
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
