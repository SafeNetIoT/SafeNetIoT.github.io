
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { allNews } from '/pages/News';

export const navigation = {
  name: "SafeNetIoT",
  links: [
    {
      title: "People",
      link: "/people",
    },
    {
      title: "News",
      link: "/news",
    },
    {
      title: "Research",
      link: "/research",
    },
    {
      title: "Lab",
      link: "/lab",
    },
    {
      title: "Contact",
      link: "/contact",
    }
  ],
}
export const intro = {
  title: "SafeNetIoT",
  description: "The UCL EEE SafeNetIoT Lab pioneers research into securing the Internet of Things (IoT) across critical environments. We identify and analyze vulnerabilities in IoT systems deployed in smart homes, healthcare facilities, and industrial infrastructures. Our work focuses on designing robust security protocols, privacy-preserving architectures, and real-time threat detection mechanisms tailored to constrained IoT ecosystems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Us",
      link: "mailto: anna.mandalari@ucl.ac.uk",
      isPrimary: true,
    },
    {
      title: "Find Us",
      link: "https://www.ucl.ac.uk/engineering/about/getting-here",
      isPrimary: false,
    },
  ],
}

const processNews = () => {
  try {
    return [...allNews]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  } catch (error) {
    console.error("Error processing news data:", error);
    return []; // Return empty array if there's an error
  }
};

const recentNews = processNews();

export const about = {
  title: "Recent News",
  news: recentNews,
};

export const work = {
  title: "People",
  cards: [
    {
      title: "Anna Maria Mandalari",
      description: "Anna Maria Mandalari works as Assistant Professor at University College London (UCL). She is affiliated with the Electronic and Electrical Engineering Department, where she is the Director of the SafeNetIoT laboratory and the Director of the Internet Engineering/ Telecommunications MSc/ MRes Programme.",
      icons: null,
    },
    {
      title: "Aurelio Loris Canino ",
      description: "Visiting researcher",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Research",
  cards: [
    {
      title: "Hacking Health: Unveiling Vulnerabilities in Wireless Wearable Sensors",
      description: "Mohammad Alhussan highlights the potential vulnerabilities in wearable medical devices that utilise Bluetooth Low Energy (BLE) for communication. He shows how these attacks can compromise not only the confidentiality and integrity of potentially sensitive medical data transmitted by wearable medical devices, but also patients’ privacy and safety as well as sensors’ reliability",
      icons: [
        {
          icon: faResearchgate,
          link: "https://www.researchgate.net/publication/384992278_Live_Demonstration_Hacking_Health_Unveiling_Vulnerabilities_in_Wireless_Wearable_Sensors",
        }
      ]
    },
    {
      title: "An Investigation of Matter Smart Home Mechanisms to Mitigate Denial-of-Service (DoS) Attacks",
      description: "Andrew Losty's research examines the relatively new open-source Smart Home automation protocol, Matter. This protocol aims to unify the Smart Home ecosystem, eliminating the need for multiple apps and competing architectures, and is supported by over 270 manufacturers, including major tech leaders such as Amazon, Google, Apple, and Samsung.",
      icons: [
        {
          icon: faResearchgate,
          link: "https://www.ewsn.org/file-repository/ewsn2024/EWSN24-PSCE_paper_14.pdf",
        }
      ]
    },
    {
      title: "Enabling Lawful Interception in Environments Protected by IoT Safeguard",
      description: "Aurelio Canino's work analyzes a novel challenge: the potential exploitation of IoT devices for covert lawful interceptions, circumventing existing IoT safeguards. In this paper, a system to clandestinely capture audio or video data from IoT devices without an IoT safeguard being able to detect it is defined. ",
      icons: [
        {
          icon: faResearchgate,
          link: "https://www.researchgate.net/publication/383139967_Enabling_Lawful_Interception_in_Environments_Protected_by_IoT_Safeguard",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Please do not hesitate to reach out to collaborate etc.",
  buttons: [
    {
      title: "Email Us",
      link: "mailto:anna.mandalari@ucl.ac.uk",
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
  title: "SafeNetIoT",
  description: "The UCL EEE SafeNetIoT lab focuses on the security and privacy of Internet of Things (IoT) devices.",
  image: profile.src,
}

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
