<template>
    <sidebar-menu :menu="menu" />
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/login',
                        title: 'Login',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/register',
                        title: 'Register',
                        icon: 'fa fa-chart-area'
                    }
                ]
            }
        }
    }
</script> 