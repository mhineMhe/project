<template>
  <div>
    <!-- <div>
      <b-img :src="require('assets/mine.png')" rounded="circle" alt="Circle image" id="user"></b-img>
    </div> -->
    <div>
      <sidebar-menu :menu="menu" style="width:20%;"></sidebar-menu>
    </div>
  </div>
</template>
 
<style lang='scss' scoped>
@import "~assets/color.scss";
#user {
  width: $sideWidth !important;
  height: $sideHeight !important;
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "My First Project",
          hiddenOnCollapse: true
        },
        {
          href: "/dashboard",
          title: "Dashboard",
          icon: "fa fa-chart-area"
        },
        {
          href: "/course&yr",
          title: "Course & Year",
          icon: "fa fa-chart-area"
        },
        {
          href: "/profile",
          title: "Profile",
          icon: "fa fa-chart-area"
        },
        {
          href: "/logout",
          title: "Logout",
          icon: "fa fa-chart-area"
        }
      ]
    };
  }
};
</script> 