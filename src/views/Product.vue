<template>
    <Navbar/>
     <div class="page-wrapper">
        <div class="page-content">
     
          <SubHeader name="Product" />
          <section class="py-4">
          <div class="container">
            <div class="row">
              <div class="col-12 col-xl-12">
                <div class="product-wrapper">
                  <div class="toolbox d-lg-flex align-items-center mb-3 gap-2 p-3 bg-white border">
                    <div class="d-flex flex-wrap flex-grow-1 gap-1">
                      
                      <div class="d-flex align-items-center flex-nowrap">
                      <input
                        class="SearchInput"
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
                      <div class="">
                        <button
                          type="button"
                          class="btn btn-dark rounded-0 text-uppercase"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  
                  </div>
                  
                  <div class="product-grid">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                      <div v-for="item in products" :key="item.id">
                          
                          <div class="col">
                          <div class="card rounded-0 product-card">
                            <div class="card-header bg-transparent border-bottom-0">
                              <div class="d-flex align-items-center justify-content-end gap-3">
                                
                              </div>
                            </div>
                            <span>
                              <img
                                :src=item.image_url
                                class="card-img-top"
                                alt="..."
                              />
                            </span>
                            <div class="card-body">
                              <div class="product-info">
                                <a href="javascript:;">
                                  <p class="product-catergory font-13 mb-1"><b>{{item.category}}</b></p>
                                </a>
                                <a href="javascript:;">
                                  <h6 class="product-name mb-2">{{item.name}}</h6>
                                </a>
                                <div class="d-flex align-items-center">
                                  <div class="mb-1 product-price">
                                    
                                    <span class="me-1 text-decoration-line-through">₦{{item.price}}</span>
                                    <span class="fs-5">₦{{item.old_price}}</span>
                                  </div>
                                  <div class="cursor-pointer ms-auto">
                                    
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                  </div>
                                </div>
                                <div class="product-action mt-2">
                                  <div class="d-grid gap-2">
                                    <button class="btn btn-dark btn-ecomm">
                                      
                                      <i class="bx bxs-cart-add"></i>Add to Cart
                                    </button>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

import { API } from 'aws-amplify';
import { listProductss } from '../graphql/queries';
export default{
    name: "Product",
    components: {
        SubHeader,
        Navbar,
        Footer,
    },
    async created() {
      this.getProducts();
    },

    data(){
      return {
      products: []
      }
    },
    methods: {
      async getProducts() {
      const products = await API.graphql({
        query: listProductss
      });
      this.products = products.data.listProductss.items;
      }
    }
    
}
</script>


<style>

</style>