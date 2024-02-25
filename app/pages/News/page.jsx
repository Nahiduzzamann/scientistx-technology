import React from "react";
import CardNews from "../../components/CardNews";
import img6 from "../../../public/img6.png";
export default function News() {
  return (
    <div className="container mx-auto pt-16 md:pt-24 px-2">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 ">
          <CardNews
            title="The Daily Star honouring high achievers in O, A level exams"
            description="The Daily Star is honouring the high achievers in O- and A-Level
           examinations in a programme today, with a tagline Saluting the nation
           builders of tomorrows dhbudyg dhvcugsg dguys dyguy dyhgguyg dgyg yguyg  hyyguiygyuig jyguiygy ,jhguiyug hgh The Daily Star is honouring the high achievers in O- and A-Level
           examinations in a programme today, with a tagline Saluting the nation
           builders of tomorrows dhbudyg dhvcugsg dguys dyguy dyhgguyg dgyg yguyg  hyyguiygyuig jyguiygy ,jhguiyug hgh  "
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
