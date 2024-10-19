document.addEventListener("DOMContentLoaded", function () {
  let foam = document.getElementById("resume-form") as HTMLFormElement;
  let display = document.getElementById("resume-output") as HTMLDivElement;
  let editButton = document.getElementById("edit-button") as HTMLButtonElement | null;
  let heading = document.getElementById("resume-heading") as HTMLHeadingElement | null;

   // Initial state: hide the edit button, resume-output, and resume-heading
   if (editButton) editButton.style.display = "none";
   if (display) display.style.display = "none";
   if (heading) heading.style.display = "block"; // Show heading initially

foam.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phonenum = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const skill = (document.getElementById("skill") as HTMLTextAreaElement).value;
  const exp = (document.getElementById("experience") as HTMLTextAreaElement)
    .value;

  const pic = document.querySelector(".one") as HTMLInputElement;
  const file = pic.files?.[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const imgsrc = e.target?.result as string;
    const resume = `
    <h1>RESUME</h1>
    <h2>PERSONAL INFORMATION</h2>
<P><b>Name:</b><span contenteditable="false">${name}</span></P>
     <p><b>Email:</b><span contenteditable="false">${email}</span</p>
     <p><b>Phone number:</b><span contenteditable="false">${phonenum}</span</p>
     <p><img src="${imgsrc}" alt="profile pic" </p>
     <h2>SKILL</h2>
     <p><b>Skills:</b><span contenteditable="false">${skill}</span></p>

     <h2>EDUCATION</h2> 
     <p><b>Education:</b><span contenteditable="false">${education}</span></p>

     <h2>EXPERIENCE</h2>
     <p><b>Experience:</b><span contenteditable="false">${exp}</span</p>`
     
    if (display) {
      display.style.display = "block";
      foam.style.display = "none"; // Hide the form
      display.innerHTML = resume;
      
      // After the resume is generated, show the edit button
      if (editButton) {
        editButton.style.display = "inline";
       
      }
      // Hide the heading after the form is hidden
      if (heading) {
        heading.style.display = "none";
      }
    }
  };
 if (file) {
    reader.readAsDataURL(file);
  }
});
  if (editButton) {
   editButton.addEventListener("click", function () {
// Return to the form (hide the resume and show the form again)
  display.style.display = "none"; // Hide the resume
   foam.style.display = "block";   // Show the form again
    editButton.style.display = "none"; // Hide the edit button until next resume generation
  
      // Show the heading again when returning to the form
      if (heading) {
        heading.style.display = "block";
       }
     });
    }
  });

