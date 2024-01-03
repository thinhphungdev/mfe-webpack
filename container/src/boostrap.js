import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container');

productMount(document.getElementById('my-product'));
cartMount(document.getElementById('my-cart'));
