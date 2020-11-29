<template>
<div>
   <app-navbar></app-navbar>
  <router-view ></router-view>
   <app-footer></app-footer>
</div>
</template>

<script>
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
export default {
  name:"app",
  components:{
    "appNavbar":Navbar,
    "appMainpage":MainPage,
    "appFooter":Footer,
  },
}
</script>

<style>

</style>
