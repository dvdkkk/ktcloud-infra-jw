
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONSULTATION_URL, handlePhoneClick } from '../constants';

// 스크롤 애니메이션 컴포넌트
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
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  return (
    <section id="consultation" className="py-12 md:py-20 bg-yellow-400 text-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-yellow-400 rounded-full text-xs font-bold mb-4 shadow-sm">
                <Sparkles size={14} className="text-yellow-400" />
                <span>1:1 국비지원 맞춤 무료 상담</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                망설이지 마세요.<br/>
                국비교육 전문가가 <br/>
                친절하게 안내해드립니다.
              </h2>
              <p className="text-lg md:text-xl font-medium text-zinc-800 mb-6 leading-relaxed">
                국비지원 자격 여부부터 취업 및 교육과정까지<br/>
                <span className="border-b-2 border-black font-bold">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black text-yellow-400 rounded-full flex items-center justify-center shrink-0 shadow-md">
                          <Phone size={22} />
                      </div>
                      <div>
                          <p className="text-xs font-bold opacity-75">교육문의</p>
                          <a 
                            href="tel:15336176" 
                            onClick={handlePhoneClick}
                            className="text-2xl md:text-3xl font-black block hover:text-red-700 transition-colors cursor-pointer"
                            title="PC: 온라인 상담신청 이동 / 모바일: 전화 연결"
                          >
                            1533-6176
                          </a>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black text-yellow-400 rounded-full flex items-center justify-center shrink-0 shadow-md">
                          <MapPin size={22} />
                      </div>
                      <div>
                          <p className="text-xs font-bold opacity-75">교육방식</p>
                          <p className="text-lg md:text-xl font-bold">100% 온라인 실시간</p>
                      </div>
                  </div>
              </div>
              <p className="font-bold text-base md:text-lg mt-6 text-zinc-900">여러분의 꿈을 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right: Newly Created Consultation CTA Box */}
          <Reveal delay={200} className="w-full">
            <div className="bg-white text-black rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-black/10 flex flex-col justify-between relative overflow-hidden group">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="mb-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                    ONLINE CONSULTATION
                  </span>
                  <span className="text-xs font-bold text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full">간편 접수 약 1분 소요</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-zinc-950 leading-snug">
                  KT Cloud 인프라 전문가과정<br/>
                  <span className="text-red-600">온라인 무료 교육 상담 신청</span>
                </h3>
                <p className="text-zinc-600 text-sm md:text-base mt-3 leading-relaxed">
                  국비지원 자격 조건(자비부담금 0원~), 매월 훈련장려금(30만원+α), 100% 온라인 실시간 강의 및 취업 연계 혜택을 상세히 안내해 드립니다.
                </p>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-4 md:p-5 border border-zinc-200 mb-6 space-y-3 relative z-10">
                <div className="flex items-center gap-2.5 text-zinc-800 text-sm font-bold">
                  <CheckCircle2 size={18} className="text-red-600 shrink-0" />
                  <span>100% 온라인 실시간 강의 &amp; 현직자 1:1 멘토링</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-800 text-sm font-bold">
                  <CheckCircle2 size={18} className="text-red-600 shrink-0" />
                  <span>국민내일배움카드 발급 및 국비지원 혜택 사전 진단</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-800 text-sm font-bold">
                  <CheckCircle2 size={18} className="text-red-600 shrink-0" />
                  <span>비전공자/초보자 맞춤형 커리큘럼 및 진로 취업 가이드</span>
                </div>
              </div>

              {/* Newly created Consultation Button */}
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative group/btn inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-black text-lg md:text-xl py-4 md:py-5 px-6 rounded-2xl shadow-xl hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>상담 신청하기</span>
                  <ArrowRight size={22} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  <ExternalLink size={18} className="opacity-80" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite]"></div>
              </a>

              <p className="text-xs text-center text-zinc-400 mt-4">
                * 버튼 클릭 시 네이버 간편 신청 페이지가 새 창으로 열립니다.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
