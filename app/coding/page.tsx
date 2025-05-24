"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, ChevronRight, Cpu, Server, Database, Braces } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    className="p-6 rounded-xl bg-zinc-100 dark:bg-slate-800/80 border border-zinc-200 dark:border-slate-700 shadow-sm dark:shadow-md dark:shadow-black/10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-indigo-100 dark:bg-blue-900/40 text-indigo-700 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2 text-zinc-900 dark:text-foreground">{title}</h3>
        <p className="text-sm text-zinc-700 dark:text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

const CodingPage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/coding/problems-list");
  };

  return (
    <div className="min-h-screen pt-[90px] pb-16 flex flex-col items-center justify-start
      bg-gradient-to-br from-zinc-50 via-indigo-50/30 to-purple-50/30 
      dark:from-background dark:via-blue-950/20 dark:to-purple-950/20 
      px-4">
      <div className="max-w-4xl w-full space-y-12 text-center">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Code className="h-10 w-10 text-indigo-600 dark:text-blue-400" />
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-foreground dark:to-foreground/70 bg-clip-text text-transparent">
              Welcome to AlgoVerse
            </h1>
          </div>
          <p className="text-lg text-zinc-700 dark:text-muted-foreground max-w-2xl mx-auto">
            Enhance your coding skills with our collection of data structures and algorithm problems.
            Practice, learn, and master the art of efficient problem-solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 shadow-md"
            onClick={handleRedirect}
          >
            Explore Problems <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="pt-8">
          <motion.h2 
            className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            What You'll Learn
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Braces className="h-6 w-6" />}
              title="Data Structures"
              description="Master essential data structures like arrays, linked lists, trees, graphs, and more."
            />
            <FeatureCard 
              icon={<Cpu className="h-6 w-6" />}
              title="Algorithms"
              description="Learn fundamental algorithms for sorting, searching, and solving complex problems efficiently."
            />
            <FeatureCard 
              icon={<Server className="h-6 w-6" />}
              title="System Design"
              description="Understand how to design scalable systems and optimize for performance."
            />
            <FeatureCard 
              icon={<Database className="h-6 w-6" />}
              title="Problem Solving"
              description="Develop critical thinking skills to approach and solve challenging coding problems."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
