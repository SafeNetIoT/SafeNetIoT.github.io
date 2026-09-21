import { GrantDetail } from '../../components/GrantDetail';
import uclIeImg from '../../images/grants/ucl-ie.jpg';

const title = 'CYBERMED: Dual-Communication Security for Wearable Medical Devices Using Intra-Body Communication - Phase 2';

export default function UclInnovationGrant() {
  return (
    <GrantDetail
      title={title}
      description="A UCL Innovation & Enterprise HEIF ESC award supporting Phase 2 of the CYBERMED project."
      image={uclIeImg}
      imageAlt="UCL Innovation and Enterprise - CYBERMED Phase 2"
    >
      <p><strong>Project Lead:</strong> Dr Anna Maria Mandalari</p>
      <p><strong>Project Team:</strong> Mohammad Alhussan, Dr Francesca Boem and Aurelio Loris Canino</p>
      <p><strong>Institution:</strong> University College London (UCL)</p>
      <p><strong>Funder:</strong> UCL Innovation & Enterprise</p>
      <p><strong>Programme:</strong> Innovation Funding - HEIF ESC</p>
      <p><strong>Project Reference:</strong> KEI2026-01-11 HEIF ESC MANDALARI</p>
      <p><strong>Proposed Start Date:</strong> 1 October 2026</p>
      <p>
        <strong>Link:</strong>{' '}
        <a href="https://www.ucl.ac.uk/research-innovation/funding-and-support/ucl-funding-opportunities" target="_blank" rel="noopener noreferrer" className="text-primary">
          UCL funding opportunities
        </a>
      </p>

      <section className="mt-5">
        <h3 className="text-primary">Project Overview</h3>
        <p>
          This Phase 2 project advances CYBERMED research into dual-communication security for wearable medical
          devices using Intra-Body Communication. It focuses on strengthening the security and resilience of
          connected wearable healthcare systems and supporting their progression towards practical use.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-primary">Funding Acknowledgement</h3>
        <p>
          This project was awarded Innovation Funding through UCL Innovation & Enterprise&apos;s HEIF ESC programme.
        </p>
      </section>
    </GrantDetail>
  );
}
