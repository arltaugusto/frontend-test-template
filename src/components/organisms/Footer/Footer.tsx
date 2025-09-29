import Link from "next/link";

import ApplyDigitalLogo from "./assets/apply-digital-logo.svg";

const Footer = () => {
  return (
    <footer className="mt-8 flex items-center justify-center bg-neutral-700 py-16 2xl:mt-12">
      <Link href="/">
        <ApplyDigitalLogo />
      </Link>
    </footer>
  );
};

export { Footer };
