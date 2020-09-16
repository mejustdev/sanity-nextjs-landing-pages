export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f626b189b99d33c1503d4b8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cp7zmy5g',
                  apiId: 'cd97e3f0-1914-4eab-9b6a-2928e47696b3'
                },
                {
                  buildHookId: '5f626b192bf496340e86b613',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bjh34boh',
                  apiId: 'ac3abe43-480d-4a9c-81ef-1a70bc339d43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mejustdev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bjh34boh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
