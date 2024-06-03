import MainTemplate from "../templates/main";
import { HelloTitle } from "../components/text-hello";

export default function HelloPage() {
    return (
        <MainTemplate>
            <HelloTitle title="Hello World!" description="This is a SEO test page" />

        </MainTemplate>
    );
}