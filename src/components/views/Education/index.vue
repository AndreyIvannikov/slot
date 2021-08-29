<template>
  <div class="">
    <Tabs :tabsParams="items">
      <template v-slot:todo="{ tabsName }">
        <component :is="tabsName"></component>
      </template>
    </Tabs>
  </div>
</template>

<script>
  import ComponentA from "@/components/views/Education/components/price";
  import ComponentB from "@/components/views/Education/components/categories";
  import Tabs from "@/components/@ui/tabs";
  import appcheckbox from "@/components/@ui/checkbox";
  export default {
    components: {
      ComponentA,
      ComponentB,
      Tabs,
      appcheckbox,
    },
    data() {
      return {
        items: [
          { tab: "Component A1", url: "ComponentA" },
          { tab: "Component B", url: "ComponentB" },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
