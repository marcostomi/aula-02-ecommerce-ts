<template>
  <div class="app">
    <h1>E-commerce Vue.js - Aula 03</h1>

    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
      />
    </div>

    <div class="cart-summary">
      <h2>Carrinho</h2>
      <p>Total de itens: {{ cart.getTotalItems() }}</p>
      <p>Valor total: R$ {{ cart.getFinalPrice().toFixed(2) }}</p>

      <ul v-if="cart.getItems().length > 0">
        <li v-for="item in cart.getItems()" :key="item.product.id">
          {{ item.product.name }} × {{ item.quantity }} = R$ {{ (item.product.price * item.quantity).toFixed(2) }}
          <button class="remove-btn" @click="removeFromCart(item.product)">- Remover 1</button>
        </li>
      </ul>
      <p v-else>Carrinho vazio</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from './components/ProductCard.vue'
import type { Product } from './models/product'
import type { Category } from './models/category'
import { Cart } from './models/cart'

export default defineComponent({
  components: { ProductCard },

  data() {
    const eletronicos: Category = { id: 1, name: 'Eletrônicos' }

    const products: Product[] = [
      { id: 1, name: 'iPhone 16 Pro', price: 8999.90, category: eletronicos },
      { id: 2, name: 'MacBook Air M3', price: 12499.00, category: eletronicos },
      { id: 3, name: 'AirPods Pro', price: 1499.00, category: eletronicos }
    ]

    return {
      products,
      cart: new Cart()
    }
  },

  methods: {
    addToCart(product: Product) {
      this.cart.addItem(product)
    },

    removeFromCart(product: Product) {
      this.cart.decrementItem(product)
      this.cart = { ...this.cart } // força atualização da tela
    }
  }
})
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  min-height: 100vh;
}
h1 {
  text-align: center;
  color: #4a148c;
  margin-bottom: 2.5rem;
  font-size: 2.8rem;
}
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.cart-summary {
  margin-top: 4rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.cart-summary h2 {
  color: #4a148c;
  margin-bottom: 1.5rem;
}
.cart-summary p {
  font-size: 1.2rem;
  margin: 0.8rem 0;
  color: #333;
}
ul {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}
li {
  margin: 1rem 0;
  font-size: 1.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: #f5f5f5;
  border-radius: 8px;
}
.remove-btn {
  background: #d32f2f;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
}
.remove-btn:hover {
  background: #b71c1c;
}
</style>