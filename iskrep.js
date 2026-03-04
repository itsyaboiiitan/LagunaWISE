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