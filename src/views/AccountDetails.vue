<template>
    <Navbar/>
     <SubHeader name="Account Details" />
     <div class="page-wrapper">
        <div class="page-content">
            <section class="py-4">
          <div class="container">
            <h3 class="d-none">Account</h3>
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="card shadow-none mb-3 mb-lg-0 border">
                      <div class="card-body">
                      <div class="list-group list-group-flush">	
                                                    <router-link to="/accountdashboard" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i class='bx bx-tachometer fs-5'></i></router-link>
													<router-link to="/accountorder" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i class='bx bx-cart-alt fs-5'></i></router-link>
													<router-link to="/accountdetails" class="list-group-item d-flex active justify-content-between align-items-center">Account Details <i class='bx bx-user-circle fs-5'></i></router-link>
													<router-link to="/" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i class='bx bx-log-out fs-5'></i></router-link>
												</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="card shadow-none mb-0 border">
                      <div class="card-body">
                        <form class="row g-3">
                          <div class="col-md-6">
                            <label class="form-label">First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value="Habeeb"
                            />
                          </div>
                          <div class="col-md-6">
                            <label class="form-label">Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value="Lasisi"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Display Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value="Habeebllah"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">Email address</label>
                            <input
                              type="email"
                              class="form-control"
                              value="lasisihabeeb67@gmail.com"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">
                              Current Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              value="lifeisGood"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">New Password</label>
                            <input
                              type="password"
                              class="form-control"
                              value="lifeisGood"
                            />
                          </div>
                          <div class="col-12">
                            <label class="form-label">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              value="lifeisGood"
                            />
                          </div>
                          <div class="col-12">
                            <button
                              type="button"
                              class="btn btn-dark btn-ecomm"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
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
        name: 'AccountDetails',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>