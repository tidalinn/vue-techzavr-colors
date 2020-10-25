<template>
  <div id="wrapper">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer },
};
</script>

<!-- <style src="./assets/css/main.css" lang="stylus" /> -->