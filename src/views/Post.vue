<template>
  <main class ="view post">
    <section class="stream">
      <video ref="video" id="video" width="100%" height="300" autoplay v-if="!captured"></video>
      <button class="capture-btn" @click="capture">Capture</button>
    </section>
    <section class="capture">
      <canvas ref="canvas" id="canvas" width="100%" height="300" :class="(captured) ? 'show' : 'hide'"></canvas>
    </section>
    <section class="image">
      <img :src="cap" alt="">
    </section>
  </main>
</template>


<script>
export default {
  data () {
    return {
      video: {},
      canvas: {},
      cap: "",
      captured: false
    }
  },
  methods: {
    capture () {
      let context = this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width,
      this.canvas.height)
      this.cap = canvas.toDataURL("image/png")
    }
  },
  mounted () {
    this.video = this.$refs.video
    this.video.width = window.innerWidth
    this.video.height = window.innerHeight - 80

    if (this.$refs.canvas) {
      this.canvas = this.$refs.canvas
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight - 80
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.video.srcObject = stream
        this.video.play()
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="scss">
.show {
  display: block;
}
.hide {
  display: none;
}
.capture-btn {
  position: absolute;
  left: 50%;
  bottom: 65px;
  transform: translateX(-50%);
}
</style>
