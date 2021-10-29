<template>
    <Navbar/>
     <SubHeader name="Cart" />
     <div class="page-wrapper">
        <div class="page-content">
        <section class="py-4">
          <div class="container">
            <div class="shop-cart">
              <div class="row">
                <div class="col-12 col-xl-8">
                  <div class="shop-cart-list mb-3 p-3">

                    <!-- {cartItems.length === 0 && (
                      <div class="mt-5 mb-5">
                        <h4>Cart is empty</h4>
                      </div>
                    )} -->
                      <div>
                        <div
                          key={item.id}
                          class="row align-items-center g-3"
                        >
                          <div class="col-12 col-lg-6">
                            <div class="d-lg-flex align-items-center gap-2">
                              <div class="cart-img text-center text-lg-start">
                                <img src="assets/images/products/02.png" width="130" alt="" />
                              </div>
                              <div class="cart-detail text-center text-lg-start">
                                <h6 class="mb-2">T-Shirt Branded</h6>

                                <h5 class="mb-0">₦9000</h5>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-lg-2 justify-content-center" style="display:flex">
                            <div
                              class="cart-action text-center"
                              style="display: inline-flex" 
                            >
                              <button
                                onClick=""
                                class="bg-dark text-light"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                class="form-control rounded-0 text-center"
                                style="width: 55px"
                                value="1"
                                min="1"
                              />
                              <button
                                onClick=""
                                class="bg-dark text-light"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div class="col-12 col-lg-3">
                            <div class="text-center">
                              <div class="d-flex gap-2 justify-content-center">
                                <h4 class="">
                                  ₦8000
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-lg-1">
                            <div class="text-center">
                              <div class="d-flex gap-2 justify-content-center" >
                                
                                <button
                                  onClick=""
                                  class="btn btn-dark rounded-0 btn-ecomm"
                                >
                                  <i class="bx bx-x-circle"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="my-4 border-top"></div>
                      </div>
                    

                    <div class="d-lg-flex align-items-center gap-2" style="display:flex">
                      
                      <router-link to="/product" class="btn btn-dark btn-ecomm">
                        <i class="bx bx-shopping-bag"></i> Continue Shoping
                      </router-link>
                      <button
                        onClick=""
                        class="btn btn-light btn-ecomm ms-auto border-dark"
                      >
                        <i class="bx bx-x-circle"></i> Clear Cart
                      </button>
                    </div>
                  </div>
                </div>

                
                    <div class="col-12 col-xl-4">
                      <div class="checkout-form p-3 bg-light">
                        <div class="card rounded-0 border bg-transparent mb-0 shadow-none">
                          <div class="card-body">
                            <p class="mb-2">
                              Subtotal:
                              <span class="float-end">
                                ₦9008
                                                              </span>
                            </p>
                            <p class="mb-2">
                              Shipping:
                              <span class="float-end">
                                ₦8700
                              </span>
                            </p>
                            <p class="mb-0">
                              Tax:
                              <span class="float-end">
                                ₦980
                              </span>
                            </p>
                            <div class="my-3 border-top"></div>
                            <h5 class="mb-0">
                              Order Total:
                              <span class="float-end">
                                ₦87680
                              </span>
                            </h5>
                            <div class="my-4"></div>
                            <div class="d-grid">
                              
                              <router-link
                                to="/checkout-details"
                                class="btn btn-dark btn-ecomm"
                              >
                                Proceed to Checkout
                              </router-link>
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
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    import SubHeader from '../components/SubHeader.vue'


    export default{
        name: 'Cart',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>