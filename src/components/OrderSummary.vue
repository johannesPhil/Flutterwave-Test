<template>
  <section class="summary-container">
    <h2 class="summary-header">Order Summary</h2>
    <div class="summary">
      <li class="summary__list">
        <p class="summary__label">{{ summary.tickets.regular }}-Regular</p>
        <p>{{ summary.cost.regular }}</p>
      </li>
      <li class="summary__list">
        <p class="summary__label">{{ summary.tickets.vip }}-VIP</p>
        <p>{{ summary.cost.vip }}</p>
      </li>
      <li class="summary__list">
        <p class="summary__label">{{ summary.tickets.table }}-Table For 5</p>
        <p>{{ summary.cost.table }}</p>
      </li>
    </div>
    <div class="totality">
      <li class="totality__subtotal">
        <p class="summary__label">Subtotal</p>
        <p>{{ subtotal }}</p>
      </li>
      <li class="totality__vat">
        <p class="summary__label">VAT</p>
        <p>{{ summary.vat }}</p>
      </li>
      <li class="totality__total">
        <p class="summary__label">TOTAL PAYMENT</p>
        <p>{{ summary.total }}</p>
      </li>
    </div>
    <button class="button--orange payment" @click="makePayment">
      Continue
    </button>
  </section>
</template>

<script>
export default {
  name: "OrderSummary",
  data() {
    return {
      summary: {
        tickets: {
          regular: 0,
          vip: 0,
          table: 0
        },
        cost: {
          regular: 0,
          vip: 0,
          table: 0
        },
        vat: "",
        total: ""
      },
      isProduction: {
        default: true
      },
      flwKey: 'FLWPUBK-49bfe1f3c1a76b2c174cfa2a06a3d442-X',
      amount: "",
      currency: "NGN",
      country: "NG",
      customer: {
        name: "Peter John Philip",
        email: "jay3pee@gmail.com"
      },
      customizations: {
        title: "Car Shop",
        description: "Payment for car service"
      },
      paymentMethod: ""
    };
  },
  created() {
    const script = document.createElement("script");
    script.src = !this.isProduction
      ? "https://ravemodal-dev.herokuapp.com/v3.js"
      : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  methods: {
    makePayment() {
      window.FlutterwaveCheckout({
        public_key: this.flwKey,
        tx_ref: this.reference,
        amount: this.subtotal,
        currency: this.currency,
        payment_options: this.payment_method,
        customer: {
          name: this.name,
          email: this.email
        },
        callback: response => this.callback(response),
        customizations: {
          title: this.custom_title,
          description: "Payment for event ticket",
          logo: this.custom_logo
        }
      });
    }
  },
  props: {
    regFee: {
      type: Number
    },
    vipFee: {
      type: Number
    },
    tableFee: {
      type: Number
    },
    regTicket: {
      type: Number
    },
    vipTicket: {
      type: Number
    },
    tableTicket: {
      type: Number
    },
    subtotal: {
      type: Number
    },
   
    // isProduction: {
    //   type: Boolean,
    //   required: false,
    //   default: false //set to true if you are going live
    // },
    // email: {
    //   type: String,
    //   required: true
    // },
    // amount: {
    //   type: Number,
    //   required: true,
    //   default: 0
    // },
    // flwKey: {
    //   type: String,
    //   required: true
    // },
    callback: {
      type: Function,
      required: true,
      default: () => {
        console.log("Payment made, verify payment");
      }
    },
    close: {
      type: Function,
      required: true,
      default: () => {}
    },
    // currency: {
    //   type: String,
    //   default: "NGN"
    // },
    // country: {
    //   type: String,
    //   default: "NG"
    // },
    custom_title: {
      type: String,
      default: ""
    },
    custom_logo: {
      type: String,
      default: ""
    },
    reference: {
      type: String,
      required: true
    },
    payment_method: {
      type: String,
      default: "card,mobilemoney,ussd"
    }
  },
  watch: {
    regFee: function() {
      this.summary.cost.regular = this.regFee;
    },
    regTicket: function() {
      this.summary.tickets.regular = this.regTicket;
    },
    vipFee: function() {
      this.summary.cost.vip = this.vipFee;
    },
    vipTicket: function() {
      this.summary.tickets.vip = this.vipTicket;
    },
    tableFee: function() {
      this.summary.cost.table = this.tableFee;
    },
    tableTicket: function() {
      this.summary.tickets.table = this.tableTicket;
    },
    subtotal: function() {
      this.summary.subtotal = this.regFee + this.vipFee + this.tableFee;
      this.summary.vat = Number(this.summary.subtotal) * 0.075;
      this.summary.total =
        Number(this.summary.vat) + Number(this.summary.subtotal);
    }
  }
};
</script>

<style scoped>
.summary-container {
  padding: 1rem;
  background-color: #fff;
}
.summary {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
}
.summary__list,
.totality__subtotal,
.totality__vat,
.totality__total {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.totality {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.totality {
  font-size: 1.3rem;
}
.summary,
.summary-header,
.totality {
  border-bottom: solid 1px #bdbdbd;
  padding: 1em;
}
.summary__label {
  font-weight: bolder;
}
.payment {
  width: 80%;
  margin: 2rem 10%;
  padding: 1rem;
  text-align: center;
  vertical-align: center;
}

@media screen and (max-width: 900px) {
  .summary-container {
    width: 100%;
  }
}

@media screen and (min-width: 901px) {
  .summary-container {
    width: 40%;
  }
}
</style>
