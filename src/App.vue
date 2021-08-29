<template>
  <v-app>
    <the-header></the-header>
    <v-main>
      <TheMainVue></TheMainVue>
      <transition name="fade" mode="out-in">
        <popup-warning v-if="isOpenPopup"></popup-warning>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  import TheMainVue from "./components/TheMain.vue";
  export default {
    name: "App",
    components: { TheHeader, TheMainVue },
    data() {
      return {};
    },
    computed: {
      isOpenPopup() {
        return this.$store.getters.isOpenPopup;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
