<template>
  <form
    class="col-lg-4 mx-auto text-white"
    style="margin-top: 100px; background-color:#055882;"
    onsubmit="return false;"
  >
    <br />
    <center>
      <h1>Login:</h1>
    </center>
    <div>
      <label>Email address:</label>
      <br />
      <input type="email" v-model="email" class="form-control" placeholder="Enter email" />
    </div>
    <br />
    <div>
      <label>Password:</label>
      <br />
      <input type="password" v-model="password" class="form-control" placeholder="Password" />
    </div>
    <br />
    <center>
      <button type="submit" class="btn btn-success" @click="login('./Dashboards.vue')">Login</button>
    </center>
    <br />
  </form>
</template>
<script>
import ROUTER from 'router'
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(route) {
      if (this.email == "" || this.password == "") {
        alert("All fields are required");
      } else {
        alert("email: " + this.email + "\npassword: " + this.password);
        this.email = "";
        this.password = "";
        ROUTER.push(route)
      }
    }
  }
};
</script>