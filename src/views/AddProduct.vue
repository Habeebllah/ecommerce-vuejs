<template>
  <Navbar />
  <SubHeader name="Add Product" />
  <div class="page-wrapper">
    <div class="page-content">
      <section class="py-0 py-lg-5">
        <div class="container">
          <div
            class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0"
          >
            <div class="row row-cols-1 row-cols-lg-1 row-cols-xl-2">
              <div class="col mx-auto mt-5">
                <div class="card mb-0">
                  <div class="card-body">
                    <div class="border p-4 rounded">
                      <div class="text-center">
                        <h3 class="">Add Product</h3>
                      </div>

                      <div class="form-body">
                        <div class="row g-3">
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Name
                              </label>
                            <input
                            class="form-control"
                              type="text"
                              v-model="name"
                              placeholder="product name"
                            />
                          </div>
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Category
                              </label>
                            <input
                            class="form-control"
                            
                              type="text"
                              v-model="category"
                              placeholder="product category"
                            />
                          </div>
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Price
                              </label>
                            <input
                            class="form-control"
                              type="number"
                              v-model="price"
                              placeholder="product price"
                            />
                          </div>
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Old Price
                              </label>
                            <input
                            class="form-control"
                              type="number"
                              v-model="old_price"
                              placeholder="product old price"
                            />
                          </div>
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Quantity
                              </label>
                            <input
                            class="form-control"
                              type="number"
                              v-model="quantity"
                              placeholder="product quantity"
                            />
                          </div>
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Image Url
                              </label>
                            <input
                            class="form-control"
                              type="text"
                              v-model="image_url"
                              placeholder="product image url"
                            />
                          </div>
                          <div class="col-12">
                              <label
                                class="form-label"
                              >
                                Product Description
                              </label>
                            <input
                            class="form-control"
                              type="text"
                              v-model="description"
                              placeholder="product description"
                            />
                          </div>
                          <div class="col-12">
                            <div class="d-grid">
                              <button
                                type="submit"
                                class="btn btn-primary"
                                v-on:click="createProducts"
                              >
                                Add Product
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createProducts } from "../graphql/mutations";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import SubHeader from "../components/SubHeader.vue";

export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      category: "",
      price: "",
      old_price: "",
      quantity: "",
      image_url: "",
      description: "",
    };
  },
  components: {
    SubHeader,
    Navbar,
    Footer,
  },
  methods: {
    async createProducts() {
      const {
        name,
        category,
        price,
        old_price,
        quantity,
        image_url,
        description,
      } = this;
      if (
        !name ||
        !category ||
        !price ||
        !old_price ||
        !quantity ||
        !image_url ||
        !description
      )
        return alert("Enter a valid product");
      const product = {
        name,
        category,
        price,
        old_price,
        quantity,
        image_url,
        description,
      };
      await API.graphql({
        query: createProducts,
        variables: { input: product },
      });
      this.name = "";
      this.category = "";
      this.price = "";
      this.old_price = "";
      this.quantity = "";
      this.image_url = "";
      this.description = "";
      alert('Product Added Successfully...!')
    },
  },
};
</script>
