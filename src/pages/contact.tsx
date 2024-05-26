import { ContactCard } from "../components/card";
import { PageTitle } from "../components/text";
import { contact } from "../constants/contact";
import MainTemplate from "../templates/main";

export default function ContactPage() {
    return (
        <MainTemplate>
            <PageTitle title="Contact Me" description="ช่องทางการติดต่อของผม" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contact.map((c, idx) => (
                    <ContactCard key={idx} {...c} />
                ))}
            </div>
        </MainTemplate>
    );
}
