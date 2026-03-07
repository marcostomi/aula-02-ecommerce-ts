# Atividade Aula 02 - E-commerce com TypeScript

Implementação do sistema de e-commerce conforme solicitado na Aula 02, utilizando Programação Orientada a Objetos e tipagem avançada em TypeScript.

## Funcionalidades implementadas
- **Models base**:
  - `Category` (id, name)
  - `Product` (id, name, price, category: Category)
- **Gerenciamento de usuários**:
  - Interface `User` com `role` restrito a `"ADMIN" | "CUSTOMER"` (usando literal type)
- **Carrinho (Cart)**:
  - Interface `CartItem` (product + quantity)
  - Método `addItem()`: usa `.some()` para verificar se o produto já existe e acumular quantidade (evita duplicatas)
  - `getTotalItems()`: retorna soma total de unidades usando `.reduce()`
  - `getFinalPrice()`: calcula valor total da compra usando `.reduce()`

## Critérios atendidos
- Tipagem completa (sem `any`)
- Restrição de roles em tempo de compilação
- Acúmulo correto de quantidades de produtos repetidos
- Uso de High-Order Functions (.some() e .reduce()) conforme desafio

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install