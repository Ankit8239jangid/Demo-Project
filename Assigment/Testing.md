
# Shop Manager Web Application - Developer Guide & Requirements

Welcome to the Shop Manager Web Application, a responsive, interactive frontend project built with HTML, CSS, and JavaScript (including AJAX). This guide provides detailed instructions for setting up, running, testing, and understanding the application based on the provided Figma design.
## Testing the Application
This section outlines specific test cases to verify the application’s features, aligning with the assignment requirements.

### 1. Sales Page
- **Customer Search Functionality**:
  - Use the mobile number input field and "Search" button to test AJAX-based search.
  - **Test Cases**:
    - Enter `9876543210` → Expect "John Doe" with purchases (Watch: 2@$45.00, Mobile: 1@$65.00).
    - Enter `8765432109` → Expect "Jane Smith" with mock data.
    - Enter `7654321098` → Expect "Robert Johnson" with mock data.
    - Enter invalid number (e.g., `1234567890`) → Expect "No Details Found".
  - **Verification**: Ensure no page reload occurs; data updates dynamically.
- **Product and Payment**:
  - Click "Scan Product" and "Add More Items" to test button interactivity.
  - Enter a payment amount in "Enter Customer Given Amount" and verify "Change to return" calculation.

### 2. Exchange Page
- **Delete Functionality**:
  - Click the delete icon in the "Actions" column of the product table.
  - Expect a modal with "Are you sure you want to delete this item?" and "Cancel"/"Yes" options.
  - Test: Select "Yes" to remove a row, "Cancel" to close without changes.
- **Tab Filtering**:
  - Switch between "All", "Returned", and "Deleted" tabs to filter exchange history.
  - Verify table updates dynamically without reload.
- **Pagination**:
  - Click "Previous" and "Next" buttons to navigate exchange history.
  - Expect smooth transitions between data sets (e.g., 1-5 of 50 items).

### 3. Add Products Page
- **Image Upload**:
  - Click "Upload Product Image" and select an image file.
  - Verify the image preview updates in the designated area.
- **Category Selection**:
  - Test selecting categories (e.g., "Watches", "Chains") and subcategories (e.g., "Analog Watches", "Smart Watches").
  - Ensure active items highlight correctly (purple background, white text).
- **Form Submission**:
  - Fill out the form (Brand Name, Product Name, Color, Sizes, Quantity, Prices).
  - Click "Submit" to test form interactivity (no data persistence in demo).

## Notes & Limitations
- **Frontend-Only**: This is a static application with no backend or database integration.
- **Mock Data**: All data is sourced from JSON files in the `data/` directory (e.g., `customers.json`).
- **Non-Persistent Changes**: Actions like adding products or deleting items are temporary and reset on page refresh.
- **Responsive Design**: Test across devices (desktop, tablet, mobile) to ensure sidebar collapse and layout adjustments work as per the Figma design.
- **Dependencies**: No external libraries beyond Font Awesome (via CDN) are required.

## Contribution Guidelines
- Fork the repository and create a new branch for changes.
- Commit with clear messages (e.g., `git commit -m "Add sales.js for customer search"`).
- Push to your fork and submit a pull request.

## Contact
For questions or issues, contact the developer at `ankitjangid2232@gmail.com`.
