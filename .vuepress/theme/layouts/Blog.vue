<template>
  <Layout>
    <div class="outer">
      <div class="inner">
        <div class="post-feed">
          <article class="post post-card" v-for="blog in blogList">
            <div class="post-card-inside">
              <a class="post-card-thumbnail" v-if="blog.frontmatter['thumb_img_path']" :href="blog.path">
                <img class="thumbnail" :src="blog.frontmatter['thumb_img_path']" :alt="blog.frontmatter['title']" />
              </a>
              <div class="post-card-content">
                <header class="post-header">
                  <h2 class="post-title"><a :href="blog.path" rel="bookmark">{{ blog.frontmatter['title'] }}</a></h2>
                </header>
                <div class="post-excerpt">
                  <p>{{blog.frontmatter['excerpt']}}</p>
                </div>
                <footer class="post-meta">
                  <time class="published">{{ formatDate(blog.frontmatter['date'])}}</time>
                </footer>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import moment from "moment"
  export default {
    metaInfo: {
      title: 'Blog - Stackbit Azimuth Theme'
    },
    computed: {
      blogList() {

        let pages = this.$site.pages.filter(p => {
          return p.path.indexOf('/posts/') >= 0;
        }).sort((a,b) => {
          let aDate = new Date(a.frontmatter.date).getTime();
          let bDate = new Date(b.frontmatter.date).getTime();
          let diff = aDate - bDate;
          if(diff < 0) return 1;
          if(diff > 0) return -1;
          return 0;
        })
        
        return pages;
      }
    },
    methods: {
      formatDate(date) {
        return moment(String(date)).format('MMMM DD, YYYY')
      }
    }
  }
</script>

