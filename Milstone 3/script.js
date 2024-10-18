// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Add event listener for form submission
    document.getElementById('resume-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from reloading the page

        // Get values from form inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('number').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;

        // Create dynamic content for the resume
        const resumeContent = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the generated resume in the 'resume-display' div
        document.getElementById('resume-display').innerHTML = resumeContent;
    });

});
