<template>
  <sidebar-menu :menu="menu"/>
</template>
<style scoped>
.v-sidebar-menu{
    height: 93%;
    margin-top: 56px;
}
</style>
 
 <script>
 import AUTH from 'services/auth'
    export default {
        data() {
            return {
                auth: AUTH,
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true,
                   
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/post',
                        title: 'Post',
                        icon: 'fa fa-book',
                    },
                    {
                        href: '/login',
                        title: 'Log Out',
                        icon: 'fa fa-user',
                    }
                ]
            }
        }
    }
</script>