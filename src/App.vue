<template>
  <div id="app">
    <myheader/>
    <!-- <dashboard /> -->
    <myBody />
    <sidevar v-show="$route.path === '/dashboard' || $route.path === '/profile' || $route.path === '/course&yr' ? true : false"/>
  </div>
</template>

<script>
// import dashboard from "modules/basic/Dashboard.vue";
import myheader from "components/Frame/Header.vue";
import myBody from "components/Frame/body.vue";
import sidevar from "components/Frame/sidebar.vue";
export default {
  name: "app",
  components: {
    myheader,
    myBody,
    sidevar
    // dashboard
  },
};
</script>