import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useTheme } from "./ThemeProvider";



import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />
      <main className="relative z-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
