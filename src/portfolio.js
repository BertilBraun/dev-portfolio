/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bertil Braun",
  title: "Hi all, I'm Bertil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with TypeScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink: "", // TODO set to a link // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BertilBraun",
  linkedin: "https://www.linkedin.com/in/bertil-braun-342997212/",
  gmail: "bertil.braun.private@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/16576166/bertil-braun",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase / AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
    /* {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }, */
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "nestjs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    /* {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    }, */
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    /* {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }, */
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gottlieb Daimler Schule 1",
      // TODO logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Abitur (A-Level)",
      duration: "September 2017 - April 2020",
      desc: "Ranked as one of the best students in the school and finished with a grade of A-",
      descBullets: []
    },
    {
      schoolName: "Universität Karlsruhe, KIT",
      // TODO logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - April 2023",
      desc: "Took courses about Software Engineering, Operating Systems, Algorithm Engineering, ...",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  // TODO
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Academic Software Engineer assistant",
      company: "KIT",
      // TODO companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Feb 2022 – May 2022",
      desc: "Research and development of a new GUI application Framework for the KIT University"
    },
    {
      role: "Software Engineer",
      company: "My Cabin",
      // TODO companylogo: require("./assets/images/quoraLogo.png"),
      date: "June 2020 – October 2020",
      desc: "MyCabin is an impact startup from Konstanz, which by arranging near-natural overnight accommodation enables sustainable and natural travel and revolutionizes soft tourism",
      descBullets: [
        "Independent design and implementation of the internal administration tools for MyCabin",
        "Integration with a CRM tool via its APIs"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Hoffmann Räumtechnik GmbH",
      // TODO companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – July 2019",
      desc: "Intern at Hoffmann Räumtechnik GmbH in the construction area",
      descBullets: [
        "Support in the development of user interfaces",
        "Programming of a tool for offline programming of broaching machines"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/img/pyro.png"),
      projectName: "Pyro",
      projectDesc:
        "A collaborative listening experience\nMusic is mostly enjoyed together, so why would you have a single person controlling it? Pyro changes this. One user (a.k.a the Host) connects their Spotify Account with Pyro, opens up a party and get’s on the Aux/Speaker. Through the Pyro App, friends can now join the party to influence the hosts Spotify playback in real-time!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.getpyro.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/img/kitchenbang.png"),
      projectName: "KitchenBang",
      projectDesc:
        "Turn your campus into a cooking show. Share your own creations with other students, collect inspiration or just find out what you are going to have for dinner. KitchenBang is the platform for sharing and browsing the recipes of your fellow students. Put an end to the countless WhatsApp groups. Now there is a platform for everything to do with cooking.",
      footerLink: [
        {
          name: "Visit Store",
          url: "https://play.google.com/store/apps/details?id=com.whackcompany.kitchenbang"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // TODO
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // TODO // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ✉️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "bertil.braun.private@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
