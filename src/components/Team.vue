<template>
  <section class="pt-5">
    <div class="ovrlay"></div>
    <div class="container">
      <h1 class="text-white mb-6">Meet Our Awesome Team</h1>
      <div class="row">
        <div class="col-lg-3 col-md-6 pb-5 sca" data-aos="fade-down">
          <div>
            <img src="../assets/chris.jpg" alt="" />
            <h4 class="mt-3 mb-3 text-white">Chris Coyier</h4>
            <p class="ca">
              This Is Chris Coyier The Founder Of The Amazing Website Css-Tricks
            </p>
            <div class="icon text-white">
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 sca" data-aos="fade-up">
          <div>
            <img src="../assets/leah.jpg" alt="" />
            <h4 class="mt-3 mb-3 text-white">Leah Culver</h4>
            <p class="ca">
              This Is Amazing Hacker Woman With A Much Knowledge In Hacking
            </p>
            <div class="icon text-white">
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 sca" data-aos="fade-down">
          <div>
            <img src="../assets/steve.jpg" alt="" />
            <h4 class="mt-3 mb-3 text-white">Steve Jobs</h4>
            <p class="ca">
              This Is The Man Who Change The World With His Apple Products
            </p>
            <div class="icon text-white">
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 sca" data-aos="fade-up">
          <div>
            <img src="../assets/marissa.jpg" alt="" />
            <h4 class="mt-3 mb-3 text-white">Marissa Mayer</h4>
            <p class="ca">
              This Is Amazing Hacker Woman With A Much Knowledge In Hacking
            </p>
            <div class="icon text-white">
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurTeam',
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 50px;
}
.container {
  position: relative;
}
i {
  margin-left: 5px;
}
.ovrlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000c1;
}
.ca {
  color: #fff;
  font-weight: normal;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
section {
  background-image: url(../assets/team.jpg);
  padding-top: 40px;
  padding-bottom: 60px;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}
.sca:hover {
  animation: scaling 1s infinite linear;
}
@keyframes scaling {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
