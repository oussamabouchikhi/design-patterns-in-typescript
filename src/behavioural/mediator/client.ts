// The Mediator Use Case Example

import Component from './component';
import Mediator from './mediator';

const MEDIATOR = new Mediator();
const COMPONENT1 = new Component(MEDIATOR, 'Component1');
const COMPONENT2 = new Component(MEDIATOR, 'Component2');
const COMPONENT3 = new Component(MEDIATOR, 'Component3');

MEDIATOR.add(COMPONENT1);
MEDIATOR.add(COMPONENT2);
MEDIATOR.add(COMPONENT3);

COMPONENT1.notify('data A');
COMPONENT2.notify('data B');
COMPONENT3.notify('data C');

/* OUTPUT
~ node ./dist/behavioural/mediator/client.js

Component1: >>> Out >>> : data A
Component2: <<< In <<< : data A
Component3: <<< In <<< : data A
Component2: >>> Out >>> : data B
Component1: <<< In <<< : data B
Component3: <<< In <<< : data B
Component3: >>> Out >>> : data C
Component1: <<< In <<< : data C
Component2: <<< In <<< : data C

*/
