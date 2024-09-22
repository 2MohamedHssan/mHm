<template>
  <section>
    <div class="container pt-5 pb-5" data-aos="flip-right">
      <h1>Keep In Touch</h1>
      <p class="mt-3 mb-3 fs-4">
        Sign Up For Newsletter Dont Worry About Spam We Hate It Too.
      </p>
      <div class="mb-3 d-sm-flex justify-content-center">
        <input type="text" placeholder="Write Your Email" />
        <button class="btn btn-danger mt-4 mt-sm-0 border-none">
          <i class="fa-brands fa-youtube"></i> Subscribe
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'KeepIng',
};
</script>

<style lang="scss" scoped>
section {
  background-color: #eee;
}
h1 {
  color: #888;
}
button {
  border: solid 1px #ccc;
  border-radius: 0;
  margin: 0;
}
input {
  background-color: #fff;
  font-size: 20px;
  padding: 5px;
  width: 300px;
  border: solid 1px #ccc;
}
input:focus {
  outline: none;
  border: solid 1px #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
