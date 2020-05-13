<template>
  <div class="container">
    <headerNav />
    <section class="events">
      <h1 class="events__header">The best events happening now</h1>
      <div class="events__container">
        <a href="http://" class="events__link" v-for="event in events" :key="event.id">
          <div class="eventcard">
            <div class="eventcard__top">
                <img :src="event.image" alt="" class="eventcard__img">
            </div>
            <div class="eventcard__bottom">
                <p class="eventcard__date">
                  {{ new Date(event.start_time) | dateFormat('MMMM D, YYYY')}}
                </p>
                <p class="eventcard__title">
                  {{ event.name }}
                </p>
                <p class="eventcard__fee">

                </p>
            </div>
      </div>
      </a>
      </div>
      
    </section>
    
  </div>
</template>

<script>
import axios from 'axios'

import headerNav from './components/headerNav'
// import eventCard from './components/eventCard'
import Vue from 'vue';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

Vue.use(VueFilterDateFormat);

export default {
  name: 'App',
  components: {
    headerNav
  },
  data() {
    return {
      events:[],
      images: ''
    }
  },
  async created () {
    this.getEvents();
  },
  methods: {
    getEvents() {
      const response = axios.get('https://eventsflw.herokuapp.com/v1/events');
      response.then( (result) =>{
      this.events = result.data.data.events;
      console.log(this.events);  
      })
      
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f2f2f2;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
}
img{
  width: 100%;
  height:100%;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5%;
  min-height: 100vh;
  background-color: #F2F2F2;
}
.events{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.events__header{
  width: 100%;
  color: #333333;
  font-size: 2rem;
}
.events__container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.events__link{
  color: #333333;
}
.eventcard{
  height: 300px;
}
.eventcard__top{
    width: 100%;
    height: 60%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
    border-radius: 6px;
}
.eventcard__img{
  border-radius: 6px;
}
.eventcard__date,
.eventcard__title,
.eventcard__fee{
  margin: .2rem 0;
}
.eventcard__title{
  font-weight: bold;
}

@media screen and(min-width: 320px){
  .events__link{
    width: 90%;
  }
}

@media screen and (min-width:720px){
  .events__link{
    width: 45%;
  }
}

@media screen and (min-width:1000px){
  .events__link{
    width: 30%;
  }
}
</style>
