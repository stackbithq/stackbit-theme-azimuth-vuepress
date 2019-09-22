<template>
  <Layout>
    <BasicPage :data="data" />
  </Layout>
</template>

<script>
import BasicPage from "../components/BasicPage"
export default {
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

