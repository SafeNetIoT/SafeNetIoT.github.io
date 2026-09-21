import { GrantDetail } from '../../components/GrantDetail';
import nntiImg from '../../images/grants/nnti.png';

const title = 'BODYCOM: Body-Coupled Networking for Reliable Wearable Medical Communication';

export default function NntiGrant() {
  return (
    <GrantDetail
      title={title}
      description="A Huawei-UCL NNTI Joint Laboratory Base Exploratory Project on reliable wearable medical communication."
      image={nntiImg}
      imageAlt="Huawei NNTI Joint Laboratory"
    >
      <p><strong>Principal Investigator:</strong> Dr Anna Maria Mandalari</p>
      <p><strong>Project Team:</strong> Mohammad Alhussan, Aurelio Loris Canino and Dr Francesca Boem</p>
      <p><strong>Institution:</strong> University College London (UCL)</p>
      <p><strong>Funder:</strong> Huawei-UCL NNTI Joint Laboratory</p>
      <p><strong>Scheme:</strong> Base Exploratory Project</p>
      <p><strong>Funding:</strong> £62,500</p>
      <p><strong>Duration:</strong> One year</p>

      <section className="mt-5">
        <h3 className="text-primary">Project Overview</h3>
        <p>
          BODYCOM develops and evaluates a dual-channel body-area networking architecture for wearable medical
          devices. The project combines Bluetooth Low Energy with Galvanic Coupling Intra-Body Communication,
          using the body-coupled path as a local reference and a redundant communication channel.
        </p>
        <p>
          The proof-of-concept system will be evaluated using measures including packet delivery, latency,
          signal-to-noise ratio, recovery time, power consumption and communication reliability.
        </p>
      </section>

      <section className="mt-4">
        <h3 className="text-primary">Funding Acknowledgement</h3>
        <p>
          This work is supported by a Huawei-UCL NNTI Joint Laboratory Base Exploratory Project award.
        </p>
      </section>
    </GrantDetail>
  );
}
