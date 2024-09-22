<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h1 class="pt-3 pb-3">Our Skills</h1>
      <div class="row align-items-center">
        <div class="col mb-3">
          <div
            class="progress mb-3"
            style="background-color: #f5f5f5; height: 40px"
          >
            <div
              class="progress-bar bg-success text-start flex-1 ps-2"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Html5 / Css3
            </div>
          </div>
          <div
            class="progress mb-3"
            style="background-color: #f5f5f5; height: 40px"
          >
            <div
              class="progress-bar bg-danger text-start ps-2"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              PHP / MySQL
            </div>
          </div>
          <div
            class="progress mb-3"
            style="background-color: #f5f5f5; height: 40px"
          >
            <div
              class="progress-bar bg-warning text-start ps-2"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Javascript / VueJs
            </div>
          </div>
          <div
            class="progress mb-3"
            style="background-color: #f5f5f5; height: 40px"
          >
            <div
              class="progress-bar bg-wardanger text-start ps-2"
              role="progressbar"
              style="width: 95%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Wordpress
            </div>
          </div>
        </div>
        <div class="col text-center text-md-start">
          <h2 class="fw-bold">About The Team</h2>
          <p>
            We Are Specialised Desiging And Programming Team Passionate About
            Web Design And Creatin Digital Ideas We Will Transfer Your Idea To A
            Digital Dream And Make Your Wish Come True
          </p>
          <button class="btn btn-primary">Talk With A Professional</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurSkills',
};
</script>

<style lang="scss" scoped>
p {
  font-size: 21px;
}
.fdclo {
  flex-direction: column;
}
@media (max-width: 991px) {
  .row {
    flex-direction: column;
  }
}
</style>
