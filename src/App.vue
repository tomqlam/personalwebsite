<template>
  <div id="nav">
    <button
      v-bind:class="[
        isActive ? 'open' : 'closed',
        true ? 'mobile-nav-toggle' : 'mobile-nav-toggle',
      ]"
      v-on:click="toggleMobileNav"
    ></button>
    <ul class="logo">
      <router-link to="/"
        ><img src="./assets/Logo.svg" class="logoimg"
      /></router-link>
    </ul>
    <transition name="slide-fade">
      <ul v-if="isActive || windowWidth > 640" class="primary-nav flex">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
    </transition>
  </div>
  <router-view />
</template>
<script lang="ts" defer>
import { defineComponent } from "vue";
import "animate.css";
export default defineComponent({
  el: "#app",
  data() {
    return {
      isActive: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    toggleMobileNav: function () {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
});
</script>

<style src="./styles/App.css"></style>
