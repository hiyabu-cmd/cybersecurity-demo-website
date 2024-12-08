<script>
    // Function to simulate the cybersecurity test and show results
    function runTest() {
        const url = document.getElementById('url').value.trim();
        if (url) {
            document.getElementById('results').style.display = 'block';

            // Mock the results
            document.getElementById('portResult').innerText = 'Pass';
            document.getElementById('httpResult').innerText = 'Fail';
            document.getElementById('httpMaliciousResult').innerText = 'Pass';
            document.getElementById('httpsResult').innerText = 'Pass';
            document.getElementById('httpsMaliciousResult').innerText = 'Fail';
        } else {
            alert("Please enter a valid URL.");
        }
    }

    // Smooth scrolling function when clicking on navigation links or buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth',   // Enables smooth scrolling
                block: 'start'        // Aligns the section at the top
            });
        });
    });
</script>
