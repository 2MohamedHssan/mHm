<template>
  <div class="hello">
    <div v-if="started" class="overlay"></div>
    <div v-if="started" class="anmite">
      <div class="one"></div>
      <div class="tow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      started: true,
    };
  },
  methods: {
    statanimation: function () {
      this.started = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.statanimation();
    }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100000;
  transition: 0.5s;
  background-color: #222;
}
.anmite div {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 1000001;
  position: fixed;
}
.one {
  animation: topandown 1s infinite ease-in-out;
  z-index: 3;
  right: 50%;
  top: 50%;
  opacity: 0.8;
}
.tow {
  animation: opact 2s ease-in-out 0.3s 1;
  opacity: 0.4;
  right: 50%;
  top: 50%;
}
@keyframes topandown {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(-25%);
    opacity: 0.5;
  }
  50% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(-60%);
  }
  100% {
    transform: translateY(0%);
    opacity: 0.7;
  }
}
</style>
