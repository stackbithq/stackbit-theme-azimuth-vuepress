<template>
  <Layout>
    <PricingSection v-if="pricingData.pricingSection.enable" :data="pricingData.pricingSection" />
    <FaqSection v-if="pricingData.faqSection.enable" :data="pricingData.faqSection" />
  </Layout>
</template>

<script>
  import PricingSection from "../components/PricingSection"
  import FaqSection from "../components/FaqSection"

  export default {
    computed: {
      pricingData() {
        return this.$page.frontmatter
      },
    },
    components: { 
      PricingSection,
      FaqSection,
    }
  }
</script>
