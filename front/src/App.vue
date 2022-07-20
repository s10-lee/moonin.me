<template>
  <div class="fixed-container-scroll" @scroll="handleScroll">

    <div id="scroll-debug">
      <b>{{ scrollValue }}</b>
    </div>

    <div class="container">

      <div id="left-branch" v-parallax="makeParallax(10)"></div>
      <div id="right-branch" v-parallax="makeParallax(15)"></div>
      <div id="right-branch-back"></div>

      <div class="row mt-5 mb-8 justify-content-center">
        <div class="col-6">
          <div class="py-5 logo">
            <h1 class="ff-cori mt-7">Mooninme tarot</h1>
          </div>
        </div>
      </div>

      <div class="row mb-8 justify-content-center">
        <div class="col-6">
          <div class="box p-5">
            <h3 class="mb-5">Header</h3>
            <p>
              Aenean at lectus sed neque tempor volutpat quis id neque. Sed enim purus, ultrices vitae ultricies id, eleifend at eros. Sed non lorem a elit tempus semper. Nulla facilisi. Cras porttitor consequat nunc sed egestas. Vestibulum sit amet consectetur turpis. Nullam euismod purus at ipsum vehicula vulputate. Vivamus eu massa in libero ornare interdum elementum blandit mauris. Nullam porttitor id neque in rutrum.
            </p>
            <p>
              Vestibulum non neque in mi dictum suscipit. Fusce quis facilisis metus. Vestibulum at leo purus. Etiam at vestibulum libero. Cras augue neque, finibus sit amet pellentesque in, fermentum vel enim.
            </p>
          </div>
        </div>
      </div>

      <div id="flying-cards" v-parallax="makeParallax(10)"></div>

      <div class="row justify-content-center" v-parallax="makeParallax(15)">
        <div class="col-6">
          <div class="box p-5">
            <h3 class="mb-5">HEADER BOX 2</h3>
            <p>
              Education is power. Let go of your fear. Our lessons and card database equip you with the knowledge to understand Tarot and its role as a spiritual tool. No creepy shenanigans here, pinky swear.
            </p>
          </div>
        </div>
      </div>

    </div>


    <div id="dark-block" class="mb-10">
      <div class="container">
        <div class="row my-5 justify-content-center">
          <div class="col-4 offset-3">
            <div class="p-5">
              <h3 class="mb-5 text-gold-satin" style="justify-content: start;">DARK HEADER</h3>
              <p class="text-white">
                Education is power. Let go of your fear. Our lessons and card database equip you with the knowledge to understand Tarot and its role as a spiritual tool. No creepy shenanigans here, pinky swear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="row mb-6 justify-content-center" v-parallax="makeParallax(8)">
        <div class="col-6">
          <div class="box p-5">
            <h3 class="mb-5">BOX 3</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
      </div>

      <div class="row box">
        <div class="col-12">
          <h3 class="px-5 pt-5">TWO COLUMNS</h3>
        </div>
        <div class="col">
          <div class="p-5">
            <p>
              Vestibulum non neque in mi dictum suscipit. Fusce quis facilisis metus. Vestibulum at leo purus. Etiam at vestibulum libero. Cras augue neque, finibus sit amet pellentesque in, fermentum vel enim. Phasellus volutpat vulputate arcu, gravida lobortis tortor auctor vitae. Suspendisse felis lacus, fermentum in mauris at, accumsan gravida eros. Fusce id ligula efficitur, feugiat neque vel, blandit enim. Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="p-5">
            <p>
              Aenean at lectus sed neque tempor volutpat quis id neque. Sed enim purus, ultrices vitae ultricies id, eleifend at eros. Sed non lorem a elit tempus semper. Nulla facilisi. Cras porttitor consequat nunc sed egestas. Vestibulum sit amet consectetur turpis. Nullam euismod purus at ipsum vehicula vulputate. Vivamus eu massa in interdum elementum blandit mauris. Nullam porttitor id neque in rutrum a elit tempus semper. Cras porttitor consequat nunc sed egestas.
            </p>
          </div>
        </div>
      </div>

      <div id="dark-background" v-parallax="makeParallax(35)"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      screenCenter: 0,
      scrollValue: 0,
    }
  },
  methods: {
    handleScroll(e) {
      const { height } = e.target.getBoundingClientRect()
      this.screenCenter = Math.round(height / 2)
      this.scrollValue = Math.round(e.target.scrollTop)
    },
    makeParallax(speed, zIndex = 1) {
      return {
        speed: speed,
        zIndex: zIndex,
        center: this.screenCenter,
        scroll: this.scrollValue,
      }
    }
  },
  directives: {
    parallax(el, binding) {
      const {top, height} = el.getBoundingClientRect()
      const elementCenter = 1 + Math.round(top - height / 2)
      const { speed, center, scroll } = binding.value

      if (center > 0) {
        const offset = elementCenter - (scroll)
        const delta = ((offset * speed) / 100).toFixed(2)
        el.style.transform = 'translate3d(0, ' + delta + 'px, 0)'
      }
    }
  },
  mounted() {
    const { height } = this.$el.getBoundingClientRect()
    this.screenCenter = Math.round(height / 2)
  }
}
</script>