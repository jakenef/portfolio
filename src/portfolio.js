/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jacob Nef",
  title: "Hey, I'm Jacob!",
  subTitle: emoji(
    "I build software and have fun doing it! I'm studying Computer Science at BYU with an emphasis in Software Engineering. I currently work as a Backend Software Engineer at Awardco, developing a new performance and incentives platform product."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1u3sY02NJo4QTVA8pNnwfMMT9oWhlsUGdBUaL7h4nFOo/edit?usp=sharing", // Set to empty to hide the button. this link doesn't need to be replaced to get your resume in the site. Follow the README instructions for that.
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jakenef",
  linkedin: "https://www.linkedin.com/in/jacob-nef/",
  gmail: "jacob.d.nef@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED FULL-STACK ENGINEER WHO LOVES TO LEARN",
  skills: [
    emoji(
      "⚡ Build scalable backend systems and AI-powered products from idea to production"
    ),
    emoji(
      "⚡ Design performant APIs, databases, and business logic for enterprise-scale applications"
    ),
    emoji(
      "⚡ Leverage agentic AI workflows to ship software faster and solve complex engineering problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
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
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byuMedallionNavy.png"),
      logoPosition: "center", // Optional: center, top, bottom, left, right, or specific like "center top"
      logoScale: 1.2, // Optional: zoom factor for logo within the FIXED circle (e.g., 0.8 = zoomed out, 1.5 = zoomed in, circle size never changes)
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2021 - April 2027",
      desc: "3.91 GPA, 2x Dean's List Recipient (Top 5% of class)",
      descBullets: [
        "President of BYU Developer's Association",
        "Recieved full tuition scholarship"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Awardco",
      company: "Back-End Software Engineer Intern",
      companylogo: require("./assets/images/awardco-icon.png"),
      date: "Apr 2026 – Aug 2026",
      desc: "Built scalable backend systems for an enterprise employee incentives platform using ASP.NET Core, EF Core, SQL, and AI-assisted engineering workflows.",
      descBullets: [
        "Built the core rules engine powering configurable enterprise incentive programs for organizations with 100,000+ employees, including AT&T",
        "Developed complex backend logic for payouts, designing robust handling for edge cases, fail states, and data consistency",
        "Owned the CSV upload initiative end-to-end, creating 10+ implementation tickets and delivering production-ready bulk import functionality",
        "Pioneered agentic AI workflows that accelerated engineering productivity while identifying critical production defects before release"
      ]
    },
    {
      role: "Grouply",
      company: "Technical Co-Founder & Full-Stack Engineer",
      companylogo: require("./assets/images/grouplyAppIcon.png"),
      date: "Sep 2025 – Present",
      desc: "Built and launched an AI-powered social discovery platform as the sole engineer using React Native, Supabase, OpenAI, and PostgreSQL.",
      descBullets: [
        "Shipped a cross-platform mobile app to iOS and Android, reaching 147 downloads and 33 paid subscriptions",
        "Designed a scalable backend with 16 PostgreSQL tables, 46 REST endpoints, and production, staging, and development environments",
        "Engineered an AI recommendation system using vector embeddings and the OpenAI SDK for semantic event matching and personalization",
        "Owned the product end-to-end, from architecture and infrastructure to deployment, subscriptions, and production releases"
      ]
    },
    {
      role: "BYU College of Family, Home, and Social Sciences",
      company: "Web Developer (Full-Stack)",
      companylogo: require("./assets/images/byuMedallionNavy.png"),
      date: "Sep 2024 – Sep 2025",
      desc: "Developed full-stack web applications using Angular and Node.js, building responsive UIs and robust backend services with modern tooling and clean API integration",
      descBullets: [
        "Wrote 100+ Java unit tests to validate business-critical backend methods and protect against edge cases",
        "Spearheaded development of a research conference platform supporting 500+ concurrent users, including secure form submissions and automated award distribution",
        "Facilitated 10+ client meetings, to translate functional specs into actionable technical deliverables",
        "Collaborated in and led teams of 2-6 programmers to deliver 6+ projects on time and with minimal bugs"
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
  title: "Main Projects / Startups",
  subtitle: "SOME PERSONAL AND SCHOOL PROJECTS",
  projects: [
    {
      image: require("./assets/images/chessScreenshot.png"),
      projectName: "Chess Game",
      projectDesc:
        "Features a networked client-server architecture, with a command-line client, a server to manage users and games, and shared modules for implementing chess rules and game state management.",
      footerLink: [
        {
          name: "See Github",
          url: "http://github.com/jakenef/chess"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/meterboxdScreenshot.png"),
      projectName: "Meterboxd",
      projectDesc:
        "Meterboxd is a React + Python app that parses your Letterboxd export, enriches it with TMDB data, and shows how your average ratings differ from the community. It highlights where your taste stands out with fast, cached results and a clean UI.",
      footerLink: [
        {
          name: "See Github",
          url: "http://github.com/jakenef/meterboxd"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
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
      imageAlt: "Google Assistant Action Logo",
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
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

// Update this section even if you have github linked, in case the linking fails
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect and talk about how I can contribute to your team!",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
