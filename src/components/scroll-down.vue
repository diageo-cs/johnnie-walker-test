<template>
  <section
    class="hero__scroll temp__flexbox temp__ai--c temp__jc--c ta--c temp__fd--c"
  >
    SCROLL DOWN TO<br />
    STIR THINGS UP
    <div
      class="position--relative temp__flexbox temp__ai--c temp__jc--c ta--c temp__fd--c"
    >
      <img
        class="hero-chevron"
        src="images/chevron--left.svg"
        width="20"
        style="
          position: absolute;
          top: 10px;
          z-index: 100;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          opacity: 0;
        "
      /><img
        class="hero-chevron"
        src="images/chevron--left.svg"
        width="20"
        style="
          position: absolute;
          top: 20px;
          z-index: 100;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          opacity: 0;
        "
      />
      <img
        class="hero-chevron"
        src="images/chevron--left.svg"
        width="20"
        style="
          position: absolute;
          top: 30px;
          z-index: 100;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          opacity: 0;
        "
      />
    </div>
  </section>
</template>
<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hero__scroll {
  color: #fff;
  font-size: 26px;
  line-height: 26px;
  padding: 100px 0 0;
  font-family: "JohnnieWalker-Headline";
}

.hero-chevron:first-child {
  animation: move 3s ease-out 0.1s infinite;
}

.hero-chevron:nth-child(2) {
  animation: move 3s ease-out 0.2s infinite;
}
.hero-chevron:nth-child(3) {
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
</style>
