<template>
    <div className="col">
      <div className="card rounded-0 product-card">
        <div className="card-header bg-transparent border-bottom-0">
          <div className="d-flex align-items-center justify-content-end gap-3">
            
          </div>
        </div>
        <span>
          <img
        src={{image_url}}
            className="card-img-top"
            alt="..."
          />
        </span>
        <div className="card-body">
          <div className="product-info">
            <a href="javascript:;">
              <p className="product-catergory font-13 mb-1"><b>{{category}}</b></p>
            </a>
            <a href="javascript:;">
              <h6 className="product-name mb-2">{{name}}</h6>
            </a>
            <div className="d-flex align-items-center">
              <div className="mb-1 product-price">
                
                <span className="me-1 text-decoration-line-through">₦{{price}}</span>
                <span className="fs-5">₦{{old_price}}</span>
              </div>
              <div className="cursor-pointer ms-auto">
                
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
              </div>
            </div>
            <div className="product-action mt-2">
              <div className="d-grid gap-2">
                <button className="btn btn-dark btn-ecomm">
                  
                  <i className="bx bxs-cart-add"></i>Add to Cart
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>

export default {
    name: "ProductCard",
    /* props: {
        name: {type: String},
        category: {type: String},
        price: {type: Number},
        old_price: {type: Number},
        quantity: {type: Number},
        image_url: {type: String},
        description: {type: String}

    }
 */
}
</script>
