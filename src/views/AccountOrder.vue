<template>
    <Navbar/>
     <SubHeader name="Dashboard" />
     <div class="page-wrapper">
        <div class="page-content">
            <section className="py-4">
					<div className="container">
						<h3 className="d-none">Account</h3>
						<div className="card">
							<div className="card-body">
								<div className="row">
									<div className="col-lg-4">
										<div className="card shadow-none mb-3 mb-lg-0 border">
											<div className="card-body">
                                            <div className="list-group list-group-flush">	
                                                    <router-link to="/accountdashboard" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Dashboard <i className='bx bx-tachometer fs-5'></i></router-link>
													<router-link to="/accountorder" className="list-group-item d-flex active justify-content-between align-items-center ">Orders <i className='bx bx-cart-alt fs-5'></i></router-link>
													<router-link to="/accountdetails" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Account Details <i className='bx bx-user-circle fs-5'></i></router-link>
													<router-link to="/" className="list-group-item d-flex justify-content-between align-items-center bg-transparent">Logout <i className='bx bx-log-out fs-5'></i></router-link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="card shadow-none mb-0">
											<div className="card-body">
												<div className="table-responsive">
													<table className="table">
														<thead className="table-light">
															<tr>
																<th>Order</th>
																<th>Date</th>
																<th>Status</th>
																<th>Total</th>
																<th>Actions</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>#800</td>
																<td>Novermber 15, 2021</td>
																<td>
																	<div className="badge rounded-pill bg-success w-100">Completed</div>
																</td>
																<td>N100.00 for 1 item</td>
																<td>
																	<div className="d-flex gap-2">	<a href="javascript:;" className="btn btn-dark btn-sm rounded-0">View</a>
																	</div>
																</td>
															</tr>
															
														</tbody>
													</table>
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
        name: 'AccountOrder',
        components: {
            SubHeader,
            Navbar,
            Footer,
        }
    }

</script>

<style>


</style>