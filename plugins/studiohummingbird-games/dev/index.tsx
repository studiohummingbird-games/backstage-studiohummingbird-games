import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { studiohummingbirdGamesPlugin, StudiohummingbirdGamesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(studiohummingbirdGamesPlugin)
  .addPage({
    element: <StudiohummingbirdGamesPage />,
    title: 'Root Page',
    path: '/studiohummingbird-games'
  })
  .render();
