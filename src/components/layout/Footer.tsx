export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          &copy; {currentYear} Fitness Simplified. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
