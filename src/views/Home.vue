<template>
  <base-layout>
    <div>
      <input type="text" v-model="name">
      <button @click="generate_password()">Generate</button>
    </div>
    <div>
      <div v-for="item of passwords">
        {{item.name}} - {{item.password}}
      </div>
    </div>
  </base-layout>
</template>

<script>
import http from "../util/http";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: '',
      password: '',
      passwords: []
    }
  },
  methods: {
    generate_password() {
      http.post(`/api/v1/passwords`, {"name": this.$data.name}).then(() => {
        this.get_password_list()
      })
    },
    get_password_list() {
      http.get(`/api/v1/passwords`).then((res) => {
        this.$data.passwords = res
      })
    }
  },
  created() {
    this.get_password_list()
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.post-source-text {
  color: lightgray;
  font-size: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  margin-bottom: 10px;
}
</style>