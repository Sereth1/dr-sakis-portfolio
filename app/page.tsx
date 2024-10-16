import Card from "@/components/mainPage/Card";
import CenteredImage from "@/components/mainPage/CenteredImage";
import IntroHero from "@/components/mainPage/IntroHero";
import LargeTextWithEffect from "@/components/mainPage/LargeTextWithEffect";

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
      <IntroHero />
      <LargeTextWithEffect />
      <CenteredImage />
      <Card
        color="darkTeal"
        title={mockData.title}
        mainText={mockData.text}
        textColor="white"
      />
      <Card
        reversed={true}
        color="white"
        title={mockData.title}
        mainText={mockData.text}
        textColor="darkTeal"
      />
      <Card
        color="darkTeal"
        title={mockData.title}
        mainText={mockData.text}
        textColor="white"
      />
    </div>
  );
}
