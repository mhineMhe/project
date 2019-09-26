<template>
  <div id="app">
    <myheader />
    <!-- <dashboard /> -->
    <myBody />
  </div>
</template>

<script>
// import dashboard from "modules/basic/Dashboard.vue";
import myheader from "components/Frame/Header.vue";
import myBody from "components/Frame/body.vue";

export default {
  name: "app",
  components: {
    myheader,
    myBody,
    // dashboard
  },
};
</script>