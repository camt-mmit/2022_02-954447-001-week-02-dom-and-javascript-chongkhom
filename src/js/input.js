function calculateTotal(inputsContainer, resultComponent) {
    const inputs = [...inputsContainer.querySelectorAll('input[type="number"]')];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

    resultComponent.value = total;
  }
  
  function rebuildIndex(inputsContainer) {
    const inputContainers = [
      ...inputsContainer.querySelectorAll('.cmp-input-container'),
    ];
  
    inputContainers.forEach((inputContainer, i) => {
      [...inputContainer.querySelectorAll('.cmp-input-no')].forEach((elem) => {
        elem.innerText = i + 1;
      });

      [...inputContainer.querySelectorAll('.cmd-remove-input')].forEach(
        (elem) => {
        elem.disabled = inputContainers.length > 1 ? false : true;
        },
      );
    });
  }
  
  function add(inputsContainer, resultComponent, template) {
    const fragment = template.content.cloneNode(true);
  
    inputsContainer.append(fragment);
  
    rebuildIndex(inputsContainer);
    calculateTotal(inputsContainer, resultComponent);
  }
  
  function remove(inputsContainer, resultComponent, inputContainer) {
    inputContainer.remove();
  
    rebuildIndex(inputsContainer);
    calculateTotal(inputsContainer, resultComponent);
  }
  
  export function assign(inputSection, inputTemplate) {
    const inputsContainer = inputSection.querySelector('.cmp-inputs-container');
    const resultComponent = inputSection.querySelector('.cmp-result');
  
    inputSection.addEventListener('click', (ev) => {
      if (ev.target.matches('.cmd-add-input')) {
        add(inputsContainer, resultComponent, inputTemplate);
      }
    });
  
    inputsContainer.addEventListener('change', (ev) => {
      if (ev.target.matches('input[type="number"]')) {
        calculateTotal(inputsContainer, resultComponent);
      }
    });
  
    inputsContainer.addEventListener('click', (ev) => {
      if (ev.target.matches('.cmd-remove-input')) {
        const inputContainer = ev.target.closest('.cmp-input-container');
        remove(inputsContainer, resultComponent, inputContainer);
      }
    });
  
    add(inputsContainer, resultComponent, inputTemplate);
  }