const form = document.getElementById("resume-form") as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement | null;

// Ensure form and resumeDisplayElement exist before proceeding
if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Collect input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

        // Generate the resume content dynamically
        const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>

        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        `;

        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error("The form or resume display element is missing");
}
