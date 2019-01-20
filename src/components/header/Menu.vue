<template>
  <div class="nav-item">
    <router-link :to="{path}">{{text}}</router-link>
  </div>

</template>

<script>
export default {
  name: 'Menu',
  props: ['path', 'text'],
};
</script>

<style scoped>
</style>
