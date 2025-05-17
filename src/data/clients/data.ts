import { CLIENTS_IMG_URL } from '@/core/config/paths';

interface ClientElement {
  image: string;
  link: string;
  name: string;
  slug: string;
}

export type Client = typeof clientsArray[number];

export type ClientSlug = (typeof clientsArray)[number]['slug'];

export const clientsArray = [
  {
    slug: 't-bank',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 'vk-education',
    image: `${CLIENTS_IMG_URL}/vk.png`,
    name: 'VK-education',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 'modo',
    image: `${CLIENTS_IMG_URL}/modo.png`,
    name: 'modo',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank2',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank3',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank4',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank5',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank6',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  },
  {
    slug: 't-bank7',
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: 'Т-банк',
    link: 'https://www.tbank.ru/'
  }
] as const satisfies readonly ClientElement[];

export const clients = clientsArray.reduce((acc, client) => {
  acc[client.slug] = client;
  return acc;
}, {} as Record<ClientSlug, Client>);
