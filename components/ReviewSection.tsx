
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

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

const REVIEWS = [
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "강의 질 자체도 강의력이 좋으셨던 부분과 네트워크 분야는 특히나 전문성 있으셔서 진짜 전문가의 생각이 느껴졌고 클라우드 부문은 일부는 실무자로써는 조금 더 가 필요하다 생각했지만 강의의 대상을 고려하면 적절한 설계와 이해할 수 있는 기반을 주신다는 점에서, 스스로 채울수 있은 기반을 주셨기에 완벽했다고 생각 합니다. 개인적으로 국비 교육을 재직자 시절에도 들었지만, 어설프게 실무경험은 1도 없이 돈벌려고 들어오시는 강의가 많았는데, 지금과 같은 강사님과 강의 지원은 국비 교육이 가져야할 진짜 교육이라고 생각 됩니다. 이런 교육이 많아져서 재직할때도 들을 수 있다면 정말 좋겠습니다.",
    date: "2025.10.02"
  },
  {
    name: "클라우드 인프라",
    score: 4.9,
    text: "클라우드에 대해 처음 접하던 우리 수강생들을 진심으로 한명씩 다독이고 신경써가며 끝까지 끌고 와주신 강사님 덕분에 모두 별 탈 없이 교육을 완주할 수 있었습니다. 정말 감사합니다!!",
    date: "2025.10.02"
  },
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "클라우드 분야에 대해서 아는것이 전혀 없는 상태에서 교육과정을 듣게 되었는데 강사님께서 설명도 잘해주시고, 궁금한 부분에 있어서 이해할 수 있도록 설명해주셔서 공부를 하는 입장에서 너무 좋았다. 과정을 진행하며 있었던 프로젝트들도 정해진 큰 주제에서 소주제를 정해 진행하는 방식이라 원하는 부분을 직접 구현해볼 수 있어서 좋았다.",
    date: "2025.10.02"
  },
  {
    name: "클라우드 인프라",
    score: 4.9,
    text: "교육을 진행하신 강사님도 클라우드에 대한 개념들을 처음 접하는 수강생들이 이해하기 쉽도록 잘 설명해주셨습니다. 그리고 수업중에 이해가 안되는 부분과 놓친 부분에 대해 질문을 하면 친절하게 잘 설명해주셨습니다. 또한, 교육과정 중간에 특강과 채용설명회을 통해서 클라우드에 관련된 직무와 취업정보에 대해 알 수 있어서 많은 도움이 되었습니다.",
    date: "2025.10.02"
  },
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "좋은 강사님과 운영진 분들 덕분에 좋은 환경에서 교육을 받을 수 있어 너무 좋았습니다. 6개월 전과 비교해 보았을 때 정말 많이 성장한 것 같고 좋은 엔지니어가 되기 위한 시작을 할 수 있는 좋은 교육이라고 생각합니다.",
    date: "2025.10.02"
  },
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "본인은 cs나 클라우드에 대한 사전지식이 1도없는 비전공생이었지만 강사님깨서 비전공자도 충분히 따라갈 수있을정도로 이해하기 쉽게 강의해주셨고 잦은 질문에도 귀찮아 하는 기색 없이 성심성의껏 답변해주셨으며 실습한 것들은 조금만 응용하면 실무에 사용할 수 있을 정도의 레벨 그리고 강의가 끝난 후에도 지속해서 자기소개서, 이력서 등등을 점검해주시고 계신다.",
    date: "2025.10.03"
  },
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "클라우드에 필요한 기초 지식부터 다양한 기술들을 배울 수 있는 시간이었습니다. 단순 기술 활용뿐 아니라, 각 기술들이 사용되는 이유나 업계 트렌드 등 다양한 부분을 배웠습니다. 강사님이 양질의 강의 자료을 바탕으로 한 퀄리티 있는 수업 및 실습 환경을 제공해주셔서 정말 많은 도움이 되었습니다. 하지만 배우는 내용이 쉽지 않고 양이 많다보니 수업에 잘 따라가기 위해서는 학생 개인이 시간을 들여 따라가려는 노력을 하는 것이 좋습니다. 무엇보다 열정 가득한 수강생들과 함께 프로젝트를 진행하면서 저 또한 여러 방면으로 성장할 수 있는 계기가 되었습니다!",
    date: "2025.10.02"
  },
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "최고의 강사님, 최고의 운영진과 함께 클라우드에 대한 모든걸 배울 수 있는 최고의 교육. 시작하기 전 감자 수준이던 저도 지금은 클라우드 공부했다는 명함 내밀 수준으로 올라왔습니다. 정말 후회없는 교육입니다",
    date: "2025.10.05"
  },
  {
    name: "클라우드 인프라",
    score: 5.0,
    text: "훈련에서 만난 직원분들, 학우분들, 김범택 강사님 그리고 멘토님과의 만남은 정말 특별하고 소중했습니다. 특히 김범택 강사님의 수업과 학생들에 쏟는 열정과 노력에 언제나 감사하고 고맙습니다. 강사님 덕분에 많은 것을 배우며, 제가 가고자 하는 분야에 자신감을 가지고 잘 헤쳐나갈 수 있을꺼라고 생각합니다. 그리고 멘토님에게 정말 감사합니다. 실무적으로 많은 부분을 배우고 놓쳤던 기초적인 CS와 선배로써의 취업 상담은 돈주고도 얻을 수 없었던 값진 것이라고 생각합니다. 정말 감사합니다!",
    date: "2025.10.02"
  }
];

