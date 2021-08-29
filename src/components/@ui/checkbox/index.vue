<template>
  <div class="d-flex flex-coloumn">
    <label>
      <input type="checkbox" :value="val" v-model="model" />
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default {
    props: ["value", "val"],
    data() {
      return {};
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        },
      },
    },
  };
</script>
<style lang="scss"></style>
