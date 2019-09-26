<template>
  <form
    class="col-lg-4 mx-auto text-white"
    style="margin-top: 50px; background-color:#055882;"
    onsubmit="return false;"
  >
    <br />
    <center>
      <h1>Register:</h1>
    </center>
    <div>
      <label>User name:</label>
      <br />
      <input
        style="margin-left:5%;"
        type="text"
        v-model="fname"
        class="col-sm-5"
        placeholder="First name"
      />
      <input
        style="margin-left:5%;"
        type="text"
        v-model="lname"
        class="col-sm-5"
        placeholder="Last name"
      />
    </div>
    <br />
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
    <div>
      <label>Confirm Password:</label>
      <br />
      <input
        type="password"
        v-model="conpassword"
        class="form-control"
        placeholder="Confirm Password"
      />
    </div>
    <br />
    <center>
      <button type="submit" class="btn btn-success" v-on:click="register('./login')">Register</button>
    </center>
    <br />
  </form>
</template>
<script>
import ROUTER from "router"
export default {
  data() {
    return {
      email: "",
      fname: "",
      lname: "",
      password: "",
      conpassword: ""
    };
  },
  methods: {
    register(route) {
      if (
        this.email == "" ||
        this.password == "" ||
        this.fname == "" ||
        this.lname == "" ||
        this.conpassword == ""
      ) {
        alert("All fields are required!!!");
      } else if (this.password != this.conpassword) {
        alert("Mismatch password!!!");
      } else {
        alert(
          "username: " +
            this.fname +
            " " +
            this.lname +
            "\nemail: " +
            this.email +
            "\npassword: " +
            this.password
        );
        ROUTER.push(route);
      }
    }
  }
};
</script>