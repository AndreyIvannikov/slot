<template>
  <section class="intro">
    <div class="container">
      <div class="intro__wrapper">
        <div class="intro-content">
          <h2 class="title intro-content__title">
            Not only people <br />
            need a house
          </h2>
          <p class="intro-content__text">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <v-button :outline="true" :maxWidth="207"
            ><template slot="a"> Make a friend </template></v-button
          >
        </div>
        <div class="intro__img">
          <div>
            <img src="@/img/dogs.png" alt="dogs" />
          </div>
        </div>
      </div>
    </div>
    <my-tab>
      <template v-slot:content="slotProps">
        <transition name="bounce" mode="out-in">
          <component :is="`my-${slotProps.content}`"></component>
        </transition>
      </template>
    </my-tab>
  </section>
</template>

<script>
  import MyTab from "@/components/@ui/Tab";
  import MySettings from "@/components/views/Education/components/Settings";
  import MyPayments from "@/components/views/Education/components/Payments";
  export default {
    components: {
      MyTab,
      MyPayments,
      MySettings,
    },
    data() {
      return {
        search: "",
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/style/varriables.scss";

  .intro {
    position: relative;
    z-index: 5;

    &__wrapper {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }
    &-content {
      padding-top: 160px;

      display: flex;
      flex-flow: column;
      width: 38.333333%;
    }
    &-content__title {
      font-size: 44px;
      line-height: 57px;
      text-align: left;
      margin-bottom: 40px;
      color: $basic-white;
    }
    &-content__text {
      color: $basic-grey;
      margin-bottom: 42px;
    }
  }
  .bounce-enter-active,
  .bounce-leave-active {
    transition: all 0.5s ease;
  }
  .bounce-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .bounce-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>
