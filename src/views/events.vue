<template>
  <section class="events">
    <h1 class="events__header">The best events happening now</h1>
    <div class="events__container">
      <router-link
        v-for="event in events"
        :key="event.id"
        class="events__link"
        :to="{ name: 'eventDetail', params: { id: event.id } }"
      >
        <div class="eventcard">
          <div class="eventcard__top">
            <img :src="event.image" alt class="eventcard__img" />
          </div>
          <div class="eventcard__bottom">
            <p class="eventcard__date">
              {{ new Date(event.start_time) | dateFormat("MMMM D, YYYY") }}
            </p>
            <p class="eventcard__title">{{ event.name }}</p>
            <p class="eventcard__fee"></p>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";
// import eventCard from './components/eventCard'

const api = "https://eventsflw.herokuapp.com/v1/events";
export default {
  name: "events",
  components: {},
  data() {
    return {
      events: [],
      images: ""
    };
  },
  async created() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      const response = axios.get(api);
      response.then(result => {
        this.events = result.data.data.events;
        console.log(this.events);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.events {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.events__header {
  width: 100%;
  color: #333333;
  font-size: 2rem;
}
.events__container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.events__link {
  color: #333333;
}
.eventcard {
  height: 300px;
}
.eventcard__top {
  width: 100%;
  height: 60%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
}
.eventcard__img {
  border-radius: 6px;
}
.eventcard__date,
.eventcard__title,
.eventcard__fee {
  margin: 0.2rem 0;
}
.eventcard__title {
  font-weight: bold;
}

@media screen and(min-width: 320px) {
  .events__link {
    width: 100%;
  }
}

@media screen and (min-width: 720px) {
  .events__link {
    width: 45%;
  }
}

@media screen and (min-width: 1000px) {
  .events__link {
    width: 30%;
  }
}
</style>
