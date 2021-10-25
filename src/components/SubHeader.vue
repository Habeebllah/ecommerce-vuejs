<template>
    <section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
          <div class="container">
            <div class="page-breadcrumb d-flex align-items-center">
              <h3 class="breadcrumb-title pe-3">{{name}}</h3>
              <div class="ms-auto">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                      <Link to="/" style="textDecoration:none">
                        <i class="bx bx-home-alt"></i> Home
                      </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {{name}}
                    </li>
                    
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
</template>


<script>
export default{
    name: 'SubHeader',
    props: {
        name: {
            type: String
        }
    }
}
</script>



<style>

</style>