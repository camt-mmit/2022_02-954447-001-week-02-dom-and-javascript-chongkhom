function calculateTotal(container, resultComponent) {
    const inputs = [...container.querySelectorAll('input[type="number"]')];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
    resultComponent.value = total;
  }
  
  function add(container, resultComponent, template) {
    const fragment = template.content.cloneNode(true);
    const title = fragment.querySelector('.cmp-input-title');
    const input = fragment.querySelector('input[type="number"]');
  
    container.append(fragment);
  
    const nextN = container.querySelectorAll('input[Type="number"]').length;
    title.innerText = `Number ${nextN}`;
  
    input.addEventListener('change', () => {
      const inputs = [...container.querySelectorAll('input[type="number"]')];
      const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
      resultComponent.value = total;
    });
  }
  //ดึง input number ออกมา
  document.addEventListener('DOMContentLoaded', () => {
    // run script when dom เสร็จ
    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const resultComponent = document.querySelector('output.cmp-result');
    const template = document.querySelector('template#tmp-input');
  
    document.querySelector('.cmd-add-input').addEventListener('click', () => {
      add(inputsContainer, resultComponent, template);
    });
    add(inputsContainer, resultComponent, template);
  });