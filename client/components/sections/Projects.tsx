import { ExternalLink, Code, BarChart, Smartphone, Globe, Database, Cloud, Activity, Search, Mail, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ProjectCategory = "technology" | "marketing";

interface Project {
  title: string;
  category: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
}

const techProjects: Project[] = [
  {
    title: "AI Hiring Platform",
    category: "AI & Automation",
    icon: <Activity className="w-5 h-5 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OpenAI", "React"]
  },
  {
    title: "ERP & CRM Dashboard System",
    category: "Enterprise",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "PostgreSQL", "Tailwind"]
  },
  {
    title: "SaaS Project Management Tool",
    category: "SaaS",
    icon: <Code className="w-5 h-5 text-green-400" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Node.js", "Docker"]
  },
  {
    title: "Cloud Infrastructure Automation",
    category: "Cloud",
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["Terraform", "AWS", "K8s"]
  },
  {
    title: "IoT Monitoring Platform",
    category: "IoT",
    icon: <Smartphone className="w-5 h-5 text-amber-400" />,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    tags: ["MQTT", "InfluxDB", "Grafana"]
  },
  {
    title: "Startup Analytics Platform",
    category: "Analytics",
    icon: <Activity className="w-5 h-5 text-pink-400" />,
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    tags: ["BigQuery", "DataStudio", "React"]
  }
];

const marketingProjects: Project[] = [
  {
    title: "B2B Lead Generation Funnel",
    category: "Lead Gen",
    icon: <Search className="w-5 h-5 text-pink-400" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    tags: ["Automation", "Salesforce"]
  },
  {
    title: "Meta Ads Performance System",
    category: "Paid Ads",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tags: ["Facebook API", "Analytics"]
  },
  {
    title: "SEO Growth Dashboard",
    category: "SEO",
    icon: <Search className="w-5 h-5 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800",
    tags: ["Organic", "GSC API"]
  },
  {
    title: "Influencer Campaign Automation",
    category: "Influencer",
    icon: <Smartphone className="w-5 h-5 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    tags: ["Viral", "Creator CRM"]
  },
  {
    title: "Marketing Analytics & Attribution Tool",
    category: "Analytics",
    icon: <BarChart className="w-5 h-5 text-amber-500" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Mixpanel", "GA4", "SQL"]
  },
  {
    title: "Email & WhatsApp Automation System",
    category: "Automation",
    icon: <Mail className="w-5 h-5 text-indigo-400" />,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
    tags: ["SendGrid", "Twilio API"]
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("technology");

  const projects = activeCategory === "technology" ? techProjects : marketingProjects;

  return (
    <section className="py-24 px-6 bg-secondary/10 " id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 tracking-tight"
          >
            Our Portfolio
          </motion.h2>
          
          <div className="flex flex-center justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("technology")}
              className={cn(
                "px-8 py-3 rounded-full font-bold transition-all border-2",
                activeCategory === "technology" 
                  ? "bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/30" 
                  : "bg-transparent border-white/10 text-foreground/50 hover:border-yellow-400 hover:text-yellow-400"
              )}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveCategory("marketing")}
              className={cn(
                "px-8 py-3 rounded-full font-bold transition-all border-2",
                activeCategory === "marketing" 
                  ? "bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/30" 
                  : "bg-transparent border-white/10 text-foreground/50 hover:border-yellow-400 hover:text-yellow-400"
              )}
            >
              Marketing & Growth
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} {...project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ title, category, icon, image, tags, index }: Project & { index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-3xl overflow-hidden bg-background border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] uppercase tracking-widest font-bold px-3 py-1">
            {category}
          </Badge>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-5 h-5 text-primary" />
          </div>
        </div>

        <h4 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">{title}</h4>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] px-3 py-1.5 rounded-lg bg-white/5 text-foreground/60 font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
