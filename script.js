// Purpose: This file contains the scripting for the website.
// Project: 3D Portfolio
document.addEventListener("DOMContentLoaded", () => {
  // Header Scripting starts
  const header = document.querySelector("#myheader");
  const menu = document.querySelector(".menu");
  const menuLine = document.querySelectorAll(".menu_line")
  const nav = document.querySelector(".navigation");

  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuLine.forEach(line => {
      line.classList.toggle("active");
    });
  });

  // window.addEventListener("scroll", ()=>{
  //   if(window.scrollY >= 100){
  //     header.classList.add("active");
  //   }
  //   else{
  //     header.classList.remove("active");
  //   }
  // });



  // Header scripting ends

  // Scroller Scripting starts
  const text = document.querySelector('.scroller_text p');
 text.innerHTML = text.innerText.split("").map(
  (char, i) => 
  `<span style ="transform:rotate(${i * 12}deg)">${char}</span>`
).join("");
// Scroller Scripting ends

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);
const heroSection = document.querySelector('.hero_sec');
const herobg = document.querySelector('#hero_bg_container');
const heroMsg = document.querySelector('.hello_msg');
const heroChar = document.querySelector('.boy_img');
const SocialIcons = document.querySelector('.socialicons_container');
const ScrollDownImg = document.querySelector('#scroller_img_container');
const myIntro = document.querySelector('#myIntro_container');
const webDev = document.querySelector('#webDev_container');

const Serv_Intro = document.querySelector('.serv_intro');
const briefServ_smry = document.querySelector('.brief_serv_smry');

const aboutSec = document.querySelector(".about_sec");
const aboutSecContent = document.querySelector(".about_content-column_container");
const aboutSecImgs = document.querySelector(".about_img_column_container");

const skillSec = document.querySelector(".skill_sec");
const skillSecTitle = document.querySelector(".skill_sec_title");
const skillSecIntro = document.querySelector(".skill_sec_intro");
const skillSecItems = document.querySelector(".skill_sec_items");

const serviceSec = document.querySelector(".services_sec");
const serviceSecHeading = document.querySelector(".service_sec_heading");
const ServiceSecItem1 = document.querySelector(".service_sec_items #service_sec_item1");
const ServiceSecItem2 = document.querySelector(".service_sec_items #service_sec_item2");
const ServiceSecItem3 = document.querySelector(".service_sec_items #service_sec_item3");
const ServiceSecItem4 = document.querySelector(".service_sec_items #service_sec_item4");

const projectSec = document.querySelector(".project_sec");
const projectSecHeading = document.querySelector(".project_sec_heading");
const project1 = document.querySelector("#project1");
const project2 = document.querySelector("#project2");
const project3 = document.querySelector("#project3");

const myApproachSec = document.querySelector(".my_approach_sec");
const myApproachSecheading = document.querySelector(".my_approach_sec_heading");
const myApproachSecItem1 = document.querySelector(".my_approach_sec .focus_points");
const myApproachSecItem2 = document.querySelector(".my_approach_sec .my_commitment");

const contactSec = document.querySelector(".contact-sec");
const contactSecimg = document.querySelector(".contact-sec .contact_img_container");
const contactSecform = document.querySelector(".contact-sec .contact_form_container");

const projectsAnimation = document.querySelectorAll(".change_ht_wt_on_scroll");




let mm = gsap.matchMedia();

