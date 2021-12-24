<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
div {
  height: 100vh;
  width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0px;
  background-color: #111111;
  position: fixed;
}

#nav a {
  font-weight: bold;
  color: rgba(255, 0, 255, 1);
  display: inline-block;
  text-decoration: none;
  padding: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  /* overflow: hidden; */
  transition: 0.3s;
}
#nav a:hover {
  background-color: rgba(255, 0, 255, 0.8);
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.5),
    0 0 80px rgba(255, 0, 255, 0.5), 0 0 160px rgba(255, 0, 255, 0.5);
}
#nav a.router-link-exact-active {
  color: rgba(0, 255, 255, 1);
}

#nav a.router-link-exact-active:hover {
  background-color: #111111;
  color: rgba(0, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0 0 10px #111111, 0 0 40px #111111, 0 0 80px #111111,
    0 0 160px #111111;
}

body,
html {
  padding: 0;
  margin: 0;
}
body {
  background-color: #111111;
}
:root {
  color-scheme: dark;
}
</style>
