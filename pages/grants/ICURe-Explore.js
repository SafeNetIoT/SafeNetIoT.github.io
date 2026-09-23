import { GrantDetail } from '../../components/GrantDetail';
import icureExploreImg from '../../images/grants/icure-explore.png';

const title = 'Trust2Wear awarded £35,000 through Innovate UK ICURe Explore';

export default function IcureExploreGrant() {
  return (
    <GrantDetail
      title={title}
      description="A £35,000 Innovate UK ICURe Explore award supporting the commercial development of Trust2Wear."
      image={icureExploreImg}
      imageAlt="UKRI, Innovate UK and ICURe Explore"
    >
      <p><strong>Programme:</strong> ICURe Explore October 2026</p>
      <p><strong>Funder:</strong> Innovate UK</p>
      <p><strong>Funding:</strong> £35,000</p>
      <p><strong>Institution:</strong> University College London (UCL)</p>
      <p><strong>Award Date:</strong> September 2026</p>

      <section className="mt-5">
        <h3 className="text-primary">Project Overview</h3>
        <p>
          The SafeNetIoT team has secured £35,000 in funding through the Innovate UK ICURe Explore Programme for
          <strong> Trust2Wear: Secure and Reliable Communication for Wearable Medical Devices</strong>.
        </p>
        <p>
          Trust2Wear is developing a dual-path communication architecture for wearable and implantable medical
          devices. It combines conventional wireless communication, such as Bluetooth Low Energy, with
          Galvanic-Coupling and Capacitive-Coupling Intra-Body Communication. The aim is to strengthen
          authentication, communication reliability and resilience when the primary wireless connection is
          disrupted, unavailable or cannot be trusted.
        </p>
        <p>
          The ICURe Explore programme will support the team in investigating the commercial potential of
          Trust2Wear through intensive training, customer discovery and direct engagement with medical-device
          manufacturers, potential partners and other stakeholders. The funding supports the Entrepreneurial
          Lead&apos;s full-time participation alongside activities for testing key market assumptions and exploring
          potential routes to market.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-primary">Project Team</h3>
        <ul>
          <li><strong>Aurelio Loris Canino:</strong> Entrepreneurial Lead</li>
          <li><strong>Dr Anna Maria Mandalari:</strong> Principal Scientific Adviser</li>
          <li><strong>Eleanor Barlow:</strong> Technology Transfer Officer, UCL Ventures</li>
          <li><strong>Richard Marshall:</strong> Business Adviser</li>
          <li><strong>Dr Francesca Boem:</strong> Team Member</li>
          <li><strong>Mohammad Alhussan:</strong> Team Member</li>
        </ul>
      </section>

      <section className="mt-4">
        <h3 className="text-primary">Programme Activities</h3>
        <p>
          Following the ICURe Explore bootcamp in October 2026, the team will undertake twelve weeks of structured
          market exploration supported by specialist training, coaching and business guidance. The programme will
          conclude in January 2027 with the Options Roundabout, where the team will present its ICURe journey to an
          independent panel and receive recommendations on the most appropriate commercialisation route for the
          research.
        </p>
      </section>
    </GrantDetail>
  );
}
