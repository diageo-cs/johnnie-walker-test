<template>
  <section class="temp__flexbox temp__ai--c temp__jc--c position--relative">
    <div class="hero-wrapper">
      <div
        class="hero__bg temp__flexbox temp__ai--c temp__jc--c position--relative"
      >
        <div class="hero__title-wrapper position--relative">
          <div class="hero__title"></div>
          <div class="hero__p" style="opacity: 1">
            From bold blends to revolutionary<br />
            recipes, when it comes to whisky we have<br />
            always stirred things up...
          </div>
          <div
            class="hero__button"
            data-asset-id="1972"
            style="opacity: 1"
            data-instanceid="_sxsnsu1oy"
            data-ol-has-click-handler=""
          >
            <span class="sp-1">B</span><span class="sp-2">U</span
            ><span class="sp-3">Y</span>&nbsp;<span class="sp-4">N</span
            ><span class="sp-5">O</span><span class="sp-6">W</span>
          </div>
        </div>
        <img class="hero__drinkaware--mob" src="images/GB_DRINKAWARE.svg" />
      </div>
      <video
        id="hero-video"
        width="100%"
        playsinline=""
        autoplay="false"
        muted=""
        loop=""
        poster="../../public/hero/hero__bg.jpg"
        preload="auto"
      >
        <source
          id="hero-video-source"
          src="../../public/hero/hero__bg.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
      <video
        id="hero-video-mob"
        width="100%"
        playsinline=""
        autoplay="false"
        muted=""
        loop=""
        poster="../../public/hero/hero__bg--mobile.jpg"
        preload="auto"
      >
        <source
          id="hero-video-source"
          src="../../public/hero/hero__bg-mob.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>

      <img class="hero__drinkaware" src="../../public/hero/GB_DRINKAWARE.svg" />
      <img class="hero__logo" src="../../public/hero/jw-logo.svg" />
      <img
        class="hero__img--serve"
        src="../../public/hero/hero__glass.png"
        style="transform: translate(0px, 0px)"
      />
      -->
    </div>
    <!-- <img
      class="hero__drinkaware--mob"
      src="dist/css/images/GB_DRINKAWARE.svg"
    /> -->
    <img class="hero__drinkaware" src="../../public/hero/GB_DRINKAWARE.svg" />
    <img class="hero__logo" src="../../public/hero/jw-logo.svg" />
    <img
      class="hero__img--serve"
      src="../../public/hero/hero__glass.png"
      style="transform: translate(0px, 0px)"
    />
  </section>
</template>
<script>
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
export default {
  data() {
    return {
      logoSrc: "/hero/logo.png",
      logoBg: "#ffffff",
    };
  },
  methods: {
    logoBar: function (event) {
      $(".hero__top").css({
        backgroundColor: this.logoBg,
      });
    },
  },
  //invoke on load
  mounted() {
    this.logoBar();
  },
};
</script>

<script setup>
const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});
$(document).ready(function () {
  gsap.set(".api__bg", {
    height: 0,
  });
  gsap.set(".sp-1", {
    x: 500,
    opacity: 1,
  });
  gsap.set(".sp-2", {
    x: 300,
    opacity: 1,
  });
  gsap.set(".sp-3", {
    x: 300,
    opacity: 1,
  });
  gsap.set(".sp-4", {
    x: 300,
    opacity: 1,
  });
  gsap.set(".sp-5", {
    x: 300,
    opacity: 1,
  });
  gsap.set(".sp-6", {
    x: 300,
    opacity: 1,
  });
  gsap.set(".hero__mobile-logo", {
    x: -300,
  });
  gsap.set(".hero__img-wrapper--drinkaware", {
    opacity: 0,
  });
  gsap.set(".hero__line", {
    width: 0,
  });
  gsap.set(".hero__title-line--1", {
    x: () => {
      return -50;
    },
    opacity: 0,
  });
  gsap.set(".hero__title-line--2", {
    x: () => {
      return window.innerWidth < 600 ? -50 : 50;
    },
    opacity: 0,
  });
  gsap.set(".hero__title-line--3", {
    x: -50,
    opacity: 0,
  });

  var tl_heroText = gsap.timeline();

  if (window.innerWidth < 600 && window.inner) {
  } else {
  }
  tl_heroText
    .from(".sp-1", ".sp-2", ".sp-3", ".sp-4", ".sp-5", ".sp-6", {
      opacity: 0,
      x: 500,
      stagger: 1.25,
    })
    .to(".hero__line", {
      width: "100%",
    })
    .to([".hero__img-wrapper", ".hero__mobile-logo"], {
      x: 0,
      ease: "back",
      duration: 0.75,
    })
    .to(".hero__img-wrapper--drinkaware", {
      opacity: 1,
    })
    .to(
      ".api__bg",
      {
        height: "auto",
        duration: 0.5,
        ease: "back",
      },
      "-=.5"
    );
});

