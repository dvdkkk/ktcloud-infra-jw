
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
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3 text-center">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjNfMjAx/MDAxNzc0MjQ3OTQ0NjY2.J8uK8FsAY-49US296FKwW_MUU-JWG8wzMp9ITtoNokIg.4lQmWTAgP0m-SyX60wJ-Thd06ZH4WJqSxeY0tClV_aEg.JPEG/kbt_teacher.jpg?type=w966" alt="강사 사진" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" referrerPolicy="no-referrer" />
              <h3 className="text-2xl font-black text-white">김범택</h3>
              <p className="text-red-500 font-bold">강사</p>
              <p className="text-zinc-400 text-sm mt-2">클라우드 구축 및 컨설팅 전문가</p>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['클라우드 엔지니어링', '보안', '가상화', '인공지능'].map(skill => (
                  <span key={skill} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs text-center">{skill}</span>
                ))}
              </div>
              <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                <p className="text-zinc-300 text-sm mb-2">총 수강 인원: 26명 | 평균만족도: 4.9점</p>
                <p className="text-zinc-300 text-sm">총 평가인원: 23명 | 평가참여율: 88.5%</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-12 relative">
            <div className="md:hidden text-center text-zinc-500 text-xs mb-2 animate-pulse">← 좌우로 스크롤하여 확인하세요 →</div>
            <table className="w-full text-center text-zinc-300 text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-2">전반적 만족도</th><th className="p-2">훈련내용</th><th className="p-2">훈련교사</th><th className="p-2">훈련방법</th><th className="p-2">시설장비</th><th className="p-2">행정서비스</th><th className="p-2">취업지원</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">4.9</td><td className="p-2">4.9</td><td className="p-2">5</td><td className="p-2">4.8</td><td className="p-2">4.6</td><td className="p-2">4.9</td><td className="p-2">4.7</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">주요경력</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-red-500 font-bold text-sm">현재</p>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>(現) kt Cloud 클라우드 인프라 전임강의</li>
                    <li>(現) 클라우드분야 컨설팅 및 구축강의 프리랜서</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-500 font-bold text-sm">이전</p>
                  <ul className="text-zinc-400 text-sm space-y-1">
                    <li>(前) 하니웰 코리아 네트워크 보안 구축 및 운영</li>
                    <li>(前) 시스코코리아 무선라우터 개발 및 최적화</li>
                    <li>(前) 글로벌널리지 네트워크㈜ 네트워크, 서버, 가상화</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">강의 경력</h4>
              <div className="space-y-4 text-zinc-400 text-sm">
                <div>
                  <p className="font-bold text-zinc-300">기업 강의</p>
                  <p>[KaKao] Kakao 클라우드 엔지니어링 과정, [신세계아이엔씨] 클라우드 강의, [CJ올리브네트웍스] 클라우드 강의, aws, 컨테이너, 쿠버네티스 강의</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-300">대학 강의</p>
                  <p>강원대, 계명대, 전남대, 경기대, 아주대, 성균관대 등 클라우드 강의</p>
                </div>
                <div>
                  <p className="font-bold text-zinc-300">강의 경력</p>
                  <p>[IITP 혁신성장 인재 양성사업] 클라우드 강의, [한국폴리텍대학] 하이테크 프로젝트 진행, K-Software Empowerment BootCamp(KSEB), AWS 클라우드엔지니어링, SK텔레콤, 신한 등 기업 재직자 강의 이외 다수 클라우드, 보안 관련 강의</p>
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
