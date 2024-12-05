
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
  title: "Who We Are",
  description: [
    "We are a group based out of University College London, exploring .... ",
    <img src="path/to/your/image.jpg" alt="Image description" />, // Add an image here
    "More text below image here",
  ],
};

export const projects = {
  //note: this title isn't updating hmm - staying as projects
  title: "Research",
  cards: [
    {
      title: "INSERT TITLE",
      description: "Insert description.",
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
      description: "Insert description",
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
      description: "Insert description",
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
  title: "Events",
  cards: [
    {
      title: "Event A",
      description: "Insert description",
      icons: null,
    },
    {
      title: "Event B",
      description: "Insert description",
      icons: null,
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Please do not hesitate to reach out to collaborate, or tour the lab...",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:hashirshoaeb@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
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
  description: "We are a research group based at University College London, exploring ... ",
  image: profile.src,
}

//EDIT ME 
export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}
