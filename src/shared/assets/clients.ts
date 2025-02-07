interface ClientElement {
  image: string;
  link: string;
  name: string;
  slug: string;
}

export const clients = [
  {
    slug: 't-bank',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 'vk-education',
    image: '/images/clients/vk.png',
    name: 'VK-education',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 'modo',
    image: '/images/clients/modo.png',
    name: 'modo',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank2',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank3',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank4',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank5',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank6',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank7',
    image: '/images/clients/t-bank.png',
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  }
] as const satisfies readonly ClientElement[];
