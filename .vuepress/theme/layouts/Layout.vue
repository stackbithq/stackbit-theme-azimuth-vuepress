<template>
  <div id="page" class="site">
  	<Header />
    <main id="content" class="site-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>


<script>
import "../style/main.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default {
  components: {
    Header,
    Footer
  }
}
</script>
