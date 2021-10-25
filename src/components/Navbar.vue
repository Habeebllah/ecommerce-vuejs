<template>
<div className="header-wrapper fixed">
      <input type="checkbox" className="checks" id="checks"/>
      <div className="top-menu border-bottom">
        <div className="container">
          <nav className="navbar navbar-expand">
            <div className="shiping-title text-uppercase font-13 d-none d-sm-flex">
              Welcome to Rosenics store!
            </div>
          </nav>
        </div>
      </div>
      <div className="header-content pb-3 pb-md-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-md-auto">
              <div className="d-flex align-items-center">
                
              <label for="checks" className="bar">
                  <span className="bx bx-menu first_icon"></span>
                  <span className="bx bx-x-circle second_icon"></span>
                </label>
                
                <div className="logo d-none d-lg-flex">
                  <router-link to="/">
                    
                    <img
                      src="assets/images/logo-icon.png"
                      className="logo-icon"
                      alt=""
                    />
                    
                  </router-link>
                </div>
              </div>
            </div>
            <div className="col col-md order-4 order-md-2">
              <div className="input-group flex-nowrap px-xl-4">
                <input
                  type="text"
                  className="form-control w-100" 
                  placeholder="search products "
                  ref=""
                  value=""
                  onChange=""
                />
                
                <span className="input-group-text cursor-pointer bg-transparent">
                  <i className="bx bx-search"></i>
                </span>
              </div>
            </div>
            <div className="col-4 col-md-auto order-3 d-none d-xl-flex align-items-center">
              <div className="fs-1 text-white">
                <i className="bx bx-headphone"></i>
              </div>
              <div className="ms-2">
                <p className="mb-0 font-13">CALL US NOW</p>
                <h5 className="mb-0">+234 9126096902</h5>
              </div>
            </div>
            <div className="col-4 col-md-auto order-2 order-md-4">
              <div className="top-cart-icons float-end">
                <nav className="navbar navbar-expand">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <router-link
                        to="/sign-in"
                        className="nav-link cart-link"
                      >
                        <i className="bx bx-user"></i>
                      </router-link>
                    </li>
					

                    <li className="nav-item">
                      <router-link
                        to="/cart"
                        className="nav-link  position-relative cart-link"
                      >
                        
                          <span className="alert-count">
                            2
                          </span>
                        
                        <i className="bx bx-shopping-bag"></i>
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="primary-menu border-top">
        <div className="container">
          <nav
            id="navbar_main"
            className="navbar navbar-expand-lg"
          >
            
            <ul className="navbar-nav">
              <li className="nav-item active">
                
                <router-link className="nav-link links" to="/">
                  Home
                </router-link>
              </li>
              <li className="nav-item">
                <router-link className="nav-link links" to="/product">
                  Product
                </router-link>
              </li>
              <li className="nav-item">
                
                <router-link className="nav-link links" to="/contact">
                  Contact Us
                </router-link>
              </li>
              <li className="nav-item">
                
                <router-link className="nav-link links" to="/accountdashboard">
                  My Account
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    
</template>

<script>
    export default{
        name: "Navbar"
    }

</script>


<style>
@media screen and (max-width: 575px) {
	
    .input-group{
        width: 18rem;
    
    }
}


input[type="checkbox"]{
    -webkit-appearance: none;
    display: none;
}

.bar{
    -webkit-appearance: none;
    display: none;
}


@media screen and (max-width: 992px) {
    nav{
        display: block;
        padding: 0;
    }

    .bar span{
        
        font-size: 25px;
    
    }


    .primary-menu nav ul {
        display: flex;
        flex-direction: column;
        visibility: hidden;
        transition: 0.3s;
    }

    .primary-menu nav ul li{
        text-align: center; 
        transition: 0.3s 0.1s all;
        opacity: 0;
    }
    
    .primary-menu nav ul li .links{
        color: #000;
        font-size: 28px;
        display: block;
    }

    .primary-menu nav ul li:nth-child(1){
        transform: translateX(-150px);
    }

    .primary-menu nav ul li:nth-child(2){
        transform: translateX(-200px);
    }

    .primary-menu nav ul li:nth-child(3){
        transform: translateX(-250px);
    }

    .primary-menu nav ul li:nth-child(4){
        transform: translateX(-300px);
    }

    .primary-menu nav{
        display: block;
        visibility: hidden;

    }

    .bar{
        display: block;
        position: absolute;
        cursor: pointer;

    }
    .bar span:nth-child(2){
        display: none;
    }

    .checks:checked ~ .header-content .bar span:nth-child(2){
        display: block;

    }
    .checks:checked ~ .header-content .bar span:nth-child(1){
        display: none;
    }
    .checks:checked ~ .primary-menu nav ul{
        visibility: visible;
        height: 295px;
    }

    .checks:checked ~ .primary-menu nav ul li:nth-child(1),
    .checks:checked ~ .primary-menu nav ul li:nth-child(2),
    .checks:checked ~ .primary-menu nav ul li:nth-child(3),
    .checks:checked ~ .primary-menu nav ul li:nth-child(4){
        transform: translateX(0);
        opacity: 1;
    }


}
</style>