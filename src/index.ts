import { Cart } from './models/cart';
import { Product } from './models/product';
import { Category } from './models/category';

const eletronicos: Category = { id: 1, name: "Eletrônicos" };

const iphone: Product = {
  id: 101,
  name: "iPhone 16 Pro",
  price: 8999.90,
  category: eletronicos,
};

const notebook: Product = {
  id: 102,
  name: "MacBook Air M3",
  price: 12499.00,
  category: eletronicos,
};

const carrinho = new Cart();

carrinho.addItem(iphone, 2);
carrinho.addItem(notebook, 1);
carrinho.addItem(iphone, 3); // deve somar → total 5 iPhones

console.log("Itens no carrinho:", carrinho.getItems());
console.log("Total de unidades:", carrinho.getTotalItems());     // Esperado: 6
console.log("Valor total: R$", carrinho.getFinalPrice().toFixed(2));