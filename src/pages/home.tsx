// HomePage.tsx
import React, { useState } from "react";
import Card from "../components/card";

const HomePage: React.FC = () => {
  const [locked, setLocked] = useState(false);
  return (
    <div className="pt-20 px-4 sm:px-20 mb-5">
      <div
        className="flex items-center text-white font-normal "
        style={{ fontFamily: "Nosifer, sans-serif" }}
      >
        <div className="text-4xl lg:text-7xl">ZUM.FUN</div>
        <div className="hidden md:block ml-auto text-xl lg:text-[32px]">ZUM 278.76</div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mt-20 md:grid-cols-2">
        <Card
          locked={locked}
          img="/images/avatar1.png"
          title="$DWAKE"
          holderPercent={55}
          relockRate={86}
          zumBoost={1.8}
          tokens="36.2K"
        ></Card>
        <Card
          locked={locked}
          img="/images/avatar2.png"
          title="$DFV"
          holderPercent={88}
          relockRate={69}
          zumBoost={2.8}
          tokens="1.2M"
        ></Card>
        <Card
          locked={locked}
          img="/images/avatar3.png"
          title="$DAO"
          holderPercent={45}
          relockRate={88}
          zumBoost={2.1}
          tokens="300M"
        ></Card>
      </div>
    </div>
  );
};

export default HomePage;
