<template>
    <Navbar/>
     <SubHeader name="Dashboard" />
     <div className="page-wrapper">
        <div className="page-content">
     

     <Footer/>
     </div>
      </div>
</template>


<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    import SubHeader from '../components/SubHeader.vue'


    export default{
        name: 'AccountDashboard',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>