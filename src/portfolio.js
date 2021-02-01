
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hola, mi nombre es Alejandro Pareja",
  subTitle: emoji("Un desarrollador de software cautivado por las nuevas tecnologías, con experiencia en el desarrollo de aplicaciones web y móviles usando Java / Angular / Javascript / Flutter / Ionic y otras tecnologías interesantes"),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/aPareja1",
  gmail: "alejopar2012@gmail.com",
  gitlab: "https://gitlab.com/apareja98",
  
};

// Your Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle: "Siempre aprendiendo",
  skills: [
    emoji("📌 Diseño y desarrollo de aplicaciones móviles"),
    emoji("📌 Desarrollo backend"),
    emoji("📌 Desarrollo de Progressive Web apps ( PWA )"),
    emoji("📌 Desarrollo de videojuegos")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-java"
    },
  
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Games",
      fontAwesomeClassname: "fas fa-gamepad"
    },    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Desarrollo frontend (Web)",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Desarrollo Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Desarrollo móvil",
      progressPercentage: "50%",
    },
    {
      Stack: "Desarrollo videojuegos",
      progressPercentage: "50%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Algunos proyectos 📚 "),
  subtitle: "",

  achivementsCards: [
    {
      title: "Lienzo canvas para jóvenes emprendendores",
      description: "Aplicación android desarrollada con la finalidad de orientar a emprendedores jóvenes en la construcción de su modelo de negocio utilizando la metodología canvas, Nescafé",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      description: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      description: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: emoji("Algunos proyectos 📚 "),
  subtitle: "",

  blogs: [
    {
      url: "https://drive.google.com/file/d/1E85wWzVOJynnX8GYyWHs2qLDExhniTeY/view?usp=sharing",
      image: "https://gdurl.com/8Bjv",
      title: "Lienzo canvas para jóvenes emprendendores",
      description: "Aplicación desarrollada con la finalidad de orientar a emprendedores jóvenes en la construcción de su módelo de negocio utilizando la metodología canvas, Nescafé"
      ,devWith:"Tecnologías: Flutter"
    },
    {
      url: "https://drive.google.com/file/d/1l1T-XN32FQxkhEm3XT32iAC_kj23Ic80/view?usp=sharing",
      image: "https://drive.google.com/uc?id=1B_cel_5FI7QfSvFgWge65srkzygCcAmR",
      title: "Decidiendo a tiempo y cuidando la cosecha ",
      description: "Juego de dados para simular situaciones que ayudan a la infestación de la broca del café"
      ,devWith:"Tecnologías: Unity"
    },
    {
      url: "https://drive.google.com/file/d/19bRgXcRLCKtNQAk9T_iBa_xmyHb4xYG3/view?usp=sharing",
      image: "https://drive.google.com/uc?id=1DLMuVb4T1Zj9oOYvsWE1kHWl0eWPBUzc",
      title: "Un paso adelante de la broca del café",
      description: "Juego de cartas multijugador donde se plantean situaciones de riesgo y prevención para la infestación de la broca del café"
      ,devWith:"Tecnologías: Angular, Ionic, Firebase"
    },
    {
      url: "https://drive.google.com/file/d/1mzgJSJSVBNy3UNiYMBqeu_gwtz3YoiQ1/view?usp=sharing",
      image: "https://drive.google.com/uc?id=1kG3ztepmBhn4p8EGmFzgLUO3IZ20ShHi",
      title: "Aplicación Famipuntos",
      description: "Aplicación móvil que busca reconocer y valorar el aporte familiar al cuidado del hogar por medio de una asignación de tareas y un sistema de puntos"
      ,devWith:"Tecnologías: Flutter"
    },
    {
      url: "https://drive.google.com/file/d/1uKr606TY2-Pj4aeRYc0zjYmOBh1r2zw5/view?usp=sharing",
      image: "https://drive.google.com/uc?id=1rK3tqsfmEny2mthwSuQ5spGp5QCSFVa_",
      title: "Aplicación Sombrío",
      description: "Aplicación móvil utilizada para determinar el nivel de sombra de un cultivo y según esto sugerir especies de árbol a plantar y sus distancias de siembra"
      ,devWith:"Tecnologías: Ionic"
    },
    {
      url: "https://drive.google.com/file/d/1kK6hw2qS0nCmNO54txMXByipICqbvagx/view?usp=sharing",
      image: "https://gdurl.com/Id5w",
      title: "Circuito de Observación",
      description: "Juego móvil de atención donde a través de 3 canciones se le muestran practicas de conservación de suelo, bosques y de buena recolección a los caficultores"
      ,devWith:"Tecnologías: Unity"
    },
    {
      url: "https://drive.google.com/file/d/1ORB_flyEHE3qcS3cDRpnlUcEKc9XfT00/view?usp=sharing",
      image: "https://drive.google.com/uc?id=1MguumKGJeELCaYrDD7opHe7_TrlmR3nr",
      title: "Torre al suelo",
      description: "Juego móvil que simula una torre Jenga donde cada bloque es un componente para tener el suelo en equilibrio "
      ,devWith:"Tecnologías: Unity"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),

  number: "+57 3193360453",
  email_address: "alejopl98@outlook.es"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
