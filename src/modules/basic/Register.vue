<template>
  <form class="col-lg-4 mx-auto text-white" id="formDesign" @submit="onSubmit">
    <br />
    <center>
      <h1>Register:</h1>
    </center>
    <div>
      <label>User name:</label>
      <br />
      <input id="fname" type="text" v-model="mine.fname" class="col-sm-5" placeholder="First name" />
      <input id="lname" type="text" v-model="mine.lname" class="col-sm-5" placeholder="Last name" />
    </div>
    <br />
    <div>
      <label>Email address:</label>
      <br />
      <input type="email" v-model="mine.email" class="form-control" placeholder="Enter email" />
    </div>
    <br />
    <div>
      <label>Password:</label>
      <br />
      <input type="password" v-model="mine.password" class="form-control" placeholder="Password" />
    </div>
    <br />
    <div>
      <label>Confirm Password:</label>
      <br />
      <input
        type="password"
        v-model="mine.conpassword"
        class="form-control"
        placeholder="Confirm Password"
      />
    </div>
    <br />
    <center>
      <button type="submit" class="btn btn-success" @click="register()">Register</button>
    </center>
    <br />
  </form>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#formDesign {
  margin-top: 50px;
  background-color: $color;
}
#lname {
  margin-left: $margTop;
}
#fname {
  margin-left: $margTop;
}
</style>

<script>
import AUTH from "services/auth";
import jquery from "jquery";
export default {
  data() {
    return {
      auth: AUTH,
      mine: {
        email: "",
        fname: "",
        lname: "",
        password: "",
        conpassword: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (
        this.mine.email == "" ||
        this.mine.password == "" ||
        this.mine.fname == "" ||
        this.mine.lname == "" ||
        this.mine.conpassword == ""
      ) {
        alert("All fields are required!!!");
      } else if (this.mine.password != this.mine.conpassword) {
        alert("Mismatch password!!!");
      } else {
        sessionStorage.setItem("Pass", this.mine.password);
        sessionStorage.setItem("fname", this.mine.fname);
        sessionStorage.setItem("lname", this.mine.lname);
        AUTH.register(this.mine.email, this.mine.password);
      }
    },

    register() {
      let link = `http://localhost:3000/db/create/${this.mine.fname}/${this.mine.email}/${this.mine.password}`;
      jquery.ajax({
        url: link,
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};
</script>