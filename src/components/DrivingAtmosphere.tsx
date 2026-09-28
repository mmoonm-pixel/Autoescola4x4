import React from 'react';

export const DrivingAtmosphere: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Guia central sutil com linha tracejada */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 hidden xl:flex flex-col items-center opacity-[0.04]">
        <svg
          className="w-4 h-full"
          preserveAspectRatio="none"
          viewBox="0 0 16 1000"
        >
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="1000"
            stroke="#EAC136"
            strokeWidth="3"
            strokeDasharray="40 30"
          />
        </svg>
      </div>

      {/* 2. Elemento gráfico discreto */}
      <div className="absolute top-32 -right-16 w-80 h-80 rounded-full border border-[#EAC136]/10 items-center justify-center hidden lg:flex opacity-40">
        <svg className="w-full h-full p-4" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#EAC136"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            strokeOpacity="0.12"
          />
          <path
            d="M 40 100 A 60 60 0 1 1 160 100"
            fill="none"
            stroke="#EAC136"
            strokeWidth="2.5"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 3. Indicador direcional sutil */}
      <div className="absolute top-[800px] left-8 w-16 h-32 hidden md:block opacity-[0.03]">
        <svg viewBox="0 0 60 120" className="w-full h-full fill-[#0C0F13]">
          <path d="M 30 10 L 50 40 L 38 40 L 38 110 L 22 110 L 22 40 L 10 40 Z" />
        </svg>
      </div>
    </div>
  );
};
