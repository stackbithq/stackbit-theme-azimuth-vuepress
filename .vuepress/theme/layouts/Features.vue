<template>
  <Layout>
    <ContentSection v-if="featuresData.featuresSection.enable" :data="featuresData.featuresSection" :content="featuresData.content"/>
    <CtaSection v-if="featuresData.ctaSection.enable" :data="featuresData.ctaSection" />
  </Layout>
</template>

<script>
  import ContentSection from "../components/ContentSection"
  import CtaSection from "../components/CtaSection"

  export default {
    computed: {
      featuresData() {
        return this.$page.frontmatter
      },
    },
    components: { 
      ContentSection,
      CtaSection,
    }
  }
</script>

