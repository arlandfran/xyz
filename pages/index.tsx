import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <figure className="p-8">
        <figcaption className="text-white tracking-[0.2rem] font-light mb-2">
          pov:
          <br />
          when the portfolio is coming soon&trade;
        </figcaption>
        <Image
          src={
            "https://static.wikia.nocookie.net/3ba95285-8bb0-45eb-aeb6-419da3075335/"
          }
          alt="Crying cat meme"
          width={345}
          height={450}
        />
      </figure>
    </>
  );
};

export default Home;
