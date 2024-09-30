<template lang="html" v-slot="">
  <ContentWrapperVue>
    <!-- navigation -->
    <NavigationVue />

    <!-- landing section -->
    <LandingVue />

    <!-- about section -->
    <AboutVue />

    <!-- skills section -->
    <SkillsVue />

    <!-- portfolio section -->
    <PortfolioVue />

    <!-- experience section -->
    <ExperienceVue />

    <!-- footer section -->
     <FooterVue />

  </ContentWrapperVue>
</template>

<script setup lang="ts">
import AboutVue from './components/About/AboutVue.vue';
import ExperienceVue from './components/Experience/ExperienceVue.vue';
import LandingVue from './components/Landing/LandingVue.vue';
import PortfolioVue from './components/Portfolio/PortfolioVue.vue';
import SkillsVue from './components/Skills/SkillsVue.vue';
import ContentWrapperVue from './utils/ContentWrapperVue.vue';
import FooterVue from './utils/FooterVue.vue';
import NavigationVue from './utils/NavigationVue.vue';
</script>

<style scoped lang="css">
</style>