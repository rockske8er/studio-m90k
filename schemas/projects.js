export default {
    name: 'projects',
    title: 'Projetos',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titulo',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Descrição',
        type: 'string',
      },
      {
        name: 'project_link',
        title: 'Website',
        type: 'string',
      },
      {
        name: 'code_link',
        title: 'Link do Github',
        type: 'string',
      },
      {
        name: 'img_url',
        title: 'Capa',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };