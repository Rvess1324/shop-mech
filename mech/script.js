// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const profileIcon = document.querySelector('#forprofile i');

    // Toggle sidebar when profile icon is clicked
    profileIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !profileIcon.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});