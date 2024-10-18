const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
form.addEventListener("submit",(event: Event) =>{
    event.preventDefault();
    // collect input value

    const name =(document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("email") as HTMLInputElement).value
    const phone =(document.getElementById("phone") as HTMLInputElement).value
    const education =(document.getElementById("education") as HTMLInputElement).value
    const skills =(document.getElementById("skills") as HTMLInputElement).value
    const experience =(document.getElementById("experience") as HTMLInputElement).value
    
    // Genertae the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Persnol Information</h3>
    <p><b>Name:</b>${name}</b>
    <p><b>Email:</b>${email}</b>
    <p><b>Phone:</b>${phone}</b>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>SKills</h3>
    <p>${skills}</p>

    <h3>Experience</h3>
    <p>${experience}</p>
    `;

    // Display the generted resume 
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error("The resume dislay element is missing");
    }
});
