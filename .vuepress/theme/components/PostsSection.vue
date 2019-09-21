<template>
	<section :id="data.section_id" class="block posts-block outer" v-bind:class="'bg-'+data.bg">
		<div class="block-header inner-small">
	    <h2 class="block-title" v-html="data.title" />
	    <p class="block-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
	  </div>
	  <div class="inner">
	    <div class="post-feed">
	      <article class="post post-card" v-for="post in posts.slice(0, 3)">
	        <div class="post-card-inside">
	          <a class="post-card-thumbnail" v-if="post.frontmatter['thumb_img_path']" :href="post.path">
		          <img class="thumbnail" :src="post.frontmatter['thumb_img_path']" :alt="post.frontmatter['title']" />
		        </a>
		        <div class="post-card-content">
	            <header class="post-header">
	              <h3 class="post-title">
	              	<a :href="post.path" rel="bookmark">{{ post.frontmatter['title'] }}</a>
	              </h3>
	            </header>
	            <div class="post-excerpt">
	              <p v-html="post.frontmatter['excerpt']" />
	            </div>
	            <footer class="post-meta">
	              <time class="published">{{ formatDate(post.frontmatter['date'])}}</time>
	            </footer>
	          </div>
	        </div>
	      </article>
	    </div>
	  </div>
	</section>
</template>

<script>
	import moment from "moment"
	export default {
		name: 'PostsSection',
		props: { 
			data: Object,
			posts: Array, 
		},
		methods: {
			formatDate(date) {
				return moment(String(date)).format('MMMM DD, YYYY')
			}
		}
	}
</script>