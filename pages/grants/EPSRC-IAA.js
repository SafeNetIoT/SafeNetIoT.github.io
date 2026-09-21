import { GrantDetail } from '../../components/GrantDetail';
import epsrcImg from '../../images/grants/epsrc.png';

const title = 'CYBERMED: Dual-Communication Security for Wearable Medical Devices Using Intra-Body Communication';

export default function EpsrcIaaGrant() {
  return (
    <GrantDetail
      title={title}
      description="An EPSRC Impact Acceleration Account project advancing dual-communication security for wearable medical devices."
      image={epsrcImg}
      imageAlt="Engineering and Physical Sciences Research Council (EPSRC)"
    >
      <p><strong>Principal Investigator:</strong> Dr Anna Maria Mandalari</p>
      <p><strong>Project Team:</strong> Mohammad Alhussan, Dr Francesca Boem and Aurelio Loris Canino</p>
      <p><strong>Institution:</strong> University College London (UCL)</p>
      <p><strong>Funder:</strong> EPSRC Impact Acceleration Account</p>
      <p><strong>Scheme:</strong> Discovery to Use</p>
      <p><strong>Funding:</strong> Approximately £30,000</p>
      <p><strong>Project Reference:</strong> KEI2025-01-11 EPSRC IAA D2U MANDALARI</p>
      <p><strong>EPSRC Grant Reference:</strong> EP/X525649/1</p>
      <p><strong>Duration:</strong> 1 October 2025 - 30 September 2026</p>
      <p>
        <strong>Link:</strong>{' '}
        <a href="https://www.ukri.org/councils/epsrc/" target="_blank" rel="noopener noreferrer" className="text-primary">
          Engineering and Physical Sciences Research Council
        </a>
      </p>

      <section className="mt-5">
        <h3 className="text-primary">Project Overview</h3>
        <p>
          CYBERMED investigates a dual-communication approach that combines conventional wireless links with
          Intra-Body Communication to improve the reliability and security of wearable medical devices. The project
          supports development and validation of the technology as it progresses towards real-world application.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-primary">Funding Acknowledgement</h3>
        <p>
          This project is supported by the EPSRC Impact Acceleration Account award to UCL for 2022-2027,
          grant reference EP/X525649/1.
        </p>
      </section>
    </GrantDetail>
  );
}
