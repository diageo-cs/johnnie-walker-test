<script setup>
import channelsightWidget from "./js/channelsight-widget.js";
import dataModel from "./js/model.js";
import csModal from "./components/csModal.vue";
import hero from "./components/hero.vue";
import ingredients from "./components/ingredients.vue";
import inlineRetailers from "./components/inline-retailers.vue";
import terms from "./components/terms.vue";
import carousel from "./components/carousel.vue";
import carouselHeader from "./components/carousel-header.vue";
import scrollDown from "./components/scroll-down.vue";

//invoke the channelsight widget, if needed
channelsightWidget();

//grab URL parameter to determine experience
let params = new URLSearchParams(document.location.search);
let brandContextParam = params.get("brandContext");

//parse URL parameter ready to pass to component
var brandContext =
  !brandContextParam == "" && brandContextParam <= Object.keys(dataModel).length
    ? (brandContext = brandContextParam)
    : console.log("Generating experience " + brandContextParam);
</script>

<template>
  <hero />
  <!-- <test /> -->
  <!-- <inlineRetailers /> -->
  <!-- <csModal /> -->
  <scrollDown />
  <ingredients />
  <carouselHeader />
  <carousel />
  <!-- <videos /> -->
  <terms />
</template>

<style>
body {
  background: url("/public/body/bg-strip.jpg");
  background-size: 100% auto;
  margin: 0;
}
#app {
}
</style>
