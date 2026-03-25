import React from 'react';

interface ApplyButtonProps {
  className?: string;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({ className = "" }) => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToConsultation}
      className={`relative px-8 py-4 bg-red-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] ${className}`}
    >
      <span className="relative z-10">교육상담 신청하기</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
};
