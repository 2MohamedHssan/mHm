<template>
  <div>
    <i
      @click="done = !done"
      :class="['fa fa-gear one fa-2x gear-check', { on: done }]"
    ></i>
    <ul :class="['list-unstyled', { open: done }]">
      <li
        class="active"
        @click="cahngeColor('#e60024')"
        style="background-color: #e60024"
      ></li>
      <li
        @click="cahngeColor('#2196f3')"
        style="background-color: #2196f3"
      ></li>
      <li
        @click="cahngeColor('#9c27b0')"
        style="background-color: #9c27b0"
      ></li>
      <li
        @click="cahngeColor('#ffc107')"
        style="background-color: #ffc107"
      ></li>
    </ul>
    <div class="arrow" v-if="showButton" @click="scrollToTop">
      <!-- <i class="fa-solid fa-angles-up fa-2x"></i> -->
      <i class="fa-solid fa-2x fa-hand-pointer"></i>
      <!-- <i class="fa-solid fa-2x fa-chevron-up"></i> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainColor',
  data() {
    return {
      done: false,
      showButton: false,
      ColorOne: '#e60024',
    };
  },
  methods: {
    cahngeColor: function (color) {
      document.documentElement.style.setProperty('--ColorOne', color);
    },
    handleScroll() {
      this.showButton = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
ul {
  position: fixed;
  left: 0;
  top: 100px;
  display: flex;
  gap: 10;
  justify-content: space-around;
  align-content: center;
  width: 0px;
  height: 52px;
  z-index: 500;
  background-color: #222;
  transition: 0.5s;
}
.open {
  border: solid 2px var(--ColorOne);
  width: 250px;
}
.on {
  left: 249px !important;
}
li {
  align-self: center;
  width: 40px;
  opacity: 0.7;
  cursor: pointer;
  height: 40px;
  border-radius: 50%;
}
.active {
  opacity: 1;
  border: solid 1px #fff;
}
.one {
  position: fixed;
  top: 100px;
  transition: 0.5s;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 5000;
  cursor: pointer;
  left: 0px;
  padding: 10px 15px;
  color: #fff;
  background-color: var(--ColorOne);
}
.arrow {
  position: fixed;
  z-index: 50000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  right: 10px;
  bottom: 5px;
  color: #fff;
  cursor: pointer;
  background-color: var(--ColorOne);
}
.arrow:hover i {
  animation: topadown 1s linear infinite;
}
@keyframes topadown {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
