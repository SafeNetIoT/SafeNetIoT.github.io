import { GrantDetail } from '../../components/GrantDetail';
import icureImg from '../../images/grants/icure-discover.png';

const title = 'ICURe Discover Programme';

export default function IcureDiscoverGrant() {
  return (
    <GrantDetail
      title={title}
      description="Mohammad Alhussan's place on the Innovate UK ICURe Discover Programme, delivered by The Helix Way."
      image={icureImg}
      imageAlt="UKRI, Innovate UK and ICURe Discover"
    >
      <p><strong>Participant:</strong> Mohammad Alhussan</p>
      <p><strong>Institution:</strong> University College London (UCL)</p>
      <p><strong>Funder:</strong> Innovate UK</p>
      <p><strong>Programme:</strong> ICURe Discover</p>
      <p><strong>Delivery Partner:</strong> The Helix Way</p>
      <p><strong>Funding:</strong> Up to £2,500 for market discovery activity</p>
      <p><strong>Date:</strong> April 2026</p>
      <p>
        <strong>Link:</strong>{' '}
        <a href="https://iuk-business-connect.org.uk/opportunities/icure-discover/" target="_blank" rel="noopener noreferrer" className="text-primary">
          Innovate UK ICURe Discover
        </a>
      </p>

      <section className="mt-5">
        <h3 className="text-primary">Programme Overview</h3>
        <p>
          Mohammad Alhussan secured a place on the ICURe Discover Programme, funded by Innovate UK and delivered by
          The Helix Way. The programme supports early-stage research commercialisation through guided customer
          discovery, training and venture development activities.
        </p>
        <p>
          Participation in ICURe Discover is an important milestone in exploring the commercial potential and
          real-world impact of research emerging from the SafeNetIoT Lab.
        </p>
      </section>
    </GrantDetail>
  );
}
