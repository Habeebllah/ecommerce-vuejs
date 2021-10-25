<template>
    <section className="py-4">
      <div className="container">
        <div className="d-flex align-items-center">
          <h5 className="text-uppercase mb-0">FEATURED PRODUCTS</h5>
          <Link
            to="/products"
            className="btn btn-dark btn-ecomm ms-auto rounded-0"
          >
            More Products<i className="bx bx-chevron-right"></i>
          </Link>
        </div>
        <hr />
        <div className="product-grid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
              <ProductCard/>
              
          </div>
        </div>
      </div>
    </section>
</template>


<script>
import ProductCard from './ProductCard.vue'
    export default{
        name: "FeaturedProduct",
        components: {
            ProductCard
        }
    }
</script>


<style>

</style>