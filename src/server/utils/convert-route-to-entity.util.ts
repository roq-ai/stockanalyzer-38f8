const mapping: Record<string, string> = {
  analyses: 'analysis',
  criteria: 'criteria',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