// this animation is for hero section's elements and apply only in above 768px width's devices only
mm.add("(min-width: 769px)", () => {
  // Animation for Desktops & Tablets (width >= 769px)
  // hero section animation Starts
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "bottom 95%",
      end: "bottom 50%",
      scrub: true,
      markers: false
    }
  });
  tl.to([heroMsg, heroChar], {
    scale: 0,
    y: -100,
    opacity: 0
  }, 0)
  .to(SocialIcons, {
    y: -100,
    opacity: 0,
  }, 0)
  .to(myIntro,{
   x: 800,
   opacity: 0
  },0)
  .to(webDev, {
    x: -1500,  // Moves left on big screens
    opacity: 0.5,
  }, 0);
  // hero section animation ends


 //Serv Intro section animation Starts
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: Serv_Intro,
      start: "top 95%",
      end: "top 40%",
      scrub: true,
      markers: false
    }
  });
  tl2.from(briefServ_smry,{
    scale: 0,
    y: 200,
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "35vh",
    x: "70vw",
    scale: 0.5,
  },0)
  .to(herobg,{
    x: "-45vw",
    y: "85vh",
    scale: .5,
    rotate: "100deg"
  },0);
  //Serv Intro section animation ends

  // Entering animation for about section Starts
  const tl3 = gsap.timeline({
    scrollTrigger:{
      trigger: aboutSec,
      start: "top 90%",
      end: "top 20%",
      scrub: true,
      markers: false
    }
  });

  tl3.from(aboutSecContent,{
    x: "-60vw",
    opacity: 0
  },0)
  .from(aboutSecImgs,{
    y:"50vh",
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "195vh",
    x: "-12vw",
    transition: "0.4s",
    scale: 0.8
  },0)
  .to(herobg,{
    x: "15vw",
    y: "120vh",
    scale: .5,
    rotate: "-20deg"
  },0);
  // Entering animation for about section Ends


  // Skill Section Animation Starts
  const tl4 = gsap.timeline({
    scrollTrigger:{
      trigger: skillSec,
      start: "top 90%",
      end: "top 20%",
      scrub: true,
      markers: false
    }
  });
  
  tl4.from([skillSecTitle, skillSecIntro], {
    rotateX: "360deg",
    opacity: 0
  },0)
  .from(skillSecItems,{
    rotateX: "360deg",
    scale: 0,
    y: "20vh",
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "220vh",
    x: "70vw",
    transition: "0.4s",
    scale: 0.9
  },0)
  .to(herobg,{
    x: "0vw",
    y: "300vh",
    scale: 1,
    rotateY: "-180deg",
    rotateX:"-180deg",
    rotate: "-90deg",
    opacity: 0.8
  },0);
  // Skill Section Animation Ends


  // Services Section Animation Starts
  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: serviceSec,
      start: "top 90%",
      end: "top 5%",
      scrub: true,
      markers: false
    }
  });
  tl5.from(serviceSecHeading,{
    x: "-30vw",
    opacity: 0
  },0)
  .from([ServiceSecItem1, ServiceSecItem3],{
    rotate: "30deg",
    x: "-30vw",
    y: "-20vh",
    opacity: 0
  },0)
  .from([ServiceSecItem2, ServiceSecItem4],{
    rotate: "-30deg",
    x: "30vw",
    y: "-20vh",
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "320vh",
    x: "70vw",
    transition: "0.4s",
    scale: 0.8
  },0)
  .to(herobg,{
    x: "-10vw",
    y: "380vh",
    scale: 0.6,
    opacity: 0.6
  },0);
    // Services Section Animation Ends
  
  
  

    
    // project section animation ends
   
    //My approach section animation Starts
    const tl8 = gsap.timeline({
      scrollTrigger:{
        trigger: myApproachSec,
        start: "top 50%",
        end: "top 00%",
        toggleActions: "play resume pause reverse",
      }
    });
   tl8.from(myApproachSecheading,{
    x:"-30vw",
    opacity: 0,
    duration: 1,
   },0)
   .from(myApproachSecItem1,{
    x:"-50vw",
    opacity: 0,
    duration: 1,
   },0)
   .from(myApproachSecItem2,{
    x:"-60vw",
    opacity: 0,
    duration: 1,
   },0);
  //My approach section animation Ends
  
  // contact section animation Starts
  const tl9 = gsap.timeline({
    scrollTrigger:{
      trigger: contactSec,
      start: "top 95%",
      end: "top 10%",
      scrub: true
    }
  });
  tl9.from(contactSecimg,{
    y: "40vh",
    opacity: 0,
  },0)
  .from(contactSecform,{
    x: "40vw",
  },0);
   // contact section animation Ends

});

  // project section animation Starts

  ScrollTrigger.create({
  trigger: projectSec,   // wrapper around heading + projects
  start: "top top",               // when wrapper hits top
  end: "bottom 50%",           // until last project is done
  pin: projectSecHeading,        // pin only the headin
  markers: false
});

 projectsAnimation.forEach(project => {
  gsap.to(project, {
    scale: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: project,
      start: "top 30%",
      end: "bottom 30%",
      scrub: true,
      markers: false
    }
  });
});

  // project section animation Ends




