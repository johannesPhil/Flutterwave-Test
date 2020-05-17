<template>
  <section class="event">
    <div class="desc">
      <div class="desc__text">
        <p class="desc__date">{{ new Date(details.start_time) | dateFormat("MMMM D, YYYY") }}</p>
        <h1 class="desc__name">{{ details.name }}</h1>
        <div class="desc__summary">{{details.description}}</div>
        <h3 class="desc__fee" v-if="details.is_free">Fee: Free</h3>
        <h3 class="desc__fee"></h3>
        <button @click="showModal" class="desc__link button--orange">Buy tickets</button>
      </div>
      <div class="desc__img">
        <img :src="details.image" class="img__img" />
      </div>
    </div>
    <div class="itinerary">
      <div class="itinerary__venu">
        <h4 class="itinerary__head">Venue</h4>
        <p class="itinerary__address">{{ details.venue }}</p>
      </div>
      <div class="itinerary__when">
        <h4 class="itinerary__head">Date and Time</h4>
        <div
          class="itinerary__time"
        >{{ new Date(details.start_time) | dateFormat("dddd, MMMM D, YYYY, h:mm a") }}</div>
      </div>
    </div>
    <payment
      v-show="isModalVisible"
      @close="closeModal"
      :event="details.name"
      :date="details.start_time"
    />
  </section>
</template>

<script>
import payment from "../components/payment";
/* eslint-disable no-unused-vars */
import axios from "axios";
/* eslint-enable no-unused-vars */
import Vue from "vue";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

Vue.use(VueFilterDateFormat);

export default {
  name: "eventDetail",
  components: {
    payment
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      details: [],
      error: [],
      isModalVisible: false
    };
  },
  async created() {
    console.log(this.id);
    await this.getEventDetails();
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      console.log(this.isModalVisible);
    },
    async getEventDetails() {
      try {
        await axios
          .get(`https://eventsflw.herokuapp.com/v1/events/${this.$props.id}`)
          .then(res => JSON.parse(JSON.stringify(res.data.data)))
          .then(res => {
            this.details = res;
            console.log(this.details);
          });
      } catch (err) {
        this.error.push(err);
        console.log("Error", err);
      }
    }
  }
};
</script>

<style scoped>
section.event {
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.desc {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #12122c;
  border-bottom: groove 0.02rem #c6c6c6;
}
.desc__text {
  height: auto;
  display: flex;
  flex-direction: column;
}
.desc__summary {
  font-style: italic;
}
.desc__date {
  margin-top: 0;
}
.desc__name {
  font-weight: bolder;
}
.desc__link {
  width: 280px;
  text-transform: uppercase;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 4px;
}
.desc__img {
  height: 50vh;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
}
.img__img {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
}

.itinerary {
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  color: #333333;
}
.itinerary__venu,
.itinerary__when {
  height: auto;
  display: flex;
  flex-direction: column;
}
.itinerary__head {
  font-weight: lighter;
  margin-top: 0;
}
.itinerary__address,
.itinerary__time {
  font-size: 1.1em;
  font-weight: bolder;
}

@media screen and (max-width: 720px) {
  .desc,
  .itinerary {
    padding: 2rem 0;
    flex-direction: column;
  }
  .desc__text {
    order: 2;
  }
  .desc__text,
  .desc__img {
    width: 100%;
    margin: 0;
  }
  .itinerary__venu,
  .itinerary__when {
    width: 90%;
    margin: 0 auto;
  }
  .desc__link {
    margin: auto;
  }
}

@media screen and (min-width: 721px) {
  .desc,
  .itinerary {
    padding: 4rem 2rem;
    flex-direction: row wrap;
  }
  .itinerary__venu,
  .itinerary__when {
    width: 40%;
  }
  .desc {
    flex-flow: row wrap;
  }
  .desc__text,
  .desc__img {
    width: 40%;
  }
}

@media screen and (min-width: 1000px) {
  .desc,
  .itinerary {
    padding: 4rem;
  }
}

@media screen and (min-width: 1200px) {
  .desc,
  .itinerary {
    padding: 4rem 8rem;
  }
}
</style>