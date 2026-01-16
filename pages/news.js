import React, { Fragment } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { SEO, navigation } from '../config/config';

export const allNews = [

      {
      date: "13–15 Jan 2026 - CyberASAP Pathfinder Bootcamp – Birmingham",
      description: "Mohammad Alhussan participated in the CyberASAP Pathfinder Bootcamp held in Birmingham from 13–15 January 2026. The bootcamp, delivered by Innovate UK Business Connect, focused on research commercialisation, startup formation, and early-stage venture development. The programme provided practical guidance, expert-led sessions, and valuable opportunities to engage with researchers, founders, and industry stakeholders.",
      image: "images/news/cyberasap-birmingham-jan-2026.PNG",
      link: "https://www.linkedin.com/posts/alhussan_cyberasap-innovateuk-cybersecurity-activity-7417646146736549888-U9d5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC8VYKMB4FMP61RtSGfL9p4rR__w1xTv9PY",
    },


      {
      date: "5 Dec 2025 -  IO Inspire pitch finale",
      description: "PhD Candidate Mohammad Alhussan presented at UCL's IO Inspire pitch finale on the security of wearable devices, demonstrating the real commercial opportunities facilitated by his research on security deviciencies in BLE-enabled medical devices.  ",
      image: "images/news/mohammadInspirePitch",
      link: "https://www.linkedin.com/posts/ucl-business-ltd_our-io-inspire-pitch-finale-last-week-was-activity-7404508965499322369-h1m8?",
    },

      
    {
      date: "19 Nov 2025 – IETF Draft 'IoT DNS Security and Privacy Guidelines' Adopted by IOTOPS WG",
      description: "Dr Anna Maria Mandalari and PhD student Andrew Losty along with colleagues Abhishek Kumar Mishra, Jim Mozley, and Mathieu Cunche have had their IETF draft 'IoT DNS Security and Privacy Guidelines' successfully adopted by the IOTOPS Working Group.  This adoption is a key milestone. The draft will now undergo WG review for technical accuracy and consensus, followed by a Last Call, IESG review, and final approval by the RFC Editor before publication as a Best Current Practice (BCP) RFC.PhD.",  
      image: "images/news/IETF.png",
      link: "https://datatracker.ietf.org/doc/draft-mishra-iotops-iot-dns-guidelines/",
    },

    {
    date: "20–24 Oct 2024 – RIPE 91 Meeting Bucharest",
    description: "PhD candidate Andrew Losty was selected to be part of the RACI (RIPE Academic Cooperation Initiative) and invited to present his research at the RIPE 91 Meeting in Bucharest, Romania. He delivered two research presentations. (1) Main Plenary Session - Towards Operational and Security Best Practices for DNS in the Internet of Things and (2) IoT Workshop - Beyond the Hype Investigating Matter Standard’s Security and Privacy.",
    image: "images/news/andrew1.png",
    link: "https://ripe91.ripe.net/",
  },

   {
    date: "September to October 2025 - Weizenbaumm Institute Fellowship",
    description:
      "PhD Student Ammara Yasin was awarded a month long fellowship at the Weizenbaum Institut in Berlin; a top research institute for interdisciplinary digitalization research. She worked with Dr Volker Stocker to develop a Layered Taxonomy of Network Shutdown Circumvention Methods, evaluating their efficacy against state-level adversaries with a focus on surveillance-resistance and user privacy. ",
    image: "/images/news/weizenbaum.jpeg",
    link: "https://www.weizenbaum-institut.de/en/portrait/p/ammara-yasin/",
    imagePosition: 'center 10%'
  },
  
  {
    date: "September 2025 - Recognition by H.H. the Crown Prince of Kuwait in London",
    description:
      "Mohammad Alhussan, PhD candidate at UCL Electronic & Electrical Engineering and member of the SafeNetIoT Lab, was honored to meet His Highness the Crown Prince Sheikh Sabah Khaled Al-Hamad Al-Sabah during a gathering with distinguished Kuwaiti students in London. The occasion also included the Ambassador of Kuwait and the leadership of the Cultural Office. Special appreciation to Dr. Abdullah Al-Meshal (Cultural Counselor & Head of the Cultural Office) and Dr. Hessah Alojayan (Cultural Attaché) for their invitation and excellent organization.",
    image: "/images/news/crown-prince-london.jpeg",
    link: "/news/crown-prince-2025",
    imagePosition: 'center 10%'
  },


  {
    date: "19-25th July 2025 - ANRW Workshop + IETF 123 meeting Madrid",
    description: "PhD student Andrew Losty had the paper Towards Operational and Security Best Practices for DNS in the Internet of Things accepted by the IETF. Co-authored with Anna Maria Mandalari, Abhishek K. Mishra, and Mathieu Cunche, the work was presented as an overview in the ANRW session, followed by a poster presentation. During the IETF workshop, the authors were joined by Jim Mozley (Infoblox) in submitting an IETF draft Best Current Practice, 'IoT DNS Security and Privacy Guidelines'.",
    image: "images/news/ietfposter.png",
    link: "https://www.ietf.org/meeting/123/",
  },

  {
    date: "7th July 2025 - New York Times Reports on Our Research",
    description: "The New York Times cites our paper on smart TVs' security and privacy implications in their article on Internet of Things devices.",
    image: "/images/news/NYT1.png",
    link: "https://www.nytimes.com/wirecutter/reviews/advice-smart-devices-data-tracking/",
  },

  {
    date: "3rd July – 4th July 2025  – Coseners 2025 (Next Generation Networking and Multi-Service Networks Workshop)",
    description: "PhD students Andrew Losty and Yuanyuan Zhou presented their work on “Towards Operational and Security Best Practices for DNS in the Internet of Things” and “TwinGuard: An Adaptive Digital Twin for Real-Time HTTP(S) Intrusion Detection and Threat Intelligence” at Coseners 2025. Yuanyuan was nominated as the runner-up for the conference award.",
    image: "/images/news/Coseners.jpeg",
    link: "https://coseners.net/coseners-2025/",
  },

  {
    date: "June 2025 - HC2P Summer Research Program",
    description: "Ammara Yasin attended the Human Centric Cybersecurity Summer Program in Montreal and Ottowa, Canada, as one of 3 PhD students across all UK institutions to be awarded full funding to attend this trans-disciplinary research residency on human-centric cybersecurity.",
    image: "/images/news/HC2P.jpeg",
    link: "https://www.hc2p.ca/",
  },

  {
    date: "25th May 2025 – ISCAS 2025 Presentation",
    description: "Mohammad Alhussan presented his research paper Hacking Health: Unveiling Vulnerabilities in BLE-Enabled Wearable Sensor Nodes at the IEEE International Symposium on Circuits and Systems (ISCAS 2025) in London, UK.",
    image: "/images/news/ISCAS.jpg",
    link: "/research/ISCAS",
  },

  {
    date: "12-16th May 2025 - RIPE Lisbon ",
    description: "Anna was elected IoT WG Co-Chair at hashtag#RIPE90 in Lisbon, and PhD Student Yuanyuan Zhou gave an incredible presentation on her work TwinGuard.",
    image: "/images/news/RIPE_lisbon.jpg",
    link: "https://www.linkedin.com/posts/anna-maria-mandalari_ripe72-ripe90-raci-activity-7329523295177867264-NxpD?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSOxL4BYpJON8o1d0-60buhEccFmQDuT2M",
  },

  {
    date: "7th April 2025 - NTNU Lab Tour ",
    description: "We hosted students and staff from the Norwegian University of Science and Technology's (NTNU) Cybersecurity program. The group engaged directly with our researchers developing revolutionary adaptive defense frameworks capable of evolving alongside emerging threats.",
    image: "/images/news/NTNUVisit.jpg",
    link: "",
  },

  {
    date: "15-16th March 2025 - RIPE NCC DNS Hackathon ",
    description: "PhD Student Andrew visited Stockholm for RIPE's DNS Hackathon. He formed a team made and developed code to investigate the IoT traffic captures. They uncovered critical DNS-related security vulnerabilities in IoT devices, discovering the highly fingerprintable nature of the traffic",
    image: "/images/news/RIPENCC.png",
    link: "https://labs.ripe.net/author/becha/join-the-dns-hackathon-2025/",
  },

  {
    date: "6th February 2025 - BBC's Blue Room Visit",
    description: "We recieved an invitation to visit the BBC's 'Blue Room' - the consumer technology research and demo lab from BBC Research & Development. We discussed our work on Smart TVs as well as our Matter Device study and the security of medical devices",
    image: "/images/news/BBCVisit.jpg",
    link: "https://www.bbc.com/blueroom",
  },

  {
    date: "31st January 2025 - Visiting Speaker Michele Chiappalone",
    description: "We were thrilled to welcome Michele Chiappalone from Google to our Security and Privacy course at UCL Electronic and Electrical Engineering! With deep expertise in cloud, Michele shared insights into the latest challenges, best practices, and innovations in cloud environments. This is a fantastic opportunity for our students to gain real-world knowledge from an industry leader at the forefront.",
    image: "/images/news/googleTalk.jpg",
    link: "https://www.linkedin.com/posts/anna-maria-mandalari_cloudsecurity-cybersecurity-privacy-activity-7291073049213190144-tmhV?utm_source=share&utm_medium=member_desktop",
  },

  {
    date: "8th January 2025 -  London Networks & Systems Symposium",
    description: "Prof. Anna Mandalari gave a talk at Imperial College London's London Networks & Systems Symposium, titled 'Towards IoT Privacy and Security Verification'.",
    image: "/images/news/imperialSymposium.jpeg",
    link: "https://ix.imperial.ac.uk/event/london-networks-systems-symposium/",
  },

  {
    date: "10th -13th December 2024: The 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024)",
    description: "Prof. Anna Mandalari and PhD Students Mohammad Alhussan and Andrew Losty attended the 21st International Conference on Embedded Wireless Systems and Networks (EWSN 2024). Muhammad won the Best Demo Award for research on the potential vulnerabilities in wearable medical devices.",
    image: "/images/news/bestDemo.jpeg",
    link: "https://www.ucl.ac.uk/electronic-electrical-engineering/news/2024/dec/phd-student-wins-best-demonstration-award-ewsn-2024",
  },

  {
    date: "26th November 2024: Connected Ecosystems: Security and Resilience in IoT",
    description: "Prof. Anna Mandalari hosted a panel bringing together cybersecurity experts, industry leaders, and policymakers to explore emerging regulations, best practices, and innovative approaches to safeguarding IoT.",
    image: "/images/news/august-2023.jpg",
    link: "https://www.digicatapult.org.uk/apply/events/connected-ecosystems-security-and-resilience-in-iot/#:~:text=This%20event%20brings%20together%20cybersecurity,security%20standardisation%20and%20implementation%20strategies.",
  },

];

const NewsPage = () => {
  // Sort news by date (newest first) when rendering
  const sortedNews = [...allNews].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="d-flex flex-column justify-content-between bg-primary min-vh-100">
        <div className="py-5 px-5 container">
          <h1 className="text-secondary fw-bold text-left mb-5">All Activity</h1>

          {/* Updated Description */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="text-secondary lead text-left">
                The latest updates on our achievements, events, and collaborations.
              </div>
            </div>
          </div>

          {/* News Cards */}
          <div className="row">
            {sortedNews.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={`News from ${item.date}`}
                    className="card-img-top"
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                      objectPosition: item.imagePosition || 'center'
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{item.date}</h5>
                    <p className="card-text text-primary">{item.description}</p>
                    <a href={item.link} className="btn btn-outline-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default NewsPage;
