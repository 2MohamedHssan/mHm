<template>
  <section class="pt-5">
    <div class="ovrlay"></div>
    <div class="container">
      <h1 class="text-white mb-6" data-aos="fade-left">Our Main Statistics</h1>
      <div class="row">
        <div data-aos="fade-up" class="col-lg-3 col-md-6 pb-5">
          <div class="sca">
            <i class="fa-solid fa-users fa-5x"></i>
            <p>9.550</p>
            <span>Satisfied Users</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          class="col-lg-3 col-md-6 pb-5"
        >
          <div class="sca">
            <i class="fa-solid fa-comments fa-5x"></i>
            <p>9.550</p>
            <span>Satisfied Users</span>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          class="col-lg-3 col-md-6 pb-5"
        >
          <div class="sca">
            <i class="fa-solid fa-suitcase fa-5x"></i>
            <p>9.550</p>
            <span>Satisfied Users</span>
          </div>
        </div>
        <div data-aos="fade-down" class="col-lg-3 col-md-6 pb-5">
          <div class="sca">
            <i class="fa-solid fa-life-ring fa-5x"></i>
            <p>9.550</p>
            <span>Satisfied Users</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatIstics',
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 50px;
  color: #bbb;
}
.sca {
  color: #b6b5b5;
  transition: 0.9s;
}
p {
  font-weight: bold;
  font-size: 60px;
  margin: 0;
}
.sca:hover {
  color: #fff;
}
.container {
  position: relative;
}
i {
  display: block;
}
.ovrlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000c1;
}
section {
  background-image: url(../assets/stats.jpg);
  padding-top: 40px;
  padding-bottom: 60px;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}
</style>
