var moment = require('moment');

module.exports = {
  posts: [
    {
      title: 'Title 1',
      description: 'description 1',
      image: {
        src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
        width: 100,
        height: 100
      },
      meta: {
        authorName: 'Hank',
        createdAt: moment().format('DD.MM.YYYY'),
        updatedAt: moment().format('DD.MM.YYYY'),
        countOfLikes: 0,
        id: 1
      }
    },
    {
      title: 'Title 2',
      description: 'description 2',
      image: {
        src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
        alt: 'Opps_2!',
        width: 100,
        height: 100
      },
      meta: {
        authorName: 'Hank',
        createdAt: moment().format('DD.MM.YYYY'),
        updatedAt: moment().format('DD.MM.YYYY'),
        countOfLikes: 11,
        id: 2
      }
    },
    {
      title: 'Title 3',
      description: 'description 3',
      image: {
        src: 'http://www.adolph-numerical.co.uk/images/100x100.gif',
        alt: 'Opps_3!',
        width: 100,
        height: 100
      },
      meta: {
        authorName: 'Hank',
        createdAt: moment().format('DD.MM.YYYY'),
        updatedAt: moment().format('DD.MM.YYYY'),
        countOfLikes: 12,
        id: 3
      }
    }
  ]
}
