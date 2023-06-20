export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'PostImage',
      name: 'postImage',
      type: 'image',
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Password',
              name: 'password',
              type: 'string',
            },
            {
              title: 'Content',
              name: 'content',
              type: 'string',
            },
            {
              title: 'Created At',
              name: 'createdAt',
              type: 'datetime',
              initialValue: () => new Date().toISOString(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
    },
  },
  prepare(selection) {
    const {title, subtitle} = selection
    return {
      title,
      subtitle,
    }
  },
}
