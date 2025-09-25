import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <h2>
      <Link 
        href="http://localhost:3000/week-2" 
        target="_blank"
      >
        Week-2 page
      </Link>
      </h2>
      
      <h2>
      <Link 
        href="http://localhost:3000/week-3"
        target="_blank"
      >
        Week-3 Page
      </Link>
      </h2>
    </main>
  );
}
