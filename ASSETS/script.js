function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function sayHello(){
    alert(`Hello ji, Kaise ho?`);
  }



  function sendFunction(){
    let nameInput=document.getElementById("form-name").value;
    let emailInput=document.getElementById("form-mail").value;
    let messageInput=document.getElementById("form-message").value;
    document.getElementById("contact-output").innerHTML=`Thanks ${nameInput} for connecting your message has been sent!`;
    document.getElementById("form-name").value="";
    document.getElementById("form-mail").value="";
    document.getElementById("form-message").value="";
  }

  function underCons(){
    alert("This Functionality is under maintenance");
  }
  function projectLive(){
    
    alert("This Project will be live in few hours.");
  }