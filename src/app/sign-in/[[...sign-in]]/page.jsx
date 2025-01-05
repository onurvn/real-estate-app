import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-3">
      <SignIn />
    </div>
  );
};

export default Page;
