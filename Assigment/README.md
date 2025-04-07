# Shop Manager Web Application

A fully responsive, interactive three-page website for managing a shop's sales, product exchanges, and inventory.

## Features

- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop screens
- **Interactive UI:** Dynamic content updates using JavaScript and AJAX
- **Three Main Pages:**
  - Sales Page: Process sales transactions and search for customers
  - Exchange Page: Handle product returns and deletions with confirmation modals
  - Add Products Page: Add new products with image upload and categorization

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (with AJAX for dynamic content)
- Font Awesome for icons

## Project Structure

```
shop-manager/
├── css/
│   ├── styles.css       # Main styles
│   └── responsive.css   # Responsive design styles
├── js/
│   ├── main.js          # Common functionality
│   ├── sales.js         # Sales page functionality
│   ├── exchange.js      # Exchange page functionality
│   └── add-products.js  # Add products page functionality
├── data/
│   ├── customers.json   # Mock customer data
│   └── products.json    # Mock product data
├── index.html           # Sales page
├── exchange.html        # Exchange page
└── add-products.html    # Add products page
```

## Setup and Usage
- **Steps**:
- **Prerequisites**: Visual Studio Code with the "Live Server" extension installed.
- 1. Clone the repository
- 2. Open `index.html` in your web browser to access the Sales page
- 3. Navigate to other pages using the sidebar navigation
- 4. Select "Open with Live Server".
- 5. The app will open automatically in your default browser (e.g., `http://127.0.0.1:5500/index.html`).



## Mock Data

The application uses mock data stored in JSON files:

- `data/customers.json`: Contains customer information for the search functionality
- `data/products.json`: Contains product information for the product listings

## Features by Page

### Sales Page
- Customer search by mobile number
- Display of customer details and purchase history
- Product scanning and listing
- Payment processing with change calculation

### Exchange Page
- Product return and deletion functionality
- Confirmation modal for delete actions
- Product search
- Exchange history with filtering and pagination

### Add Products Page
- Image upload with preview
- Category and subcategory selection
- Detailed product information form
- Form validation

## Responsive Design

The application is fully responsive with three breakpoints:
- Desktop (default)
- Tablet (768px and below)
- Mobile (480px and below)
- Small Mobile (360px and below)

## Browser Compatibility

Tested and working on:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
