import type { Client, ClientSlug } from "./data";

import { clients } from "./data";

export function allClients(): Client[] {
  return Object.values(clients);
}

export function clientBySlug(slug: ClientSlug): Client {
  return clients[slug];
}
