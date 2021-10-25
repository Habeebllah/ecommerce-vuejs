<template>
    <Navbar/>
     <div className="page-wrapper">
        <div className="page-content">
     
          <SubHeader name="Product" />
        
     <Footer/>
     </div>
      </div>
  
</template>


<script>
import SubHeader from '../components/SubHeader.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default{
    name: "Product",
    components: {
        SubHeader,
        Navbar,
        Footer,
    },
    
}
</script>


<style>

</style>