
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

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

export const about = {
  title: "Recent News",
  news: [
    {
      date: "January 2025: London Networks & Systems Symposium",
      description: "Prof. Anna Mandalari gave a talk at Imperial College London's London Networks & Systems Symposium, titled 'Towards IoT Privacy and Security Verification'",
      image: "/images/news/october-2023.jpg",
      link: "https://www.linkedin.com/in/anna-maria-mandalari/recent-activity/all/",
    },
    {
      date: "10th -13th December 2024: The 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024)",
      description: "Prof. Anna Mandalari and PhD Students Mohammad Alhussan and Andrew Losty attended the 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024). Muhammad won the 'Best Demo' Award for research on the potential vulnerabilities in wearable medical devices  ",
      image: "/images/news/BestDemo.jpeg",
      link: "",
    },
    {
      date: "26th November 2024: Connected Ecosystems: Security and Resilience in IoT",
      description: "Prof. Anna Mandalari hosted a panel bringing together cybersecurity experts, industry leaders, and policymakers to explore emerging regulations, best practices, and innovative approaches to safeguarding IoT.",
      image: "/images/news/august-2023.jpg",
      link: ""
    },
  ],
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
      title: "Baraa Zieni ",
      description: "Dr Zieni (B.Eng., M.Eng, Ph.D. ) is a Senior Research Fellow in Computer Science and Engineering, joint the Department of Electrical & Electronic Engineering in UCL in 2024. Her current research is focus on homecare sensing technologies their communication, control system and privacy challenges.",
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