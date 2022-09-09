<template>
  <div
    class="carousel-wrapper sticky-bottle--hidden py--100"
    style="z-index: 100; transform: translate(0px, 0px); opacity: 1"
  >
    <div class="carousel slick-initialized slick-slider slick-dotted">
      <div class="carousel__bg">
        <div class="carousel__wrapper">
          <div :class="carouselIteration">
            <div
              class="carousel__product"
              v-for="(item, key) in carousel[props.iteration]"
              :key="item"
            >
              <div>
                <img
                  class="carousel__img--product opacity--0"
                  :src="item.img"
                />
              </div>
              <div class="carousel__h1 px--20">
                JOHNNIE WALKER<br />
                {{ item.type }}, 70CL<br />
                <span
                  style="font-size: 18px; font-family: JohnnieWalker-Headline"
                  >40% ABV</span
                >
              </div>
              <button
                class="carousel__button"
                data-action="csWidgetOpen"
                :data-id="key"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel__surface"></div>
    </div>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
const props = defineProps({
  iteration: {
    type: String,
    default: "1",
  },
});
var carouselIteration = "carousel--" + props.iteration;
var carousel = {
  1: {
    1: {
      title: "Gordon’s Special Dry London Gin&nbsp;70cl",
      img: "images/carousel-bottle--1.png",
      type: "RED LABEL",
    },
    2: {
      title: "Gordon's Premium Pink Distilled Gin&nbsp;70cl",
      img: "images/carousel-bottle--2.png",
      type: "BLACK LABEL",
    },
    3: {
      title: "Gordon's MORELLO cherry Gin&nbsp;70cl",
      img: "images/carousel-bottle--3.png",
      type: "BLUE LABEL",
    },
  },
};
$(document).ready(function () {
  gsap.set(".carousel__wrapper", {
    y: () => {
      return 200;
    },
    opacity: 0,
  });

  gsap.to(".carousel__wrapper", {
    // Animate .recipes__recipe
    // properties to animate here
    opacity: 1,
    duration: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".carousel__wrapper", // what element the animation should start at
      start: "80% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
      toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
    },
  });
});
/////////////////
$(document).ready(function () {
  $("." + carouselIteration)
    .closest(".carousel__wrapper")
    .prepend(
      `<img class="carousel__previous--${props.iteration}" src="/images/chevron--left.svg" width="40" style="position: absolute;top: calc(50% - 18px);z-index: 1150;left: 20px;">`
    );
  $("." + carouselIteration)
    .closest(".carousel__wrapper")
    .append(
      `<img class="carousel__next--${props.iteration}" src="/images/chevron--left.svg" width="40" style="position: absolute;top: calc(50% - 18px);z-index: 1150;right: 20px;transform:rotate(180deg)">`
    );
  $("." + carouselIteration).slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".carousel__previous--" + props.iteration),
    nextArrow: $(".carousel__next--" + props.iteration),
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.slick-slide img {
  display: block;
  margin: auto;
  max-width: 70px;
  width: 100%;
}
.carousel__h1 {
  color: #fff;
  font-family: "JohnnieWalker-Headline";
  font-size: 21px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
}
.carousel__button {
  color: hsl(44, 100%, 46%);
  font-size: 26px;
  letter-spacing: 1px;
  font-family: "JohnnieWalker-Headline";
  margin: 20px auto auto;
  background-color: #fff;
  height: 50px;
  width: 130px;
}
.slick-slide {
  color: white;
}
.slick-track {
  display: flex;
  justify-content: center;
}
</style>
