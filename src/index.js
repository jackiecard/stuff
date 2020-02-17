import _ from 'lodash';
import './styles/index.scss';

function component() {
  const element = document.createElement('div');
  element.classList.add('contact-form')
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());