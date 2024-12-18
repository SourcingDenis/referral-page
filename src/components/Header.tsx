import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useConfetti } from '@/hooks/use-confetti';

export function Header() {
  const confetti = useConfetti();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a
            href="/"
            className="mr-6 flex items-center space-x-2"
            onClick={confetti}
          >
            <Button
              asChild
              className={cn(
                "group inline-flex",
                "bg-black/20 hover:bg-black/40 text-white border border-white/20",
                "shadow-lg hover:shadow-xl transition-all duration-300",
                "relative overflow-hidden",
                "px-3 sm:px-6"
              )}
              size="default"
            >
              <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-medium">Submit a Referral</span>
                <SendHorizontal className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}