import { addTwo } from './utils.js';

export function doSomething() {
  console.log('From function');
}

export function moreSomething() {
  console.log('Another function');
}

console.log(addTwo(4));
