import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Christmas Roleplay" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center gap-24 text-2xl">
      <Link className="underline" to="characters/1">Leon</Link>
      <Link className="underline" to="characters/2">Ralf</Link>
      <Link className="underline" to="characters/3">Micke</Link>
      <Link className="underline" to="characters/4">Danne</Link>
    </div>
  );
}

