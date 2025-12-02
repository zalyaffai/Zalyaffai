// Simple password protection for approved instructors
const approvedUsers = [
    { username: "instructor1", password: "securepass123" },
    { username: "instructor2", password: "martialarts2024" }
];

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = approvedUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'admin/dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid credentials';
    }
});

// Check authentication on admin pages
if (window.location.pathname.includes('/admin/')) {
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = '../login.html';
    }
}
