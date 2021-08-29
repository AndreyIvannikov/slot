<template>
  <div>
    <div class="tabs">
      <ul class="d-flex justify-space-between tab">
        <li
          class="tab__item"
          :class="{ active: currentTab === t.name }"
          @click="currentTab = t.name"
          v-for="t in tabs"
          :key="t.name"
        >
          {{ t.name }}
        </li>
      </ul>
      <div class="content">
        <slot name="content" :content="currentTab"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          {
            name: "payments",
          },
          {
            name: "settings",
          },
        ],
        currentTab: "payments",
      };
    },
  };
</script>

<style lang="scss" scoped>
  .tab {
    width: 200px;
    color: white;
    margin-bottom: 30px;
    &__item {
      color: white;
      padding: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
    .active {
      border-bottom: 1px solid grey;
    }
  }
  .content {
    color: white;
    width: 400px;
  }
</style>
