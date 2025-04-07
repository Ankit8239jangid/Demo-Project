// Exchange Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Delete Button Functionality
    const deleteButtons = document.querySelectorAll('.delete-btn, .delete-icon');
    const deleteModal = document.getElementById('delete-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelDeleteBtn = document.getElementById('cancel-delete');
    const confirmDeleteBtn = document.getElementById('confirm-delete');
    let currentDeleteId = null;

    // Show delete confirmation modal
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentDeleteId = this.getAttribute('data-id');
            deleteModal.classList.remove('hidden');
        });
    });

    // Close modal when clicking the X button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            deleteModal.classList.add('hidden');
        });
    }

    // Close modal when clicking Cancel
    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', function() {
            deleteModal.classList.add('hidden');
        });
    }

    // Handle delete confirmation
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            if (currentDeleteId) {
                // In a real app, this would send a request to delete the item
                // For now, we'll just remove the row from the table
                let row = document.querySelector(`.delete-btn[data-id="${currentDeleteId}"]`);
                if (!row) {
                    row = document.querySelector(`.delete-icon[data-id="${currentDeleteId}"]`);
                }

                if (row) {
                    row.closest('tr').remove();
                }

                // Close the modal
                deleteModal.classList.add('hidden');
                currentDeleteId = null;
            }
        });
    }

    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const exchangeTableBody = document.getElementById('exchange-table-body');

    // Sample data for exchange history
    const exchangeData = [
        { id: 'P001', name: 'Watch', status: 'Returned', date: '12/05/2023', user: 'John Doe' },
        { id: 'P002', name: 'Chain', status: 'Deleted', date: '11/05/2023', user: 'Jane Smith' },
        { id: 'P003', name: 'Ring', status: 'Returned', date: '10/05/2023', user: 'John Doe' },
        { id: 'P004', name: 'Earrings', status: 'Deleted', date: '09/05/2023', user: 'Jane Smith' },
        { id: 'P005', name: 'Bracelet', status: 'Returned', date: '08/05/2023', user: 'John Doe' },
        { id: 'P006', name: 'Necklace', status: 'Deleted', date: '07/05/2023', user: 'Jane Smith' },
        { id: 'P007', name: 'Pendant', status: 'Returned', date: '06/05/2023', user: 'John Doe' },
        { id: 'P008', name: 'Anklet', status: 'Deleted', date: '05/05/2023', user: 'Jane Smith' },
        { id: 'P009', name: 'Bangle', status: 'Returned', date: '04/05/2023', user: 'John Doe' },
        { id: 'P010', name: 'Cufflinks', status: 'Deleted', date: '03/05/2023', user: 'Jane Smith' }
    ];

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 5;
    let filteredData = [...exchangeData];

    // Initialize exchange history table
    function updateExchangeTable() {
        if (!exchangeTableBody) return;

        // Clear the table
        exchangeTableBody.innerHTML = '';

        // Calculate start and end indices for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

        // Add rows for current page
        for (let i = startIndex; i < endIndex; i++) {
            const item = filteredData[i];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.status}</td>
                <td>${item.date}</td>
                <td>${item.user}</td>
            `;
            exchangeTableBody.appendChild(row);
        }

        // Update pagination info
        const pageInfo = document.getElementById('page-info');
        if (pageInfo) {
            pageInfo.textContent = ` ${startIndex + 1}-${endIndex} of ${filteredData.length}`;
        }

        // Update pagination buttons
        const prevPageBtn = document.getElementById('prev-page');
        const nextPageBtn = document.getElementById('next-page');

        if (prevPageBtn) {
            prevPageBtn.disabled = currentPage === 1;
        }

        if (nextPageBtn) {
            nextPageBtn.disabled = endIndex >= filteredData.length;
        }
    }

    // Handle tab clicks
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Filter data based on selected tab
            const tabType = this.getAttribute('data-tab');

            if (tabType === 'all') {
                filteredData = [...exchangeData];
            } else if (tabType === 'returned') {
                filteredData = exchangeData.filter(item => item.status === 'Returned');
            } else if (tabType === 'deleted') {
                filteredData = exchangeData.filter(item => item.status === 'Deleted');
            }

            // Reset to first page and update table
            currentPage = 1;
            updateExchangeTable();
        });
    });

    // Handle pagination
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updateExchangeTable();
            }
        });
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function() {
            if (currentPage * itemsPerPage < filteredData.length) {
                currentPage++;
                updateExchangeTable();
            }
        });
    }

    // Product Search Functionality
    const productSearchInput = document.getElementById('product-search');

    if (productSearchInput) {
        productSearchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim().toLowerCase();

                // In a real app, this would send a request to search for products
                // For now, we'll just log the search term
                console.log('Searching for:', searchTerm);

                // Clear the search input
                this.value = '';
            }
        });
    }

    // Initialize the exchange table
    updateExchangeTable();
});
