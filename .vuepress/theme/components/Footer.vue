<template>
	<footer id="colophon" class="site-footer">
		<div class="footer-top outer">
	    <div class="inner">
	      <div class="footer-widgets">
	        <div class="widget footer-branding">
	        	<p class="site-logo" v-if="footerData.logo_img">
		          <a href="/">
		            <img :src="footerData.logo_img" />
		          </a>
		        </p>
		        <p class="site-title" v-else>
		          <a href="/">
		            {{headerData.title}}
		          </a>
		        </p>
	          <p class="site-description" v-if="footerData.tagline">
	            {{ footerData.tagline }}
	          </p>
	        </div>
	        <nav class="widget footer-navigation" v-if="(footerData.has_nav || footerData.has_social)">
	          <div class="footer-nav-inside">
	            <div class="secondary-nav" v-if="footerData.has_nav">
	              <h2 class="widget-title">{{ footerData.nav_title }}</h2>
	              <ul class="secondary-menu">
	                <li v-for="item in footerData.nav_menus">
	                  <a :href="item.url">{{ item.label }}</a>
	                </li>
	              </ul>
	            </div>
	            <div class="social-nav">
              	<h2 class="widget-title">{{ footerData.social_title }}</h2>
              	<Social />
            	</div>
	          </div>
	        </nav>
	        <div class="widget footer-subscribe" v-if="footerData.has_subscribe">
	          <h2 class="widget-title">{{ footerData.subscribe_title }}</h2>
	          <p v-if="footerData.subscribe_content">{{ footerData.subscribe_content }}</p>
	          <SubscribeForm />
	        </div>
	      </div>
	    </div>
	  </div>
	  <div class="site-info outer">
	    <div class="inner">
	    	<span v-html="footerData.content" />
	      &nbsp;
	      <span v-for="link in footerData.links">
	     	 	<a v-if="link.new_window" :href="link.url" target="_blank" rel="noopener" v-html="link.text" />
	     	 	<a v-else :href="link.url" v-html="link.text" />
	      </span>
	    </div>
	  </div>
	</footer>
</template>

<script>
	import Social from "./Social.vue"
	import SubscribeForm from "./SubscribeForm.vue" 

	export default {
	  computed: {
	    headerData() {
	      return this.$site.themeConfig.header;
	    },
	    footerData() {
	    	return this.$site.themeConfig.footer;
	    }
	  },
	  components: {
      Social,
      SubscribeForm
    }
	};
</script>

