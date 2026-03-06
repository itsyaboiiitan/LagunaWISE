const SUPABASE_URL = 'https://ovfizhkvazdmmufezwzl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Zml6aGt2YXpkbW11ZmV6d3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1MjkzMjksImV4cCI6MjA4ODEwNTMyOX0.rnw8zsRXUlyLhQXU80AQ73ZY3IgSoYST-ZC92dkMyP8';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    const positions = Array.from(formData.getAll('positions[]')).join(', ');

    const userData = {
        last_name: formData.get('last_name'),
        first_name: formData.get('first_name'),
        middle_name: formData.get('middle_name'),
        birthday: formData.get('birthday'),
        gender: formData.get('gender'),
        city: formData.get('city'),
        email: formData.get('email'),
        field: formData.get('field'),
        preferred_positions: positions,
        q1: formData.get('q1'),
        q2: formData.get('q2'),
        q3: formData.get('q3')
    };

    const { data, error } = await _supabase
        .from('users')
        .insert([userData]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Registration Successful!");
        window.location.href = "registration.html";
    }
});
