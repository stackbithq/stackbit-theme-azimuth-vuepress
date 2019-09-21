<template>
	<ul class="social-links">
	  <li v-for="link in socialData">
	    <a :href="link.url" target="_blank" rel="noopener">
	    	{{ link.title }}
	    </a>
	  </li>
	</ul>

</template>


<script>
	export default {
	  name: "Social",
	  computed: {
	    socialData() {
	      return this.$site.themeConfig.footer.social;
	    }
	  }
	};
</script>
