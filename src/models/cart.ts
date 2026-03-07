import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  private items: CartItem[] = [];

  // Método addItem com .some() (desafio)
  addItem(product: Product, quantity: number = 1): void {
    if (quantity <= 0) return;

    const updated = this.items.some(item => {
      if (item.product.id === product.id) {
        item.quantity += quantity;
        return true;
      }
      return false;
    });

    if (!updated) {
      this.items.push({ product, quantity });
    }
  }

  // Total de unidades com .reduce()
  getTotalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Valor total com .reduce()
  getFinalPrice(): number {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // Útil para ver o carrinho
  getItems(): readonly CartItem[] {
    return Object.freeze([...this.items]);
  }

  clear(): void {
    this.items = [];
  }
}