<template>
    <div className="col-12 col-xl-4">
      <div className="order-summary">
        <div className="card rounded-0">
          <div className="card-body">
            <div className="card rounded-0 border bg-transparent shadow-none">
              <div className="card-body">
                <p className="fs-5">Order summary</p>
                
                  <div key="">
                    <div className="my-3 border-top"></div>
                    <div className="d-flex align-items-center">
                      <span className="d-block flex-shrink-0">
                        <img src="assets/images/products/04.png" width="75" alt="Product" />
                      </span>
                      <div className="ps-2">
                        <h6 className="mb-1">
                          <span className="text-dark">
                            T-shirt Brand new
                          </span>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="me-2">₦8990</span>
                          <span className="">x 8</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            

                <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                  <div className="card-body">
                    <p className="mb-2">
                      Subtotal: <span className="float-end">₦9000</span>
                    </p>
                    <p className="mb-2">
                      Shipping: <span className="float-end">₦8700</span>
                    </p>
                    <p className="mb-2">
                      Taxes: <span className="float-end">₦90</span>
                    </p>
                    
                    <div className="my-3 border-top"></div>
                    <h5 className="mb-0">
                      Order Total: <span className="float-end">₦900</span>
                    </h5>
                  </div>
                </div>
            
          </div>
        </div>
      </div>
    </div>
</template>


<script>

export default {
    name: "OrderSummary",

}
</script>
