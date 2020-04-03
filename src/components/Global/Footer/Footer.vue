<template>
  <footer class="main-footer">
    <div class="b-wrap">
      <div class="footer-menu-wrapper">
        <div class="footer-links">
          <div
            v-for="(group, gIndex) in menu"
            :key="`group-${gIndex}`"
            class="footer-menu-group">
            <h6 class="footer-menu-title">{{group.title}}</h6>
            <ul class="footer-menu-list">
              <li
                v-for="(item, itemIndex) in group.links"
                :key="`item-${gIndex}-${itemIndex}`"
                class="footer-menu-item">
                <a :href="item.link" class="footer-menu-link">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-social">
          <h6 class="footer-menu-title">Social</h6>
          <ul class="footer-social-list">
            <li
              v-for="item in socialNtws"
              :key="`social-${item.type}`"
              class="footer-social-item"
            >
              <a
                :href="item.link"
                class="footer-social-link"
              >
                <SiteImg
                  :src="`footer/${item.type}.png`"
                  :alt="`${item.type} icon`"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-logo-copy">
        <a
          href="/"
          class="footer-logo"
        >
          <SiteImg
            :src="'footer/logo.png'"
            :alt="'white logo'"
          />
        </a>
        <p class="footer-copyrights">&copy; 2020 All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import SiteImg from '../../Elements/SiteImg/SiteImg'
export default {
  name: 'Footer',
  components: { SiteImg },
  data () {
    return {
      menu: [
        {
          title: 'Info',
          links: [
            {
              title: 'Blog',
              link: '/'
            },
            {
              title: 'Contact us',
              link: '/'
            }
          ]
        },
        {
          title: 'FAQ',
          links: [
            {
              title: 'Terms',
              link: '/'
            },
            {
              title: 'Privacy policy',
              link: '/'
            }
          ]
        },
        {
          title: 'Info',
          links: [
            {
              title: 'Blog',
              link: '/'
            },
            {
              title: 'Gmail',
              link: '/'
            },
            {
              title: 'Outlook',
              link: '/'
            },
            {
              title: 'Apple mail',
              link: '/'
            },
            {
              title: 'Thunderbird',
              link: '/'
            }
          ]
        },
        {
          title: 'Info',
          links: [
            {
              title: 'English',
              link: '/'
            },
            {
              title: 'Español',
              link: '/'
            },
            {
              title: 'Portuguese',
              link: '/'
            }
          ]
        }
      ],
      socialNtws: [
        {
          type: 'linkedin',
          link: '/'
        },
        {
          type: 'twitter',
          link: '/'
        },
        {
          type: 'instagram',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "footer";
</style>
