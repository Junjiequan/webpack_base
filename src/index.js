import functions from './test';
import logo from './assets/logo.png';
import getUser from './api';
import './styles/main.scss';

const numbersArr = [1, 56, 6, 2, 534, 322, 21, 3, 6, 12];
const container = document.getElementsByClassName('container')[0];
const img = document.querySelector('[data-img]');
img.src = logo;
img.alt = 'logo';

const div = document.createElement('div');
div.className = 'style111';
const node = document.createTextNode(functions.sortArr(numbersArr));
div.appendChild(node);
container.appendChild(div);

const firstDiv = document.getElementsByClassName('style111')[0];
firstDiv.style.fontSize = '80px';
firstDiv.style.color = 'blue';

getUser();
