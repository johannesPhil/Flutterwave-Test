<template>
  <section class="order-container">
    <div class="order-header">
      <h1>{{eventname}}</h1>
      <p>{{ new Date(eventdate) | dateFormat("MMMM D, YYYY") }}</p>
    </div>
    <div id="order-category">
      <ul class="ticket-list">
        <li class="ticket">
          <span class="ticket__title">Regular</span>
          <span class="ticket__fee" ref="regularFee">{{fee.calculated.regular}}</span>
          <span class="ticket__control">
            <span @click="calcReg(false)" class="reduce">-</span>
            <span class="number" ref="ticketReg">{{ ticketReg }}</span>
            <span @click="calcReg(true)" class="add">+</span>
          </span>
        </li>
        <li class="ticket">
          <span class="ticket__title">VIP</span>
          <span class="ticket__fee" ref="vipFee">{{fee.calculated.vip}}</span>
          <span class="ticket__control">
            <span @click="calcVip(false)" class="reduce">-</span>
            <span class="number" ref="ticketVip">{{ ticketVip }}</span>
            <span @click="calcVip(true)" class="add">+</span>
          </span>
        </li>
        <li class="ticket">
          <span class="ticket__title">Table For 5</span>
          <span class="ticket__fee" ref="tableFee">{{fee.calculated.table}}</span>
          <span class="ticket__control">
            <span @click="calcTable(false)" class="reduce">-</span>
            <span class="number" ref="ticketTable">{{ ticketTable }}</span>
            <span @click="calcTable(true)" class="add">+</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventOrder",
  data() {
    return {
      ticketReg: 0,
      ticketVip: 0,
      ticketTable: 0,
      fee: {
        base: {
          regular: 5000,
          vip: 100000,
          table: 1000000
        },
        calculated: {
          regular: 5000,
          vip: 100000,
          table: 1000000
        }
      }
    };
  },
  mounted() {
    this.ticketVip = this.$refs["ticketVip"].textContent;
    this.ticketReg = this.$refs["ticketReg"].textContent;
    this.ticketTable = this.$refs["ticketTable"].textContent;
    this.fee.regular = this.$refs["regularFee"].textContent;
    this.fee.vip = this.$refs["vipFee"].textContent;
    this.fee.table = this.$refs["tableFee"].textContent;
  },
  methods: {
    calcReg(add) {
      if (add) {
        this.ticketReg++;
        this.fee.calculated.regular = this.ticketReg * this.fee.base.regular;
      } else if (this.ticketReg > 0) {
        this.ticketReg--;
        this.fee.calculated.regular -= this.fee.base.regular;
      }
      this.$emit("regularCost", this.fee.calculated.regular);
      this.$emit("regularTicket", this.ticketReg);
    },
    calcVip(add) {
      if (add) {
        this.ticketVip++;
        this.fee.calculated.vip = this.ticketVip * this.fee.base.vip;
      } else if (this.ticketVip > 0) {
        this.ticketVip--;
        this.fee.calculated.vip -= this.fee.base.vip;
      }
      this.$emit("vipTicket", this.ticketVip);
      this.$emit("vipCost", this.fee.calculated.vip);
    },
    calcTable(add) {
      if (add) {
        this.ticketTable++;
        this.fee.calculated.table = this.ticketTable * this.fee.base.table;
      } else if (this.ticketTable > 0) {
        this.ticketTable--;
        this.fee.calculated.table -= this.fee.base.table;
      }
      this.$emit("tableTicket", this.ticketTable);
      this.$emit("tableCost", this.fee.calculated.table);
    }
  },

  created() {},
  props: ["eventname", "eventdate"]
};
</script>

<style scoped>
.order-container {
  padding: 0 5%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  font-size: 1.3rem;
}
.ticket-list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline-start: 0;
}
.ticket {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem;
  border-bottom: solid 1px #bdbdbd;
}
.ticket__title,
.ticket__fee,
.ticket__control {
  width: 30%;
}
.ticket__control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.reduce,
.add {
  background-color: #fff;
  color: #828282;
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 1.5rem;
  font-weight: bolder;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .order-container {
    width: 100%;
  }
}

@media screen and (min-width: 901px) {
  .order-container {
    width: 60%;
  }
}
</style>