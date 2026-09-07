# 🛒 ShopNico

A responsive shopping cart application built with React as my first practical React Project.

## 🌐 Live Demo

[View ShopNico](https://nico-devstudio.github.io/shopnico/)

## 💻 Repository

[View source code](https://github.com/nico-devstudio/shopnico)

## 🚀 Features

- Display products
- Add products to cart
- Increase and decrease cart quantities
- Remove individual cart items
- Clear the entire cart
- Search products
- Filter products by category
- Display remaining stock
- Prevent adding products when stock reaches zero
- Calculate item subtotals
- Calculate total items
- Calculate total cart value
- Checkout functionality
- Automatically deduct purchased quantities from product stock
- Display a checkout success message
- Responsive design for desktop, tablet, and mobile

## 🧠 React Concepts Practiced

This project was built to practice the fundamentals of React, including:

- Components
- Props
- State with `useState`
- State lifting
- Event handling
- Controlled inputs
- Conditional rendering
- Rendering lists with `map()`
- Filtering data with `filter()`
- Finding items with `find()`
- Calculating values with `reduce()`
- Immutable state updates
- Functional state updates
- Derived data
- Passing callback functions between components

## 🏗️ Component Structure

```text
App
├── Products
│   └── Product
└── Cart
    └── CartItem
```

### App

The main component owns the application's state and handles:

- Cart state
- Product inventory
- Search state
- Category state
- Checkout functionality
- Stock updates

### Products

Responsible for:

- Search input
- Category selection
- Product filtering
- Calculating remaining stock
- Rendering the product list

### Product

Responsible for displaying an individual product and its available stock.

### Cart

Responsible for:

- Rendering cart items
- Calculating total items
- Calculating total price
- Clearing the cart
- Checkout

### CartItem

Responsible for displaying an individual cart item and its:

- Quantity controls
- Remove button
- Price
- Subtotal

## 🛠️ Technologies

- React
- JavaScript
- Vite
- CSS
- HTML

## ▶️ Getting Started

Clone the repository:

```bash
git clone https://github.com/nico-devstudio/shopnico.git
```

Navigate into the project directory:

```bash
cd shopnico
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL provided by Vite.

## 📱 Responsive Design

The application adapts to different screen sizes:

- Desktop
- Tablet
- Mobile

## 🎯 Purpose

This project was created as a practical exercise to strengthen my understanding of React fundamentals before moving on to more advanced React concepts.

## 📚 Project Status

**Project 1 — Completed ✅**
