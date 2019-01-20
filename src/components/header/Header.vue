<template>
  <div class="app-header">
    <nav>
      <div class="nav-wrapper">
        <!--<Logo path="./../../assets/logo.png"></Logo>-->
        <h3>Vue Note</h3>
        <Menus :items=items></Menus>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      items: [
        { path: '/sign-in', text: 'Log In' },
        { path: '/register', text: 'Register' },
      ],
    };
  },
};
</script>

<style scoped>
  .nav-wrapper {
    background-color: lightblue;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
  }
</style>
