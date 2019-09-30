<template>
  <div id="app">
    <myheader v-show="$route.name==='register' || $route.name==='login' || $route.path === '/' ? true : false"/>
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