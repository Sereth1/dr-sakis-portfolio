import Card from "@/components/mainPage/Card";
import CenteredImage from "@/components/mainPage/CenteredImage";
import ImageMobile from "@/components/mainPage/ImageMobile";
import IntroHero from "@/components/mainPage/IntroHero";

const mockData = {
  title: "Hi there",
  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit corrupti
ipsa omnis temporibus perspiciatis explicabo sit odit! Ullam ea sint
veniam quisquam, nesciunt numquam iure quo sapiente, dolorem optio
ratione?`,
};

export default function Home() {
  return (
    <div className="">
      <ImageMobile />
      <IntroHero />
      <CenteredImage />

      <Card
        color="darkTeal"
        title={mockData.title}
        mainText={mockData.text}
        textColor="white"
        img="images/sakis1.png"
      />
      <Card
        reversed={true}
        color="white"
        title={mockData.title}
        mainText={mockData.text}
        textColor="darkTeal"
        img="images/sakis2.png"
      />
      <Card
        color="darkTeal"
        title={mockData.title}
        mainText={mockData.text}
        textColor="white"
        img="images/sakis3.png"
      />
    </div>
  );
}
