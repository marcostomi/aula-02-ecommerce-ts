<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>Categoria: {{ product.category.name }}</p>
    <p class="price">R$ {{ product.price.toFixed(2) }}</p>
    
    <div class="buttons">
      <button class="add-btn" @click="addToCart">Adicionar ao Carrinho</button>
      <button class="remove-btn" @click="removeFromCart">Remover 1</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Product } from '../models/product'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  },
  emits: ['add-to-cart', 'remove-from-cart'],
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.product)
    }
  }
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.8rem;
  width: 300px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-5px);
}
h3 {
  color: #1a237e;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}
p {
  color: #555;
  margin: 0.4rem 0;
}
.price {
  font-weight: bold;
  color: #2e7d32;
  font-size: 1.5rem;
  margin: 1rem 0;
}
.buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 1.2rem;
}
.add-btn {
  background: #43a047;
  color: white;
  border: none;
  padding: 0.9rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.add-btn:hover {
  background: #388e3c;
}
.remove-btn {
  background: #e53935;
  color: white;
  border: none;
  padding: 0.9rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.remove-btn:hover {
  background: #d32f2f;
}
</style>c