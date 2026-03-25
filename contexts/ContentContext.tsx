
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, VisitorLog } from '../types';
import { COURSES, EMPLOYMENT_STATUS, PROCESS_STEPS } from '../constants';

const defaultContent: SiteContent = {
  hero: {
    badge: "100% 온라인 실시간 과정!",
    title: "KT Cloud \n클라우드 엔지니어링",
    highlight: "(인프라)전문가과정",
    description: "\n으로 거듭나세요",
    stats: [
      { label: '교육기간', value: '26년 05월 12일 ~ 12월 08일' },
      { label: '교육시간', value: '평일 09:00~18:00 (1일 8시간)' },
      { label: '교육방법', value: '100% 온라인 실시간' },
      { label: '자비부담금', value: '0 ~ 60만원' },
      { label: '훈련장려금', value: '매월 30만원 + α' },
      { label: '문의', value: '1533-6176' },
    ]
  },
  intro: {
    badge: "VISSON",
    title1: "왜? KT클라우드 인프라 기술을",
    highlight: "배워야 할까?",
    title2: "",
    description: "100% 온라인 실시간 강의!",
    images: [
      "https://postfiles.pstatic.net/MjAyNjAzMjNfMTUg/MDAxNzc0MjQ3ODgxNzA0.9nl7OFQdRRxgs1OFBkfZmK3Te8TBQvi6WULjx2MiDlsg.T-Cg2WURkmLN-psRRwx_JtJew78PuN8yS1wz2Wf8Ts0g.JPEG/news_img01.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAzMjNfNzgg/MDAxNzc0MjQ3ODgxNzA1.JiEDLMXLDuia3fcKubvQX1OotJWNdm-iBc5PME1Ano4g.xAQ_xonDKqlqUNQUP_oSesvT4hqKLuEYaQfbH6e-NgIg.JPEG/news_img06.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAzMjNfMTE5/MDAxNzc0MjQ3ODgxNzAy.ZYo4qPxkwDOLd9KcgfXRKJvUJ5imOLXkhgn7JjsB86kg.lxnLZTyeMI4NzVg38yPAzuNr0IvGO9-UovWefZgeXM4g.JPEG/news_img05.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAzMjNfNzAg/MDAxNzc0MjQ3ODgxNzA3.ed_OOPYSoEj57TaKeJpbMW671WRog2Cz8KNHdMpDMikg.M8dG1W-w_mFGuMWBbyFs9tKM54G2OWvYwgzhG0a7H_Yg.JPEG/news_img04.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAzMjNfMjcw/MDAxNzc0MjQ3ODgxNjY1.vGk5R1fZLsrt5MSuP5FpiM7LFZp-mYMrq_Q9QNB6EkYg.2_Lj_XahAOAcRTgoy6KifjgRHfoAMx1MU4sCxQbHadcg.JPEG/news_img03.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAzMjNfMjg1/MDAxNzc0MjQ3ODgxNzA2.WinKM72O8F4mhp2CrbuzNsgnZ-NPIMhvyLfcpSsim1wg.WbEv8sVIpaSEfYXFtAfakGHY945nDhHVGMWOqv1Wxosg.JPEG/news_img02.jpg?type=w966"
    ]
  },
  vision: {
    items: [
      { num: '01', title: 'AI·머신러닝 & 빅데이터 수요 증가', desc: '데이터 기반 의사결정이 보편화되면서 방대한 연산 능력과 빠른 확장성을 제공하는 클라우드의 중요성이 높아지고 있습니다.' },
      { num: '02', title: '인프라 자동화(IaC) & 자동화 혁신', desc: '인프라를 코드로 관리하여 운영 효율성을 극대화하고, 안정적이면서도 신속한 배포를 가능하게 합니다.' },
      { num: '03', title: '멀티클라우드·엣지 컴퓨팅', desc: '여러 클라우드를 동시에 활용하고, 데이터 생성 지점에서 즉시 처리해 속도와 안정성을 강화합니다.' },
      { num: '04', title: '클라우드·AI 융합', desc: '지금 배워야 할 핵심 기술입니다.' }
    ]
  },
  courses: COURSES,
  examSchedule: {
    technician: [],
    engineer: []
  },
  strategy: {
    items: [
      { title: "실시간 온라인 교육", desc: "다양한 온라인 협업 툴을 통한 최적의 교육환경 제공" },
      { title: "프로젝트 클라우드 지원", desc: "팀 프로젝트의 성장을 위해 클라우드 비용을 지원합니다." },
      { title: "생성형 AI 도구 지원", desc: "AI와 함께라면 학습이 더 빠르고 똑똑해집니다." },
      { title: "인프런 콘텐츠 제공", desc: "합격 시점부터 한 달 간 인프런 강의를 무제한으로 수강하실 수 있습니다." },
      { title: "훈련 교재 제공", desc: "학습 및 지식 성장을 위해 선정된 전문 서적을 제공합니다." },
      { title: "모의 코딩 테스트 지원", desc: "실전 같은 모의 테스트로 실력을 검증하고 한 단계 도약하세요." },
      { title: "성장 격려금 제공", desc: "대회 수상 시 성장 격려금으로 최대 50만원 제공됩니다." },
      { title: "훈련 장려금 제공", desc: "성장과 연계된 장려금으로 월 최대 300,000원의 훈련장려금이 지급됩니다." },
      { title: "학습용 노트북 대여", desc: "최적의 환경에서 학습할 수 있도록 노트북을 제공합니다." }
    ],
    reviews: [
      { name: "수강생", text:"강의 질 자체도 강의력이 좋으셨던 부분과 네트워크 분야는 특히나 전문성 있으셔서 진짜 전문가의 생각이 느껴졌고 클라우드 부문은 일부는 실무자로써는 조금 더 가 필요하다 생각했지만 강의의 대상을 고려하면 적절한 설계와 이해할 수 있는 기반을 주신다는 점에서, 스스로 채울수 있은 기반을 주셨기에 완벽했다고 생각 합니다. 개인적으로 국비 교육을 재직자 시절에도 들었지만, 어설프게 실무경험은 1도 없이 돈벌려고 들어오시는 강의가 많았는데, 지금과 같은 강사님과 강의 지원은 국비 교육이 가져야할 진짜 교육이라고 생각 됩니다. 이런 교육이 많아져서 재직할때도 들을 수 있다면 정말 좋겠습니다.", tag: "클라우드 인프라" },
      { name: "수강생", text:"클라우드에 대해 처음 접하던 우리 수강생들을 진심으로 한명씩 다독이고 신경써가며 끝까지 끌고 와주신 강사님 덕분에 모두 별 탈 없이 교육을 완주할 수 있었습니다. 정말 감사합니다!!", tag: "클라우드 인프라" },
      { name: "수강생", text:"클라우드 분야에 대해서 아는것이 전혀 없는 상태에서 교육과정을 듣게 되었는데 강사님께서 설명도 잘해주시고, 궁금한 부분에 있어서 이해할 수 있도록 설명해주셔서 공부를 하는 입장에서 너무 좋았다. 과정을 진행하며 있었던 프로젝트들도 정해진 큰 주제에서 소주제를 정해 진행하는 방식이라 원하는 부분을 직접 구현해볼 수 있어서 좋았다.", tag: "클라우드 인프라" },
      { name: "수강생", text:"교육을 진행하신 강사님도 클라우드에 대한 개념들을 처음 접하는 수강생들이 이해하기 쉽도록 잘 설명해주셨습니다. 그리고 수업중에 이해가 안되는 부분과 놓친 부분에 대해 질문을 하면 친절하게 잘 설명해주셨습니다. 또한, 교육과정 중간에 특강과 채용설명회을 통해서 클라우드에 관련된 직무와 취업정보에 대해 알 수 있어서 많은 도움이 되었습니다.", tag: "클라우드 인프라" },
      { name: "수강생", text:"좋은 강사님과 운영진 분들 덕분에 좋은 환경에서 교육을 받을 수 있어 너무 좋았습니다. 6개월 전과 비교해 보았을 때 정말 많이 성장한 것 같고 좋은 엔지니어가 되기 위한 시작을 할 수 있는 좋은 교육이라고 생각합니다.", tag: "클라우드 인프라" },
      { name: "수강생", text:"본인은 cs나 클라우드에 대한 사전지식이 1도없는 비전공생이었지만 강사님깨서 비전공자도 충분히 따라갈 수있을정도로 이해하기 쉽게 강의해주셨고 잦은 질문에도 귀찮아 하는 기색 없이 성심성의껏 답변해주셨으며 실습한 것들은 조금만 응용하면 실무에 사용할 수 있을 정도의 레벨 그리고 강의가 끝난 후에도 지속해서 자기소개서, 이력서 등등을 점검해주시고 계신다.", tag: "클라우드 인프라" },
      { name: "수강생", text:"클라우드에 필요한 기초 지식부터 다양한 기술들을 배울 수 있는 시간이었습니다. 단순 기술 활용뿐 아니라, 각 기술들이 사용되는 이유나 업계 트렌드 등 다양한 부분을 배웠습니다. 강사님이 양질의 강의 자료을 바탕으로 한 퀄리티 있는 수업 및 실습 환경을 제공해주셔서 정말 많은 도움이 되었습니다. 하지만 배우는 내용이 쉽지 않고 양이 많다보니 수업에 잘 따라가기 위해서는 학생 개인이 시간을 들여 따라가려는 노력을 하는 것이 좋습니다. 무엇보다 열정 가득한 수강생들과 함께 프로젝트를 진행하면서 저 또한 여러 방면으로 성장할 수 있는 계기가 되었습니다!", tag: "클라우드 인프라" },
      { name: "수강생", text:"최고의 강사님, 최고의 운영진과 함께 클라우드에 대한 모든걸 배울 수 있는 최고의 교육. 시작하기 전 감자 수준이던 저도 지금은 클라우드 공부했다는 명함 내밀 수준으로 올라왔습니다. 정말 후회없는 교육입니다", tag: "클라우드 인프라" },
      { name: "수강생", text:"훈련에서 만난 직원분들, 학우분들, 김범택 강사님 그리고 멘토님과의 만남은 정말 특별하고 소중했습니다. 특히 김범택 강사님의 수업과 학생들에 쏟는 열정과 노력에 언제나 감사하고 고맙습니다. 강사님 덕분에 많은 것을 배우며, 제가 가고자 하는 분야에 자신감을 가지고 잘 헤쳐나갈 수 있을꺼라고 생각합니다. 그리고 멘토님에게 정말 감사합니다. 실무적으로 많은 부분을 배우고 놓쳤던 기초적인 CS와 선배로써의 취업 상담은 돈주고도 얻을 수 없었던 값진 것이라고 생각합니다. 정말 감사합니다!", tag: "클라우드 인프라" }
    ]
  },
  employment: {
    status: EMPLOYMENT_STATUS,
    process: PROCESS_STEPS
  }
};

