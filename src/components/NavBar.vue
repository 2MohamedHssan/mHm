<template>
  <div class="bg-dark text-light m">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/"
          >M<span class="text-danger fs-1">H</span>M</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-lg-bais-0 flex-lg-grow-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav gap-2 align-items-lg-center mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/FAQ">FAQ</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">Map</a>
            </li>
            <li class="nav-item">
              <a><DropDown /></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">ContactUs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import DropDown from '@/components/DropDown.vue';
export default {
  name: 'NavBAr',
  components: {
    DropDown,
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #bbb;
}
button:focus {
  box-shadow: none;
  border: solid 1px #000;
  background-color: #fff;
}
.m {
  position: sticky;
  top: 0;
  z-index: 5000;
}
nav {
  background-color: #222 !important;
  div > a:hover {
    color: #fff;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: #bbb;
    &.router-link-exact-active {
      color: #fff;
      background-color: var(--ColorOne);
    }
  }
}
.nav-link {
  cursor: pointer;
}
.nav-link:hover {
  color: #fff;
}
</style>
