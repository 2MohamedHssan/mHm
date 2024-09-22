<template>
  <div>
    <div>
      <div class="dropdown p-lg-1">
        <div class="dropdown-toggle" id="m" data-bs-toggle="dropdown">Test</div>
        <div class="dropdown-menu" aria-labelledby="m">
          <a href="#" class="dropdown-item">Programming</a>
          <a href="#" class="dropdown-item">Web Design</a>
          <a href="#" class="dropdown-item">Desktop</a>
          <a href="#" class="dropdown-item">Web Hosting</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropDown',
};
</script>

<style lang="scss" scoped>
.dropdown {
  cursor: pointer;
  height: 100%;
  transition: 0.3s;
}
.dropdown:hover {
  background-color: #000;
}
.dropdown-menu {
  padding: 0;
  margin: 0;
  border-top: solid 4px var(--ColorOne);
  background-color: #222;
}

a {
  color: #bbb;
  margin: 0;
  font-size: 14px;
}
a:hover {
  color: #fff;
  background-color: var(--ColorOne);
}
#m {
  color: #bbb;
}
#m:hover {
  color: #fff;
}
</style>
