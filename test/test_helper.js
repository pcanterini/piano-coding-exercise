/*
  Makes expect and sinon available globally
  so it doesn't have to be imported manually
 */

import { expect } from 'chai';
import sinon from 'sinon';

global.expect = expect;
global.sinon = sinon;
