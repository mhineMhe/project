<template>
  <div>
    <center>
      <div style="width: 700px; margin-top: 5%;">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="100"
        ></b-form-textarea>
        <br />
        <div>
          <button type="submit" class="btn btn-success" @click="magpost()">Post</button>
        </div>
      </div>
      <div style="width: 700px; margin-top: 10%;" v-for="(mine, index) in this.post" :key="index">
        <div style="border: solid black">
          <div>
            <b-img :src="require('assets/mine.png')" rounded="circle" alt="Circle image" id="user"></b-img>
            <h4 style="margin-right: 86%;">{{myName}}</h4>
          </div>
          {{mine}}
          <br />
          <button
            type="submit"
            class="btn btn-success"
            style="margin-left:85%; display: inline-block;" @click="updatePost(index)"
          >Update</button>
          <button
            type="submit"
            class="btn btn-success"
            style="margin-left:60%; margin-top: -9.5%;"
            @click="delPost(index)"
          >Delete</button>
        </div><br>
      </div>
    </center>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#user {
  margin-right: 85%;
  width: 10%;
  height: auto;
}
</style>-

<script>
import AUTH from "services/auth";
export default {
  data() {
    return {
      myName: sessionStorage.getItem("fname"),
      post: AUTH.post,
      text: ""
    };
  },

  methods: {
    magpost() {
      if (this.text !== "") {
        AUTH.post.push(this.text);
        this.text = "";
      } else {
        alert("Put some text first");
      }
    },

    delPost(index) {
      AUTH.post.splice(index,1);
    },

    updatePost(index) {
      AUTH.post[index];
      alert(AUTH.post[index])
    }
  }
};
</script>