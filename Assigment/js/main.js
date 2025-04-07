// Main JavaScript for Shop Manager

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle Functionality
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Submenu Toggle Functionality
    const submenuItems = document.querySelectorAll('.has-submenu > a');
    
    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
    
    // Check if we're on a mobile device and collapse sidebar by default
    function checkScreenSize() {
        if (window.innerWidth <= 768 && sidebar) {
            sidebar.classList.add('collapsed');
        } else if (sidebar) {
            sidebar.classList.remove('collapsed');
        }
    }
    
    // Initial check
    checkScreenSize();
    
    // Check on resize
    window.addEventListener('resize', checkScreenSize);
});
