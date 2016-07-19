/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';

module angularTetris {
  'use strict';

  angular.module('angularTetris', ['mainMenu'])
    .config(config);
}
