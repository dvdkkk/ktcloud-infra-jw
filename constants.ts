
import { Course, EmploymentStatus, ProcessStep } from './types';

export const COURSES: Course[] = [
  {
    id: 'course-kt-cloud-1',
    type: 'engineer',
    title: 'KT Cloud 클라우드 엔지니어링(인프라) 전문가과정',
    subTitle: '확장성과 안정성을 구축하는 인프라 전문가 과정',
    description: '100% 온라인 실시간 강의로 진행되는 KT Cloud 클라우드 엔지니어링 전문가 과정입니다. 리눅스, 네트워크, 데이터베이스, 쿠버네티스, AWS, 오픈스택 등 클라우드 인프라의 핵심 기술을 마스터합니다.',
    duration: '7개월 과정',
    schedule: '26년 05월 12일 ~ 12월 08일',
    classTime: '평일 09:00~18:00 (1일 8시간)',
    capacity: '26명',
    locations: '100% 온라인 실시간',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    curriculum: [
      { category: '01. 리눅스 서버 운영 시스템', subjects: ['사용자 관리', '서버 관리와 원격접속', '네트워크 서비스 구축', '가상화 시스템 구축'] },
      { category: '02. 클라우드 서비스를 위한 네트워크 기본', subjects: ['데이터 센터 네트워크 기술', '접근 제어와 트래픽 관리', '라우팅과 스위칭', '클라우드 데이터 센터 운영을 위한 BGP, MPLS'] },
      { category: '03. 데이터 베이스', subjects: ['관리형 데이터베이스의 이해', '쿼리 작성과 최적화', 'elasticsearch(opensearch) 기반의 데이터 관리', 'elasticsearch 로 시작하는 머신러닝'] },
      { category: '04. 클라우드 자동화를 위한 파이썬 프로그래밍', subjects: ['변수와 자료형', '기본 문법(if, for, while)', '함수의 개념과 작성', '객체지향 프로그래밍'] },
      { category: '05. 스트리밍 데이터 처리를 위한 분산 플랫폼', subjects: ['컨테이너 기반의 카프카 설치', '메시지 작성과 데이터 읽기', '데이터 파이프라인', '대용량 데이터 분석 및 시각화'] },
      { category: '06. 오픈소스 쿠버네티스 아키텍처 설계 및 구현', subjects: ['Pod 기반의 애플리케이션 배포', '서비스, 인그레스를 이용한 애플리케이션 접속', 'Pod 자원관리 및 모니터링', 'k8s 기반의 CI.CD', '고가용성 기반의 k8s 클러스터'] },
      { category: '07. MLOps 인프라', subjects: ['notebook server', 'katib', 'pipeline', 'KFServe'] },
      { category: '08. IaC 기반의 인프라 설계', subjects: ['테라폼을 사용한 코드형 인프라', '테라폼을 사용한 인프라 배포 자동화', 'Terraform 기반 클라우드 인프라 환경 구현'] },
      { category: '09. 컨테이너 서비스 개발을 위한 Docker platform 활용', subjects: ['Dockerfile 이용한 이미지 작성', '도커 컨테이너와 이미지 구조 이해', '도커 컴포즈를 이용한 컨테이너 환경 설계'] },
      { category: '10. AWS 클라우드 기술', subjects: ['EC2 인스턴스', 'VPC, Subnet 기반의 네트워크 환경 설계', '데이터베이스와 스토리지'] },
      { category: '11. 고가용성 중심의 AWS 아키텍처 설계', subjects: ['AWS 기반의 IaC', '서버리스 아키텍처', '멀티 티어 아키텍처 설계', '멀티 리전, 멀티 존 구성', '오토 스케일링'] },
      { category: '12. 생성형 AI 서비스 개발을 위한 Amazon Bedrock', subjects: ['프롬프트 엔지니어링', 'RAG 구현하기', 'Bedrock 으로 Agent 구현하기'] },
      { category: '13. DevOps 환경에서의 CI/CD', subjects: ['젠킨스 동작원리 및 파이프라인', 'github 와의 연동', 'argoCD 활용'] },
      { category: '14. 서비스메시 기반의 MSA 설계 및 관리', subjects: ['서비스 메시의 이해', '이스티오 게이트웨이와 프락시', '네트워크 제어하기'] },
      { category: '15. 오픈스택 기반 프라이빗 클라우드 구현', subjects: ['컨테이너 기반의 오픈스택 배포', '네트워크/컨트롤/스토리지/컴퓨트 서비스', '오픈스택환경에서의 쿠버네티스', '로드밸런서(octavia)', '웹서비스 환경 구현'] },
      { category: '16. 오픈시프트(OpenShift) 구축', subjects: ['컨테이너 기술과 서비스 생성', '애플리케이션 배포 및 트러블 슈팅'] },
      { category: '17. KT클라우드 플랫폼', subjects: ['KT클라우드 공인교육'] },
      { category: '18. Azure 클라우드', subjects: ['사용자와 그룹, 액세스 관리', '가상네트워크, 가상머신, 스토리지', '고가용성과 부하분산'] },
    ]
  }
];

export const EMPLOYMENT_STATUS: EmploymentStatus[] = [
  { company: 'KT Cloud', name: '', branch: '', license: '클라우드 인프라 엔지니어링' },
  { company: '클라우드 전문 기업', name: '', branch: '', license: '인프라 자동화 및 운영' },
  { company: 'IT 서비스 기업', name: '', branch: '', license: 'MSA 기반 시스템 구축' },
  { company: '보안 솔루션 기업', name: '', branch: '', license: '클라우드 보안 엔지니어' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: 'kt cloud 현직자 멘토링', description: '현직 전문가와의 1:1 혹은 그룹 멘토링을 통해 실무 경험과 진로 방향에 대한 깊이 있는 인사이트를 얻습니다.' },
  { step: '02', title: 'TECH UP 해커톤', description: '훈련생들이 모여 아이디어를 구체화하고 팀워크로 완성하며 실전 같은 프로젝트 경험을 쌓는 대규모 해커톤입니다.' },
  { step: '03', title: 'kt cloud 현직자 특강', description: '업계 전문가들이 직접 전하는 생생한 현장 사례와 최신 기술 동향을 통해 직무 역량을 배울 수 있습니다.' },
  { step: '04', title: 'kt cloud 현직자 코드리뷰', description: '현업 개발자에게 코드 품질과 구조에 대한 피드백을 받아 실무 수준의 개발 역량을 빠르게 성장시킬 수 있습니다.' },
  { step: '05', title: '우수 수료생 채용 지원 시 우대', description: '탁월한 성과를 인정받은 우수 수료생은 kt cloud 채용 과정에서 우대 혜택을 받아 취업 경쟁력을 높일 수 있습니다.' },
  { step: '06', title: '이력서, 포트폴리오 컨설팅', description: '체계적인 피드백을 통해 직무에 맞는 이력서와 포트폴리오를 완성도 있게 준비할 수 있습니다.' },
];

export const TARGET_AUDIENCE = [
  "비전공자지만 클라우드 분야 등 관심있는 분!",
  "IT관련 학과 전공했으나 실무능력 향상 하고 싶은 분!",
  "클라우드 인프라 및 시스템 엔지니어 지망생",
  "인프라 자동화(IaC) 역량을 쌓고 싶은 개발자",
  "하이브리드/멀티 클라우드 환경에 관심 있는 IT 전문가"
];
