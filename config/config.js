
import profile from './test.jpeg';

import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const navigation = {
  name: "SafeNet IoT",
  links: [
    {
      title: "People",
      link: "/people",
    },
    {
      title: "Research",
      link: "/research",
    },
    {
      title: "Publications",
      link: "/publications",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: "Lab",
      link: "/lab",
    },
    {
      title: "Resources",
      link: "/resources"

    },
    {
      title: "Contact",
      link: "/contact"
    }
  ],
}
export const intro = {
  title: "UCL SafeNet IoT",
  description: "PLACEHOLDER: description ",
  image: profile.src,
  buttons: [
    {
      title: "Events",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Contact Us",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who Are We",
  description: [
    "Insert description here",
    <img src="path/to/your/image.jpg" alt="Image description" />, // Add an image here
    "More description here.",
  ],
};

export const projects = {
  title: "Research",
  cards: [
    {
      title: "INSERT TITLE",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "INSERT TITLE",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "INSERT TITLE",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const work = {
  title: "Events coming up",
  cards: [
    {
      title: "Event A",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Event B",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Please do not hesitate to get in touch, organise a visit etc ...",
  buttons: [
    {
      title: "Email Us",
      link: "mailto:hashirshoaeb@gmail.com",
      isPrimary: true,
    },
    {
      title: "Organise a Visit",
      link: "https://topmate.io/hashirshoaeb",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "UCL SafeNet IoT",
  //EDIT ME
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}