<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/base.css';
</style>
