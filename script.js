    function toggleSidebar(){
        const sidebar = document.getElementById('sidebar')
        const toggleButton = document.getElementById('toggle-btn')

        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')

        Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
            ul.classList.remove('show')
            ul.previousElementSibling.classList.remove('rotate')
        })
    }

    function toggleSubMenu(button){
        button.nextElementSibling.classList.toggle('show')
        button.classList.toggle('rotate')

        if(sidebar.classList.contains('close')){
            sidebar.classList.toggle('close')
            toggleButton.classList.toggle('rotate')
        }
    }

    function updatePHST() {
        const now = new Date();
        const dateOptions = { 
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        document.getElementById('real-date').innerText = now.toLocaleDateString('en-PH', dateOptions).toUpperCase();
        
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        document.getElementById('real-time').innerText = now.toLocaleTimeString('en-PH', timeOptions);
    }
    setInterval(updatePHST, 1000);
    updatePHST();

function entrySequence() {
    const loader = document.getElementById('pre-loader');
    
    if (loader) {
        // Step 1: Fade out the loader
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        
        // Step 2: Fade in the actual content
        document.body.classList.add('reveal-content');
        
        // Step 3: Delete loader from memory after fade
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('repassword');

    if (form) {
        form.addEventListener('submit', (e) => {
            if (password.value !== confirmPassword.value) {
                e.preventDefault();
                alert("Passwords do not match!");
                confirmPassword.style.borderColor = "red";
            } else {
                alert("Registration Successful!");
            }
        });
    }
});