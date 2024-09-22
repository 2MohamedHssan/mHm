<template>
  <section class="pt-5">
    <div class="container">
      <h1 class="h1">Our Amazing Prices</h1>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-5" v-for="card in allCrad" :key="card">
          <div class="card" data-aos="fade-down">
            <div class="card-body">
              <h2 :class="card.thecalss">{{ card.title }}</h2>
              <div class="rotat">{{ card.price }}</div>
              <p class="">{{ card.space }}</p>
              <p class="card-text">{{ card.Email }}</p>
              <p class="card-text">{{ card.Ip }}</p>
              <p class="card-text">{{ card.Databases }}</p>
              <p class="card-text">{{ card.Accounts }}</p>
              <div :class="card.btncalss">{{ card.btntext }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PriCe',
  data() {
    return {
      allCrad: [
        {
          title: 'Hosting',
          price: '$40',
          space: 'Space: 30BG',
          Email: 'Emails: 20',
          Ip: '4 Ip',
          Databases: '10',
          Accounts: '5',
          btntext: 'Order Now',
          thecalss: 'card-title text-primary',
          btncalss: 'btn btn-primary',
        },
        {
          title: 'Vps',
          price: '$50',
          space: 'Space: 50BG',
          Email: 'Emails: 40',
          Ip: '5 Ip',
          Databases: '20',
          Accounts: '10',
          btntext: 'Order Now',
          thecalss: 'card-title text-success',
          btncalss: 'btn btn-success',
        },
        {
          title: 'Dedicated',
          price: '$70',
          space: 'Space: 80BG',
          Email: 'Emails: 40',
          Ip: '8 Ip',
          Databases: '30',
          Accounts: '20',
          btntext: 'Order Now',
          thecalss: 'card-title text-info',
          btncalss: 'btn btn-info',
        },
        {
          title: 'Cloud',
          price: '$90',
          space: 'Space: 90BG',
          Email: 'Emails: 50',
          Ip: '10 Ip',
          Databases: '50',
          Accounts: '50',
          btntext: 'Order Now',
          thecalss: 'card-title text-danger',
          btncalss: 'btn btn-danger',
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
.rotat {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 30px;
  color: #666;
  font-weight: bold;
  background-color: #eee;
  display: flex;
  margin: 20px auto;
  align-items: center;
  transition: 0.9s;
  justify-content: center;
}
.card:hover .rotat {
  transform: scale(1.2) rotate(360deg);
  border: solid 3px #aaa;
}
section {
  background-color: #eee;
}
</style>
