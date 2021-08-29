<template>
  <div>
    <v-progress-linear :value="progressWidth"></v-progress-linear>
    <form>
      <v-row>
        <v-col lg="4" cols="12" sm="12" v-for="(field, i) in form" :key="i">
          <s-input
            @input="changeField($event, i)"
            color="darken-2"
            fz="big"
            :label="field.label"
            :value="field.value"
            required
          ></s-input>
        </v-col>
      </v-row>
      <pre>{{ form }}</pre>
      {{ fieldValid }} {{ progressWidth }} {{ fieldsDone }}
      <v-btn :disabled="fieldsDone">отпаравить</v-btn>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: [
          { value: "", label: "email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
          {
            value: "",
            label: "last name",
            pattern: /^[A-z]/i,
          },
          {
            value: "",
            label: "first name",
            pattern: /^[A-z]/i,
          },
        ],
      };
    },
    created() {
      this.form.forEach((e) => {
        e.valid = false;
        e.change = false;
      });
    },
    methods: {
      changeField(event, i) {
        const form = this.form[i];
        form.value = event;
        form.change = true;
      },
    },
    computed: {
      fieldValid() {
        return this.form.reduce(
          (acc, { value, pattern }) => acc + pattern.test(value),
          0
        );
      },
      progressWidth() {
        return (this.fieldValid / this.form.length) * 100;
      },

      fieldsDone() {
        return this.fieldValid === this.form.length;
      },
    },
  };
</script>

<style lang="scss" scoped></style>
