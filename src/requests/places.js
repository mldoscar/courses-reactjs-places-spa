import uuid from 'uuid';

export default {
  places: [
    {
      id: uuid(),
      imageUrl: '/images/place-1.jpg',
      title: 'Reprehenderit laboris',
      description: 'Voluptate voluptate ex ipsum culpa irure amet laborum.',
      address: 'Voluptate occaecat minim cillum dolor nostrud qui.'
    },
    {
      id: uuid(),
      imageUrl: '/images/place-2.jpg',
      title: 'Lorem ut nisi dolore',
      description: 'Sunt consequat laboris ea non consequat.',
      address: 'Reprehenderit adipisicing ea reprehenderit ipsum esse culpa laboris dolore ex.'
    },
    {
      id: uuid(),
      imageUrl: '/images/place-3.jpg',
      title: 'Aute non eiusmod excepteur',
      description: 'Ea commodo qui enim anim et.',
      address: 'Elit consectetur minim eiusmod commodo nulla Lorem elit adipisicing officia exercitation.'
    },
  ]
}