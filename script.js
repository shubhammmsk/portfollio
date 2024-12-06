$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer","React JS Developer","Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer","React JS Developer","Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Initialize EmailJS with your user ID
emailjs.init('xhxwkoKbLCDcXkRkO'); // Replace 'your_user_id' with your actual EmailJS user ID

// Form submission handler
document.getElementById('contact').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Send the form data to EmailJS
  emailjs.send("service_2dza8kk","template_gnt4rxn", this)
    .then((response)=> {
      // Display a success message or alert
      console.log('Message sent successfully!');
    }, function(error) {
      // Display an error message if the request fails
      console.log('Failed to send message. Please try again later.');
    });
});

// const btn = document.getElementById('contact');

// document.getElementById('form')
//  .addEventListener('submit', function(e) {
//    e.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'service_2dza8kk';
//    const templateID = 'template_gnt4rxn';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });