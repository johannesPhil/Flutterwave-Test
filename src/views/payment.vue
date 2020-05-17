<template>
  <main>
    <EventOrder
      :eventname="event"
      :eventdate="date"
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
    />
  </main>
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
  mounted() {
    this.event = this.$route.query.event;
    this.date = this.$route.query.date;
  },
  methods: {
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
    logTicketsValues(){
      this.subtotal = this.tickets.regular.fee + this.tickets.vip.fee + this.tickets.table.fee
      // console.log(this.tickets.regular.fee,this.tickets.vip.fee,this.tickets.table.fee);

    }
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  flex-wrap: row wrap;
}
</style>