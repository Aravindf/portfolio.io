/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Servicenow Dev","UI Designer","Product Protoype Builder"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



const linkedinButton = document.getElementById('linkedin-button');
  
// Add a click event listener
linkedinButton.addEventListener('click', function() {
  // Replace 'your-url' with the provided URL
  const url = 'https://www.linkedin.com/in/aravind-s-b2a757207/';
  
  // Redirect to the specified URL
  window.open(url, '_blank');
});


const dribblebutton = document.getElementById('dribble');
  
// Add a click event listener
dribblebutton.addEventListener('click', function() {
  // Replace 'your-url' with the provided URL
  const url = 'https://dribbble.com/aravinds09';
  
  // Redirect to the specified URL
  window.open(url, '_blank');
});



const gittbtn = document.getElementById('gitt');
  
// Add a click event listener
gittbtn.addEventListener('click', function() {
  // Replace 'your-url' with the provided URL
  const url = 'https://github.com/Aravindf';
  
  // Redirect to the specified URL
  window.open(url, '_blank');
});



document.getElementById('hiremebtn').addEventListener('click', function() {
  // Get the user's logged-in email (you need to implement this part)
  // For demonstration purposes, I'll use a placeholder email
  const loggedInEmail = 'aravindbang09@gmail.com';

  // Construct the mailto link with subject and body
  const subject = 'Job Opportunity';
  const body = `Hi,\n\nI'm interested in discussing a job opportunity with you. Please let me know when you're available to chat.\n\nBest regards,`;
  const mailtoLink = `mailto:aravindbang09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${loggedInEmail}`;

  // Open default email client with pre-filled email form
  window.location.href = mailtoLink;
});


document.getElementById('cvbtn').addEventListener('click', function() {
  // Replace 'cv.pdf' with the actual URL of your CV file
  const cvUrl = 'file:///C:/Users/Aravind/OneDrive/Aravind%20Resume/Resume%20Aravind%20V1.pdf';

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = cvUrl;

  // Set the download attribute with the filename
  link.download = 'Aravind-CV.pdf';

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the click event on the link
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
});


