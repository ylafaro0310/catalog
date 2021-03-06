import React from 'react';
import './_index.scss';
import './form.scss';
import './card.scss';
import './icon.scss';
import './calendar.scss';


import button from './button.html';
import form from './form.html';
import card from './card.html';
import icon from './icon.html';
import calendar from './calendar.html';

export default {
  title: 'Catalog',
};


export const Button = () => button;
export const Form = () => form;
export const Card = () => card;
export const Icon = () => icon;
export const Calendar = () => calendar;