// Exit animation For About sections
mm.add("(min-width:769px)", ()=>{
  const tl4 = gsap.timeline({
    scrollTrigger:{
      trigger: aboutSec,
      start: "bottom 80%",
      end: "bottom 40%",
      scrub: true,
      markers: false
    }
  });
  tl4.to(aboutSecContent,{
    x: "-60vw",
    opacity: 0
  },0)
  .to(aboutSecImgs,{
    x:"50vw",
    opacity: 0
  },0);

  // Exit animation For Service sections
  const tl5 = gsap.timeline({
    scrollTrigger:{
      trigger: serviceSec,
      start: "bottom 95%",
      end: "bottom 40%",
      scrub: true,
      markers: false
    }
  });

  // tl5.to(ServiceSecItem1,{
  //   y: "88vh",
  //   rotateX: "720deg",
  //   scale: 0.8,
  //   zIndex: 1,
  // },0)
  // .to(ServiceSecItem2,{
  //   x: "25vw",
  //   y: "60vh",
  //   rotateX: "720deg",
  //   scale: .2,
  //   opacity: 0.5,
  //   zIndex: 2
  // },0)
  // .to(ServiceSecItem3,{
  //   x: "25vw",
  //   y: "120vh",
  //   rotateX: "720deg",
  //   scale: .2,
  //   opacity: 0.5,
  //   zIndex: 2
  // },0)
  // .to(ServiceSecItem4,{
  //   x: "25vw",
  //   y: "50vh",
  //   rotateX: "720deg",
  //   scale: .2,
  //   opacity: 0.1,
  //   zIndex: 2
  // },0);

});

// this animation is for hero section's elements and apply only in under 768px width's devices only
mm.add("(max-width: 768px)", () => {
  // Animation for Mobile Devices (width < 768px)
  // Hero section animation starts
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "bottom 95%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
    }
  });

  tl.to([heroMsg, heroChar], {
    scale: 0,
    y: -100,
    opacity: 0
  }, 0)
  .to(SocialIcons, {
    y: -100,
    opacity: 0,
  }, 0)
  .to(myIntro,{
    x: 800,
    opacity: 0
   },0)
  .to(webDev, {
    y: -800, // Moves up instead of left for mobile
    opacity: 0.5,
  }, 0);
    // Hero section animation Ends


  // Serv intro animation starts
  const tl2 =gsap.timeline({
    scrollTrigger: {
      trigger: Serv_Intro,
      start: "top 95%",
      end: "top 40%",
      scrub: true,
      markers: false
    }
  });

  tl2.from(briefServ_smry,{
    scale: 0,
    y: 500,
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "70vh",
    x: "15vw",
    scale: 0.5
  },0)
  .to(herobg,{
    x: "-50vw",
    y: "35vh",
    scale: .4,
    rotate: "100deg"
  },0);
  // Serv Intro section animation ends

  // Entering animation for about section Starts
  const tl3 = gsap.timeline({
    scrollTrigger:{
      trigger: aboutSec,
      start: "top 90%",
      end: "top 20%",
      scrub: true,
      markers: false
    }
  });

  tl3.from(aboutSecContent,{
    x:"50vw",
    opacity: 0
  },0)
  .from(aboutSecImgs,{
    x: "-60vw",
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "145vh",
    x: "-55vw",
    scale: 0.6
  },0)
  .to(herobg,{
    x: "15vw",
    y: "90vh",
    scale: .8,
    rotate: "-20deg"
  },0);
  // Entering animation for about section Ends
 
  
  // Skill Section Animation Starts
  const tl4 = gsap.timeline({
    scrollTrigger:{
      trigger: skillSec,
      start: "top 90%",
      end: "top 20%",
      scrub: true,
      markers: false
    }
  });
  
  tl4.from([skillSecTitle, skillSecIntro], {
    rotateX: "360deg",
    opacity: 0
  },0)
  .from(skillSecItems,{
    x: "-50vw",
    opacity: 0
  },0)
  .to(ScrollDownImg,{
    y: "220vh",
    x: "10vw",
    scale: 0.7,
    transition: 0.4
  },0)
  .to(herobg,{
    x: "-20vw",
    y: "280vh",
    scale: 1,
    rotateY: "-180deg",
    rotateX:"-180deg",
    opacity: 0.8,
    transition: 0.4
  },0);
  // Skill Section Animation Ends

    // Services Section Animation Starts
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: serviceSec,
        start: "top 90%",
        end: "top 5%",
        scrub: true,
        markers: false
      }
    });
    tl5.from(serviceSecHeading,{
      x: "-30vw",
      opacity: 0
    },0)
    .from([ServiceSecItem1, ServiceSecItem3],{
      rotate: "30deg",
      x: "-30vw",
      y: "-20vh",
      opacity: 0
    },0)
    .from([ServiceSecItem2, ServiceSecItem4],{
      rotate: "-30deg",
      x: "30vw",
      y: "-20vh",
      opacity: 0
    },0)
    .to(ScrollDownImg,{
      y: "405vh",
      x: "-25vw",
      transition: "0.3s",
      scale: 0.8
    },0)
    .to(herobg,{
      x: "-10vw",
      y: "360vh",
      scale: 1.3,
      opacity: 0.6
    },0);
    
      // Services Section Animation Ends

    // project section animation Starts
    // const tl6 = gsap.timeline({
    //   scrollTrigger:{
    //     trigger: project2,
    //     start: "top 95%",
    //     end: "top 60%",
    //     scrub: true,
    //     markers: false
    //   }
    // });
    // tl6.from(project2,{
    //   scale: 0,
    //   opacity: 0,
    // })
    // .to(ServiceSecItem2,{
    //   x: "20vw",
    //   y: "147vh",
    //   rotateX: "1080deg",
    //   scale: 0.8,
    //   opacity: 1,
    //   zIndex: 2
    // },0);
  
    // const tl7 = gsap.timeline({
    //   scrollTrigger:{
    //     trigger: project3,
    //     start: "top 95%",
    //     end: "top 60%",
    //     scrub: true,
    //     markers: false
    //   }
    // });
    // tl7.from(project3,{
    //   scale: 0,
    //   opacity: 0,
    // })
    // .to(ServiceSecItem3,{
    //   x: "-5vw",
    //   y: "202vh",
    //   rotateX: "1080deg",
    //   scale: 0.8,
    //   opacity: 1,
    //   zIndex: 2
    // },0);
    // project section animation ends

     //My approach section animation Starts
     const tl8 = gsap.timeline({
      scrollTrigger:{
        trigger: myApproachSec,
        start: "top 50%",
        end: "top 00%",
        toggleActions: "play resume pause reverse",
      }
    });
   tl8.from(myApproachSecheading,{
    x:"-30vw",
    opacity: 0,
    duration: 1,
   },0)
   .from(myApproachSecItem1,{
    x:"-50vw",
    opacity: 0,
    duration: 1,
   },0)
   .from(myApproachSecItem2,{
    x:"-60vw",
    opacity: 0,
    duration: 1,
   },0);
  //My approach section animation Ends

    // contact section animation Starts
    const tl9 = gsap.timeline({
      scrollTrigger:{
        trigger: contactSec,
        start: "top 95%",
        end: "top 10%",
        scrub: true
      }
    });
    tl9.from(contactSecimg,{
      x: "-40vw",
      opacity: 0,
    },0)
    .from(contactSecform,{
      x: "40vw",
      opacity: 0,
    },0);
     // contact section animation Ends


}); 
// max-width: 768px brackets closed here

