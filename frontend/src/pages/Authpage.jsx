import React from "react";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import LoginCard from "../components/Login";
import SignupCard from "../components/SignUp";

const Authpage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default Authpage;
