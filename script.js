// Splash timeout
setTimeout(() => {
    navigate('welcome');
}, 3000);

// Navigation
function navigate(screen) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelector(`.${screen}-screen`).classList.add('active');
}

// Toggle password
function togglePassword(id, el) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
        el.textContent = '🙈';
    } else {
        input.type = 'password';
        el.textContent = '👁';
    }
}

// Toggle dropdown
function toggleMenu() {
    document.getElementById('dropdownMenu').classList.toggle('active');
}

// Clear placeholder
function clearPlaceholder(input) {
    input.placeholder = '';
}

// Change theme
function changeTheme(theme) {
    document.body.className = `theme-${theme}`;
}

// Send message simulation
function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    const chatArea = document.getElementById('chatArea');
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;

    chatArea.appendChild(userMsg);
    input.value = '';
    chatArea.scrollTop = chatArea.scrollHeight;
}

function toggleThemeDropdown() {
    const themeDropdown = document.getElementById('themeDropdown');
    themeDropdown.style.display = themeDropdown.style.display === 'flex' ? 'none' : 'flex';
}

