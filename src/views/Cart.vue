<template>
    <Navbar/>
     <SubHeader name="Cart" />
     <div class="page-wrapper">
        <div class="page-content">
        <section className="py-4">
          <div className="container">
            <div className="shop-cart">
              <div className="row">
                <div className="col-12 col-xl-8">
                  <div className="shop-cart-list mb-3 p-3">

                    <!-- {cartItems.length === 0 && (
                      <div className="mt-5 mb-5">
                        <h4>Cart is empty</h4>
                      </div>
                    )} -->
                      <div>
                        <div
                          key={item.id}
                          className="row align-items-center g-3"
                        >
                          <div className="col-12 col-lg-6">
                            <div className="d-lg-flex align-items-center gap-2">
                              <div className="cart-img text-center text-lg-start">
                                <img src="assets/images/products/02.png" width="130" alt="" />
                              </div>
                              <div className="cart-detail text-center text-lg-start">
                                <h6 className="mb-2">T-Shirt Branded</h6>

                                <h5 className="mb-0">₦9000</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-2 justify-content-center" style="display:flex">
                            <div
                              className="cart-action text-center"
                              style="display: inline-flex" 
                            >
                              <button
                                onClick=""
                                className="bg-dark text-light"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="form-control rounded-0 text-center"
                                style="width: 55px"
                                value="1"
                                min="1"
                              />
                              <button
                                onClick=""
                                className="bg-dark text-light"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-lg-3">
                            <div className="text-center">
                              <div className="d-flex gap-2 justify-content-center">
                                <h4 className="">
                                  ₦8000
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-1">
                            <div className="text-center">
                              <div className="d-flex gap-2 justify-content-center" >
                                
                                <button
                                  onClick=""
                                  className="btn btn-dark rounded-0 btn-ecomm"
                                >
                                  <i class="bx bx-x-circle"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-4 border-top"></div>
                      </div>
                    

                    <div className="d-lg-flex align-items-center gap-2" style="display:flex">
                      
                      <router-link to="/product" className="btn btn-dark btn-ecomm">
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

                
                    <div className="col-12 col-xl-4">
                      <div className="checkout-form p-3 bg-light">
                        <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                          <div className="card-body">
                            <p className="mb-2">
                              Subtotal:
                              <span className="float-end">
                                ₦9008
                                                              </span>
                            </p>
                            <p className="mb-2">
                              Shipping:
                              <span className="float-end">
                                ₦8700
                              </span>
                            </p>
                            <p className="mb-0">
                              Tax:
                              <span className="float-end">
                                ₦980
                              </span>
                            </p>
                            <div className="my-3 border-top"></div>
                            <h5 className="mb-0">
                              Order Total:
                              <span className="float-end">
                                ₦87680
                              </span>
                            </h5>
                            <div className="my-4"></div>
                            <div className="d-grid">
                              
                              <router-link
                                to="/checkout-details"
                                className="btn btn-dark btn-ecomm"
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