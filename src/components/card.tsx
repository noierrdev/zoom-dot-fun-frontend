import React, { useState } from "react";
import LogIn from "./login";



interface CardComponentProps {
  title: string;
  holderPercent: number;
  relockRate: number;
  zumBoost: number;
  tokens: string;
  img: string;
  locked: boolean;
}

const Card: React.FC<CardComponentProps> = ({
  title,
  holderPercent,
  relockRate,
  zumBoost,
  tokens,
  img,
  locked,
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>
      <div>
        <div
          className="bg-cover bg-no-repeat rounded-2xl pt-5 font-normal pb-5"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(158, 254, 191, 0.15) 50%, rgba(21, 165, 70, 0.15) 100%)",
            fontFamily: "Red Hat Text, sans-serif",
          }}
        >
          <img
            src={img}
            alt="avatar"
            className="m-auto w-[217px] h-[217px]"
          ></img>
          <div className="text-white text-2xl text-center mt-5">{title}</div>
          <div className={`${locked === false ? "hidden" : "block"}`}>
            <div className="grid grid-cols-3 gap-3 text-center mt-5 px-8">
              <div>
                <div className="text-[#FAFF00] text-2xl">{holderPercent}%</div>
                <div className="text-white text-sm">
                  Holders<br></br>Locked
                </div>
              </div>
              <div>
                <div className="text-[#67FE9B] text-2xl">{relockRate}%</div>
                <div className="text-white text-sm">
                  Relock<br></br>Rate
                </div>
              </div>
              <div>
                <div className="text-[#67FE9B] text-2xl">{zumBoost}x</div>
                <div className="text-white text-sm">
                  ZUM<br></br>Boost
                </div>
              </div>
            </div>
            <div className="mt-5 py-4 gradient-text text-center border border-white mx-10 rounded-xl cursor-pointer hover:blur-sm font-semibold text-[22px]">
              1:42:6 Until Unlock
            </div>
            <div className="mt-5 flex space-x-4 items-center">
              <img src="/images/token.png" alt="token" className="mx-12"></img>
              <div className="text-white text-xl">{tokens} Tokens</div>
            </div>
          </div>
          <div
            className={`${
              locked === true ? "hidden" : "block"
            } text-white text-2xl font-normal`}
          >
            <div className="flex  space-x-3 mt-5 justify-center">
              <div className="text-[#FAFF00]">{holderPercent}%</div>
              <div>Holders Locked</div>
            </div>
            <div className="flex  space-x-3 mt-5 justify-center">
              <div className="text-[#9EFEBF]">{relockRate}%</div>
              <div>Holders Locked</div>
            </div>
            <div className="flex  space-x-3 mt-5 justify-center">
              <div className="text-[#9EFEBF]">{zumBoost}%</div>
              <div>Holders Locked</div>
            </div>
            <div className="mt-5 py-4 text-center border border-white mx-10 rounded-xl cursor-pointer hover:blur-sm font-semibold text-[22px]">
              Lock {title}
            </div>
          </div>
        </div>
        <div
          className={`${
            locked === false ? "hidden" : "block"
          } text-center text-black font-normal text-2xl py-3 radial-gradient-background bg-cover bg-no-repeat rounded-2xl`}
          style={{
            fontFamily: "Nosifer, sans-serif",
            clipPath:
              "path(M 0,40 Q 50,0 100,40 T 200,40 Q 250,0 300,40 V 300 H 0 Z)",
          }}
        >
          BOOST CTO
        </div>
        <div
          className={`${
            locked === true ? "hidden" : "block"
          } text-white text-2xl font-normal text-center mt-4 cursor-pointer`}
          onClick={handleClickOpen}
        >
          <u>Want to Buy {title}?</u>
        </div>
        <LogIn handleClose={handleClose} open={open}></LogIn>
      </div>
    </>
  );
};

export default Card;