export const ReviewSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // 반응형 화면 크기에 따른 아이템 개수 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    
    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // itemsPerView 변경 시 인덱스 리셋 (레이아웃 틀어짐 방지)
  useEffect(() => {
    setActiveIndex(0);
  }, [itemsPerView]);

  // 자동 슬라이드 (화면 크기에 따라 이동 개수 조정)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // itemsPerView만큼 이동 (모바일 1칸, PC 2칸)
        const nextIndex = prev + itemsPerView;
        return nextIndex >= REVIEWS.length ? 0 : nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section id="reviews" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-700/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
                <MessageSquareQuote size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Reviews</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                수료생들의 <span className="text-red-600">생생한 후기</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-sm">
                수강생들이 증명하는 한직교의 교육 퀄리티를 확인하세요.
            </p>
        </Reveal>

        {/* Reviews Slider Container */}
        <Reveal delay={200} className="relative max-w-6xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {REVIEWS.map((review, idx) => (
              <div 
                key={idx} 
                className="w-full md:w-1/2 flex-shrink-0 px-3"
              >
                <div className="h-full bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl relative flex flex-col hover:border-red-600/30 transition-colors group">
                  <Quote size={40} className="text-zinc-800 absolute top-6 right-6 group-hover:text-zinc-700 transition-colors" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.floor(review.score) ? 'fill-red-600 text-red-600' : (i < review.score ? 'fill-red-600 text-red-600 opacity-50' : 'text-zinc-700')}`} 
                      />
                    ))}
                    <span className="ml-2 text-white font-bold text-sm">{review.score}점</span>
                  </div>

                  {/* Content */}
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 flex-grow break-keep">
                    {review.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between border-t border-zinc-800 pt-4 mt-auto">
                    <div className="flex flex-col">
                        <span className="font-bold text-white text-base">
                            {review.name} <span className="text-xs font-normal text-zinc-500 ml-1">수료생</span>
                        </span>
                    </div>
                    {review.date && (
                        <span className="text-xs text-zinc-600 font-mono">{review.date}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(REVIEWS.length / itemsPerView) }).map((_, idx) => {
               // 현재 보고 있는 페이지 인덱스 계산
               const isActive = Math.floor(activeIndex / itemsPerView) === idx;
               return (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx * itemsPerView)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-red-700' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
               );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
