<template>
  <v-card>
    <v-tabs v-model="tab" background-color="transparent">
      <v-tab v-for="item in tabsParams" :key="item.tab" @click="itemTab(item.tab)">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabsParams" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <slot name="todo" v-bind:tabsName="item.url"></slot>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script src="./setup.js"></script>

<style lang="scss" scoped></style>
