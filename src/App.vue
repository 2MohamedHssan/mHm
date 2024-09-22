<template :style="{ '--ColorOne': ColorOne }">
  <NavBAr />
  <MainColor />
  <router-view />
  <Footer />
</template>

<script>
import NavBAr from '@/components/NavBar.vue';
import MainColor from '@/components/MainColor.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBAr,
    Footer,
    MainColor,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
