import { CertCard } from "../components/card";
import { PageTitle } from "../components/text";
import { cert } from "../constants/cert";
import MainTemplate from "../templates/main";

export default function Certificate() {
    return (
        <MainTemplate>
            <PageTitle title="Certificate" description="เกียรติบัตรต่างๆ ของผม" />
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {cert.map((c, idx) => (
                    <CertCard key={idx} {...c} />
                ))}
            </div>
        </MainTemplate>
    );
}
