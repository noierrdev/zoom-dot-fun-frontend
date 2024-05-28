import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

interface LoginComponentProps {
  handleClose: () => void;
  open: boolean;
}

const ColorButton = styled(Button)<ButtonProps>(({}) => ({
  backgroundColor: "#67FE9B",
  "&:hover": {
    backgroundColor: "#4BFE85",
  },
}));

const LogIn: React.FC<LoginComponentProps> = ({ handleClose, open }) => {
  const [stats, setStats] = useState(0);
  function handleJoinCTO() {
    setStats(1);
  }
  function handleConnectSocial() {
    setStats(2);
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            backgroundColor: "#151A26",
            // backgroundImage:
            //   "radial-gradient(circle, rgba(15, 129, 54, 0.4) 0%, rgba(21, 165, 70, 0.4) 25%, rgba(103, 254, 155, 0.4) 55%)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "533px",
            height: "366px",
            important: {
              backgroundColor: "#151A26",
            },
          }}
        >
          <DialogContentText id="alert-dialog-description">
            <div
              className="text-[#67FE9B] text-base flex justify-end cursor-pointer"
              onClick={handleClose}
            >
              X
            </div>
            <div
              className={`${stats === 0 ? "block" : "hidden"} mt-28`}
              style={{ fontFamily: "Red Hat Text, sans-serif" }}
            >
              <div className="text-white flex justify-center">
                <ColorButton
                  variant="contained"
                  className="w-[151px] h-[64px] text-2xl font-bold"
                  onClick={handleJoinCTO}
                >
                  JOIN CTO
                </ColorButton>
              </div>
              <div className="mt-10 text-white text-center w-1/2 m-auto">
                The attention locker sending all tokens to the power of CTO
              </div>
            </div>
            <div
              className={`${
                stats === 1 ? "block" : "hidden"
              } mt-18 text-[#67FE9B] text-2xl font-normal `}
              style={{ fontFamily: "Red Hat Text, sans-serif" }}
            >
              <div className="flex justify-center">
                Login with Wallet or Social
              </div>
              <div className="mt-5 flex items-center">
                <div className="">1.</div>
                <div className="ml-12 flex space-x-10">
                  <ColorButton
                    variant="contained"
                    sx={{ padding: "10px" }}
                    onClick={handleConnectSocial}
                  >
                    <img src="/images/twitter.png" alt="twitter" />
                  </ColorButton>
                  <ColorButton variant="contained" sx={{ padding: "10px" }}>
                    <img src="/images/apple.png" alt="twitter" />
                  </ColorButton>
                  <ColorButton variant="contained" sx={{ padding: "10px" }}>
                    <img src="/images/vector.png" alt="twitter" />
                  </ColorButton>
                  <ColorButton variant="contained" sx={{ padding: "10px" }}>
                    <img src="/images/google.png" alt="twitter" />
                  </ColorButton>
                </div>
              </div>
              <div className="text-white text-center mt-4">
                Logging in with X creates
                <br /> your embedded wallet for ZUM
              </div>
              <div
                className="mt-5 flex items-center"
                style={{ color: "rgba(103, 254, 155, 0.25" }}
              >
                <div>2.</div>
                <ColorButton
                  variant="contained"
                  sx={{
                    padding: "10px",
                    marginLeft: "48px",
                    width: "77%",
                    color: "rgba(100,100,100, 0.5)",
                  }}
                >
                  Link wallets
                </ColorButton>
              </div>
            </div>
            <div
              className={`${
                stats === 2 ? "block" : "hidden"
              } mt-18 text-[#67FE9B] text-2xl font-normal `}
              style={{ fontFamily: "Red Hat Text, sans-serif" }}
            >
            <div
                className="mt-5 flex items-center"
                style={{ color: "rgb(103, 254, 155" }}
              >
                <img src="/images/check.png" alt="check"/>
                <ColorButton
                  variant="contained"
                  sx={{
                    padding: "10px",
                    marginLeft: "30px",
                    width: "77%",
                    color: "white",
                  }}
                >
                  <img src="/images/twitter.png" alt="twitter" className="mr-10"/>@NUMBDEVS
                </ColorButton>
              </div>
              <div className="text-white text-center mt-4 text-lg">
                🧟‍  Now, link your wallets with the <br/> deady baggas below 👇 
              </div>
              <div
                className="mt-5 flex items-center"
                style={{ color: "rgba(103, 254, 155" }}
              >
                <div className="ml-3">2.</div>
                <ColorButton
                  variant="contained"
                  sx={{
                    padding: "10px",
                    marginLeft: "38px",
                    width: "77%",
                    color: "white",
                  }}
                >
                  Link wallets
                </ColorButton>
              </div>
              <div className="text-white text-center mt-4 text-lg">If you&atop;reusing photon will need to<br/> import photon into phantom</div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LogIn;
