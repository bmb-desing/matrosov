<template>
  <div
    id="first-screen__content"
    class="first-screen__content"
    @click="nextSlide"
  >
    <div id="first-screen__slider" class="first-screen__slider"></div>
    <div class="first-screen">
      <div class="first-screen__top"></div>
      <div class="first-screen__center">
        <transition name="zoom">
          <div :key="currentSlide" class="wrapper">
            <h1 class="first-screen__title">
              {{ slider[currentSlide].title }}
            </h1>
            <div class="first-screen__link">
              <nuxt-link :to="slider[currentSlide].link.link">
                {{ slider[currentSlide].link.text }}
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="24"
                  >
                    <rect width="32" height="24" fill="#C4C4C4" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M24.0909 7L23.1616 7.94L26.8393 11.6667L3 11.6667L3 13L26.8393 13L23.1616 16.7267L24.0909 17.6667L29.3636 12.3333L24.0909 7Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
      <div class="first-screen__bottom">
        <div class="wrapper wrapper_big">
          <div class="first-screen__navigation">
            <ul class="first-screen__list">
              <li
                v-for="n in slider.length"
                :key="'slide_' + n"
                class="first-screen__item"
              >
                <span
                  v-if="n - 1 == currentSlide"
                  class="first-screen__active"
                  >{{ 10 > n ? '0' + n : n }}</span
                >
                <span v-else class="first-screen__passive"></span>
              </li>
            </ul>
            <div class="first-screen__buttons">
              <a href="#" @click.prevent="changeSlide(-1)">назад</a>
              <span>/</span>
              <a href="#" @click.prevent="changeSlide(1)">вперед</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sketch from '../../modules/sketch'
export default {
  props: {
    slider: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      sketch: {},
      currentSlide: 0
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeDestroy() {
    this.sketch = {}
  },
  methods: {
    nextSlide(e) {
      if (e.target.classList.value === 'first-screen') {
        const next = this.sketch.next()
        if (next !== undefined) {
          this.currentSlide = next
        }
      }
    },
    changeSlide(index) {
      let next
      if (index === -1 && this.currentSlide === 0) {
        next = this.sketch.next(this.slider.length - 1)
      } else {
        next = this.sketch.next(index)
      }
      if (next !== undefined) {
        this.currentSlide = next
      }
      return false
    },
    startCarousel() {
      const images = []
      for (let i = 0; i < this.slider.length; i++) {
        images.push(this.slider[i].image)
      }
      this.sketch = new Sketch({
        duration: 1.5,
        debug: false,
        easing: 'easeOut',
        images,
        uniforms: {
          width: { value: 0.5, type: 'f', min: 0, max: 10 }
        },
        fragment: `
		uniform float time;
		uniform float progress;
		uniform sampler2D texture1;
		uniform sampler2D texture2;
		uniform vec4 resolution;
		varying vec2 vUv;
		varying vec4 vPosition;
		void main()	{
			vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
			vec2 p = newUV;
			float x = progress;
			x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
			vec4 f = mix(
				texture2D(texture1, (p-.5)*(1.-x)+.5), 
				texture2D(texture2, (p-.5)*x+.5), 
				x);
			gl_FragColor = f;
		}
	`
      })
    }
  }
}
</script>
