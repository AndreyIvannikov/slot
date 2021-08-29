<template>
  <div class="overlay">
    <div class="wrapper d-flex justify-center align-center">
      <div class="popup d-flex flex-column">
        <div class="popup__title">
          <h3>{{ content.title }}</h3>
        </div>
        <div class="popup__content">
          {{ content.content }}
        </div>
        <div class="popup__btn d-flex justify-center align-end">
          <v-btn class="mr-5" color="error">Отмена</v-btn>
          <v-btn color="primary" @click="save(content.cb)">Сохранить</v-btn>
        </div>
        <div class="popup__close" @click="$store.commit('close')">X</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      save(cb) {
        cb();
        this.$store.commit("close");
      },
    },
    computed: {
      content() {
        return this.$store.getters.content;
      },
    },
  };
</script>

<style lang="scss" src="./style.scss" scoped></style>
