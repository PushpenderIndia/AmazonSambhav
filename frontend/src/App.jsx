import "./App.css";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";

function App() {
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

  return (
    <div className="w-full h-screen">
      <h1 className="text-center">Clerk Django</h1>
      {isLoaded ? (
        <>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <p>
              You have been logged in successfully. <br /> Click the button to
              initiate an API call with Django which returns some data.
            </p>
            <button onClick={getAllPosts}>
              Click Here
            </button>
            <br />
            <br />
            <div>
              <span onClick={() => signOut()}>
                Logout
              </span>
            </div>
          </SignedIn>
        </>
      ) : (
        <span>Loading ...</span>
      )}
    </div>
  );
}

export default App;
