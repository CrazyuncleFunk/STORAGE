<template>
  <b-card :title="business.name" align="center">
    <b-card-text align="center">Daily Revenue: {{business.revenue}}</b-card-text>
    <b-card-footer align="right">
      Cost:{{business.cost}}
      <b-button href="#" variant="success" @click="buyBuisness">Buy</b-button>
    </b-card-footer>
  </b-card>
</template> 
<script>
export default {
  props: ["business"],
  methods: {
    buyBuisness() {
      const order = {
        buisnessName: this.business.name,
        businessCost: this.business.cost
      };
      this.$store.dispatch("buyBusiness", order);
    }
  }
};
</script> 