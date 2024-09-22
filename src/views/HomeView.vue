<template>
  <div class="home">
    <HelloWorld />
    <HaeDer />
    <FeaTuers />
    <OurSit />
    <Price />
    <OurTeam />
    <KeepIng />
    <Statistics />
    <OurSkills />
    <TellUs />
    <Brands />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HaeDer from '@/components/Header.vue';
import FeaTuers from '@/components/Featuers.vue';
import OurSit from '@/components/OurSite.vue';
import Price from '@/components/Price.vue';
import OurTeam from '@/components/Team.vue';
import TellUs from '@/components/TellUs.vue';
import OurSkills from '@/components/OurSkills.vue';
import Statistics from '@/components/Statistics.vue';
import KeepIng from '@/components/Keep.vue';
import Brands from '@/components/Brands.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HaeDer,
    FeaTuers,
    OurSit,
    Price,
    OurTeam,
    TellUs,
    OurSkills,
    Statistics,
    KeepIng,
    Brands,
  },
};
</script>
