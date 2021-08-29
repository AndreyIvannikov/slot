<template>
  <div :class="['input', `fz-${fz}`]">
    <label>
      {{ label }}
      <input
        class="field"
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped>
  div {
    color: white;
  }
  label {
    font: inherit;
  }
  .input {
    .field {
      border-bottom: 2px solid black;
      outline: none;
    }
  }
  .fz-normal {
    font-size: 16px;
  }
  .fz-big {
    font-size: 18px;
  }
</style>
