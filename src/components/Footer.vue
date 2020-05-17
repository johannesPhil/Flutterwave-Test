<template>
  <footer>
    <div class="copyright">
      <small>Copyright {{ new Date() | dateFormat('YYYY') }} Flutterwave Inc</small>
    </div>
    <div class="terms-policy">
      <small class="terms-policy__terms">Terms & Conditions</small>
      <small class="trems-policy__policy">Privacy Policy</small>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
  // data() {
  //     return {
  //         year: value
  //     }
  // },
};
</script>

<style scoped>
footer {
  width: 100%;
  margin: 1rem;
  display: flex;
  flex-wrap: row wrap;
  justify-content: space-between;
  align-items: center;
}
.terms-policy {
  min-width: 50%;
  display: flex;
  flex-wrap: row wrap;
  justify-content: space-between;
}
</style>