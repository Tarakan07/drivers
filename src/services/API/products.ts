import { TProductsRes } from './type'

export const getAllProducts = (): Promise<TProductsRes> => {
  const DATA = [
    {
      id: 1,
      label: 'Iphone',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti?',
    },
    {
      id: 2,
      label: 'Android',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti?',
    },
    {
      id: 3,
      label: 'TV',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti?',
    },
    {
      id: 4,
      label: 'Laptop',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora?',
    },
    {
      id: 5,
      label: 'Tablet',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia!',
    },
    {
      id: 6,
      label: 'Smartwatch',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quas?',
    },
    {
      id: 7,
      label: 'Headphones',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem.',
    },
    {
      id: 8,
      label: 'Speaker',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quaerat!',
    },
    {
      id: 9,
      label: 'Camera',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore.',
    },
    {
      id: 10,
      label: 'Printer',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquam.',
    },
    {
      id: 11,
      label: 'Router',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorum.',
    },
    {
      id: 12,
      label: 'Gaming Console',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum.',
    },
    {
      id: 13,
      label: 'VR Headset',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt.',
    },
  ]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ products: DATA })
    }, 2000)
  })
}
