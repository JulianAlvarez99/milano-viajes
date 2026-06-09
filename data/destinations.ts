export type Destination = {
  id: string;
  name: string;
  country: string;
  category: 'nacional' | 'internacional';
  image: string;
};

export const destinations: Destination[] = [
  {
    id: 'bariloche',
    name: 'Bariloche',
    country: 'Argentina',
    category: 'nacional',
    image: '/images/destinations/bariloche.jpg',
  },
  {
    id: 'cancun',
    name: 'Cancún',
    country: 'México',
    category: 'internacional',
    image: '/images/destinations/cancun.jpg',
  },
  {
    id: 'roma',
    name: 'Roma',
    country: 'Italia',
    category: 'internacional',
    image: '/images/destinations/roma.jpg',
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Perú',
    category: 'internacional',
    image: '/images/destinations/machu-picchu.jpg',
  },
  {
    id: 'cataratas-iguazu',
    name: 'Cataratas del Iguazú',
    country: 'Argentina',
    category: 'nacional',
    image: '/images/destinations/cataratas-iguazu.png',
  },
  {
    id: 'paris',
    name: 'París',
    country: 'Francia',
    category: 'internacional',
    image: '/images/destinations/paris.jpg',
  },
];
