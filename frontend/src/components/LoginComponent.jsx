import React from "react";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";

const LoginComponent = () => {
  const { isLoaded, getToken, signOut } = useAuth();

  const getAllPosts = async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/posts`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  if (!isLoaded) return <span>Loading ...</span>;

  return (
    <div className="w-full h-screen">
      <h1 className="text-center">Clerk Django</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <p className="text-center">
          You have been logged in successfully. <br /> Click the button to
          initiate an API call with Django which returns some data.
        </p>
        <button className="" onClick={getAllPosts}>Click Here</button>
        <br />
        <br />
        <div>
          <span onClick={() => signOut()} style={{ cursor: "pointer" }}>
            Logout
          </span>
        </div>
      </SignedIn>
    </div>
  );
};

export default LoginComponent;
