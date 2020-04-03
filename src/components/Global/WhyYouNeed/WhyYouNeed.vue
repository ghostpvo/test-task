<template>
  <div class="why-you-need b-wrap">
    <h5 class="blc-title">Why you should use an email signature for business correspondence</h5>
    <ul class="you-need-list">
      <li
        v-for="(item, index) in items"
        :key="`item-${index}`"
        class="you-need-item"
      >
        <SiteImg
          :src="item.imgUrl"
          class="you-need-pic"
        />
        <h6 class="you-need-title">{{item.title}}</h6>
        <p class="you-need-text">{{item.text}}</p>
      </li>
    </ul>
    <div class="you-need-btn">
      <button class="main-btn main-btn-big">Create Signature</button>
    </div>
  </div>
</template>

<script>
import SiteImg from '../../Elements/SiteImg/SiteImg'
export default {
  name: 'WhyYouNeed',
  components: { SiteImg },
  data () {
    return {
      items: [
        {
          imgUrl: 'bloc3/item.png',
          title: 'Enhance your professional image',
          text: 'Distinctive email signature not only makes your brand well-recognizable among potential clients but also boosts the position of current customers towards your services or products. Turn tedious email communication into effective'
        },
        {
          imgUrl: 'bloc3/item.png',
          title: 'Set additional marketing channel',
          text: 'Embedding a unique email signature will help you advertise the products or services in a more efficient way. Create a customized email signature and entice clients to visit your website or social network accounts and look'
        },
        {
          imgUrl: 'bloc3/item.png',
          title: 'Develop relationships based on trust',
          text: 'Let your clients know who exactly maintains email correspondence with them. With the help of a unique email signature, you can build trust with clients and seamlessly communicate any issues. Mutual understanding can help'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "why-you-need";
</style>
