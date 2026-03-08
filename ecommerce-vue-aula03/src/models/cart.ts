import type { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  private items: CartItem[] = [];

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

decrementItem(product: Product): void {
  const itemIndex = this.items.findIndex(item => item.product.id === product.id);

  // Sai se não encontrou
  if (itemIndex === -1) {
    return;
  }
  // Agora o TS sabe que itemIndex é válido (>= 0)
  // Use uma variável local para extrair o item
  const item = this.items[itemIndex] as CartItem;  // as CartItem força o TS a aceitar

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    this.items.splice(itemIndex, 1);
  }
}

  getTotalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getFinalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getItems(): CartItem[] {
    return [...this.items];
  }
}