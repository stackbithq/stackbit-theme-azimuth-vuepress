<template>
	<header id="masthead" class="site-header outer">
		<div class="inner">
    	<div class="site-header-inside">
      	<div class="site-branding">
	        <p class="site-logo" v-if="headerData.logo_img">
	          <a href="/">
	            <img :src="headerData.logo_img" />
	          </a>
	        </p>
	        <p class="site-title" v-else>
	          <a href="/">
	            {{headerData.title}}
	          </a>
	        </p>
      	</div>
      	<nav id="main-navigation" class="site-navigation" aria-label="Main Navigation" >
      		<div class="site-nav-inside">
	          <button id="menu-close" class="menu-toggle" @click="onClose" ><span class="screen-reader-text" >Open Menu</span><span
	              class="icon-close" aria-hidden="true"></span></button>
	          <ul class="menu">
	            <li class="menu-item"	v-for="item in headerData.nav" @click="onClose">
	            	<a :href="item.url">
	              	{{ item.label }}
	              </a>
	            </li>
	            <li class="menu-item menu-button" v-if="headerData.actions" v-for= "action in headerData.actions" @click="onClose">
	            	<a :href="action.url" class="button">
	              	{{ action.label }}
	              </a>
	            </li>
	          </ul>
	        </div>
      	</nav>
      	<button id="menu-open" class="menu-toggle" @click="onClick"><span class="screen-reader-text">Close Menu</span><span class="icon-menu"
          aria-hidden="true"></span></button>
      </div>
    </div>
	</header>
</template>
<script>
	export default {
		data () {
		  return {
		    isVisible: false
		  }
		},
	  computed: {
	    headerData() {
	      return this.$site.themeConfig.header;
	    }
	  },
   	methods: {
	    onClick () {
	      document.body.classList.toggle('menu--opened');
	    },
	    onClose () {
	      document.body.classList.remove('menu--opened');
	    }
	  }
	}
</script>



