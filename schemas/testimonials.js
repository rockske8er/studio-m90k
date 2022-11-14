export default {
  name: 'testimonials',
  type: 'document',
	title: 'Depoimentos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'company',
      type: 'string',
      title: 'Empresa'
    },
    {
      name: 'image_url',
      type: 'image',
      title: 'Imagem',
      options:{
        hotspot:true
      }
    },
    {
      name: 'feedback',
      type: 'string',
      title: 'Feedback'
    },

  ]
}