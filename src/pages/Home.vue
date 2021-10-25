<template>
    <Navbar/>
     <Slider/>
     <div className="page-wrapper">
        <div className="page-content">
     <Services/>
     <FeaturedProduct/>
     <Footer/>
     </div>
      </div>
</template>


<script>
    import Slider from '../components/Slider.vue'
    import Navbar from '../components/Navbar.vue'
    import Services from '../components/Services.vue'
    import FeaturedProduct from '../components/FeaturedProduct.vue'
    import Footer from '../components/Footer.vue'


    export default{
        name: 'Home',
        components: {
            Slider,
            Navbar,
            Services,
            FeaturedProduct,
            Footer,
        }
    }

</script>

<style>


</style>