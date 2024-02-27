import React from "react";
import CardNews from "../../components/CardNews";
import img6 from "../../../public/img6.png";
export default function News() {
  return (
    <div className="container mx-auto pt-16 md:pt-24 px-2">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 ">
          <CardNews
            title="Unlocking Tomorrow: The Power of Innovation"
            description="Innovation is the catalyst of progress, propelling humanity forward into uncharted realms of possibility. It is the relentless pursuit of creative solutions to age-old problems, the audacious quest to redefine what is possible, and the unwavering commitment to shape a better future for all.

            At the heart of innovation lies the courage to challenge the status quo, to question conventional wisdom, and to embrace the unknown. It is through this fearless exploration that groundbreaking ideas emerge, revolutionizing industries, transforming societies, and enriching lives.
            
            From the invention of the wheel to the discovery of electricity, from the internet revolution to the dawn of artificial intelligence, innovation has been the driving force behind humanity's greatest achievements. It has fueled scientific breakthroughs, spurred economic growth, and empowered individuals to dream, create, and achieve beyond their wildest imagination.
            
            But innovation is not just about technological advancement; it is also about empathy, inclusivity, and sustainability. It is about harnessing the power of diversity to unlock new perspectives, collaborating across boundaries to tackle global challenges, and ensuring that progress benefits not just a privileged few, but all members of society.
            
            As we stand on the brink of a new era of innovation, the possibilities are limitless. From renewable energy and biotechnology to space exploration and beyond, the journey ahead is filled with opportunities to shape a brighter, more equitable, and sustainable future for generations to come.
            
            At ScientistX, we embrace the spirit of innovation in all that we do. Through collaborative research, disruptive technologies, and a steadfast commitment to advancing the greater good, we are pioneering solutions that will redefine the world as we know it.
            
            Join us on this journey of discovery, as we unlock tomorrow and unleash the full potential of innovation to empower humanity and shape a better world for all."
            img={img6}
          ></CardNews>
          <CardNews
          title="The Daily Star honouring high achievers in O, A level exams"
          description="The Daily Star is honouring the high achievers in O- and A-Level
         examinations in a programme today, with a tagline Saluting the nation
         builders of tomorrows"
          img={img6}
          ></CardNews>
        </div>
        <div className="lg:col-span-1">
          <CardNews
          title="The Daily Star honouring high achievers in O, A level exams"
          ></CardNews>
          <CardNews
          title="The Daily Star honouring high achievers in O, A level exams"
          description="The Daily Star is honouring the high achievers in O- and A-Level
          examinations in a programme today, with a tagline Saluting the nation
          builders of tomorrows The Daily Star is honouring the high achievers in O- and A-Level
          examinations in a programme today, with a tagline Saluting the nation
          builders of tomorrows"
          ></CardNews>
        </div>
      </div>
    </div>
  );
}
