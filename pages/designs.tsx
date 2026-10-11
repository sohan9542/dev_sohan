import Heading from "@/components/designs/Heading";
import More from "@/components/designs/More";
import Page from "@/components/utility/Page";
import Designs from "@/components/designs/Designs";

function DesignsPage() {
  return (
    <Page
      currentPage="Designs"
      meta={{
        desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also.",
      }}
    >
      <Heading />
      <Designs />
      <More />
    </Page>
  );
}

export default DesignsPage;
