<template>
  <button
    :class="{ outlined: outline }"
    :style="{ maxWidth: `${maxWidth}px`, backgroundColor: color }"
    class="btn"
  >
    <slot :color="color" name="a"></slot>
  </button>
</template>

<script src="./setup.js"></script>
<style lang="scss" scope>
  .btn {
    box-sizing: border-box;
    letter-spacing: 2px;
    min-height: 39px;
    border: none;
    box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.8);

    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    ) !important;

    &:hover {
      background-color: rgb(60, 60, 107) !important;
      box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.8);
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4)
      );
      margin-top: 2px;

      transition: all 0.2s ease-in-out;
    }
  }
  .outlined {
    &:hover {
      background-color: blue;
    }
    background-color: transparent !important;
    color: wheat;
    border: 2px solid blue;
  }
</style>
