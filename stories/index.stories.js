import './_index.scss';
import './form.scss';
import './card.scss';
import './icon.scss';

import button from './button.html';
import form from './form.html';
import card from './card.html';
import icon from './icon.html';

export default {
  title: 'Catalog',
};

export const Button = () => button;
export const Form = () => form;
export const Card = () => card;
export const Icon = () => icon;