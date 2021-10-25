<template>
    <Navbar/>
     <SubHeader name="Register" />
     <div class="page-wrapper">
        <div class="page-content">
        <section className="py-0 py-lg-5">
					<div className="container">
						<div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
							<div className="row row-cols-1 row-cols-lg-1 row-cols-xl-2">
								<div className="col mx-auto mt-5">
									<div className="card mb-0">
										<div className="card-body">
											<div className="border p-4 rounded">
												<div className="text-center">
													<h3 className="">Sign Up</h3>
													<p>Already have an account? <router-link to="/sign-in">Sign in</router-link>
													</p>
												</div>
												
												<div className="form-body">
													<form className="row g-3">
														<div className="col-sm-6">
															<label for="inputFirstName" className="form-label">First Name</label>
															<input type="text" className="form-control" id="inputFirstName" placeholder="First name" onChange=""/>
														</div>
														<div className="col-sm-6">
															<label for="inputLastName" className="form-label">Last Name</label>
															<input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
														</div>
														<div className="col-12">
															<label for="inputEmailAddress" className="form-label">Email Address</label>
															<input type="email" className="form-control" id="inputEmailAddress" placeholder="example@user.com" onChange=""/>
														</div>
														<div className="col-12">
															<label for="inputChoosePassword" className="form-label">Password</label>
																<input type="password" className="form-control" placeholder="Enter Password" onChange=""/> 
															
														</div>
														<div className="col-12">
															<label for="inputChoosePassword" className="form-label">Confirm Password</label>
																<input type="password" className="form-control" placeholder="Confirm Password" onChange=""/> 
															
														</div>
														
														
														<div className="col-12">
															<div className="d-grid">
															<router-link to="/sign-in">
																<button type="submit" className="btn btn-dark"><i class='bx bx-user'></i>Sign up</button></router-link>
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
        name: 'SignUp',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>