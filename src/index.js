"use strict";
import _ from 'lodash';
import {DisplayController, Player} from './myModule.js'
import './reset.css';
import './style.css';


DisplayController.saySomething("HelloWorld");
const alan = Player("Alan");
console.log(alan.getPlayer());

function component() {
    const element = document.createElement('div');
  
    // Lodash, imported
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hi");
  
    return element;
  }
  
  document.body.appendChild(component());