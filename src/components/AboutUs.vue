<template>
  <div>
    <nav>
      <div class="container">
        <ul class="breadcrumb container m-0" aria-label="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">About</li>
        </ul>
      </div>
    </nav>
    <div class="container pt-5 mb-5 pb-5">
      <div>
        <h1>About Us</h1>
        <hr />
        <p class="lead">
          We Create Your Digital Dreams Just Think And Tell Us What You Need Or
          Leave The Inspiration To Us And Just Watch, Just Believe In Our
          Professionals
        </p>
        <img src="../assets/company_team.jpg" class="img-thumbnail" alt="" />
      </div>
      <div class="row pt-5 mt-5">
        <div v-for="div in AllDivs" :key="div" class="col-md-4">
          <i :class="div.iconclass"></i>
          <h3 class="mt-4 mb-2">{{ div.heading }}</h3>
          <p>{{ div.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
  data() {
    return {
      AllDivs: [
        {
          iconclass: 'fa-solid fa-code fa-5x',
          heading: 'We Love Code',
          text: `We Create Your Digital Dreams Just Think And Tell Us What You Need Or Leave The Inspiration To Us And Just Watch, Just Believe In Our Professionals`,
        },
        {
          iconclass: 'fa-solid fa-child-reaching fa-5x',
          heading: 'We Are Happy',
          text: `We Create Your Digital Dreams Just Think And Tell Us What You Need Or Leave The Inspiration To Us And Just Watch, Just Believe In Our Professionals`,
        },
        {
          iconclass: 'fa-solid fa-users fa-5x',
          heading: 'We Are Social',
          text: `We Create Your Digital Dreams Just Think And Tell Us What You Need Or Leave The Inspiration To Us And Just Watch, Just Believe In Our Professionals`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 10px;
  background-color: #f5f5f5;
}
h1 {
  font-size: 60px;
}
hr {
  border: 0;
  width: 70%;
  margin: 20px auto;
  border-top: 1px solid #aaa;
}
</style>
