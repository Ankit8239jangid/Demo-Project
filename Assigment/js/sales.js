// Sales Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Customer Search Functionality
    const searchBtn = document.getElementById('search-btn');
    const mobileNumberInput = document.getElementById('mobile-number');
    const customerDetails = document.getElementById('customer-details');
    const noDetails = document.getElementById('no-details');
    const customerNameElement = document.getElementById('customer-name');
    const lastPurchasesTable = document.getElementById('last-purchases');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchCustomer();
        });
    }
    
    if (mobileNumberInput) {
        mobileNumberInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCustomer();
            }
        });
    }
    
    function searchCustomer() {
        const mobileNumber = mobileNumberInput.value.trim();
        
        // Validate mobile number (10 digits)
        if (!/^\d{10}$/.test(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }
        
        // Show loading state
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        
        // Simulate AJAX request with setTimeout
        setTimeout(function() {
            // Fetch customer data (in a real app, this would be an AJAX call)
            fetch('data/customers.json')
                .then(response => response.json())
                .then(data => {
                    const customer = data.find(c => c.mobile === mobileNumber);
                    
                    if (customer) {
                        // Display customer details
                        customerNameElement.textContent = customer.name;
                        
                        // Clear previous purchases
                        lastPurchasesTable.innerHTML = '';
                        
                        // Add purchases to table
                        customer.lastPurchases.forEach(purchase => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${purchase.productName}</td>
                                <td>${purchase.quantity}</td>
                                <td>$${purchase.price.toFixed(2)}</td>
                            `;
                            lastPurchasesTable.appendChild(row);
                        });
                        
                        // Show customer details, hide no details message
                        customerDetails.classList.remove('hidden');
                        noDetails.classList.add('hidden');
                    } else {
                        // Show no details message, hide customer details
                        customerDetails.classList.add('hidden');
                        noDetails.classList.remove('hidden');
                    }
                    
                    // Reset button state
                    searchBtn.disabled = false;
                    searchBtn.innerHTML = 'Search';
                })
                .catch(error => {
                    console.error('Error fetching customer data:', error);
                    alert('Error fetching customer data. Please try again.');
                    
                    // Reset button state
                    searchBtn.disabled = false;
                    searchBtn.innerHTML = 'Search';
                });
        }, 1000); // Simulate network delay
    }
    
    // Payment Calculation
    const customerAmountInput = document.getElementById('customer-amount');
    const totalAmountElement = document.querySelector('.payment-value');
    const changeElement = document.querySelectorAll('.payment-value')[1];
    
    if (customerAmountInput && totalAmountElement && changeElement) {
        customerAmountInput.addEventListener('input', function() {
            calculateChange();
        });
        
        function calculateChange() {
            const customerAmount = parseFloat(customerAmountInput.value) || 0;
            const totalAmount = parseFloat(totalAmountElement.textContent.replace('$', '')) || 0;
            
            const change = customerAmount - totalAmount;
            
            if (change >= 0) {
                changeElement.textContent = '$' + change.toFixed(2);
                changeElement.style.color = '#2c3e50';
            } else {
                changeElement.textContent = '-$' + Math.abs(change).toFixed(2);
                changeElement.style.color = '#e74c3c';
            }
        }
    }
});
