import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <span className="text-white mb-2 tracking-[0.2rem] font-light">
        pov: when the portfolio is coming soon&trade;
      </span>
      <Image
        src={
          "https://static.wikia.nocookie.net/3ba95285-8bb0-45eb-aeb6-419da3075335/"
        }
        alt="Crying cat meme"
        width={300}
        height={300}
      />
    </>
  );
};

export default Home;
