<template>
  <Layout>
    <Hero v-if="homeData.heroSection.enable" :data="homeData.heroSection"/>
    <FeaturesSection v-if="homeData.featuresSection.enable" :data="homeData.featuresSection"/>
    <ReviewsSection v-if="homeData.reviewsSection.enable" :data="homeData.reviewsSection" />
    <CtaSection v-if="homeData.ctaSection.enable" :data="homeData.ctaSection" />
    <PostsSection v-if="homeData.postsSection.enable" :data="homeData.postsSection" :posts="recentPosts" />
  </Layout>
</template>

<script>
import Hero from "../components/Hero"
import FeaturesSection from "../components/FeaturesSection"
import ReviewsSection from "../components/ReviewsSection"
import CtaSection from "../components/CtaSection"
import PostsSection from "../components/PostsSection"

export default {
  name: 'Header',
  computed: {
    homeData() {
      return this.$page.frontmatter
    },
    recentPosts() {
      let pages = this.$site.pages.filter(p => {
        return p.path.indexOf('/posts/') >= 0;
      }).sort((a,b) => {
        let aDate = new Date(a.frontmatter.date).getTime();
        let bDate = new Date(b.frontmatter.date).getTime();
        let diff = aDate - bDate;
        if(diff < 0) return 1;
        if(diff > 0) return -1;
        return 0;
      }).slice(0,5);
      
      return pages;
    }
  },
  components: {
    Hero,
    FeaturesSection,
    ReviewsSection,
    CtaSection,
    PostsSection
  }  
}
</script>

