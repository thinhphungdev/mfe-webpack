import faker from 'faker';

export function mount(element) {
  if (!element) return;
  let products = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  element.innerHTML = products;
  // ReactDOM.render(<App />, element)
}

// Running product application in isolation
if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('dev-products');
  mount(element);
}
