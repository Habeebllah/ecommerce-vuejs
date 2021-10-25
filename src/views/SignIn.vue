<template>
    <Navbar/>
     <SubHeader name="Sign In" />
     <div class="page-wrapper">
        <div class="page-content">
            <section class="">
          <div class="container">
            <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
              <div class="row row-cols-1 row-cols-xl-2">
                <div class="col mx-auto">
                  <div class="card">
                    <div class="card-body">
                      <div class="border p-4 rounded">
                        <div class="text-center">
                          <h3 class="">Sign in</h3>
                          <p>
                            Don't have an account yet?
                            <router-link to="/sign-up">
                              Sign up here
                            </router-link>
                          </p>
                        </div>
                        
                        <div class="form-body">
                          <form class="row g-3">
                            <div class="col-12" >
                              <label
                                for="inputEmailAddress"
                                class="form-label"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmailAddress"
                                placeholder="Email Address"
                              />
                            </div>
                            <div class="col-12">
                              <label
                                for="inputChoosePassword"
                                class="form-label"
                              >
                                Enter Password
                              </label>
                              
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Enter Password"
                                />
                            </div>
                            <div class="col-md-6">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  
                                />
                                <label
                                  class="form-check-label"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6 text-end">
                              
                              <span>
                                Forgot Password ?
                              </span>
                            </div>
                            <div class="col-12">
                              <div class="d-grid">
                              <router-link to="/accountdashboard" style="color:white; textDecoration:none">
                                <button
                                  type="submit"
                                  class="btn btn-primary"
                                >
                                  <i class="bx bxs-lock-open"></i>Sign in
                                </button>
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
        name: 'SignIn',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>