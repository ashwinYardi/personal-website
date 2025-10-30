import Link from "next/link";

export function Navbar() {

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Worked with", href: "#worked-with" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="grid w-full h-16 place-items-center">
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium overflow-x-auto md:overflow-visible px-3 md:px-0 max-w-full whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
