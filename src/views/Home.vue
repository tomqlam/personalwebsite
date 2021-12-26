<template>
  <div class="home">
    <div class="wave -one"></div>
    <div class="wave -two"></div>
    <div class="wave -three"></div>
    <div class="welcome">
      <h1>Welcome to my website!</h1>
      <h2>I'm Duy Lam</h2>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0vh;
}
.welcome {
  position: fixed;
  top: 15vh;
  margin-left: 0vw;
}
h1 {
  font-size: 4vw;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.5),
    0 0 80px rgba(255, 0, 255, 0.5), 0 0 160px rgba(255, 0, 255, 0.5);
}
h2 {
  font-size: 3vw;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.5),
    0 0 80px rgba(255, 0, 255, 0.5), 0 0 160px rgba(255, 0, 255, 0.5);
}
.wave {
  top: 400px;
  position: fixed;
  margin-left: -150vw;
  margin-top: 0vh;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
.wave.-one {
  height: 255vw;
  width: 245vw;
  animation: rotate 60s infinite linear;
  box-shadow: inset 0 0 5vw rgba(255, 18, 79, 0.8);
  border-radius: 38% 42%;
}

.wave.-two {
  width: 250vw;
  height: 250vw;
  animation: rotate 34s infinite linear;
  box-shadow: inset 0 0 5vw rgba(0, 255, 255, 0.8);
  border-radius: 38% 42%;
}

.wave.-three {
  height: 245vw;
  width: 255vw;
  animation: rotate 73s infinite linear;
  box-shadow: inset 0 0 5vw rgba(122, 4, 235, 0.8);
  border-radius: 38% 42%;
}
</style>
