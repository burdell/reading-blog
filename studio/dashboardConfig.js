export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d0ca80c2492933d8dcad53',
                  title: 'Sanity Studio',
                  name: 'reading-blog-studio',
                  apiId: 'a4c79c1d-9b16-4bc9-8ffb-6c4ed039b440'
                },
                {
                  buildHookId: '61d0ca80add95e3b5246c225',
                  title: 'Blog Website',
                  name: 'reading-blog-web',
                  apiId: '9c3cf936-be3a-4ecc-bbd2-567698027df8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/burdell/reading-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://reading-blog-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
