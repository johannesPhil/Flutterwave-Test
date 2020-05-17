<template>
  <header>
    <router-link :to="{ name: 'events' }" class="logo">
      <img src="../assets/flutterwave.svg" alt="" />
    </router-link>
    <div class="headerlinks">
      <a href class="headerlink__getticket headerlinks--nobg"
        >I didn't get my tickets</a
      >
      <a href class="headerlink__createevent headerlinks--bg button--orange"
        >create your own event</a
      >
    </div>
  </header>
</template>

<style>
a {
  display: inline-block;
  text-decoration: none;
}
img {
  width: 100%;
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
header {
  width: 100%;
  margin: 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  width: 30%;
}
.headerlinks {
  text-transform: capitalize;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.headerlinks--nobg {
  display: block;
  color: #000;
  padding: 0 5%;
  width: max-content;
  white-space: nowrap;
}
.headerlinks--bg {
  display: block;
  width: max-content;
  white-space: nowrap;
  border-radius: 4.06693px;
  background-color: #f5a623;
  color: #fff;
  padding: 2.5% 5%;
}
.button--orange {
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  background: #f5a623;
  border: transparent
}
.button--orange:hover {
  background-color: #fff;
  color: #f5a623;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
