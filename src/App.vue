<template>
  <div id="app">
    <Header />
    <Main-offer />
    <Partners />
    <WhyYouNeed />
    <WhoMayBenefits />
    <RunningTheBusiness />
    <Footer />
  </div>
</template>
<script>

import Header from './components/Global/Header/Header'
import MainOffer from './components/Global/MainOffer/MainOffer'
import Partners from './components/Global/Partners/Partners'
import WhyYouNeed from './components/Global/WhyYouNeed/WhyYouNeed'
import WhoMayBenefits from './components/Global/WhoMayBenefits/WhoMayBenefits'
import RunningTheBusiness from './components/Global/RunningTheBusiness/RunningTheBusiness'
import Footer from './components/Global/Footer/Footer'

export default {
  name: 'App',
  components: { Footer, RunningTheBusiness, WhoMayBenefits, WhyYouNeed, Partners, MainOffer, Header }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
