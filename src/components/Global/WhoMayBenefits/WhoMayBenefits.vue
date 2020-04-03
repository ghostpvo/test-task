<template>
  <div class="who-may-benefits">
    <div class="b-wrap">
      <h5 class="blc-title">Who may benefit from using a free email signature creator?</h5>
      <ul class="may-benefits-list">
        <li
          v-for="(item, index) in items"
          :key="`item-${index}`"
          class="may-benefits-item"
        >
          <SiteImg
            :src="item.imgUrl"
            class="may-benefits-pic"
          />
          <h6 class="may-benefits-title">{{item.title}}</h6>
          <p class="may-benefits-text">{{item.text}}</p>
          <button class="main-btn main-btn-big">Create Signature</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SiteImg from '../../Elements/SiteImg/SiteImg'
export default {
  name: 'WhoMayBenefits',
  components: { SiteImg },
  data () {
    return {
      items: [
        {
          imgUrl: 'bloc4/preview1.png',
          title: 'Client-oriented employees',
          text: 'Sales and people communication managers, customer support specialists, recruiters, and all other individuals working with clients are responsible for maintaining good relationships with them and increasing brand awareness. A custom email signature that accompanies your business email correspondence represents your company and helps recipients to easily contact you in case any question arises.'
        },
        {
          imgUrl: 'bloc4/preview2.png',
          title: 'Business Owner',
          text: 'Business owners have to wear many hats. Although they can hire as many employees as needed, they have to find time to personally communicate issues with partners. In this case, an individual email signature is a must. If the business owner provides complete information such as personal contacts, links to social networks, photo and more in email correspondence, it says much about their high professionalism and sociability.'
        },
        {
          imgUrl: 'bloc4/preview3.png',
          title: 'C-Level Persona',
          text: 'The key responsibility of any CEO, CTO or CMO is to represent their company image that can be formed based on the way senior management communicates with the clients or partners. That is why it is important to use all possible tools for better communication and one of them is an email signature. Create the impression that you and your customers already know each other after sending the very first email.'
        },
        {
          imgUrl: 'bloc4/preview4.png',
          title: 'Freelancer',
          text: 'Freelancers-beginners spend much time and efforts gaining credibility of their clients through establishing effective communication. Those who work as freelancers for a long time also have to take steps to maintain the reputation and retain their clients. A professionally designed email signature is an essential part of communication that reflects your serious attitude towards both the potential and current clients.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "who-may-benefits";
</style>
