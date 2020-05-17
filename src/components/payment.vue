<template>
  <transition name="modal-fade">
    <main class="modal-backdrop">
      <div class="modal-wrapper">
        <button @click="close" class="modal-button">X Close</button>
        <div class="modal">
          <EventOrder
            :eventname="this.$attrs.event"
            :eventdate="this.$attrs.date"
            @regularCost="updateRegCost"
            @regularTicket="updateRegTicket"
            @vipCost="updateVipCost"
            @vipTicket="updateVipTicket"
            @tableCost="updateTableCost"
            @tableTicket="updateTableTicket"
          />
          <OrderSummary
            :regFee="this.tickets.regular.fee"
            :regTicket="this.tickets.regular.number"
            :vipFee="this.tickets.vip.fee"
            :vipTicket="this.tickets.vip.number"
            :tableTicket="this.tickets.table.number"
            :tableFee="this.tickets.table.fee"
            :subtotal="this.subtotal"
            @pay="makePayment"
          />
        </div>
      </div>
    </main>
  </transition>
</template>

<script>
import EventOrder from "../components/EventOrder";
import OrderSummary from "../components/OrderSummary";
export default {
  name: "payment",
  components: {
    EventOrder,
    OrderSummary
  },
  data() {
    return {
      event: "",
      date: "",
      tickets: {
        regular: {
          number: "",
          fee: ""
        },
        vip: {
          number: "",
          fee: ""
        },
        table: {
          number: "",
          fee: ""
        }
      },
      subtotal: ""
    };
  },
  // mounted() {
  //   this.event = this.$props.event;
  //   this.date = this.$route.query.date;
  // },
  created() {
    const script = document.createElement("script");
    script.src = !this.isProduction
      ? "https://ravemodal-dev.herokuapp.com/v3.js"
      : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  prop: ["event", "date"],
  methods: {
    close() {
      this.$emit("close");
    },
    updateRegCost(regCost) {
      this.tickets.regular.fee = regCost;
      this.logTicketsValues();
    },
    updateRegTicket(regTicket) {
      this.tickets.regular.number = regTicket;
    },
    updateVipCost(vipCost) {
      this.tickets.vip.fee = vipCost;
      this.logTicketsValues();
    },
    updateVipTicket(vipTicket) {
      this.tickets.vip.number = vipTicket;
    },
    updateTableCost(tableCost) {
      this.tickets.table.fee = tableCost;
      this.logTicketsValues();
    },
    updateTableTicket(tableTicket) {
      this.tickets.table.number = tableTicket;
    },
    logTicketsValues() {
      this.subtotal =
        Number(this.tickets.regular.fee) +
        Number(this.tickets.vip.fee) +
        Number(this.tickets.table.fee);
      // console.log(this.tickets.regular.fee,this.tickets.vip.fee,this.tickets.table.fee);
    }
  }
};
</script>

<style lang="scss" scoped>
main .modal-backdrop {
  width: 100%;
  height: auto;
  overflow: auto;
  display: flex;
  flex-wrap: row wrap;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-wrapper {
  position: relative;
  margin: auto;
  background-color: #f2f2f2;
  box-shadow: 2px 2px 20px 1px;
}
.modal {
  position: relative;
  width: 100%;
  height: max-content;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-button {
  position: absolute;

  padding: 0.5rem 1rem;
  border-radius: 60px;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
@media screen and (max-width: 900px) {
  .modal-wrapper {
    width: 90%;
  }
  .modal {
    flex-direction: column;
  }
  .modal-button {
    top: 5%;
    left: 70%;
  }
}

@media screen and (min-width: 901px) {
  .modal-wrapper {
    width: 70%;
  }
  .modal {
    flex-direction: row;
  }
  .modal-button {
    top: 5%;
    left: 5%;
  }
}
</style>
