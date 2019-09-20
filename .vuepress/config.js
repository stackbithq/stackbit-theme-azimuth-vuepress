module.exports = {
  title: 'Sean Williams',
  description: 'A blog about meta thinking',
  themeConfig: {
    header: {
      title: "Azimuth",
      logo_img: '/img/logo.png',
      nav: [
        { label: 'Home', url: '/' }, 
        { label: 'Features', url: '/feature' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'Style Guide', url: '/style-guide' }
      ],
      actions: [
        { label: "Sign Up", url: '/signup'}
      ]
    },
    footer: {
      logo_img: "/img/logo_alt.png",
      tagline: "SaaS theme by Stackbit",
      has_nav: true ,
      nav_title: "Company",
      nav_menus: [
        { label: 'About Us', url: '/about' }, 
        { label: 'Sign Up', url: '/signup' },
        { label: 'Blog', url: '/blog' },
        { label: 'Contact', url: '/contact' }
      ],
      has_social: true,
      social_title: "Community",
      has_subscribe: true,
      subscribe_title: "Subscribe",
      subscribe_content: "Stay up to date with our latest developments.",
      content: "&copy; Stackbit. All rights reserved.",
      links: [
        { text: 'Made with Stackbit', url: 'https://www.stackbit.com', new_window: true }, 
      ]
    },
    socialLinks: [
      { type: "twitter", title: "Twitter", url: "https://twitter.com/" },
      { type: "instagram", title: "Instagram", url: "https://www.instagram.com/"  },
      { type: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/"  },
    ]
  },
  dest: "dist",
  plugins: {
    'feed': {
      canonical_base: 'https://myurl.com',
      posts_directories: ['/posts/'],
    }
  }
}