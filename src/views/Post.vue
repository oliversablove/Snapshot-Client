<template>
  <main class ="view post">
    <section class="stream">
      <video ref="video" id="video" width="100%" height="300" autoplay :class="(!captured) ? 'show' : 'hide'"></video>
      <div class="post-btns">
        <button class="capture-btn" @click="capture" v-if="!captured">Capture</button>
        <button class="cancel-btn" @click="cancel" v-if="captured">Retake</button>
        <button class="upload-btn" @click="upload" v-if="captured">Upload</button>
      </div>
    </section>
    <section :class="(captured) ? 'show' : 'hide'">
      <canvas ref="canvas" id="canvas" width="100%" height="300"></canvas>
      <label for="desc">Caption</label>
      <input type="text" id="desc" name="desc" v-model="desc" />
    </section>
  </main>
</template>


<script>
export default {
  data () {
    return {
      video: {},
      canvas: {},
      constraints: {},
      cap: "",
      captured: false
    }
  },
  methods: {
    capture () {
      this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width,
      this.canvas.width)
      this.cap = this.canvas.toDataURL("image/png")
      this.captured = true
    },
    cancel () {
      this.captured = false
    },
    upload () {
      let api_url = this.$store.state.api_url

      this.$http.post(api_url + 'post/newpost', {
        auth_token: localStorage.getItem('jwt'),
        image: this.cap,
        desc: this.desc
      })
      .then(response => {
        this.captured = false
        this.cap = ""
        this.desc = ""
      })
    }
  },
  mounted () {
    this.video = this.$refs.video
    this.video.width = window.innerWidth
    this.video.height = window.innerHeight - 80
    this.constraints = {
      width: window.innerWidth,
      height: window.innerWidth
    }

    if (this.$refs.canvas) {
      this.canvas = this.$refs.canvas
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerWidth
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: this.constraints
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
.post-btns {
  position: absolute;
  left: 50%;
  bottom: 65px;
  transform: translateX(-50%);
}

.image {
  width: 100%;
  height: auto;
}
</style>
