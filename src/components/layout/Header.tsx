'use client';

import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Dumbbell className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">Fitness Simplified</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className={cn(
                "text-foreground/70 hover:text-foreground hover:bg-accent/30",
                pathname === item.href && "text-primary font-semibold bg-accent/50"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Dumbbell className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">Fitness Simplified</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-2 p-4">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.label}>
                       <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent/30 hover:text-foreground",
                          pathname === item.href && "bg-accent/50 text-primary"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
