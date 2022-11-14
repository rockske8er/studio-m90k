export default{
    name:'experiences',
    title:'Experiências',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Ano',
            type:'string'
        },
        {
            name:'works',
            title:'Projetos',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}