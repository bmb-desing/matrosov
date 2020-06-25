import * as Three from 'three'
import { TimelineMax } from 'gsap'
export default class Sketch {
  constructor(opts) {
    this.scene = new Three.Scene()
    this.vertex = `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}`
    this.fragment = opts.fragment
    this.uniforms = opts.uniforms
    this.renderer = new Three.WebGLRenderer()
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor('#000', 1)
    this.duration = opts.duration || 1
    this.debug = opts.debug || false
    this.easing = opts.easing || 'easeInOut'

    this.clicker = document.getElementById('first-screen__content')

    this.container = document.getElementById('first-screen__slider')
    this.images = opts.images
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.container.appendChild(this.renderer.domElement)

    this.camera = new Three.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    )
    this.camera.position.set(0, 0, 2)
    this.time = 0
    this.current = 0
    this.textures = []

    this.paused = true
    this.initiate(() => {
      this.setupResize()
      this.settings()
      this.addObjects()
      this.resize()
      this.play()
    })
  }

  initiate(cb) {
    const promises = []
    const that = this
    this.images.forEach((url, i) => {
      const promise = new Promise((resolve) => {
        that.textures[i] = new Three.TextureLoader().load(url, resolve)
      })
      promises.push(promise)
    })

    Promise.all(promises).then(() => {
      cb()
    })
  }

  clickEvent() {
    this.clicker.addEventListener('click', () => {
      this.next()
    })
  }

  settings() {
    this.settings = { progress: 0.5 }
    // if(this.debug) this.gui.add(this.settings, "progress", 0, 1, 0.01);

    Object.keys(this.uniforms).forEach((item) => {
      this.settings[item] = this.uniforms[item].value
      if (this.debug)
        this.gui.add(
          this.settings,
          item,
          this.uniforms[item].min,
          this.uniforms[item].max,
          0.01
        )
    })
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    const elem = document.getElementById('first-screen__content')
    if (elem) {
      this.width = elem.clientWidth
      this.height = elem.clientHeight
      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.width / this.height
      let a1
      let a2
      // image cover
      this.imageAspect =
        this.textures[this.textures.length - 1].image.height /
        this.textures[this.textures.length - 1].image.width
      if (this.height / this.width > this.imageAspect) {
        a1 = (this.width / this.height) * this.imageAspect
        a2 = 1
      } else {
        a1 = 1
        a2 = this.height / this.width / this.imageAspect
      }

      this.material.uniforms.resolution.value.x = this.width
      this.material.uniforms.resolution.value.y = this.height
      this.material.uniforms.resolution.value.z = a1
      this.material.uniforms.resolution.value.w = a2

      const dist = this.camera.position.z
      const height = 1
      this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist))

      this.plane.scale.x = this.camera.aspect
      this.plane.scale.y = 1

      this.camera.updateProjectionMatrix()
    }
  }

  addObjects() {
    this.material = new Three.ShaderMaterial({
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable'
      },
      side: Three.DoubleSide,
      uniforms: {
        time: { type: 'f', value: 0 },
        progress: { type: 'f', value: 0 },
        border: { type: 'f', value: 0 },
        intensity: { type: 'f', value: 0 },
        scaleX: { type: 'f', value: 40 },
        scaleY: { type: 'f', value: 40 },
        transition: { type: 'f', value: 40 },
        swipe: { type: 'f', value: 0 },
        width: { type: 'f', value: 0 },
        radius: { type: 'f', value: 0 },
        texture1: { type: 'f', value: this.textures[0] },
        texture2: { type: 'f', value: this.textures[1] },
        displacement: {
          type: 'f',
          value: new Three.TextureLoader().load('slider/disp1.jpg')
        },
        resolution: { type: 'v4', value: new Three.Vector4() }
      },
      // wireframe: true,
      vertexShader: this.vertex,
      fragmentShader: this.fragment
    })

    this.geometry = new Three.PlaneGeometry(1, 1, 2, 2)

    this.plane = new Three.Mesh(this.geometry, this.material)
    this.scene.add(this.plane)
  }

  stop() {
    this.paused = true
  }

  play() {
    this.paused = false
    this.render()
  }

  next(index = 1) {
    if (this.isRunning) return
    this.isRunning = true
    const len = this.textures.length
    const nextTexture = this.textures[(this.current + index) % len]
    this.material.uniforms.texture2.value = nextTexture
    const tl = new TimelineMax()
    tl.to(this.material.uniforms.progress, this.duration, {
      value: 1,
      ease: this.easing,
      onComplete: () => {
        this.current = (this.current + index) % len
        this.material.uniforms.texture1.value = nextTexture
        this.material.uniforms.progress.value = 0
        this.isRunning = false
      }
    })
    return (this.current + index) % len
  }

  render() {
    if (this.paused) return
    this.time += 0.05
    this.material.uniforms.time.value = this.time
    // this.material.uniforms.progress.value = this.settings.progress;

    Object.keys(this.uniforms).forEach((item) => {
      this.material.uniforms[item].value = this.settings[item]
    })

    // this.camera.position.z = 3;
    // this.plane.rotation.y = 0.4*Math.sin(this.time)
    // this.plane.rotation.x = 0.5*Math.sin(0.4*this.time)

    requestAnimationFrame(this.render.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
}
