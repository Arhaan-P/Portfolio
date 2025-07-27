"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
  ChevronDown,
  Menu,
  X,
  Download,
  MapPin,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

// Types for better TypeScript support
interface NavItem {
  id: string
  label: string
}

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  metrics: string
  status: "Ongoing" | "Completed" | "In Development"
  image: string
  link?: string
  github?: string
  problem: string
  approach: string
  outcome: string
}

interface Experience {
  id: string
  title: string
  company: string
  location: string
  duration: string
  description: string[]
  skills: string[]
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Enhanced scroll tracking with intersection observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ["home", "about", "experience", "projects", "skills", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  const projects: Project[] = [
    {
      id: "vhelp",
      title: "VHelp",
      description: "Comprehensive campus management app integrating food ordering, hostel management, and academic services",
      longDescription: "A full-stack Flutter application that revolutionizes campus life by providing seamless integration of essential services including food ordering, hostel management, academic resources, and student communication tools.",
      technologies: ["Flutter", "Firebase", "Real-time DB", "Push Notifications", "Cloud Functions"],
      metrics: "Campus-Scale Platform",
      status: "Ongoing",
      image: "/images/vhelp.jpeg",
      problem: "Students at VIT Chennai faced fragmented digital services across campus, leading to inefficient processes for food ordering, hostel management, and academic tasks.",
      approach: "Developed a unified Flutter application with Firebase backend, implementing real-time synchronization, secure authentication, and scalable cloud architecture.",
      outcome: "Successfully onboarded 300+ active users within two hours of beta testing, reduced service request processing time by 75%, and improved student satisfaction scores by 40%."
    },
    {
      id: "Promptly",
      title: "Promptly",
      description: "AI-powered toolkit designed to help users write better prompts for large language models",
      longDescription: "A web application that acts as an expert prompt engineering coach, analyzing prompts for clarity, context, and specificity while providing quality scores, detailed feedback, and optimized versions.",
      technologies: ["Python", "Streamlit", "Google Gemini API", "Caching", "Performance Logging"],
      metrics: "Expert-Level Analysis",
      status: "Completed",
      image: "/images/promptly.png",
      link: "https://promptly-analyzer.streamlit.app/",
      problem: "Users struggle with the complex art of prompt writing for AI models, often receiving suboptimal responses due to unclear, vague, or poorly structured prompts.",
      approach: "Built a modular and scalable web application using Python and Streamlit, integrating Google Gemini API for intelligent analysis with features like validation, caching, and performance monitoring.",
      outcome: "Transformed prompt writing into a simple, interactive process, providing users with instant expert-level feedback to significantly improve their AI interactions and response quality."
    },
    {
      id: "junk-wunk",
      title: "Junk-Wunk",
      description: "AI-powered waste management platform connecting rag pickers and sellers with smart image recognition",
      longDescription: "An innovative Flutter application that streamlines waste management processes, connecting rag pickers with sellers while promoting sustainable waste disposal practices.",
      technologies: ["Flutter", "Firebase", "Google Auth"],
      metrics: "Hackathon Runner-Up",
      status: "Completed",
      image: "/images/junkwunk.png",
      github: "https://github.com/dormeneur/JUNKWUNK/",
      problem: "Inefficient waste management systems and lack of connection between waste collectors and sellers resulted in poor recycling rates and environmental impact.",
      approach: "Built an AI-powered mobile platform using real-time Firebase database for user connections, and intuitive UI/UX design.",
      outcome: "Won 2nd place at Hack-N-Droid 2025."
    }
  ]

  const experience: Experience[] = [
    {
      id: "ihcl",
      title: "AI Research Intern",
      company: "The Indian Hotels Company Limited (IHCL)",
      location: "Mumbai, India",
      duration: "May 16 – June 15, 2025",
      description: [
        "Contributed to AI Chatbot research and implementation under Ms. Veetika Deoras, Senior VP - Commercial",
        "Evaluated conversational AI solutions and participated in decision-making meetings for chatbot partner selection",
        "Conducted comparative analysis of multiple AI platforms, resulting in 25% improvement in customer query resolution",
        "Gained hands-on experience applying AI technologies to enhance hospitality customer service"
      ],
      skills: ["Conversational AI", "Natural Language Processing", "Customer Service Optimization", "Technology Evaluation"]
    }
  ]

  // Project Card Component with micro-case study layout
  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-75 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJcklyyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute top-4 right-4">
          <Badge 
            className={`${
              project.status === 'Ongoing' ? 'bg-success text-success-foreground' : 
              project.status === 'Completed' ? 'bg-primary text-primary-foreground' : 
              'bg-warning text-warning-foreground'
            }`}
          >
            {project.status}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-foreground flex items-center justify-between">
          {project.title}
          <div className="flex space-x-2">
            {project.github && (
              <Link 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={20} />
              </Link>
            )}
            <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </CardTitle>
        <CardDescription>{project.longDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Micro-case study sections */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-destructive mb-2 flex items-center">
              <Target size={16} className="mr-2" />
              Problem
            </h4>
            <p className="text-sm text-muted-foreground">{project.problem}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-primary mb-2 flex items-center">
              <Lightbulb size={16} className="mr-2" />
              Approach
            </h4>
            <p className="text-sm text-muted-foreground">{project.approach}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-success mb-2 flex items-center">
              <CheckCircle size={16} className="mr-2" />
              Outcome
            </h4>
            <p className="text-sm text-muted-foreground">{project.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-success font-medium mt-4">
          <Trophy size={16} className="mr-2" />
          {project.metrics}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted/20">
        {/* Enhanced Navigation with improved accessibility and micro-interactions */}
        <nav 
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
              ? 'glass border-b border-border/50' 
              : 'bg-transparent'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl text-foreground hover:text-primary transition-colors">
                Arhaan Penwala
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Enhanced Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded-md mx-2 mb-1 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Sticky Hire Me CTA */}
        <div className="fixed bottom-6 right-6 z-40 no-print">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover-lift animate-pulse-slow"
          >
            <Zap size={20} className="mr-2" />
            Hire Me
          </Button>
        </div>

        <main id="main-content">
          {/* Enhanced Hero Section */}
          <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            aria-label="Hero section"
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-float" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-20" />
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
              <div className="mb-8 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  Arhaan Penwala
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                  AI & Robotics Engineer | Flutter App Developer | ML Enthusiast
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge variant="secondary" className="px-4 py-2 text-sm glass">
                    <GraduationCap size={16} className="mr-2" />
                    VIT Chennai Student
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm glass">
                    <Star size={16} className="mr-2" />
                    CGPA: 9.26
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm glass">
                    <Users size={16} className="mr-2" />
                    Hackathon Runner Up
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover-lift"
                >
                  View My Work
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-accent px-8 py-3 hover-lift"
                >
                  Get In Touch
                  <Mail size={20} className="ml-2" />
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="px-8 py-3 hover-lift"
                >
                  <a href="/resume.pdf" download="Arhaan_Penwala_Resume.pdf">
                    <Download size={20} className="mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="animate-bounce">
                <ChevronDown size={32} className="mx-auto text-muted-foreground" />
              </div>
            </div>
          </section>

          {/* Enhanced About Section */}
          <section id="about" className="py-20 bg-card/30" aria-label="About section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Passionate AI & Robotics engineer with proven expertise in building scalable applications 
                  that solve real-world problems. I combine cutting-edge technology with user-centric design 
                  to create impactful solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-12">
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Academic Excellence</h3>
                      <p className="text-muted-foreground">
                        Currently pursuing B.Tech in AI & Robotics at VIT Chennai with a stellar 9.26 CGPA. 
                        Previously ranked 1st in school with 95.43% in IGCSE, demonstrating consistent 
                        academic performance and dedication to learning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-success/10 p-3 rounded-lg group-hover:bg-success/20 transition-colors">
                      <Code className="text-success" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Technical Expertise</h3>
                      <p className="text-muted-foreground">
                        Proficient in multiple programming languages and frameworks, with hands-on experience 
                        in full-stack development, AI/ML implementation, and mobile app development. 
                        Specialized in Flutter, Firebase, and modern web technologies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-warning/10 p-3 rounded-lg group-hover:bg-warning/20 transition-colors">
                      <Trophy className="text-warning" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Proven Impact</h3>
                      <p className="text-muted-foreground">
                        Built an app that got 300+ users within hours of beta testing, won competitive hackathons, and contributed 
                        to AI research at leading hospitality companies. Demonstrated ability to translate 
                        technical skills into measurable business value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Experience Section */}
          <section id="experience" className="py-20 bg-muted/30" aria-label="Experience section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
                <p className="text-xl text-muted-foreground">Professional journey and key contributions</p>
              </div>

              <div className="max-w-4xl mx-auto">
                {experience.map((exp) => (
                  <Card key={exp.id} className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 mb-8 glass">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center">
                            <Briefcase size={20} className="mr-2" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                            <Calendar size={16} className="mr-1 ml-3" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-muted-foreground mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Projects Section */}
          <section id="projects" className="py-20 bg-card/30" aria-label="Projects section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
                <p className="text-xl text-muted-foreground">Innovative solutions that make a real impact</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={project.id} className={index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="hover-lift">
                  <Link href="https://github.com/Arhaan-P" target="_blank" rel="noopener noreferrer">
                    <Github size={20} className="mr-2" />
                    View All Projects on GitHub
                    <ExternalLink size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Skills Section */}
          <section id="skills" className="py-20 bg-muted/30" aria-label="Skills section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
                <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Programming",
                    icon: Code,
                    color: "primary",
                    skills: ["C", "C++", "Python", "Java", "JavaScript"]
                  },
                  {
                    title: "Development",
                    icon: Briefcase,
                    color: "success",
                    skills: ["Flutter", "React", "Next.js", "Node.js", "Firebase", "MongoDB"]
                  },
                  {
                    title: "AI & ML",
                    icon: GraduationCap,
                    color: "warning",
                    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "NumPy", "Pandas"]
                  },
                  {
                    title: "Tools & Cloud",
                    icon: Trophy,
                    color: "destructive",
                    skills: ["Git", "Docker", "AWS", "Figma"]
                  }
                ].map((category) => (
                  <Card key={category.title} className="text-center hover:shadow-lg transition-all duration-300 hover-lift glass animate-scale-in">
                    <CardHeader>
                      <div className={`bg-${category.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <category.icon className={`text-${category.color}`} size={32} />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs hover:bg-accent transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Achievements Section */}
          <section id="achievements" className="py-20 bg-card/30" aria-label="Achievements section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">Achievements</h2>
                <p className="text-xl text-muted-foreground">Recognition and accomplishments</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow glass hover-lift animate-slide-in-left">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Trophy className="text-warning mr-3" size={24} />
                      Technical & Academic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "🥈 2nd Place, Hack-N-Droid 2025 Hackathon, VIT Chennai",
                        "🏆 7th place National Prelims XPRESS MATH 2016, BITS Goa",
                        "🥇 Ranked 1st in school with 95.43% in IGCSE",
                      ].map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={16} className="text-success mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow glass hover-lift animate-slide-in-right">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Trophy className="text-primary mr-3" size={24} />
                      Sports Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "🥉 3rd place IBSO Squash Tournament (U-14)",
                        "🏆 National ranking 57/250 in Squash (U-13)",
                        "🥉 3rd place in Vibrance Sports, VIT Chennai 2024 ",
                        "🏅 Multiple inter-school sports championships"
                      ].map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Enhanced Contact Section */}
          <section id="contact" className="py-20 bg-gradient-to-br from-card to-muted text-foreground" aria-label="Contact section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
                <p className="text-xl text-muted-foreground">
                  Ready to collaborate on innovative projects or discuss opportunities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    I&apos;m always excited to work on challenging projects and explore new opportunities in AI, 
                    robotics, and full-stack development. Let&apos;s build something amazing together!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href="mailto:arhaanpenwala9@gmail.com" 
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          arhaanpenwala9@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="bg-success/10 p-3 rounded-lg group-hover:bg-success/20 transition-colors">
                        <Phone size={20} className="text-success" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a 
                          href="tel:+918104708138" 
                          className="text-success hover:text-success/80 transition-colors"
                        >
                          +91 8104708138
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center animate-slide-in-right">
                  <div className="glass p-8 rounded-2xl">
                    <h4 className="text-xl font-semibold mb-6">Connect on Social</h4>
                    <div className="flex justify-center space-x-6 mb-6">
                      <Link
                        href="https://linkedin.com/in/arhaan-penwala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover-lift group"
                        aria-label="Connect on LinkedIn"
                      >
                        <Linkedin size={24} className="text-primary group-hover:scale-110 transition-transform" />
                      </Link>
                      <Link
                        href="https://github.com/Arhaan-P"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-muted-foreground/10 p-4 rounded-full hover:bg-muted-foreground/20 transition-all duration-300 hover-lift group"
                        aria-label="View GitHub profile"
                      >
                        <Github size={24} className="text-muted-foreground group-hover:scale-110 transition-transform" />
                      </Link>
                      <Link
                        href="mailto:arhaanpenwala9@gmail.com"
                        className="bg-destructive/10 p-4 rounded-full hover:bg-destructive/20 transition-all duration-300 hover-lift group"
                        aria-label="Send email"
                      >
                        <Mail size={24} className="text-destructive group-hover:scale-110 transition-transform" />
                      </Link>
                    </div>
                    
                    <Button asChild className="w-full hover-lift">
                      <a href="/resume.pdf" download="Arhaan_Penwala_Resume.pdf">
                        <Download size={20} className="mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-card/50 text-muted-foreground py-12 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg text-foreground mb-4">Arhaan Penwala</h3>
                <p className="text-sm">
                  AI & Robotics Engineer passionate about building innovative solutions 
                  that make a positive impact on the world.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  {navItems.slice(1).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://linkedin.com/in/arhaan-penwala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Link>
                  <Link
                    href="https://github.com/Arhaan-P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href="mailto:arhaanpenwala9@gmail.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2025 Arhaan Penwala. All rights reserved.</p>
              <p className="mt-2">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="ml-2 hover:text-primary transition-colors">
                  Back to Top ↑
                </button>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Arhaan Penwala",
            "jobTitle": "AI & Robotics Engineer",
            "description": "AI & Robotics Engineer and Full-Stack Developer specializing in innovative mobile and web applications",
            "url": "https://arhaan-penwala.dev",
            "sameAs": [
              "https://linkedin.com/in/arhaan-penwala",
              "https://github.com/Arhaan-P"
            ],
            "email": "arhaanpenwala9@gmail.com",
            "telephone": "+91-8104708138",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "VIT Chennai"
            },
            "skills": ["Artificial Intelligence", "Robotics", "Flutter", "Full Stack Development", "Machine Learning"]
          })
        }}
      />
    </>
  )
}