interface ContentContextType {
  content: SiteContent;
  visitorLogs: VisitorLog[];
  updateContent: (newContent: SiteContent) => void;
  addVisitorLog: (log: Omit<VisitorLog, 'id'>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// 버전을 v9로 올려서 로컬 스토리지를 강제 갱신함
const STORAGE_KEY = 'site_content_v9';
const LOG_KEY = 'visitor_logs_v9';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedContent = localStorage.getItem(STORAGE_KEY);
      if (savedContent) {
        try {
          const parsed = JSON.parse(savedContent);
          setContent({ ...defaultContent, ...parsed });
        } catch (e) {
          console.error("Failed to load content", e);
        }
      }

      const savedLogs = localStorage.getItem(LOG_KEY);
      if (savedLogs) {
        try {
          setVisitorLogs(JSON.parse(savedLogs));
        } catch (e) {
          console.error("Failed to load logs", e);
        }
      }
    } catch (e) {
      console.error("LocalStorage access failed", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const addVisitorLog = (logData: Omit<VisitorLog, 'id'>) => {
    const newLog: VisitorLog = {
      ...logData,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setVisitorLogs(prev => {
      const updated = [newLog, ...prev].slice(0, 500);
      localStorage.setItem(LOG_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const resetContent = () => {
    if (window.confirm("모든 변경사항을 초기화하시겠습니까?")) {
      setContent(defaultContent);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, visitorLogs, updateContent, addVisitorLog, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context;
};
