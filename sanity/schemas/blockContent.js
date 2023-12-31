export default{
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'}
            ],
            lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Numbered', value: 'number'}
            ],
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                    {title: 'Underline', value: 'underline'},
                    {title: 'Strike', value: 'strike-through'},
                    {title: 'Code', value: 'code'},
                    {title: 'Highlight', value: 'highlight'},
                    {title: 'Subscript', value: 'sub'},,
                    {title: 'Superscript', value: 'sup'},
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            }
                        ]
                    }
                ]
            },
        },
    ]
}