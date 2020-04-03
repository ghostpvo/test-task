<template>
  <img
    :src="require(`@/assets/img/${responsiveSrc}`)"
    :alt="alt"
  >
</template>

<script>
export default {
  name: 'SiteImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Site picture'
    }
  },
  computed: {
    isRetina () {
      return window.devicePixelRatio
    },
    responsiveSrc () {
      const parseUrl = this.src.split('.')
      const format = '.' + parseUrl.pop()
      let url = parseUrl.join()

      if (this.isRetina >= 2) {
        url += '@2x'
      }

      return url + format
    }
  }
}
</script>

<style scoped lang="scss">
  img {
    max-width: 100%;
  }
</style>
