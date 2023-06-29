import React, { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";

const page = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <h2 className="text-red-800 text-3xl text-center font-bold bg-base-300">
          <span className="loading loading-dots loading-lg"></span>
        </h2>
      </div>
    );
  }
  if (!user) {
    router.push("/Authentication/login");
  }
  if (user) {
    return children;
  }
  return <div>{children}</div>;
};

export default page;
