import React, { useRef, useState, useEffect } from 'react';
import { UserCheck, Briefcase, Award, GraduationCap } from 'lucide-react';

interface RevealProps {
  children: React.ReactNode;
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

export const InstructorSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
              <GraduationCap size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Instructor</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              탄탄한 기술과<br />
              <span className="text-red-600">경험을 지닌 전문 강사</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <img src="https://postfiles.pstatic.net/MjAyNjA2MTFfMTA3/MDAxNzgxMTQwNTYzMzMx.BwSgI69YlXAvYu0_KcsdyOUyklVqAinWGmgS7WIwM_Qg.84tfy1RlHNawuu-7DqfMoJdd2gekw3K7mwdM9275qsAg.PNG/AIDrawing_260611_ebf65b67-bc54-494b-8f8f-15f16101898c_0_MiriCanvas.png?type=w966" alt="강사 사진" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" referrerPolicy="no-referrer" />
            <h3 className="text-2xl font-black text-white">{/* 서영진 */}서영진</h3>
            <p className="text-red-500 font-bold">강사</p>
            <p className="text-zinc-400 text-sm mt-2">세종사이버대학 SW공학 겸임교수</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['클라우드 엔지니어링', '보안', '가상화', '인공지능'].map(skill => (
              <span key={skill} className="bg-zinc-800 text-zinc-300 px-4 py-1.5 rounded-full text-sm">{skill}</span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-800 pt-12">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">주요경력</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-red-500 font-bold text-sm">현재</p>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>(학력) 숭실대 컴퓨터과학 박사</li>
                    <li>(現) 세종사이버대학 SW공학 겸임교수</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-500 font-bold text-sm">이전</p>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>(前) ㈜젠트솔루션 대표이사</li>
                    <li>(前) SamTree 기술이사</li>
                    <li>(前) ㈜커널링크 기술팀장</li>
                    <li>(前) 한국리눅스㈜ 팀장</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">강의 경력</h4>
              <div className="space-y-4 text-zinc-400 text-sm">
                <div>
                  <p className="font-bold text-zinc-300">기업 강의</p>
                  <p>현대모비스, 현대오토론, 현대자동차, LIG넥스원, LGU+, LG디스플레이, 한국전자정보통신산업진흥회, 태하메타트로닉스, 하나금융그룹, 미라콤, 삼성전자, 한화시스템, 한화탈레스 ,HP, 국세청, 신세계아이앤씨, LG전자 등</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-300">대학 강의</p>
                  <p>세종사이버대, 동양미래대, 서울디지털대, 숭실대, 목포대, 충북대, 계명대, 대구대, 전주대, 전북대, 원광대, 조선대, 인하대 등, 리눅스 · 임베디드 · 클라우드 강의</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-300">강의 경력</p>
                  <p>현대자동차, 삼성SNS, ㈜새롬기술, 한국수력원자력㈜ 등 다양한 프로젝트 실무 개발</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-zinc-600 text-xs mt-8 text-center">※ 운영상의 이유로 강사가 변경될 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

