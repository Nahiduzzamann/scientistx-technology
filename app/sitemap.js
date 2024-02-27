export default function sitemap() {
    return [
      {
        url: 'https://scientistx.tech',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://scientistx.tech/pages/Login',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://scientistx.tech/pages/Service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }