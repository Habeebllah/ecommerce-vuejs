<template>
    <Navbar/>
     <SubHeader name="Checkout Details" />
     <div class="page-wrapper">
        <div class="page-content">
        <section class="py-4">
          <div class="container">
            <div class="shop-cart">
              <div class="row">
                <div class="col-12 col-xl-8">
                  <div class="checkout-details">
                    <div class="card bg-transparent rounded-0 shadow-none">
                      <div class="card-body">
                        <div class="steps steps-light">
                          <router-link class="step-item active" to="/cart">
                            <div class="step-progress">
                              <span class="step-count">1</span>
                            </div>
                            <div class="step-label">
                              <i class="bx bx-cart"></i>Cart
                            </div>
                          </router-link>
                          <router-link class="step-item active current" to="/checkout-details">
                            <div class="step-progress">
                              <span class="step-count">2</span>
                            </div>
                            <div class="step-label">
                              <i class="bx bx-user-circle"></i>Details
                            </div>
                          </router-link>

                          <router-link
                            class="step-item"
                            to="/checkout-payment"
                          >
                            <div class="step-progress">
                              <span class="step-count">3</span>
                            </div>
                            <div class="step-label">
                              <i class="bx bx-credit-card"></i>Payment
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <div class="card rounded-0">
                      <div class="card-body">
                        
                        <div class="border p-3">
                          <h2 class="h5 mb-0">Shipping Address</h2>
                          <div class="my-3 border-bottom"></div>
                          <div class="form-body">
                            <form method="post" class="row g-3">
                              <div class="col-md-6">
                                <label class="form-label">First Name</label>
                                <input
                                  type="text"
                                  required class="form-control required validate rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Last Name</label>
                                <input
                                  type="text"
                                  required class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">E-mail id</label>
                                <input
                                  type="text"
                                  required class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Phone Number</label>
                                <input
                                  type="text"
                                  required class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Company</label>
                                <input
                                  type="text"
                                  required class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">State/Province</label>
                                <select class="form-select rounded-0">
                                  <option>United Kingdom</option>
                                  <option>California</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">
                                  Zip/Postal Code
                                </label>
                                <input
                                  type="text"
                                  required="true" class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Country</label>
                                <select class="form-select rounded-0">
                                  <option>United States</option>
                                  <option>India</option>
                                  <option>China</option>
                                  <option>Turkey</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Address 1</label>
                                <textarea required class="form-control rounded-0"></textarea>
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Address 2</label>
                                <textarea required class="form-control rounded-0"></textarea>
                              </div>
                              <div class="col-md-12">
                                <h6 class="mb-0 h5">Billing Address</h6>
                                <div class="my-3 border-bottom"></div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="gridCheck"
                                  >
                                    Same as shipping address
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="d-grid">
                                  
                                  <router-link
                                    to="/cart"
                                    class="btn btn-light btn-ecomm border-dark"
                                  >
                                    <i class="bx bx-chevron-left"></i>Back to
                                    Cart
                                  </router-link>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="d-grid">
                                  
                                  <router-link
                                    to="/checkout-payment"
                                    class="btn btn-dark btn-ecomm"
                                  >
                                    Proceed to Payment
                                    <i class="bx bx-chevron-right"></i>
                                  </router-link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <OrderSummary/>
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
    import OrderSummary from '../components/OrderSummary.vue'


    export default{
        name: 'CheckoutPayment',
        components: {
            SubHeader,
            Navbar,
            Footer,
            OrderSummary,
        }
    }

</script>

<style>


</style>