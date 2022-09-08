<template>
  <div class="api__bg">
    <div class="api__navbar">
      <div
        class="api__navbar-option"
        v-for="(item, index) in dataModel[props.brandExperience].ui.retailers"
        :key="item.endpoint"
        :style="{ backgroundColor: item.bgColor }"
        :data-id="index"
      >
        <div class="api__navbar-text" v-html="item.title"></div>
      </div>
    </div>
    <div class="api">
      <div
        v-for="item in dataModel[props.brandExperience].retailers"
        :key="item.retailer"
        class="api__retailer"
      >
        <a :href="item.url" class="api__a" target="_blank">
          <div class="api__img-wrapper temp__center">
            <img :src="item.logo" class="api__img--logo" />
          </div>
          <div class="api__price">&euro;{{ item.price }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import dataModel from "../js/model.js";
import gsap from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo, CSSRulePlugin);

const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});
$(document).ready(function () {
  $(".api__price").css({
    backgroundColor: "#006939",
  });

  $(".api__navbar-option").on("click", function () {
    var dId = $(this).attr("data-id");
    $(".api__navbar-option").removeClass("pseudo-active");

    switch (dataModel[1].ui.retailers[dId].bgColor) {
      case "#006939":
        $(this).addClass("pseudo-active--green");
        break;
      case "#143b54":
        $(this).addClass("pseudo-active--blue");
        break;
    }

    $(this).addClass("pseudo-active");

    $(".api").html("");
    Object.keys(dataModel).forEach(function (k) {
      $(".api").append(`
      <div
        class="api__retailer"
      >
        <a href="${dataModel[dId].retailers[k].url}" class="api__a" target="_blank">
          <div class="api__img-wrapper temp__center">
            <img src="${dataModel[dId].retailers[k].logo}" class="api__img--logo" />
          </div>
          <div class="api__price" style="background: ${dataModel[dId].ui.middle.color}">&euro;${dataModel[dId].retailers[k].price}</div>
        </a>
      </div>
      `);
    });
  });

  //initiate 2nd tab on load
  $('.api__navbar-option[data-id="1"]').click();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.api__navbar-text {
  &:hover {
    cursor: pointer !important;
  }
}
.cs-t4 .cs_content-buylocally-title-search-input {
  float: left !important;
}
.api__bg {
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: inline-block;
  max-width: 700px;
  min-width: 500px;
  margin-top: -50px;
  z-index: 10000;
  @media screen and (max-width: 700px) {
    margin-top: -8px;
    max-width: initial;
    min-width: initial;
  }
  @media screen and (max-width: 475px) {
    border-radius: 0px;
    bottom: 0px;
    left: 0px;
    margin-right: 10px;
    overflow: scroll;
    position: fixed;
    width: 100%;
  }
}
.api__navbar {
  @include flexbox();
  @include align-items(flex-start);
  @include justify-content(flex-start);
  border-radius: 10px 10px 0px 0px;
  height: 62px;
  overflow: scroll;
  padding: 0px 10px;
  position: relative;
  width: 100%;
  z-index: 100;
  @media screen and (max-width: 475px) {
    border-radius: 0px;
  }
  & .api__navbar-option {
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
    color: #ffffff;
    font-size: 11px;
    font-weight: bold;
    height: 50px;
    min-width: calc((100% - 50px) / 3);
    position: relative;
    text-transform: uppercase;
    width: 200px;
    z-index: 200;
    @media screen and (max-width: 475px) {
      width: calc((100% - 30px) / 2);
      min-width: calc((100% - 30px) / 2);
    }
    &:first-child {
      padding-right: 10px;
      &:before {
        content: "";
        background-color: #d6153a;
        position: absolute;
        height: 50px;
        left: -20px;
        top: 0;
        width: 40px;
        z-index: -1;
      }
    }
    &:last-child {
      padding-left: 10px;
    }
    &:not(:first-child):not(:last-child) {
      padding: 0px 10px;
    }
    &:not(:first-child) {
      border-left: 1px solid #ffffff;
    }
    &:last-child:before {
      content: "";
      background-color: #d6153a;
      position: absolute;
      height: 50px;
      right: 20px;
      top: 0;
      width: 40px;
      z-index: -1;
    }
  }
}
.api__navbar-option:after {
  content: "";
  bottom: -9px;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #d6153a;
}
.pseudo-active:after {
  opacity: 1;
}
.pseudo-active--green:after {
  border-top: 10px solid #d6153a;
}
.pseudo-active--blue:after {
  border-top: 10px solid #143b54;
}
.api {
  @include flexbox();
  @include align-items(center);
  @include justify-content(flex-start);
  padding: 0px 12px 12px 12px;
  width: 100%;

  @media screen and (max-width: 475px) {
    @include justify-content(flex-start);
  }
}
.api__retailer {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  max-width: 100px;
  min-width: 70px;
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:last-child:after {
    content: "";
    position: absolute;
    height: 100%;
    right: -10px;
    top: 0;
    background: none;
    width: 20px;
  }
}
.api__img-wrapper {
  padding: 5px;
}
.api__img--logo {
  display: block;
  width: 100%;
}
.api__a {
  color: #333333;
  text-decoration: none;
}
.api__price {
  border-radius: 0px 0px 5px 5px;
  color: #ffffff;
  font-size: 11px;
  font-weight: bold;
  padding: 5px 0px;
  text-align: center;
}
.inline-nav__text--1 {
  font-size: 14px;
  @media screen and (max-width: 475px) {
    font-size: 12px;
  }
}
.inline-nav__text--2 {
  font-family: "trade-gothic-next-condensed", sans-serif;
  font-size: 14px;
  font-weight: 400;
}
</style>