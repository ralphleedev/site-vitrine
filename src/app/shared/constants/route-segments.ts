const routeSegments = {
  home: '',
  about: 'about',
  projects: 'projects',
  contact: 'contact',
  legal: 'legal',
} as const;

// for Angular route config (`path`) — used exactly as-is
export const RoutePaths = routeSegments;

// for routerLink bindings — same values, each prefixed with '/'
export const AppRoutes = Object.fromEntries(
  Object.entries(routeSegments).map(([key, value]) => [key, '/' + value])
) as { [K in keyof typeof routeSegments]: `/${typeof routeSegments[K]}` };

export type AppRoute = typeof AppRoutes[keyof typeof AppRoutes];