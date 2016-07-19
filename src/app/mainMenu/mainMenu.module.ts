/// <reference path="../../../typings/index.d.ts" />

import { MainMenuController } from './mainMenu.controller';
import { config } from './mainMenu.config';
import { routerConfig } from './mainMenu.route';

export module mainMenu {
  'use strict';

  angular.module('mainMenu', ['ui.router'])
    .config(config)
    .config(routerConfig)
    .controller('MainMenuController', MainMenuController);
}
