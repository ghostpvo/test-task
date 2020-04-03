<template>
  <header class="main-header">
    <div class="b-wrap">
      <a href="/" class="header-logo">
        <img src="../../../assets/img/logo/logo@2x.png" class="header-logo-pic" alt="">
      </a>
      <span
        :class="['header-menu-state', {'cross-mode': menuState}]"
        @click="menuState = !menuState"
      >
        toggle menu
      </span>
      <nav
        :class="['header-menu-side', {'show-it': menuState}]"
      >
        <ul class="header-menu">
          <li
            v-for="(item, index) in mainMenu"
            :key="`menuItem${index}`"
            class="header-menu-item"
          >
            <a :href="item.linkTo" class="menu-link">{{ item.title }}</a>
          </li>
        </ul>
        <div class="header-user">
          <button class="main-btn">Sign up</button>
          <a href="/" class="menu-link">Log in</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      menuState: false,
      mainMenu: [
        {
          linkTo: '/',
          title: 'Features'
        },
        {
          linkTo: '/',
          title: 'Blog'
        },
        {
          linkTo: '/',
          title: 'Pricing'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "header";
</style>
