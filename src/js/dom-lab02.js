import { assign as assignInput } from './section.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector('.cmp-main-container');
  const sectionTemplate = document.querySelector('template#tmp-section');
  const inputTemplate = document.querySelector('template#tmp-input');

  console.debug(mainContainer, sectionTemplate, inputTemplate);

  assignInput(mainContainer, sectionTemplate, inputTemplate);
});