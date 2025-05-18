import type { Service, ServiceSlug } from './data';

import { services } from './data';

export function serviceBySlug(slug: ServiceSlug) {
  return services[slug];
}

export function allServices(): Service[] {
  return Object.values(services);
}
