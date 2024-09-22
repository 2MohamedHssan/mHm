<template>
  <div class="container">
    <div class="swiper pt-5">
      <h1>What Our Clients Say</h1>
      <div
        id="clentSwiper"
        data-aos="flip-left"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            v-for="(item, index) in carouselItems"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <p class="lead">{{ item.text }}</p>
            <span>{{ item.name }}</span>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li
            v-for="(item, index) in carouselItems"
            :key="index"
            :data-bs-target="'#clentSwiper'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
          >
            <img :src="item.imgSrc" alt="" />
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/avatar_01.jpg';
import img2 from '@/assets/avatar_02.jpg';
import img3 from '@/assets/avatar_03.jpg';
import img4 from '@/assets/avatar_04.jpg';
export default {
  name: 'OurSit',
  data() {
    return {
      carouselItems: [
        {
          imgSrc: img1,
          text: "Transition animations not supported in Internet Explorer 8 & 9. Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.",
          name: 'Mohamed Hassan',
        },
        {
          imgSrc: img2,
          text: "Transition animations not supported in Internet Explorer 8 & 9. Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.",
          name: 'Ali Omr',
        },
        {
          imgSrc: img3,
          text: "Transition animations not supported in Internet Explorer 8 & 9. Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.",
          name: 'Assma Hassan',
        },
        {
          imgSrc: img4,
          text: "Transition animations not supported in Internet Explorer 8 & 9. Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 & 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.",
          name: 'Marym Ashraf',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  min-height: 400px;
}
.carousel-indicators {
  bottom: 0px;
  left: 35%;
  transform: translateX(-50%);
  padding-left: 0;
  margin-bottom: 20px;
  list-style: none;
  position: relative;
}
.carousel-indicators li {
  background-color: transparent;
  border-radius: 50%;
  border: solid 1px #888;
  width: 75px;
  height: 75px;
  margin: 30px 10px;
  display: flex;
}

.carousel-indicators img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
span {
  color: var(--ColorOne);
  font-weight: bold;
}
.carousel-indicators .active {
  border: solid 2px var(--ColorOne);
  background-color: var(--ColorOne);
}

@media (max-width: 767px) {
  .carousel-indicators li {
    width: 20px;
    height: 20px;
  }

  .carousel-indicators .active {
    width: 22px;
    height: 22px;
  }
  .lead {
    font-size: 16px;
  }
}

.carousel-indicators li::before {
  content: none;
}
</style>
