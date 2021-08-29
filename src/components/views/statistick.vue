<template>
  <div class="">
    <s-input label="Поиск" v-model="search"></s-input>
    <v-select
      :items="['Admin', 'User', 'All']"
      label="Items"
      v-model="select"
    ></v-select>
    <v-data-table
      :headers="headers"
      :items="isLengthPosts"
      :search="search"
      :loading="loading"
    >
      <template v-slot:item.action="{ item }">
        <div>
          {{ item.action }}
          <v-btn color="error" @click="openModal(item)">Delete</v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: [
          {
            name: "Rykov",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "Ivannikov1",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "Andrey1",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "urr",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "Andrey",
            email: "userId@asdas",
            age: 213,
            position: "User",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "Ivannikov",
            email: "userId@asd123as",
            age: 24315,
            position: "User",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "adas",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "usezasdzdrsId",
            email: "userId@asdas",
            age: 213,
            position: "User",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "jl",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
          {
            name: "zcc",
            email: "userId@asdas",
            age: 213,
            position: "Admin",
            action: "",
            id: Math.random() + 100,
          },
        ],
        headers: [
          { text: "usersId", value: "name" },
          { text: "id", value: "email" },
          { text: "title", value: "age" },
          { text: "position", value: "position" },
          { text: "", value: "action" },
        ],
        select: "",
        loading: false,
        message: "123",
        search: "",
        classes: {
          bordered: false,
          background: false,
          hover: false,
        },
        isShowBtn: false,
      };
    },
    methods: {
      deleteItem(i) {
        console.log(i);
      },
      scrollWidth({ srcElement: { scrollTop, clientHeight, scrollHeight } }) {
        const height = scrollTop + clientHeight;
        if (!this.isShowBtn) {
          this.isShowBtn = height === scrollHeight;
        }
      },
      openModal(elem) {
        const fn = () => {
          this.posts.splice(
            this.posts.findIndex(({ id }) => id === elem.id),
            1
          );
        };
        const content = {
          title: "Удаление",
          content: `Вы действительно хотите удалить ${elem.name}
                    с postion ${elem.position} без возможности восстановления ?`,
          cb: fn,
        };
        this.$store.commit("setContent", content);
      },
    },
    computed: {
      isLengthPosts() {
        if (this.select === "All") return this.posts;
        return this.posts.filter((item) => item.position.includes(this.select));
      },
      activeClass() {
        return {
          border: this.classes.bordered,
          color: this.classes.background,
          hover: this.classes.hover,
        };
      },

      heightElement() {
        console.log(this.$refs.scroll.scrollTop);
        return this.$refs.scroll.scrollTop + this.$refs.scroll.clientHeight;
      },
    },
  };
</script>
<style lang="scss">
  .scroll {
    max-height: 200px;
    max-width: 500px;
    overflow: auto;
  }
  .black {
    color: wheat;
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 3px solid purple;
  }

  th,
  td {
    padding: 20px;
    border: 1px solid gray;
  }
  label {
    color: white;
    border: black !important;
  }
  .v-application .black {
    background-color: white !important;
  }
  .border {
    border: 2px solid balck;
  }
  .hover {
    tr,
    thead {
      &:hover {
        background-color: rgb(201, 191, 191) !important;
      }
    }
  }
  .color {
    background-color: black;
    color: wheat;
  }
</style>
