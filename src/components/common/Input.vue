<template>
  <span>
    <label :for=label>{{ label }}</label>
    <input type="text" :id=id>
  </span>
</template>

<script>
export default {
  name: 'Input',
  props: ['label', 'id'],
};
</script>

<style scoped>

</style>
