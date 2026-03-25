
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { 
  Shield, CheckCircle2, Cpu, ArrowRight
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

// Curriculum Data Structure
const CURRICULUM_DATA = [
  { id: "01", title: "리눅스 서버 운영 시스템", desc: "클라우드 플랫폼을 이루는 운영 관리 시스템의 시작", subjects: ["사용자 관리", "서버 관리와 원격접속", "네트워크 서비스 구축", "가상화 시스템 구축"] },
  { id: "02", title: "클라우드 서비스위한 네트워크 기본", desc: "클라우드 서비스 이용과 리소스간 통신을 위한 시작과 끝", subjects: ["데이터 센터 네트워크 기술", "접근 제어와 트래픽 관리", "라우팅과 스위칭", "클라우드 데이터 센터 운영을 위한 BGP, MPLS"] },
  { id: "03", title: "데이터 베이스", desc: "클라우드 리소스를 보관, 관리하기위한 데이터 관리의 시작", subjects: ["관리형 데이터베이스의 이해", "쿼리 작성과 최적화", "elasticsearch(opensearch) 기반의 데이터 관리", "elasticsearch 로 시작하는 머신러닝"] },
  { id: "04", title: "클라우드 자동화를 위한 파이썬 프로그래밍", desc: "인프라 관리를 위한 스크립트 언어의 시작", subjects: ["변수와 자료형", "기본 문법(if, for, while)", "함수의 개념과 작성", "객체지향 프로그래밍"] },
  { id: "05", title: "스트리밍 데이터 처리를 위한 분산 플랫폼", desc: "효과적인 대용량 데이터 처리의 첫걸음", subjects: ["컨테이너 기반의 카프카 설치", "메시지 작성과 데이터 읽기", "데이터 파이프라인", "(토이프로젝트) 카프카, ES, Kibana 기반 대용량 데이터 분석 및 시각화"] },
  { id: "06", title: "오픈소스 쿠버네티스 아키텍처 설계 및 구현", desc: "클라우드네이티브기반 개발과 운영을 위한 모든 것", subjects: ["Pod 기반의 애플리케이션 배포", "서비스, 인그레스를 이용한 애플리케이션 접속", "Pod 자원관리 및 모니터링", "k8s 기반의 CI.CD", "고가용성 기반의 k8s 클러스터(멀티 master, etcd 백업/복구)"] },
  { id: "07", title: "MLOps 인프라", desc: "kubernetes 환경에서 kubeflow 기반의 MLOps 환경 구성", subjects: ["notebook server", "katib", "pipeline", "KFServe"] },
  { id: "08", title: "IaC 기반의 인프라 설계", desc: "테라폼 코드로 작성하는 인프라 설계의 첫걸음", subjects: ["테라폼을 사용한 코드형 인프라", "테라폼을 사용한 인프라 배포 자동화", "(토이프로젝트) Terraform 기반 클라우드 인프라 환경 구현(AWS, OpenStack)"] },
  { id: "09", title: "컨테이너 서비스 개발을 위한 Docker platform 활용", desc: "컨테이너 기반의 개발과 인프라 운영의 시작", subjects: ["Dockerfile 이용한 이미지 작성", "도커 컨테이너와 이미지 구조 이해", "도커 컴포즈를 이용한 컨테이너 환경 설계"] },
  { id: "10", title: "AWS 클라우드 기술", desc: "세계최고의 퍼블릭 클라우드 서비스를 위한 시작", subjects: ["EC2 인스턴스", "VPC, Subnet 기반의 네트워크 환경 설계", "데이터베이스와 스토리지"] },
  { id: "11", title: "고가용성 중심 AWS 아키텍처설계", desc: "심층적인 AWS 서비스를 이용하기 위한 방법", subjects: ["AWS 기반의 IaC", "서버리스 아키텍처", "멀티 티어 아키텍처 설계", "멀티 리전, 멀티 존 구성", "ASG/keda + karpenter 기반의 오토 스케일링"] },
  { id: "12", title: "생성형 AI 서비스 개발을 위한 Amazon Bedrock", desc: "AWS에서 시작하는 생성형 AI 서비스", subjects: ["프롬프트 엔지니어링", "RAG 구현하기", "Bedrock 으로 Agent 구현하기"] },
  { id: "13", title: "DevOps 환경에서의 CI/CD", desc: "운영환경과 개발환경을 통합·자동화 하기 위한 다양한 기술", subjects: ["젠킨스 동작원리 및 파이프라인", "github 와의 연동(gitOps, webhook)", "argoCD 활용"] },
  { id: "14", title: "서비스메시 기반 MSA설계 및 관리", desc: "통신을 제어하고 모니터링하는 서비스 메시 솔루션", subjects: ["서비스 메시의 이해", "이스티오 게이트웨이와 프락시", "네트워크 제어하기"] },
  { id: "15", title: "오픈스택 기반 프라이빗 클라우드 구현", desc: "클라우드 환경을 직접 구축하는 오픈소스 컨테이너 플랫폼", subjects: ["컨테이너 기반의 오픈스택 배포(kolla-ansible)", "네트워크/컨트롤/스토리지/컴퓨트 서비스", "오픈스택환경에서의 쿠버네티스", "로드밸런서(octavia), kubernetes 서비스환경구성", "(토이프로젝트) 오픈스택 환경에서의 웹서비스 환경 구현 (octavia, nova, trove, cinder)"] },
  { id: "16", title: "오픈시프트(OpenShift) 구축", desc: "엔터프라이즈 규모의 쿠버네티스 클라우드 플랫폼", subjects: ["컨테이너 기술과 서비스 생성", "애플리케이션 배포 및 트러블 슈팅"] },
  { id: "17", title: "KT클라우드 플랫폼", desc: "국내 최고의 퍼블릭 클라우드를 만나다!", subjects: ["KT클라우드 공인교육"] },
  { id: "18", title: "Azure 클라우드", desc: "Azure 로 시작하는 퍼블릭 클라우드 서비스", subjects: ["사용자와 그룹, 액세스 관리", "가상네트워크, 가상머신, 스토리지", "고가용성과 부하분산"] },
];

const PROJECTS_DATA = [
  { title: "기본 프로젝트", subjects: ["클라우드 인프라 자동화 및 최적화 구축", "가상화 기반 리소스 관리 시스템 구축", "클라우드 데이터 백업 및 복구 시스템 구현", "자율 주제: 개인 맞춤 클라우드 보안 솔루션 구현"] },
  { title: "심화 프로젝트", subjects: ["하이브리드 클라우드 통합 운영 및 최적화 구축", "클라우드 보안 강화 및 비용 효율화 솔루션 구현", "자동화 기반 클라우드 모니터링 및 예측 유지보수 시스템 구축", "자율 주제: 팀별 클라우드 인프라 혁신 구현"] },
  { title: "실무 통합 프로젝트", subjects: ["글로벌 클라우드 인프라 통합 관리 및 운영 구축", "AI 기반 클라우드 리소스 최적화 및 예측 분석 시스템 구현", "Terraform을 활용한 클라우드 인프라 표준화 및 자동화 구축", "자율 주제: 팀별 클라우드 비용 관리 및 성능 최적화 구현"] },
];

export const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-[#1a0f0f] text-white">
      <div className="container mx-auto px-4">
        <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                단계별 학습 설계로<br />
                <span className="text-red-500">탄탄하게 쌓는 커리큘럼</span>
              </h2>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CURRICULUM_DATA.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 50}>
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full">
                  <span className="text-red-500 font-black text-4xl mb-6 block group-hover:scale-110 transition-transform origin-left">{item.id}</span>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3 text-zinc-300 text-sm border-t border-zinc-800 pt-6">
                    {item.subjects.map((sub, i) => <li key={i} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-red-500 mt-0.5 flex-shrink-0" /> {sub}</li>)}
                  </ul>
                </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
            <div className="bg-zinc-900/30 border border-zinc-800 p-10 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-10 text-center text-white">프로젝트 과정</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((p, i) => (
                        <div key={i} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                            <h4 className="text-lg font-bold mb-6 text-red-500">{p.title}</h4>
                            <ul className="space-y-3 text-zinc-300 text-sm">
                                {p.subjects.map((sub, j) => <li key={j} className="flex items-start gap-2"><Cpu size={16} className="text-zinc-600 mt-0.5 flex-shrink-0" /> {sub}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text-zinc-500 text-xs mt-10 text-center">※ 토이프로젝트는 강의 시간중 오후 시간을 할애하여 2~3일 만에 완성함.</p>
            </div>
        </Reveal>
        
        <div className="flex justify-center pt-16">
            <ApplyButton />
        </div>
      </div>
    </section>
  );
};
