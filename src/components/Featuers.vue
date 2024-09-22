<template>
  <section class="pt-5">
    <div class="container">
      <h1 class="h1" data-aos="fade-up-right">Our Features</h1>
      <div class="row">
        <div
          data-aos="fade-up"
          class="col-lg-3 col-md-6 mb-5"
          v-for="(feat, index) in featuersContent"
          :key="index"
        >
          <i :class="feat.icoclass"></i>
          <h4 class="mt-3 mb-3">{{ feat.boxTitle }}</h4>
          <p class="ca">{{ feat.boxP }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaTuers',
  data() {
    return {
      featuersContent: [
        {
          icoclass: 'fa-solid fa-check',
          boxTitle: 'Awesome Display',
          boxP: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`,
        },
        {
          icoclass: 'fa-regular fa-thumbs-up',
          boxTitle: '100% Responsive',
          boxP: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`,
        },
        {
          icoclass: 'fa-regular fa-eye',
          boxTitle: 'Retina Ready',
          boxP: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`,
        },
        {
          icoclass: 'fa-solid fa-pencil',
          boxTitle: 'Well Documented',
          boxP: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 50px;
}
.ca {
  color: #777;
  font-weight: normal;
}
i {
  color: #666;
  font-size: 25px;
}
section {
  background-color: #eee;
}
</style>
