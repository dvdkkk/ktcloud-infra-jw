import React, { useRef, useState, useEffect } from 'react';
import { UserCheck, Briefcase, Award, GraduationCap, BookOpen, Building2, School, FlaskConical } from 'lucide-react';

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
  const [imgError, setImgError] = useState(false);
  const instructorImgUrl = "https://postfiles.pstatic.net/MjAyNjA4MzFfMjkz/MDAxNzg4MTU4NzAyODMy.uuKSWnLxzvOpNYc-6DfkxXRsO-EJGfofA6ERMK9wT40g.7ZqqSk9S3whxaXd1YZnlzg6RzT_qHbkgdfFrNgxcoV8g.PNG/ljh_teacher.png?type=w966";

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
            {!imgError ? (
              <img 
                src={instructorImgUrl} 
                alt="이정호 강사" 
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-2 border-red-600/50 shadow-xl" 
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-36 h-36 rounded-full mx-auto mb-4 bg-zinc-800 border-2 border-red-600/50 shadow-xl flex items-center justify-center">
                <GraduationCap size={54} className="text-red-500" />
              </div>
            )}
            <h3 className="text-2xl font-black text-white">이정호 <span className="text-red-500 text-lg font-bold">강사</span></h3>
            <p className="text-zinc-300 font-medium text-sm mt-1">클라우드분야 / 프로그램 개발 강의 연구원</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['클라우드 엔지니어링', '보안', '가상화', '인공지능'].map(skill => (
              <span key={skill} className="bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 px-4 py-1.5 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-800 pt-10">
            {/* 주요경력 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Briefcase size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">주요경력</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1">현재 (現)</p>
                  <ul className="text-zinc-300 text-sm space-y-1">
                    <li>· 클라우드분야 / 프로그램 개발 강의 연구원</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider mb-1">이전 (前)</p>
                  <ul className="text-zinc-400 text-sm space-y-1.5">
                    <li>· (前) 혜민디자인 개발팀장</li>
                    <li>· (前) 한국정보화진흥원 전문심사위원</li>
                    <li>· (前) 에이치비아이 연구소 개발 및 클라우드</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 강의 경력 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Award size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">강의 경력</h4>
              </div>
              <ul className="text-zinc-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>(現) 클라우드 개발자 강의</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>자바를 활용한 클라우드 현업 멘토스쿨 과정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>콘텐츠 융합을 위한 풀스택 개발 과정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[신세계아이엔씨] 개발 및 클라우드 강의</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[IITP 혁신성장 인재 양성사업 ] 프로그램 개발/클라우드 강의</span>
                </li>
              </ul>
            </div>

            {/* 기업 강의 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Building2 size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">기업 강의</h4>
              </div>
              <div className="space-y-2 text-zinc-300 text-sm">
                <p className="leading-relaxed">
                  · 신세계I&C, 인천도시공사, HP등, KB데이터시스템, 신한 데이터시스템
                </p>
                <p className="text-zinc-400 text-xs">
                  · 이외 다수 클라우드, 프로그램 개발 강의
                </p>
              </div>
            </div>

            {/* 대학 강의 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <School size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">대학 강의</h4>
              </div>
              <div className="space-y-2 text-zinc-300 text-sm">
                <p className="leading-relaxed">
                  · 경희대, 계명대, 전남대, 경기대, 아주대 등
                </p>
                <p className="text-zinc-400 text-xs">
                  · 풀스택 개발 및 클라우드 강의
                </p>
              </div>
            </div>

            {/* 연구 개발 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <FlaskConical size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">연구 개발</h4>
              </div>
              <ul className="text-zinc-300 text-sm space-y-2 grid md:grid-cols-2 gap-x-6 gap-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>고려대학교 교육학과 대상 IOS기반 SNS기능사용 산학협력 연구 ((주)한빛ENI 소속 참여연구원)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>KT Econvation Smart School 'Android 및 Hybrid 개발 과정’설계 참여</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>정보통신산업진흥원 SW융합역량강화사업 스마트워크솔루션 POI기반 프로토타입 연구개발</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>IT 발달에 따른 하이브리드 패러다임 변화와 발전방향(연구소 포럼 참여)</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-zinc-500 text-xs mt-8 text-center">※ 운영상의 이유로 강사가 변경될 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};


