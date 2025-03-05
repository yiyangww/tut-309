import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h2>CSC 309 TUT DEMO</h2>

      <nav>
        <Link href="/basic-hooks">Basic Hooks</Link>
        <br />
        <Link href="/console-log">Console Log</Link>
        <br />
        <Link href="/switch-button">Switch Button</Link>
        <br />
        <Link href="/server-actions">demo server actions</Link>
      </nav>
    </div>
  );
}
