<template>
    <Navbar/>
     <div className="page-wrapper">
        <div className="page-content">
     
          <SubHeader name="Product" />
          <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-12">
                <div className="product-wrapper">
                  <div className="toolbox d-lg-flex align-items-center mb-3 gap-2 p-3 bg-white border">
                    <div className="d-flex flex-wrap flex-grow-1 gap-1">
                      
                      <div className="d-flex align-items-center flex-nowrap">
                      <input
                        className="SearchInput"
                        type="text"
                        ref=""
                        value=""
                        onChange=""
                        placeholder="Search for product"
                        style="border: 1px solid #dee2e6;
                          padding: .375rem .75rem;
                          fontSize:1rem"
                      />
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-dark rounded-0 text-uppercase"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  
                  </div>
                  
                  <div className="product-grid">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

              <ProductCard/>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
     <Footer/>
     </div>
      </div>
  
</template>


<script>
import SubHeader from '../components/SubHeader.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ProductCard from '../components/ProductCard.vue'
export default{
    name: "Product",
    components: {
        SubHeader,
        Navbar,
        Footer,
        ProductCard,
    },
    
}
</script>


<style>

</style>