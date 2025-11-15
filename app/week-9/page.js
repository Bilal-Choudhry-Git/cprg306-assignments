"use client";
import Link from "next/link";


// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // Sign out of Firebase
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <main >
    
      <h1>Assignment 9 - Welcome to the Shopping List App</h1>

      <h2>
      <Link 
        href="/week-9/shopping-list"
        target="_blank"
      >
       Shopping List
      </Link>
      </h2>
      
      {/* If user is not logged in, show the sign in button */}
      {!user && (
        <>
          <button
            onClick={handleLogin}
          >
            Sign In with GitHub
          </button>
        </>
      )}

      {/* If user is logged in, show Welcome and Logout */}
      {user && (
        <>
          <button
            onClick={handleLogout}
            
          >
            Sign Out
          </button>
        
          <p>
            {/* Display user's information */}
            Welcome, your email is {user.email} and here is your image!
          </p>

           {user && user.photoURL && (
        <img
          src={user.photoURL}
          alt="GitHub Profile"                   
        />
      )}
        </>

      )}
    </main>
  );
}
