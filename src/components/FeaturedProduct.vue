<template>
    <section class="py-4">
      <div class="container">
        <div class="d-flex align-items-center">
          <h5 class="text-uppercase mb-0">FEATURED PRODUCTS</h5>
          <router-link
            to="/product"
            class="btn btn-dark btn-ecomm ms-auto rounded-0"
          >
            More Products<i class="bx bx-chevron-right"></i>
          </router-link>
        </div>
        <hr />
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
    </section>
</template>


<script>
import { API } from 'aws-amplify';
import { listProductss } from '../graphql/queries';
    export default{
        name: "FeaturedProduct",
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