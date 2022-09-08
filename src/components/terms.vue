<template>
  <div
    class="footer-wrapper width--100p temp__flexbox temp__ai--c temp__jc--c ta--c py--30 px--20"
    style="background-color: #000000; z-index: 11000; background-size: cover"
  >
    <div
      class="container"
      style="width: 100%; max-width: 900px; padding: 50px 0px"
    >
      <div class="footer-row middle">
        <img src="images/channelsight-logo.png" width="250" />
        <div class="terms-copy">
          <p
            style="
              font-size: 13px;
              line-height: 20px;
              color: #ffffff;
              font-family: 'Johnnie Walker Serif Book', serif;
            "
          >
            <br /><br />Terms &amp; Conditions<br /><br />
            Read the privacy policy&nbsp;<a
              href="https://www.channelsight.com/privacy-policy-diageo"
              target="_blank"
              style="
                color: #ffffff;
                text-decoration: underline;
                font-family: 'Johnnie Walker Serif Book', serif;
              "
              >here</a
            ><br /><br />Please do not share with anyone under the legal
            purchase age for alcohol. Drink Responsibly.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import dataModel from "../js/model.js";
const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  @include flexbox();
  @include justify-content(center);
  @include align-items(center);
  background: #000000;
  padding: 70px 30px;
  position: relative;
  width: 100%;
  z-index: 1000;
  @media screen and(max-width: 768px) {
    padding-bottom: 250px;
  }
}
.footer__copy {
  color: #f0f0f0;
  font-size: 12px;
  font-family: "Brown", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 14px;
  text-transform: none;
}
span {
  font-family: "Brown", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
}
a {
  color: #f0f0f0;
  text-decoration: underline;
  font-family: "Brown", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
}
</style>
