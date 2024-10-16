import React from "react";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Link href="/auth">Auth</Link>
      <Link href="/profiles/1">profiles</Link>
    </div>
  );
}
