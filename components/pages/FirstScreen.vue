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
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
      <div class="first-screen__bottom"></div>
    </div>
  </div>
</template>
<script>
import Sketch from '../../modules/sketch'
export default {
  data() {
    return {
      sketch: {},
      currentSlide: 0,
      slider: [
        {
          image: '/slider/first.jpg',
          title: 'Новый проект в Севастополе',
          link: {
            text: 'Подробнее о проекте',
            link: '/123'
          }
        },
        {
          image: '/slider/second.jpg',
          title: 'Проект «Пенза»',
          link: {
            text: 'Подробнее о проекте',
            link: '/123'
          }
        },
        {
          image: '/slider/third.jpg',
          title: 'Дом Калиниченко',
          link: {
            text: 'Подробнее о проекте',
            link: '/123'
          }
        }
      ]
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeDestroy() {
    this.sketch = {}
  },
  methods: {
    nextSlide() {
      const next = this.sketch.next()
      if (next !== undefined) {
        this.currentSlide = next
      }
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
