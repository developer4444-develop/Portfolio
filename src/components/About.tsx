import { useEffect, useRef } from 'react';
import RippleGrid from './RippleGrid';
import BlurText from './BlurText';
import {
  Code,
  Database,
  FileJs,
  Atom,
  Lightning,
  GitBranch,
  Coffee,
  Cube,
  TerminalWindow,
  BracketsAngle,
  Cloud,
  GithubLogo,
  PaperPlaneRight,
  PaintBrush
} from '@phosphor-icons/react';

const skills = [
  { name: 'Python', icon: TerminalWindow },
  { name: 'Django', icon: BracketsAngle },
  { name: 'FastAPI', icon: Lightning },
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: Code },
  { name: 'SQL', icon: Database },
  { name: 'Spring Boot', icon: Coffee },
  { name: 'Docker', icon: Cube },
  { name: 'n8n', icon: GitBranch },
  { name: 'Git', icon: GitBranch },
  { name: 'Java', icon: Coffee },
  { name: 'HTML5', icon: Code },
  { name: 'CSS3', icon: PaintBrush },
  { name: 'JavaScript', icon: FileJs },
  { name: 'Bootstrap', icon: PaintBrush },
  { name: 'MySQL', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'GitHub', icon: GithubLogo },
  { name: 'Postman', icon: PaperPlaneRight },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        section.querySelector('.about-image'),
        { opacity: 0, x: -60, filter: 'blur(8px)' },
        {
          opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' },
        }
      );

      gsap.fromTo(
        section.querySelector('.about-text'),
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.skill-item'),
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.3,
          stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: section.querySelector('.skill-grid'), start: 'top 80%' },
        }
      );
    };

    loadGsap();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding !pb-16 lg:!pb-20 relative bg-black">
      {/* RippleGrid background */}
      <div className="absolute inset-0 z-[0]">
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.2}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/70" />

      <div className="relative z-[2] max-w-6xl mx-auto px-4 md:px-0">
        {/* Section Title */}
        <div className="about-text opacity-0 mb-12 md:mb-16 text-center">
          <div className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-white/50 mb-4">
            About Me
          </div>
          <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mb-6 md:mb-8">
            <BlurText
              text="PYTHON"
              delay={100}
              animateBy="letters"
              direction="top"
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-white justify-center"
              stepDuration={0.05}
            />
            <BlurText
              text="FULL STACK"
              delay={100}
              animateBy="letters"
              direction="top"
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-white justify-center"
              stepDuration={0.05}
            />
            <BlurText
              text="DEVELOPER"
              delay={100}
              animateBy="letters"
              direction="top"
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none text-white justify-center"
              stepDuration={0.05}
            />
          </div>
          <div className="w-16 md:w-20 h-[2px] bg-white/30 mb-8 mx-auto" />

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <p className="text-white/70 leading-relaxed text-base md:text-lg cursor-target text-justify">
              Python Full Stack Developer experienced in building web applications, REST APIs, and B2B ERP systems using Python, Django, FastAPI, React, and Next.js. Skilled in backend development, database management, business logic, API integration, and frontend development. Currently working on ERP solutions and a data analytics platform for handling large datasets.
            </p>
            <div className="pt-6 text-center">
              <a
                href="https://drive.google.com/file/d/1Dd2GjOJ3JXnOgCGSt2hmZMP5V_2jrrpX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-white/90 transition-colors cursor-target"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills Pills */}
        <div className="skill-grid flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto px-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item opacity-0 cursor-target"
            >
              <div className="relative group rounded-full bg-white/[0.03] border border-white/10 px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden backdrop-blur-md">
                
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <skill.icon
                  size={24}
                  className="relative z-10 text-white/70 group-hover:text-white transition-colors duration-300 w-5 h-5 md:w-6 md:h-6"
                  weight="duotone"
                />
                
                <span className="relative z-10 text-xs md:text-sm font-mono uppercase tracking-[0.1em] text-white/70 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
