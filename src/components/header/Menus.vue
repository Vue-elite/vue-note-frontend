<template>
  <div class="nav-items">
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li
        is="Menu"
        v-for="(item, index) in items"
        :key=index
        :path=item.path
        :text=item.text
      >

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menus',
  props: ['items'],
};
</script>

<style scoped>
  .nav-items {
    width: 20%;
  }

  .nav-items ul {
    display: flex;
    justify-content: space-around;
  }
</style>
