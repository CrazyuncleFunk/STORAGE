<template>

<b-navbar toggleable="lg" type="dark" variant="info" class="bg-dark">
    <b-navbar-brand to="/">Industry Tycoon</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/portfolio">Portfolio</b-nav-item>
        <b-nav-item to="/shop">Shop</b-nav-item>
        <b-nav-item to="/loans">Loans</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
        <b-nav-item >Funds:{{funds}}</b-nav-item>
        <b-nav-item-dropdown text="Save/Load" right>
          <b-dropdown-item href="#">Save</b-dropdown-item>
          <b-dropdown-item href="#">Load</b-dropdown-item>
         
        </b-nav-item-dropdown>
        <b-nav-item >End Day</b-nav-item>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data(){
    return {
      isDropdownOpen: false
    }
  },
  computed: {
     funds(){
                return this.$store.getters.funds
            }
  }
}
</script>script 