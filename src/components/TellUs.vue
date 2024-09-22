<template>
  <section class="pt-5">
    <div class="ovrlay"></div>
    <div class="container">
      <i class="fa-solid fa-headphones-simple fa-6x"></i>
      <h1 class="mb-6">Tell Us What You Fell</h1>
      <p>Feel Free To Contact Us Anytime</p>
      <div class="row mt-5">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="500">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-describedby="helpId"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-describedby="helpId"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Cell Phone"
            aria-describedby="helpId"
          />
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="500">
          <textarea placeholder="Your Message" class="form-control"></textarea>
          <button class="btn btn-danger form-control p-2">Contact US</button>
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
  color: #ddd;
}
p {
  color: #ddd;
  font-size: 20px;
}
.container {
  position: relative;
}
i {
  display: block;
  color: #ddd;
  margin-bottom: 30px;
}
.ovrlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000c1;
}
input,
textarea {
  background-color: rgba(82, 78, 78, 0.5);
  border: none;
  font-size: 20px;
  margin-bottom: 20px;
}
textarea {
  height: 105px;
}
input:focus,
textarea:focus {
  background-color: rgba(82, 78, 78, 0.5);
}
input::placeholder,
textarea::placeholder {
  color: #888;
}
section {
  background-image: url(../assets/contact-us.jpg);
  padding-top: 40px;
  padding-bottom: 60px;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}
</style>
