<template>
  <Layout>
    <BasicPage :data="data" />
  </Layout>
</template>

<script>
import BasicPage from "../components/BasicPage"
export default {
  metaInfo: {
    title: 'Style Guide - Stackbit Azimuth Theme'
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
  components: {
    BasicPage
  }
}
</script>

