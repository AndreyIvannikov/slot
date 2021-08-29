<template>
  <main class="main">
    <div class="container">
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .main {
    background: url("../img/noise_transparent.png"),
      radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 100%), #211f20;
    padding-top: 13rem;
    min-height: 100%;
  }
  .component-fade-enter-active {
    transition: all 0.3s ease;
  }
  .component-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .component-fade-enter, .component-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>
