<template>
  <div id="nav">
    <button
      v-bind:class="[
        isActive ? 'open' : 'closed',
        true ? 'mobile-nav-toggle' : 'mobile-nav-toggle',
      ]"
      v-on:click="toggleMobileNav"
    ></button>
    <transition name="slide-fade">
      <ul
        id="primary-nav"
        v-if="isActive || windowWidth > 560"
        class="primary-nav flex"
      >
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
    </transition>
    <!-- <ul id="primary-nav" class="primary-nav flex">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul> -->
  </div>
  <router-view />
</template>
<script lang="ts" defer>
import { defineComponent } from "vue";
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
