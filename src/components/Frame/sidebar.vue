<template>
    <sidebar-menu :menu="menu" style="height:500px; width:200px;"/>
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'My First Project',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-chart-area'
                    },
                    {
                        href: '/course&yr',
                        title: 'Course & Year',
                        icon: 'fa fa-chart-area'
                    },
                    {
                        href: '/profile',
                        title: 'Profile',
                        icon: 'fa fa-chart-area'
                    },
                    {
                        href: '/logout',
                        title: 'Logout',
                        icon: 'fa fa-chart-area'
                    }
                ]
            }
        }
    }
</script> 