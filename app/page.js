import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <h2>
      <Link 
        href="/week-2" 
        target="_blank"
      >
        Week-2 page
      </Link>
      </h2>
      
      <h2>
      <Link 
        href="/week-3"
        target="_blank"
      >
        Week-3 Page
      </Link>
      </h2>
      <h2>
      <Link 
        href="/week-4"
        target="_blank"
      >
        Week-4 Page
      </Link>
      </h2>
      <h2>
      <Link 
        href="/week-5"
        target="_blank"
      >
        Week-5 Page
      </Link>
      </h2>
      <h2>
      <Link 
        href="/week-6"
        target="_blank"
      >
        Week-6 Page
      </Link>
      </h2>
    </main>
  );
}
