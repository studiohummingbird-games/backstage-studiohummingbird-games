import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const studiohummingbirdGamesPlugin = createPlugin({
  id: 'studiohummingbird-games',
  routes: {
    root: rootRouteRef,
  },
});

export const StudiohummingbirdGamesPage = studiohummingbirdGamesPlugin.provide(
  createRoutableExtension({
    name: 'StudiohummingbirdGamesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
