<template>
  <div class="partners-blc b-wrap">
    <h3 class="blc-title">The choice of small and large innovative businesses</h3>
    <ul class="partners-list">
      <li
        v-for="(item, index) in partners"
        class="partners-list-item"
        :key="`partners-${index}`"
      >
        <SiteImg
          :src="`partners/${item.imgUrl}`"
          :alt="item.alt"
          class="partners-list-pic"
        />
      </li>
    </ul>
    <div class="partners-text-blc">
      <div class="partners-text-preview">
        <SiteImg
          :src="'bloc2/preview.png'"
          class="partners-text-pic"
        />
      </div>
      <div class="partners-text">
        <p class="partners-text-unit">Being a significant element of your business image, email signature has to be generated in a skillful way. Trying to create it by your own efforts takes much time that could be spent on more important tasks.</p>
        <p class="partners-text-unit">MySignature is an online email signature generator that helps create professional and visually compelling email signatures for Gmail, Outlook, Apple Mail, Thunderbird and Office 365 clients. No technical background needed.</p>
        <button class="main-btn main-btn-big">Create Signature</button>
      </div>
    </div>
  </div>
</template>

<script>
import SiteImg from '../../Elements/SiteImg/SiteImg'
export default {
  name: 'Partners',
  components: { SiteImg },
  data () {
    return {
      partners: [
        {
          imgUrl: 'partner1.png',
          alt: 'Партнер 1'
        },
        {
          imgUrl: 'partner2.png',
          alt: 'Партнер 2'
        },
        {
          imgUrl: 'partner3.png',
          alt: 'Партнер 3'
        },
        {
          imgUrl: 'partner4.png',
          alt: 'Партнер 4'
        },
        {
          imgUrl: 'partner1.png',
          alt: 'Партнер 5'
        },
        {
          imgUrl: 'partner2.png',
          alt: 'Партнер 6'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "partners.scss";
</style>
