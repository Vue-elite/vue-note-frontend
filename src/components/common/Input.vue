<template>
  <span>
    <label :for="id">{{ label }}</label>
    <input type="text" :id="id" v-model="inputVal">
  </span>
</template>

<script>
export default {
  name: 'Input',
  props: ['label', 'id', 'value'],
  data() {
    return { inputVal: this.value };
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style scoped>

</style>
