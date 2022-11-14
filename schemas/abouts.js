export default{
    name:'abouts',
    title:'Sobre',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Titulo',
            type:'string'
        },
        {
            name:'description',
            title:'Descrição',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Imagem do serviço',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}