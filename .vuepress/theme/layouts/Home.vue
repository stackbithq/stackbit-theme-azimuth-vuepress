<template>
  <Layout>
    Here is homepage
  </Layout>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    homeData() {
      return this.$page.frontmatter
    },
    blogPosts () {
      return this.$site.pages.filter(page => page.path.includes('/posts/'))
    }
  },
  
}
</script>