// Exit animation For About sections
mm.add("(max-width:768px)", ()=>{
  const tl4 = gsap.timeline({
    scrollTrigger:{
      trigger: aboutSec,
      start: "bottom 95%",
      end: "bottom 40%",
      scrub: true,
      markers: false
    }
  });
  tl4.to(aboutSecContent,{
    x: "-60vw",
    opacity: 0
  },0)
  .to(aboutSecImgs,{
    x:"50vw",
    opacity: 0
  },0);

  // Exit animation For Service sections
  const tl5 = gsap.timeline({
    scrollTrigger:{
      trigger: serviceSec,
      start: "bottom 95%",
      end: "bottom 40%",
      scrub: true,
      markers: false
    }
  });

  // tl5.to(ServiceSecItem1,{
  //   y: "92vh",
  //   x: "-5vw",
  //   rotateX: "720deg",
  //   scale: 0.8,
  //   zIndex: 1,
  // },0)
  // .to(ServiceSecItem2,{
  //   x: "55vw",
  //   y: "60vh",
  //   rotateX: "720deg",
  //   scale: .2,
  //   opacity: 0.5,
  //   zIndex: 2
  // },0)
  // .to(ServiceSecItem3,{
  //   x: "25vw",
  //   y: "120vh",
  //   rotateX: "720deg",
  //   scale: .2,
  //   opacity: 0.5,
  //   zIndex: 2
  // },0)
  // .to(ServiceSecItem4,{
  //   x: "25vw",
  //   y: "50vh",
  //   rotateX: "720deg",
  //   scale: .2,
  //   opacity: 0.1,
  //   zIndex: 2
  // },0);

});  // Exit animation For Service sections Ends

// gsap.from(project1,{
//   y: "30vh",
//   duration: 1,
//   scrollTrigger:{
//     trigger: project1,
//     start: "top 90%",
//     end: " top 40%",
//     toggleActions: "play resume pause reverse",
    
//   }
// });

});//DOMContentLoaded brackets ends







