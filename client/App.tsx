import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Marketing from "./pages/Marketing";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import { ScrollToTop } from "./components/ScrollToTop";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
        <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />

              <Route path="/marketing" element={<Marketing />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
