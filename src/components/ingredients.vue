<template>
  <div>
    <div class="logo"><img src="images/jw-logo--vertical.svg" /></div>

    <section
      class="recipes recipes--1 temp__flexbox temp__jc--c temp__ai--c position--relative"
    >
      <div
        v-for="(item, index) in items"
        :key="item"
        :data-id="index"
        :class="
          index % 2 === 0
            ? 'recipes__wrapper recipes__wrapper--1 temp__flexbox temp__jc--c even-elem'
            : 'recipes__wrapper recipes__wrapper--1 temp__flexbox temp__jc--c'
        "
      >
        <div
          class="recipes__col recipes__col--video recipes__col--left position--relative height--100p"
        >
          <div
            class="videos__stage-col videos__stage-col--video"
            :data-id="`${index}`"
          >
            <video
              :id="`recipe-video-${index}`"
              :data-id="`${index}`"
              class="video"
              :src="item.video"
              :poster="item.video_poster"
              playsinline
              loop
              controls="false"
              preload="none"
            ></video>
            <span class="video__pause-play" :data-id="index"
              ><img src="../../public/video/play--white.png" width="100"
            /></span>
          </div>
        </div>
        <div
          class="recipes__col-content temp__flexbox temp__ai--fs temp__jc--fs"
        >
          <div class="recipes__img-wrapper" :data-id="`${index}`">
            <img :src="item.img" width="260" />
          </div>
          <div
            class="recipes__copy-wrapper position--relative"
            :data-id="index"
          >
            <div
              class="recipes__copy-wrapper position--relative"
              :data-id="index"
            >
              <div
                class="recipes__copy-title recipes__copy-title--1"
                :data-id="`${index}`"
              >
                {{ item.span_1 }}
              </div>
              <div
                class="recipes__copy-title recipes__copy-title--2"
                :data-id="`${index}`"
              >
                {{ item.span_2 }}
              </div>
              <div
                class="recipes__copy-title recipes__copy-title--3"
                :data-id="`${index}`"
              >
                {{ item.span_3 }}
              </div>
              <div
                class="recipes__copy-title recipes__copy-title--4"
                :data-id="`${index}`"
              >
                {{ item.span_4 }}
              </div>
            </div>
            <div
              class="recipe__tab recipe__tab--ingredients position--relative"
            >
              <div
                class="recipe__button--explore noselect"
                data-height="1"
                data-id="1"
                data-ol-has-click-handler=""
                style="pointer-events: auto"
                @click="
                  ToggleDiv('THEDiv-' + index);
                  isHidden = !isHidden;
                "
              >
                {{ isHidden ? "EXPLORE RECIPE" : "HIDE RECIPE" }}

                <img
                  class="explore-recipe-chevron"
                  src="images/chevron--left.svg"
                  width="11"
                  style="
                    z-index: 100;
                    margin-left: -2px;
                    transform: rotate(180deg);
                    opacity: 0;
                  "
                /><img
                  class="explore-recipe-chevron"
                  src="images/chevron--left.svg"
                  width="11"
                  style="
                    z-index: 100;
                    margin-left: -2px;
                    transform: rotate(180deg);
                    opacity: 0;
                  "
                />
                <img
                  class="explore-recipe-chevron"
                  src="images/chevron--left.svg"
                  width="11"
                  style="
                    z-index: 100;
                    margin-left: -2px;
                    transform: rotate(180deg);
                    opacity: 0;
                  "
                />
              </div>

              <div
                class="recipe__hidden"
                style="display: none"
                :id="'THEDiv-' + index"
              >
                <div class="overlay-panel-actions-primary">
                  <p
                    v-for="(tab, index) in tabs"
                    :key="tab"
                    @click="currentTab = index"
                    :class="{ active: currentTab === index }"
                    style="font-family: JohnnieWalker-Headline"
                  >
                    {{ tab }}
                  </p>
                </div>
                <div class="content-bd">
                  <div class="tab-content">
                    <div class="tab" :class="{ active: currentTab === 0 }">
                      <div
                        :class="
                          'recipe__tab-ingredients-wrapper recipe__tab-ingredients-wrapper--' +
                          index
                        "
                      >
                        <div
                          :class="
                            'recipe__tab-ingredient recipe__tab-ingredient--' +
                            index
                          "
                        >
                          <div
                            class="ml--10"
                            style="
                              font-family: JohnnieWalker-Headline;
                              margin-bottom: 20px;
                            "
                          >
                            {{ item.ingredients.first }}
                          </div>
                          <div
                            class="ml--30"
                            style="font-family: JohnnieWalker-Headline"
                          >
                            {{ item.ingredients.second }}
                          </div>
                        </div>
                        <div
                          :class="
                            'recipe__tab-ingredient recipe__tab-ingredient--' +
                            index
                          "
                          style="font-family: JohnnieWalker-Headline"
                        >
                          <div
                            style="font-family: JohnnieWalker-Headline"
                            class="ml--20"
                          >
                            {{ item.ingredients.third }}
                          </div>
                        </div>
                        <div
                          :class="
                            'recipe__tab-ingredient recipe__tab-ingredient--' +
                            index
                          "
                          style="font-family: JohnnieWalker-Headline"
                        >
                          <div
                            style="font-family: JohnnieWalker-Headline"
                            class="ml--0"
                          >
                            {{ item.ingredients.fourth }}
                          </div>
                        </div>
                        <div
                          :class="
                            'recipe__tab-ingredient recipe__tab-ingredient--' +
                            index
                          "
                        >
                          <div
                            style="font-family: JohnnieWalker-Headline"
                            class="ml--0"
                          >
                            {{ item.ingredients.fifth }}
                          </div>
                        </div>
                        <div
                          :class="
                            'recipe__tab-ingredient recipe__tab-ingredient--' +
                            index
                          "
                        >
                          <div
                            style="font-family: JohnnieWalker-Headline"
                            class="ml--0"
                          >
                            {{ item.ingredients.sixth }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style="font-family: JohnnieWalker-Headline"
                      class="tab"
                      :class="{ active: currentTab === 1 }"
                    >
                      <div
                        style="font-family: JohnnieWalker-Headline"
                        :class="
                          'recipe__tab-method recipe__tab-method--' + index
                        "
                      >
                        <div
                          :class="
                            'recipe__tab-method-step recipe__tab-method-step--' +
                            index
                          "
                          style="font-family: JohnnieWalker-Headline"
                        >
                          <div
                            style="font-family: JohnnieWalker-Headline"
                            class="pr--20"
                          >
                            {{ item.method }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
export default {
  data() {
    return {
      currentTab: 0,
      tabs: ["INGREDIENTS", "METHOD"],
      priceColor: "#000000",
      isHidden: true,
      firstTab: true,
      secondTab: false,
      items: {
        1: {
          video: "video/ginger_SparkVideo.mp4",
          video_poster: "video/ginger_SparkVideo.jpg",
          img: "images/serve--1.png",
          span_1: "FIERY",
          span_2: "WHISKY",
          span_3: "& GINGER",
          span_4: "RECIPE",
          ingredients: {
            first: "JOHNNIE WALKER",
            second: "BLACK LABEL 25ML",
            third: "GINGER ALE 75ML",
            fourth: "WEDGE OF LIME",
          },
          method:
            "Pour 25 ml Johnnie Walker Black Label into a highball glass filled with ice. Top with 75ml Ginger Ale and stir to mix. Garnish with a fresh lime wedge &enjoy.",
        },
        2: {
          video: "video/affogato_SparkVideo.mp4",
          video_poster: "video/affogato_SparkVideo.jpg",
          img: "images/serve--2.png",
          span_1: "LATE",
          span_2: "NIGHT",
          span_3: "AFFOGATO",
          span_4: "RECIPE",
          ingredients: {
            first: "JOHNNIE WALKER",
            second: "BLACK LABEL 25ML",
            third: "A scoop of ice cream",
            fourth: "Espresso 45ml",
            fifth: "Chocolate to shave and garnish",
          },
          method:
            "Drop a scoop of good quality vanilla ice cream into a coupe glass. Pour 25ml of Johnnie Walker Black Label over the scoop, then 25ml of hot espresso so the ice cream melts slightly. Garnish with chocolate shavings & enjoy.",
        },
        3: {
          video: "video/old-fashioned_SparkVideo.mp4",
          video_poster: "video/old-fashioned_SparkVideo.jpg",
          img: "images/serve--3.png",
          span_1: "not so",
          span_2: "old",
          span_3: "fashioned",
          span_4: "RECIPE",
          ingredients: {
            first: "JOHNNIE WALKER",
            second: "2 dashes of AROMATIC BITTERS",
            third: "A TEASPOON OF MAPLE SYRUP",
            fourth: "SERVE OVER ICE",
            fifth: "Add a twist of orange",
          },
          method:
            "POUR 50ML JOHNNIE WALKER BLACK LABEL, 10ML MAPLE SYRUP AND 2 DASHES AROMATIC BITTERS INTO A MIXING GLASS. Add ice and stir well. Strain into a tumbler over ice. Twist an orange peel around the glass edge to release the aromatic oils, then add as garnish with toasted rosemary & enjoy.",
        },
        4: {
          video: "video/hot-toddy_SparkVideo.mp4",
          video_poster: "video/hot-toddy_SparkVideo.jpg",
          img: "images/serve--4.png",
          span_1: "the",
          span_2: "WINTER",
          span_3: "HOT-TODDY",
          span_4: "RECIPE",
          ingredients: {
            first: "JOHNNIE WALKER",
            second: "ORANGE JUICE 50ml",
            third: "a Cinnamon stick",
            fourth: "cranberry juice 50ml",
          },
          method:
            "Serves One. Multiply by number of guests for group serving. Heat 50 ml Johnnie Walker Black Label, 50 ml Orange Juice, 50 ml Cranberry juice and 30ml water in a pan. As it comes to a simmer, add a teaspoon of Maple Syrup and a Cinnamon Stick. Garnish with a slice of orange & enjoy.",
        },
        5: {
          video: "video/peach-hb_SparkVideo.mp4",
          video_poster: "video/peach-hb_SparkVideo.jpg",
          img: "images/serve--5.png",
          span_1: "JOHNNIE",
          span_2: "& PEACH",
          span_3: "HIGHBALL",
          span_4: "RECIPE",
          ingredients: {
            first: "JOHNNIE WALKER",
            second: "BLACK LABEL 25ML",
            third: "ICE",
            fourth: "PEACH CORDIAL OR SYRUP 25ML",
            fifth: "SODA WATER OR SPARKLING PEACH TEA 150ML",
            sixth: "PEACH SLICE (CINNAMON DUSTING OPTIONAL)",
          },
          method:
            "Pour 50ml Johnnie Walker Black Label into a highball glass filled with ice. Add 25ml peach cordial or syrup and 150ml soda water or sparkling peach tea. Stir and garnish with a peach slice.",
        },
        6: {
          video: "video/lemon-hb_SparkVideo.mp4",
          video_poster: "video/lemon-hb_SparkVideo.jpg",
          img: "images/serve--6.png",
          span_1: "JOHNNIE",
          span_2: "& LEMON",
          span_3: "HIGHBALL",
          span_4: "RECIPE",
          ingredients: {
            first: "JOHNNIE WALKER",
            second: "BLACK LABEL 25ML",
            third: "ICE",
            fourth: "LEMONADE 150ML (CLEAR OR CLOUDY)",
            fifth: "LEMON PEEL",
            sixth: "VERBENA LEAF (OPTIONAL)",
          },
          method:
            "Pour 50ml Johnnie Walker Black Label into a highball glass filled with ice. Top with 150ml lemonade. Stir and garnish with a lemon peel.",
        },
      },
    };
  },
  methods: {
    enterViewRecipe: function (event) {
      gsap.set(".hero__img--serve", {
        x: () => {
          return 700;
        },
        opacity: 1,
      });
      gsap.set(".hero__p", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });

      gsap.set(".videos__stage-col[data-id='1']", {
        x: () => {
          return -50;
        },
        opacity: 0,
      });
      gsap.set(" .videos__stage-col[data-id='2']", {
        x: () => {
          return 50;
        },
        opacity: 0,
      });
      gsap.set(" .videos__stage-col[data-id='3']", {
        x: () => {
          return -50;
        },
        opacity: 0,
      });
      gsap.set(" .videos__stage-col[data-id='4']", {
        x: () => {
          return 50;
        },
        opacity: 0,
      });
      gsap.set(" .videos__stage-col[data-id='5']", {
        x: () => {
          return -50;
        },
        opacity: 0,
      });
      gsap.set(" .videos__stage-col[data-id='6']", {
        x: () => {
          return 50;
        },
        opacity: 0,
      });
      gsap.set(".recipes__copy-title--1", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });
      gsap.set(".recipes__copy-title--2", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });
      gsap.set(".recipes__copy-title--3", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });
      gsap.set(".recipes__copy-title--4", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });
      gsap.set(".recipes__copy-title--5", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });
      gsap.set(".recipes__copy-title--6", {
        x: () => {
          return 0;
        },
        opacity: 0,
      });
      gsap.set(".recipes__title--2", {
        x: () => {
          return window.innerWidth < 600 ? -50 : 50;
        },
        opacity: 0,
      });
      gsap.set(".recipes__recipe", {
        opacity: 0,
      });
      gsap.set(".logo", {
        opacity: 0,
      });
      gsap.to(".logo", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".video[data-id='1']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".hero__p", {
        // Animate .recipes__recipe
        // properties to animate here
        delay: 1,
        duration: 1,
        ease: "power4.out",
        opacity: 1,
      });

      gsap.set(".hero__button", {
        opacity: 0,
      });
      gsap.set(".sp-1", {
        opacity: 0,
      });
      gsap.set(".sp-2", {
        opacity: 0,
      });
      gsap.set(".sp-3", {
        opacity: 0,
      });
      gsap.set(".sp-4", {
        opacity: 0,
      });
      gsap.set(".sp-5", {
        opacity: 0,
      });
      gsap.set(".sp-6", {
        opacity: 0,
      });

      gsap.to(".hero__img--serve", {
        x: 0,
        delay: 2.9,
        duration: 1,
      });
      gsap.to(".hero__button", {
        delay: 1.5,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });
      gsap.to(".sp-1", {
        delay: 2,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });
      gsap.to(".sp-2", {
        delay: 2.1,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });
      gsap.to(".sp-3", {
        delay: 2.2,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });
      gsap.to(".sp-4", {
        delay: 2.3,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });
      gsap.to(".sp-5", {
        delay: 2.4,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });
      gsap.to(".sp-6", {
        delay: 2.5,
        ease: "power4.out",
        x: 0,
        opacity: 1,
      });

      gsap.to(".videos__stage-col[data-id='1']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".video[data-id='1']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      // gsap.to(".recipes__copy-wrapper[data-id='1'] ", {
      //   // Animate .recipes__recipe
      //   // properties to animate here
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: ".video[data-id='1']", // what element the animation should start at
      //     start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
      //     toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
      //   },
      // });
      gsap.to(".recipes__copy-title--1[data-id='1']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".video[data-id='1']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--2[data-id='1']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".video[data-id='1']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--3[data-id='1']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".video[data-id='1']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--4[data-id='1']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.75,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".video[data-id='1']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      //////////////////////////////////////////////

      gsap.to(".videos__stage-col[data-id='2']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='2']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-title--1[data-id='2']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='2']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--2[data-id='2']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".video[data-id='2']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--3[data-id='2']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".video[data-id='2']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--4[data-id='2']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.75,
        scrollTrigger: {
          trigger: ".video[data-id='2']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      //////////////////////////////////
      //////////////////////////////////////////////

      gsap.to(".videos__stage-col[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-title--1[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--2[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--3[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--4[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.75,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".videos__stage-col[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-wrapper[data-id='3'] ", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='3']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      ////////////////////////////////////////////////////

      //////////////////////////////////
      //////////////////////////////////////////////

      gsap.to(".videos__stage-col[data-id='4']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='2']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-title--1[data-id='4']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='4']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--2[data-id='4']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".video[data-id='4']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--3[data-id='4']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".video[data-id='4']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--4[data-id='4']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.75,
        scrollTrigger: {
          trigger: ".video[data-id='4']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".videos__stage-col[data-id='4']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='4']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-wrapper[data-id='4'] ", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='4']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      ////////////////////////////////////////////////////

      //////////////////////////////////
      //////////////////////////////////////////////

      gsap.to(".videos__stage-col[data-id='5']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-title--1[data-id='5']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--2[data-id='5']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--3[data-id='5']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--4[data-id='5']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.75,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".videos__stage-col[data-id='5']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-wrapper[data-id='5'] ", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='5']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      ////////////////////////////////////////////////////

      //////////////////////////////////
      //////////////////////////////////////////////

      gsap.to(".videos__stage-col[data-id='6']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-title--1[data-id='6']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--2[data-id='6']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--3[data-id='6']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__copy-title--4[data-id='6']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        delay: 0.75,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".videos__stage-col[data-id='6']", {
        // Animate .recipes__recipe
        // properties to animate here
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      gsap.to(".recipes__copy-wrapper[data-id='6'] ", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        scrollTrigger: {
          trigger: ".video[data-id='6']", // what element the animation should start at
          start: "150% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      ////////////////////////////////////////////////////

      gsap.to(".recipes__recipe[data-id='2']", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='2']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__recipe[data-id='3']", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='3']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      ////////////////////-----ARROW ANIMATION-----//////////////////////////////

      gsap.from(".recipes__img--arrow[data-id='1']", {
        delay: 0.2,
        duration: 1.5,
        x: "-100%",
        ease: "bounce",
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='1']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.from(".recipes__img--arrow[data-id='2']", {
        delay: 0.2,
        duration: 1.5,
        x: "-100%",
        ease: "bounce",
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='2']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.from(".recipes__img--arrow[data-id='3']", {
        delay: 0.2,
        duration: 1.5,
        x: "-100%",
        ease: "bounce",
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='3']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });

      //////////////////////------TITLE ANIMATION------////////////////////////////

      gsap.to(".recipes__title--1[data-id='1']", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='1']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__title--2[data-id='1']", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='1']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__title--1[data-id='2']", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='2']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__title--2[data-id='2']", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='2']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__title--1[data-id='3']", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='3']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".recipes__title--2[data-id='3']", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".recipes__recipe[data-id='3']", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
    },
    clickFirstTab: function () {
      secondTab = !secondTab;
    },
    clickSecondTab: function () {
      firstTab = !firstTab;
    },
    ToggleDiv: function (txtDivID) {
      $("#" + txtDivID).toggle(400);
      this.isHidden = !isHidden;
    },
    toggleTab: function (index) {
      $(data - id + "=" + index).toggle(400);
      isHidden = !isHidden;
    },
    logoBar: function (event) {
      var recipeVideo = document.getElementById("recipe-video-1");
      var recipeVideo_2 = document.getElementById("recipe-video-2");
      var recipeVideo_3 = document.getElementById("recipe-video-3");
      var recipeVideo_4 = document.getElementById("recipe-video-4");
      var recipeVideo_5 = document.getElementById("recipe-video-5");
      var recipeVideo_6 = document.getElementById("recipe-video-6");
      recipeVideo.removeAttribute("controls");
      recipeVideo_2.removeAttribute("controls");
      recipeVideo_3.removeAttribute("controls");
      recipeVideo_4.removeAttribute("controls");
      recipeVideo_5.removeAttribute("controls");
      recipeVideo_6.removeAttribute("controls");
      var videoPlaying = false;
      function playVid(targ, dId) {
        if ($(targ).hasClass("playing")) {
          $(targ).removeClass("playing");
          $(".video").get(0).pause();
          $(".video").get(1).pause();
          $(".video").get(2).pause();
          $(".video").get(3).pause();
          $(".video").get(4).pause();
          $(".video").get(5).pause();
          targ.pause();
          $(".video__pause-play[data-id=" + dId + "]").animate(
            { opacity: "1" },
            50
          );
        } else {
          $(targ).addClass("playing");
          $(".video__pause-play[data-id=" + dId + "]").animate(
            { opacity: "0" },
            50
          );
          targ.play();
        }
        switch (dId) {
          case 1:
            $(".video").get(1).pause();
            $(".video").get(2).pause();
            $(".video").get(3).pause();
            $(".video").get(4).pause();
            $(".video").get(5).pause();
            $("#recipe-video-2").removeClass("playing");
            $("#recipe-video-3").removeClass("playing");
            $("#recipe-video-4").removeClass("playing");
            $("#recipe-video-5").removeClass("playing");
            $("#recipe-video-6").removeClass("playing");
            $(".video__pause-play[data-id=2]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=3]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=4]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=5]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=6]").animate({ opacity: "1" }, 250);
            break;
          case 2:
            $(".video").get(0).pause();
            $(".video").get(2).pause();
            $(".video").get(3).pause();
            $(".video").get(4).pause();
            $(".video").get(5).pause();
            $("#recipe-video-1").removeClass("playing");
            $("#recipe-video-3").removeClass("playing");
            $("#recipe-video-4").removeClass("playing");
            $("#recipe-video-5").removeClass("playing");
            $("#recipe-video-6").removeClass("playing");
            $(".video__pause-play[data-id=1]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=3]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=4]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=5]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=6]").animate({ opacity: "1" }, 250);
            break;
          case 3:
            $(".video").get(0).pause();
            $(".video").get(1).pause();
            $(".video").get(3).pause();
            $(".video").get(4).pause();
            $(".video").get(5).pause();
            $("#recipe-video-1").removeClass("playing");
            $("#recipe-video-2").removeClass("playing");
            $("#recipe-video-4").removeClass("playing");
            $("#recipe-video-5").removeClass("playing");
            $("#recipe-video-6").removeClass("playing");
            $(".video__pause-play[data-id=1]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=2]").animate({ opacity: "2" }, 250);
            $(".video__pause-play[data-id=4]").animate({ opacity: "4" }, 250);
            $(".video__pause-play[data-id=5]").animate({ opacity: "4" }, 250);
            $(".video__pause-play[data-id=6]").animate({ opacity: "4" }, 250);
            break;
          case 4:
            $(".video").get(0).pause();
            $(".video").get(1).pause();
            $(".video").get(2).pause();
            $(".video").get(4).pause();
            $(".video").get(5).pause();
            $("#recipe-video-1").removeClass("playing");
            $("#recipe-video-2").removeClass("playing");
            $("#recipe-video-3").removeClass("playing");
            $("#recipe-video-5").removeClass("playing");
            $("#recipe-video-6").removeClass("playing");
            $(".video__pause-play[data-id=1]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=2]").animate({ opacity: "2" }, 250);
            $(".video__pause-play[data-id=3]").animate({ opacity: "3" }, 250);
            $(".video__pause-play[data-id=5]").animate({ opacity: "3" }, 250);
            $(".video__pause-play[data-id=6]").animate({ opacity: "3" }, 250);
            break;
          case 5:
            $(".video").get(0).pause();
            $(".video").get(1).pause();
            $(".video").get(2).pause();
            $(".video").get(3).pause();
            $(".video").get(5).pause();
            $("#recipe-video-1").removeClass("playing");
            $("#recipe-video-2").removeClass("playing");
            $("#recipe-video-3").removeClass("playing");
            $("#recipe-video-4").removeClass("playing");
            $("#recipe-video-6").removeClass("playing");
            $(".video__pause-play[data-id=1]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=2]").animate({ opacity: "2" }, 250);
            $(".video__pause-play[data-id=3]").animate({ opacity: "3" }, 250);
            $(".video__pause-play[data-id=4]").animate({ opacity: "3" }, 250);
            $(".video__pause-play[data-id=6]").animate({ opacity: "3" }, 250);
            break;
          case 6:
            $(".video").get(0).pause();
            $(".video").get(1).pause();
            $(".video").get(2).pause();
            $(".video").get(3).pause();
            $(".video").get(4).pause();
            $("#recipe-video-1").removeClass("playing");
            $("#recipe-video-2").removeClass("playing");
            $("#recipe-video-3").removeClass("playing");
            $("#recipe-video-4").removeClass("playing");
            $("#recipe-video-5").removeClass("playing");
            $(".video__pause-play[data-id=1]").animate({ opacity: "1" }, 250);
            $(".video__pause-play[data-id=2]").animate({ opacity: "2" }, 250);
            $(".video__pause-play[data-id=3]").animate({ opacity: "3" }, 250);
            $(".video__pause-play[data-id=4]").animate({ opacity: "3" }, 250);
            $(".video__pause-play[data-id=5]").animate({ opacity: "3" }, 250);
            break;
        }
      }
      $(document).on("click", "#recipe-video-1", function () {
        playVid(recipeVideo, 1);
      });
      $(document).on("click", "#recipe-video-2", function () {
        playVid(recipeVideo_2, 2);
      });
      $(document).on("click", "#recipe-video-3", function () {
        playVid(recipeVideo_3, 3);
      });
      $(document).on("click", "#recipe-video-4", function () {
        playVid(recipeVideo_4, 4);
      });
      $(document).on("click", "#recipe-video-5", function () {
        playVid(recipeVideo_5, 5);
      });
      $(document).on("click", "#recipe-video-6", function () {
        playVid(recipeVideo_6, 6);
      });
    },
  },
  //invoke on load
  mounted() {
    this.enterViewRecipe();
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab {
  display: none;
}
.tab.active {
  display: block;
  border: none !important;
}
.recipe__tab-method-step {
  color: #fcf5df;
  font-family: "JohnnieWalker-Headline";
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 1px;
  margin-top: 20px;
  text-align: start;
}
.overlay-panel-actions-primary {
  display: flex;
  justify-content: center;
  color: #ffff;
  padding: 10px;
  margin-bottom: 10px;
}
.overlay-panel-actions-primary :nth-child(2) {
  margin-left: 20px;
}
.overlay-panel-actions-primary p.active {
  opacity: 1 !important;
  border-bottom: 3px solid #fcf5df;
}
.overlay-panel-actions-primary p {
  opacity: 0.5;
}
.recipes {
  padding-bottom: 100px;
  flex-direction: column;
}
.recipes__wrapper {
  margin-top: 150px;
}
.video__pause-play {
  pointer-events: none;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(56% - 50px);
}
.recipes__col-content {
  margin-left: -75px;
  z-index: 2;
  width: 50%;
}
.recipes__col-content--reverse {
  margin-right: -75px;
  z-index: 2;
}
.recipes__col--left {
  align-self: flex-start;
  padding-top: 60px;
}
.recipes__copy-wrapper {
  font-family: "JohnnieWalker-Headline";
}
.recipes__copy-title {
  color: #fcf5df;
  font-family: "JohnnieWalker-Headline";
  font-size: 80px;
  line-height: 70px;
}
.recipes__wrapper {
  max-width: 1280px;
  padding: 0 75px;
}
.recipes__img-wrapper-reverse > img {
  float: right;
  width: 240px;
}
.recipe__button--explore {
  color: #fcf5df;
  font-family: "JohnnieWalker-Headline";
  font-size: 33px;
  line-height: 33px;
  letter-spacing: 1px;
  margin-top: 30px;
}
.recipe__tab-button,
.recipe__tab-button--active {
  color: #fcf5df;
  font-family: "JohnnieWalker-Headline";
  font-size: 22px;
  letter-spacing: 1px;
  line-height: 24px;
  display: inline;
}
.recipe__tab-ingredient {
  color: #fcf5df;
  font-family: "JohnnieWalker-Headline";
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 1px;
  margin-top: 20px;
}
.recipe__tab-button--active {
  opacity: 1;
  border-bottom: 3px solid #fcf5df;
}
.recipe__tab-button-wrapper {
  display: flex;
}
.recipes__wrapper.even-elem {
  display: flex !important;
  .recipes__col--video {
    order: 2 !important;
    margin-left: -75px !important;
  }
  .recipes__img-wrapper {
    order: 3 !important;
  }
  .recipes__col-content {
    margin-left: 0px !important;
  }
}
.recipe__hidden {
  font-family: "JohnnieWalker-Headline";
}
.logo {
  width: 52px;
  position: fixed;
  left: 10px;
  top: 300px;
}
.recipe__tab-button-wrapper {
  justify-content: center;
}
.explore-recipe-chevron {
  width: 9px;
}
.explore-recipe-chevron:first-child {
  animation: move 3s ease-out 0.1s infinite;
}
.explore-recipe-chevron:nth-child(2) {
  animation: move 3s ease-out 0.2s infinite;
}
.explore-recipe-chevron:nth-child(3) {
  animation: move 3s ease-out 0.4s infinite;
}
@keyframes pulse {
  to {
    opacity: 1;
  }
}
@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  67% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@media only screen and (max-width: 1040px) {
  .video {
    max-width: 500px !important;
  }
  .recipe__button--explore {
    font-size: 23px !important;
  }
}
@media only screen and (max-width: 990px) {
  .video {
    max-width: 400px !important;
  }
  .recipes__img-wrapper img {
    width: 200px !important;
  }
  .recipes__copy-title {
    font-size: 65px !important;
    line-height: 55px !important;
  }
  .recipe__button--explore {
    font-size: 23px !important;
  }
}
@media only screen and (max-width: 790px) {
  .video {
    max-width: 370px !important;
  }
}
@media only screen and (max-width: 750px) {
  .video {
    min-width: 100% !important;
  }
  .logo {
    display: none;
  }
  .recipes__wrapper {
    padding: 0 0 !important;
    flex-direction: column !important;
    width: 100% !important;
  }
  .recipes__col--video {
    width: 100% !important;
  }
  .recipes__img-wrapper {
    order: 2 !important;
  }
  .recipes__img-wrapper img {
    margin-top: -150px !important;
    margin-right: -60px !important;
  }
  .recipes__col-content {
    width: 100% !important;
    justify-content: center !important;
    margin-right: -75px !important;
    margin-left: 0 !important;
  }
  .recipes__copy-wrapper {
    width: 100% !important;
  }
  .recipes__wrapper.even-elem .recipes__col-content {
    order: 2 !important;
    margin-left: 0 !important;
  }
  .recipes__wrapper.even-elem .recipes__col--video {
    margin-left: 0 !important;
  }
  .pr--20 {
    max-width: 260px;
    justify-content: center;
    display: flex;
    margin-left: 35%;
  }
}
@media only screen and (max-width: 600px) {
  .recipes__img-wrapper img {
    margin-top: -80px !important;
  }
}
</style>
