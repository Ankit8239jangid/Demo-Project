// Add Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Image Upload Preview
    const productImageInput = document.getElementById('product-image');
    const previewImage = document.getElementById('preview-image');
    
    if (productImageInput && previewImage) {
        productImageInput.addEventListener('change', function() {
            const file = this.files[0];
            
            if (file) {
                const reader = new FileReader();
                
                reader.addEventListener('load', function() {
                    previewImage.src = reader.result;
                });
                
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Category Selection
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all categories
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // In a real app, this would update the subcategories based on the selected category
            // For now, we'll just log the selected category
            const categoryName = this.querySelector('span').textContent;
            console.log('Selected category:', categoryName);
        });
    });
    
    // Subcategory Selection
    const subcategoryItems = document.querySelectorAll('.subcategory-item');
    
    subcategoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all subcategories
            subcategoryItems.forEach(subcat => subcat.classList.remove('active'));
            
            // Add active class to clicked subcategory
            this.classList.add('active');
            
            // In a real app, this would update the form based on the selected subcategory
            // For now, we'll just log the selected subcategory
            const subcategoryName = this.querySelector('span').textContent;
            console.log('Selected subcategory:', subcategoryName);
        });
    });
    
    // Form Validation and Submission
    const productForm = document.querySelector('.product-form');
    const submitButton = productForm ? productForm.querySelector('.btn.primary-btn') : null;
    
    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form values
            const brandName = document.getElementById('brand-name').value.trim();
            const productName = document.getElementById('product-name').value.trim();
            const productColor = document.getElementById('product-color').value;
            const productQuantity = document.getElementById('product-quantity').value.trim();
            const productPrice = document.getElementById('product-price').value.trim();
            const sellingPrice = document.getElementById('selling-price').value.trim();
            
            // Get selected sizes
            const selectedSizes = [];
            document.querySelectorAll('input[name="size"]:checked').forEach(checkbox => {
                selectedSizes.push(checkbox.value);
            });
            
            // Validate form
            if (!brandName) {
                alert('Please enter a brand name');
                return;
            }
            
            if (!productName) {
                alert('Please enter a product name');
                return;
            }
            
            if (!productColor) {
                alert('Please select a color');
                return;
            }
            
            if (!productQuantity || isNaN(productQuantity) || parseInt(productQuantity) <= 0) {
                alert('Please enter a valid quantity');
                return;
            }
            
            if (!productPrice || isNaN(productPrice) || parseFloat(productPrice) <= 0) {
                alert('Please enter a valid product price');
                return;
            }
            
            if (!sellingPrice || isNaN(sellingPrice) || parseFloat(sellingPrice) <= 0) {
                alert('Please enter a valid selling price');
                return;
            }
            
            // Create product object
            const product = {
                brandName,
                productName,
                productColor,
                sizes: selectedSizes,
                quantity: parseInt(productQuantity),
                productPrice: parseFloat(productPrice),
                sellingPrice: parseFloat(sellingPrice),
                category: document.querySelector('.category-item.active span').textContent,
                subcategory: document.querySelector('.subcategory-item.active span').textContent
            };
            
            // In a real app, this would send the product data to the server
            // For now, we'll just log the product object
            console.log('Product data:', product);
            
            // Show success message
            alert('Product added successfully!');
            
            // Reset form
            document.getElementById('brand-name').value = '';
            document.getElementById('product-name').value = '';
            document.getElementById('product-color').value = '';
            document.getElementById('product-quantity').value = '';
            document.getElementById('product-price').value = '';
            document.getElementById('selling-price').value = '';
            
            document.querySelectorAll('input[name="size"]:checked').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Reset image preview
            previewImage.src = 'https://via.placeholder.com/200x200?text=Product+Image';
        });
    }
});
