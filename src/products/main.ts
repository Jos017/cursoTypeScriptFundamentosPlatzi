import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});
addProduct({
  title: 'Pro2',
  createdAt: new Date(1995, 12, 12),
  stock: 4,
  size: 'M',
});

console.log(products);
const total = calcStock();
console.log(total);
