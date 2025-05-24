import { auth, currentUser } from "@clerk/nextjs/server";
import AuthButtons from "@/components/sign-in-out-btn/auth-buttons";
import Image from "next/image";
import { ArrowRight, BookOpen, Brain, Code, Users, Target, Rocket, MessageSquare, Trophy, Sparkles } from "lucide-react";
import AnimatedText from "@/components/animations/animated-text";
import AnimatedCounter from "@/components/animations/animated-counter";
import AnimatedBackground from "@/components/animations/animated-background";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        <AnimatedBackground />
        
        <div className="flex items-center gap-3 mb-6 animate-bounce-soft">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
            <Image
              src="/logo/icon.png"
              alt="logo"
              priority
              height={56}
              width={56}
              className="w-auto h-auto dark:invert relative z-10"
            />
          </div>
          <h1 className="text-5xl font-bold text-gradient glow">
            EchoVerse
          </h1>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText
            text="Your Collaborative Learning Space for Growth and Success"
            className="text-3xl md:text-4xl font-semibold mb-6"
          />
          <AnimatedText
            text="Join a vibrant community of learners, practice together, and excel in aptitude, DSA, and more."
            className="text-muted-foreground text-lg mb-8"
            delay={3}
          />
        </div>
        
        {!userId ? (
          <div className="flex gap-4 animate-slide-up delay-200">
            <AuthButtons
              href="/sign-up"
              className="glass-effect hover-lift group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer" />
            </AuthButtons>
            <AuthButtons href="/sign-in" className="hover-lift">
              Sign In
            </AuthButtons>
          </div>
        ) : (
          <div className="text-center animate-slide-up delay-200 flex flex-col justify-center items-center">
            <p className="text-xl mb-4 glass-effect px-6 py-2 rounded-full inline-block">
              Welcome back, {user?.firstName} {user?.lastName}! <Sparkles className="inline-block ml-2 text-yellow-500 animate-pulse" />
            </p>
            <AuthButtons href="/app" className="hover-lift">
              Go to Servers <ArrowRight className="ml-2 h-5 w-5 inline" />
            </AuthButtons>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="relative px-4 py-16 bg-gray-100 dark:bg-secondary/30">
        <div className="absolute inset-0 bg-grid-black/10 dark:bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        <div className="max-w-6xl mx-auto">
          <AnimatedText
            text="Why Choose EchoVerse?"
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex flex-col items-center text-center p-6 rounded-lg hover-lift glass-effect bg-white dark:bg-secondary/30 text-gray-900 dark:text-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-slow" />
                  <feature.icon className="h-12 w-12 text-primary relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 py-16 bg-gray-50 dark:bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 glass-effect rounded-lg hover-lift bg-white dark:bg-background text-gray-900 dark:text-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AnimatedCounter
                  from={0}
                  to={Number(stat.value)}
                  className="text-4xl font-bold text-gradient mb-2 block"
                />
                <div className="text-muted-foreground text-gray-700 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-white dark:bg-black">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-blue-300/20 to-pink-300/20 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-pink-500/20 animate-gradient-x" />
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
          <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "-2s" }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 dark:from-purple-400 dark:via-blue-400 dark:to-pink-400 text-transparent bg-clip-text animate-gradient-x">
            Ready to Join the Community?
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with fellow learners, share knowledge, and grow together in our vibrant learning environment.
          </p>
          <div className="flex justify-center gap-4">
            {!userId && <AuthButtons
              href="/sign-up"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-black dark:text-white font-semibold hover:scale-105 transition-transform duration-300 animate-shimmer relative overflow-hidden border border-gray-400/20"
            >
              Get Started
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-fast" />
            </AuthButtons>}
            <AuthButtons 
              href="/about" 
              className="px-8 py-3 rounded-full border border-gray-400/20 dark:border-white/20 text-gray-700 dark:text-white font-semibold hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </AuthButtons>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-600 dark:text-muted-foreground bg-gray-100 dark:bg-background relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/logo/icon.png"
              alt="logo"
              height={24}
              width={24}
              className="w-auto h-auto dark:invert hover-lift"
            />
            <span className="font-semibold text-gray-900 dark:text-white">EchoVerse</span>
          </div>
          <p className="animate-fade-in text-gray-600 dark:text-muted-foreground">
            {new Date().getFullYear()} EchoVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Collaborative Learning",
    description: "Learn and grow together with peers in real-time discussion channels. Share knowledge, ask questions, and help others.",
    icon: Users
  },
  {
    title: "Aptitude & Reasoning",
    description: "Practice and improve your logical, verbal, and quantitative abilities with our curated question sets.",
    icon: Brain
  },
  {
    title: "DSA Practice",
    description: "Master Data Structures and Algorithms with our dedicated practice channel and expert guidance.",
    icon: Code
  },
  {
    title: "Real-time Interaction",
    description: "Engage in live discussions, code reviews, and problem-solving sessions with fellow learners.",
    icon: MessageSquare
  },
  {
    title: "Focused Learning Paths",
    description: "Follow structured learning paths designed to help you achieve your goals efficiently.",
    icon: Target
  },
  {
    title: "Track Progress",
    description: "Monitor your learning journey with detailed progress tracking and achievement badges.",
    icon: Trophy
  }
];

const stats = [
  {
    label: "Active Learners",
    value: "10000"
  },
  {
    label: "Learning Channels",
    value: "500"
  },
  {
    label: "Practice Questions",
    value: "100000"
  },
  {
    label: "Learning Sessions",
    value: "50000"
  }
];
