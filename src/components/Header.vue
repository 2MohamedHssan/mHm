<template>
  <div>
    <header>
      <div id="slider1" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li
            v-for="(head, index) in headerimg"
            :key="(head, index)"
            data-bs-target="#slider1"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            v-for="(head, index) in headerimg"
            :key="(head, index)"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <div class="atext">{{ head.boxP }}</div>
            <img
              :src="head.imgSrc"
              class="d-block w-100"
              alt="Description of image 1"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#slider1"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#slider1"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </a>
      </div>
    </header>
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-delay="3000"
      class="container pb-5 pt-5"
    >
      <h1 class="mb-2">
        Meet Our New Template <span class="fsm">M</span
        ><span class="text-danger fss">H</span><span class="fsm">M</span>
      </h1>
      <p class="mytext">
        Hello Let Me Introduce Our Template Elzero Inc. Created With All The
        Love With <strong>Bootstrap</strong> 3.2.0
      </p>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/01.jpg';
import img2 from '@/assets/02.jpg';
import img3 from '@/assets/03.jpg';
import img4 from '@/assets/04.jpg';
export default {
  name: 'HeaDer',

  data() {
    return {
      headerimg: [
        {
          imgSrc: img1,
          boxP: `Transition animations not supported in Internet Explorer 8 &
              9Bootstrap exclusively uses CSS3 for its animations, but Internet
              Explorer 8 & 9 don't support the necessary CSS properties. Thus,
              there are no slide transition animations when using these
              browsers. We have intentionally decided not to include
              jQuery-based fallbacks for the transitions`,
        },
        {
          imgSrc: img2,
          boxP: `Transition animations not supported in Internet Explorer 8 &
              9Bootstrap exclusively uses CSS3 for its animations, but Internet
              Explorer 8 & 9 don't support the necessary CSS properties. Thus,
              there are no slide transition animations when using these
              browsers. We have intentionally decided not to include
              jQuery-based fallbacks for the transitions`,
        },
        {
          imgSrc: img3,
          boxP: `Transition animations not supported in Internet Explorer 8 &
              9Bootstrap exclusively uses CSS3 for its animations, but Internet
              Explorer 8 & 9 don't support the necessary CSS properties. Thus,
              there are no slide transition animations when using these
              browsers. We have intentionally decided not to include
              jQuery-based fallbacks for the transitions`,
        },
        {
          imgSrc: img4,
          boxP: `Transition animations not supported in Internet Explorer 8 &
              9Bootstrap exclusively uses CSS3 for its animations, but Internet
              Explorer 8 & 9 don't support the necessary CSS properties. Thus,
              there are no slide transition animations when using these
              browsers. We have intentionally decided not to include
              jQuery-based fallbacks for the transitions`,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fss {
  font-size: 60px;
  font-weight: bold;
  letter-spacing: -7px;
}
.fsm {
  font-weight: bold;
  letter-spacing: -6px;
}

.atext {
  position: absolute;
  width: 80%;
  background-color: rgba(3, 3, 3, 0.3);
  color: #fff;
  left: 10%;
  line-height: 1.8;
  font-size: 20px;
  font-weight: bold;
}
.carousel-indicators {
  position: absolute;
  bottom: 0;
  left: 35%;
  transform: translateX(-50%);
  padding-left: 0;
  margin-bottom: 20px;
  list-style: none;
}
.mytext {
  color: #888;
  font-size: 24px;
}
.carousel-indicators li {
  background-color: transparent;
  border-radius: 50%;
  border: solid 1px #fff;
  width: 15px;
  height: 15px;
  margin: 0 4px;
}

.carousel-indicators .active {
  background-color: var(--ColorOne);
  height: 17px;
  width: 17px;
}
@media (max-width: 767px) {
  .atext {
    display: none;
  }
  .carousel-indicators li {
    width: 8px;
    height: 8px;
  }
  .carousel-indicators .active {
    width: 10px;
    height: 10px;
  }
}

.carousel-indicators li::before {
  content: none;
}
</style>