// $(document).ready(function () {
//   gsap.set(".drinkware-logo", {
//     opacity: 0,
//   });
//   gsap.set(".hero__title-line--1", {
//     x: () => {
//       return -50;
//     },
//     opacity: 0,
//   });
//   gsap.set(".hero__title-line--2", {
//     x: () => {
//       return window.innerWidth < 600 ? -50 : 50;
//     },
//     opacity: 0,
//   });
//   var tl_heroText = gsap.timeline();
//   if (window.innerWidth < 600 && window.inner) {
//   } else {
//   }
//   tl_heroText
//     .to(".hero__title-line", {
//       opacity: 1,
//       x: 0,
//       stagger: 0.25,
//     })
//     .to(".drinkware-logo", {
//       opacity: 1,
//     });
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .drinkware-logo {
//   top: 70px;
//   right: 20px;
//   position: absolute;

//   & img {
//     width: 200px;
//   }
// }
.hero-wrapper {
  @include flexbox();
  @include justify-content(center);
  @include align-items(center);
  position: relative;
  width: 100%;
  height: 560px;
  background: #000;
}
.hero__bg {
  height: 100%;
  width: 100%;
  z-index: 1;
}
.hero__title-wrapper {
  max-width: 1280px;
  padding: 0 40px;
  width: 100%;
}
.hero__p {
  color: #fcf5df;
  font-family: "JohnnieWalkerSerif-Book", serif;
  font-size: 20px;
  line-height: 28px;
  font-style: italic;
  margin-left: 50px;
  padding-top: 30px;
  text-align: start;
}
.hero__button {
  background-color: #fcf5df;

  font-family: "JohnnieWalker-Headline";
  color: #eaaa00;
  font-size: 25px;
  height: 50px;
  letter-spacing: 2px;
  line-height: 28px;
  margin-top: 30px;
  padding-top: 10px;
  margin-left: 50px;
  width: 150px;
  transition: all 0.3s ease;
}
.hero__button:hover {
  background-color: #eaaa00;
  color: #fcf5df;
}
.hero__drinkaware {
  right: 30px;
  top: 20px;
  position: absolute;
  width: 130px;
}
.hero__logo {
  position: absolute;
  top: 20px;
  left: calc(50% - 110px);
  width: 220px;
}
.hero__img--serve {
  position: absolute;
  bottom: -50px;
  width: 200px;
  left: 52%;
}
#hero-video {
  height: 560px;
  position: absolute;
  top: 0;
  width: auto;
}
#hero-video-mob {
  display: none;
}
.hero__drinkaware--mob {
  display: none;
}
@media only screen and (max-width: 750px) {
  // #hero-video-mob {
  //   height: 100%;
  //   width: auto;
  //   top: 0;
  //   display: block;
  // }
  // #hero-video {
  //   display: none;
  // }
  .hero-wrapper {
    height: 482px !important;
  }
  #hero-video {
    margin-right: 50px !important;
    height: 482px;
  }
  .hero__p {
    margin-left: 0px !important;
  }
  .hero__button {
    margin-left: 0px !important;
  }
  .hero__title-wrapper {
    padding-right: 250px !important;
  }
  .hero__img--serve {
    width: 170px !important;
    left: 58% !important;
  }
  .hero__bg {
    display: flex;
    flex-direction: column;
  }
  .hero__drinkaware--mob {
    display: block;
    width: 130px !important;
    justify-content: start !important;
    margin-right: auto;
    margin-left: 37px;
    margin-top: 30px;
  }
  .hero__drinkaware {
    display: none;
  }
}
@media only screen and (max-width: 560px) {
  .hero__title-wrapper {
    padding-right: 130px !important;
  }
}
@media only screen and (max-width: 460px) {
  #hero-video {
    margin-right: 175px !important;
    height: 500px;
  }
  .hero__img--serve {
    width: 158px !important;
    left: 51% !important;
  }
  .hero__button {
    background-color: #fcf5df;
    font-family: "JohnnieWalker-Headline";
    color: #eaaa00;
    font-size: 21px;
    height: 40px;
    letter-spacing: 2px;
    line-height: 28px;
    margin-top: 30px;
    padding-top: 5px;
    margin-left: 50px;
    width: 130px;
    transition: all 0.3s ease;
  }
  .hero__title-wrapper {
    padding-right: 150px !important;
  }
  .hero__p {
    font-size: 14px;
  }
  .hero__logo {
    width: 180px !important;
  }
}
</style>
