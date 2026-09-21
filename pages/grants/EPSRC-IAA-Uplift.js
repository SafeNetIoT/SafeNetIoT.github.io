import { GrantDetail } from '../../components/GrantDetail';
import epsrcImg from '../../images/grants/epsrc.png';

const title = 'CYBERMED: Dual-Communication Security for Wearable Medical Devices Using Intra-Body Communication';

export default function EpsrcIaaUpliftGrant() {
  return (
    <GrantDetail
      title={title}
      description="A £30,000 EPSRC IAA Uplift award supporting CYBERMED proof-of-concept development and market engagement."
      image={epsrcImg}
      imageAlt="Engineering and Physical Sciences Research Council (EPSRC)"
    >
      <p><strong>Project Lead:</strong> Dr Anna Maria Mandalari</p>
      <p><strong>Project Team:</strong> Mohammad Alhussan, Dr Francesca Boem and Aurelio Loris Canino</p>
      <p><strong>Institution:</strong> University College London (UCL)</p>
      <p><strong>Funder:</strong> EPSRC via UCL Innovation & Enterprise</p>
      <p><strong>Scheme:</strong> EPSRC IAA Uplift</p>
      <p><strong>Funding:</strong> £30,000</p>
      <p><strong>Award Date:</strong> 19 November 2025</p>
      <p><strong>Funding Period:</strong> Award funds to be spent by 31 March 2026</p>
      <p><strong>External Partner:</strong> RINICOM</p>
      <p><strong>Primary Sector:</strong> Life Sciences</p>
      <p><strong>Additional Sectors:</strong> Digital & Technologies; Advanced Manufacturing</p>
      <p>
        <strong>Link:</strong>{' '}
        <a href="https://www.ukri.org/councils/epsrc/" target="_blank" rel="noopener noreferrer" className="text-primary">
          Engineering and Physical Sciences Research Council
        </a>
      </p>

      <section className="mt-5">
        <h3 className="text-primary">Project Overview</h3>
        <p>
          The project develops and validates a proof-of-concept system that integrates wireless communication
          protocols such as Bluetooth Low Energy with Intra-Body Communication to improve the reliability and
          security of data transmission in wearable and implantable medical devices.
        </p>
        <p>
          The IAA Uplift funds staff time and targeted market engagement to refine the proof of concept, gather
          OEM and NHS requirements, conduct interviews with clinicians and regulators, and synthesise the value
          proposition for adoption, licensing or spin-out.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-primary">Funding Acknowledgement</h3>
        <p>This project received £30,000 through the EPSRC IAA Uplift programme.</p>
      </section>
    </GrantDetail>
  );
}
