import { CLIENTS_IMG_URL } from "@core/config/paths";

interface ClientElement {
  image: string;
  name: string;
  slug: string;
}

export type Client = typeof clientsArray[number];

export type ClientSlug = (typeof clientsArray)[number]["slug"];

export const clientsArray = [
  {
    slug: "t-bank",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "ТПУ",
  },
  {
    slug: "vk-education",
    image: `${CLIENTS_IMG_URL}/vk.png`,
    name: "VK-education",
  },
  {
    slug: "modo",
    image: `${CLIENTS_IMG_URL}/modo.png`,
    name: "modo",
  },
  {
    slug: "t-bank2",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк2",
  },
  {
    slug: "t-bank3",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк3",
  },
  {
    slug: "t-bank4",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк4",
  },
  {
    slug: "t-bank5",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк5",
  },
  {
    slug: "t-bank6",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк6",
  },
  {
    slug: "t-bank7",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк7",
  },
  {
    slug: "t-bank8",
    image: `${CLIENTS_IMG_URL}/t-bank.png`,
    name: "Т-банк8",
  }
] as const satisfies readonly ClientElement[];

export const clients = clientsArray.reduce((acc, client) => {
  acc[client.slug] = client;
  return acc;
}, {} as Record<ClientSlug, Client>);
