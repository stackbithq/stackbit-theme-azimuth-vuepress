<template>
  <div class="outer">
	  <div class="inner-medium">
	    <article class="post page post-full">
	      <header class="post-header">
	        <h1 class="post-title">{{ data.title }}</h1>
	      </header>
	      <div class="post-thumbnail" v-if="data.img_path">
	        <img :src="data.img_path" :alt="data.title" />
	      </div>
	      <div class="post-thumbnail" v-if="data.content_img_path">
	      	<img :src="data.content_img_path" :alt="data.title" />
	      </div>
	      <div class="post-subtitle" v-if="data.subtitle">
	        {{ data.subtitle }}
	      </div>
	      <Content />
	    </article>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'BasicPage',
		props: { 
			data: Object 
		}
	}
</script>