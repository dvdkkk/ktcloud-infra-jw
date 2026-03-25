
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { 
  Gift, Monitor, Cloud, Cpu, BookOpen, Book, Code2, Trophy, Wallet
} from 'lucide-react';
import { ApplyButton } from './ApplyButton';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const HanjikgyoBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "실시간 온라인 교육",
      desc: "다양한 온라인 협업 툴을 통한 최적의 교육환경 제공",
      icon: Monitor,
      highlight: "text-blue-500"
    },
    {
      id: 2,
      title: "프로젝트 클라우드 지원",
      desc: "팀 프로젝트의 성장을 위해 클라우드 비용을 지원합니다.",
      icon: Cloud,
      highlight: "text-cyan-500"
    },
    {
      id: 3,
      title: "생성형 AI 도구 지원",
      desc: "AI와 함께라면 학습이 더 빠르고 똑똑해집니다.",
      icon: Cpu,
      highlight: "text-indigo-500"
    },
    {
      id: 4,
      title: "인프런 콘텐츠 제공",
      desc: "합격 시점부터 한 달 간 인프런 강의를 무제한으로 수강하실 수 있습니다.",
      icon: BookOpen,
      highlight: "text-orange-500"
    },
    {
      id: 5,
      title: "훈련 교재 제공",
      desc: "학습 및 지식 성장을 위해 선정된 전문 서적을 제공합니다.",
      icon: Book,
      highlight: "text-green-500"
    },
    {
      id: 6,
      title: "모의 코딩 테스트 지원",
      desc: "실전 같은 모의 테스트로 실력을 검증하고 한 단계 도약하세요.",
      icon: Code2,
      highlight: "text-red-500"
    },
    {
      id: 7,
      title: "성장 격려금 제공",
      desc: "대회 수상 시 성장 격려금으로 최대 50만원 제공됩니다.",
      icon: Trophy,
      highlight: "text-yellow-500"
    },
    {
      id: 8,
      title: "훈련 장려금 제공",
      desc: "성장과 연계된 장려금으로 월 최대 300,000원의 훈련장려금이 지급됩니다.",
      icon: Wallet,
      highlight: "text-emerald-500"
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
                <Gift size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight break-keep">
              학습을 돕는 지원부터<br />
              <span className="text-red-600">성장을 이끄는 혜택</span>까지
            </h2>
            <p className="text-zinc-500 mt-4 text-sm">
                수강생 여러분이 오직 학습에만 집중할 수 있도록 아낌없이 지원합니다.
            </p>
          </Reveal>
        </div>

        {/* Benefit Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.id} delay={idx * 50} className="h-full">
                  <div className="h-full bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl hover:border-red-600/30 hover:bg-zinc-900/50 transition-all duration-300 group flex flex-col items-start text-left">
                      <div className={`p-4 rounded-2xl bg-zinc-950 border border-zinc-800 mb-6 group-hover:scale-110 transition-transform duration-300 ${benefit.highlight}`}>
                        <Icon size={32} />
                      </div>
                      
                      <h3 className="text-white text-xl font-bold mb-3 leading-tight break-keep group-hover:text-red-500 transition-colors">
                          {benefit.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed break-keep font-medium">
                          {benefit.desc}
                      </p>
                  </div>
              </Reveal>
            );
          })}
        </div>
        <div className="flex justify-center pt-20">
            <ApplyButton />
        </div>
      </div>
    </section>
  );
};
