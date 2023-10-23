<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="main-header">
        <div class="layers">
          <div class="layer__header">
            <transition name="slide-up" mode="out-in">
              <div v-if="scrollTop <= 400 || scrollTop == 0 || !scrollTop">
                <div class="layers__title">
                  Добродетель
                </div>
                <div class="layers__caption">
                  Источник спокойствия
                </div>
              </div>

              <div v-else-if="scrollTop > 400 && scrollTop <= 800" class="layers__caption">
                Тот, кто делает добро другому, делает больше всего добра самому себе, не в том смысле, что ему будет за
                это награда, а тем, что сознание сделанного добра дает ему большую радость.
              </div>
              <div v-else-if="scrollTop > 800 && scrollTop <= 1200" class="layers__caption">
                Самая большая помеха жизни — ожидание завтрашнего дня и потеря сегодняшнего дня
              </div>
              <div v-else-if="scrollTop > 1200 && scrollTop <= 1600" class="layers__caption">
                Разумный человек никогда ни на что не станет роптать, потому что он хорошо понимает, что настоящее горе
                наше происходит не от того, что случается с нами, а от того, что мы неразумно думаем о случившемся.
                Отстраним же эти неразумные мысли, и прекратится то, что мы считали несчастием.
              </div>
              <div v-else-if="scrollTop > 1600" class="layers__caption">
                <div class="layers__title layers_small-text">
                  Луций Анней Сенека
                </div>
                <div class="layers__caption">
                  (4 до н.э. — 65 н.э.)
                </div>
                <div class="layers__caption">
                  Выдающийся древнеримский философ
                </div>
              </div>
            </transition>
          </div>
          <div class="layer layers__base-1"></div>
          <div class="layer layers__base-2"></div>
          <div class="layer layers__base-3"></div>
          <div class="layer layers__base-4"></div>
          <div class="layer layers__base-5"></div>
          <div class="layer layers__base-6"></div>
          <div class="layer layers__base-7"></div>
          <div class="layer layers__base-10"></div>
          <div class="layer layers__base-8"></div>
          <div class="layer layers__base-9"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

const main = ref();
let ctx: gsap.Context;
let smoother: ScrollSmoother;

const scrollTop = ref()
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${scrollY}px`
    scrollTop.value = scrollY
  })

  ctx = gsap.context(() => {
    smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1
    });
  }, main.value);
})

onUnmounted(() => {
  ctx.revert();
});
</script>

