export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {year} Ashwin Yardi. All rights reserved.</p>
        <p className="hidden sm:block">Built with Next.js, Tailwind, and shadcn/ui.</p>
      </div>
    </footer>
  )
}
