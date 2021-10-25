<template>
    <Navbar/>
     <SubHeader name="Dashboard" />
     <div class="page-wrapper">
        <div class="page-content">
            <section class="py-4">
					<div class="container">
						<h3 class="d-none">Account</h3>
						<div class="card">
							<div class="card-body">
								<div class="row">
									<div class="col-lg-4">
										<div class="card shadow-none mb-3 mb-lg-0 border rounded-0">
											<div class="card-body">
												<div class="list-group list-group-flush">	
                                                    <router-link to="/accountdashboard" class="list-group-item active d-flex justify-content-between align-items-center">Dashboard <i class='bx bx-tachometer fs-5'></i></router-link>
													<router-link to="/accountorder" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Orders <i class='bx bx-cart-alt fs-5'></i></router-link>
													<router-link to="/accountdetails" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i class='bx bx-user-circle fs-5'></i></router-link>
													<router-link to="/" class="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i class='bx bx-log-out fs-5'></i></router-link>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-8">
										<div class="card shadow-none mb-0">
											<div class="card-body">
												<p>Hello <strong>user</strong> (not <strong>user?</strong>  <router-link to="/">Logout</router-link>)</p>
												<p>From your account dashboard you can view your Recent Orders, manage your shipping and billing addesses and edit your password and account details</p>
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
        name: 'AccountDashboard',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>