import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import AccountDashboard from '../views/AccountDashboard.vue'
import AccountOrder from '../views/AccountOrder.vue'
import AccountDetails from '../views/AccountDetails.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import CheckoutComplete from '../views/CheckoutComplete.vue'
import CheckoutDetails from '../views/CheckoutDetails.vue'
import CheckoutPayment from '../views/CheckoutPayment.vue'
import AddProduct from '../views/AddProduct.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/product',
    name: 'Product',
    component: Product
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/checkout-payment',
    name: 'CheckoutPayment',
    component: CheckoutPayment
  },

  {
    path: '/checkout-details',
    name: 'CheckoutDetails',
    component: CheckoutDetails
  },

  {
    path: '/checkout-complete',
    name: 'CheckoutComplete',
    component: CheckoutComplete
  },

  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },

  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/accountorder',
    name: 'AccountOrder',
    component: AccountOrder
  },

  {
    path: '/accountdetails',
    name: 'AccountDetails',
    component: AccountDetails
  },

  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/accountdashboard',
    name: 'AccountDashboard',
    component: AccountDashboard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
