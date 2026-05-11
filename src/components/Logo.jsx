// Бренд-марк АРЧА: тёмно-зелёный круг с двойной золотой обводкой,
// силуэт гор и надпись «АРЧА» сверху, тонкие насечки по бокам.
// По мотивам логотипа из инсты @archa.forest.
export default function Logo({ size = 36, className = '' }) {
  return (
    <span
      aria-label="АРЧА"
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* внешняя золотая окружность */}
        <circle cx="32" cy="32" r="30" fill="none" stroke="#D4A84B" strokeWidth="2" />
        {/* основной тёмно-зелёный диск */}
        <circle cx="32" cy="32" r="27" fill="#1F2A1E" />
        {/* тонкая внутренняя золотая линия */}
        <circle cx="32" cy="32" r="25" fill="none" stroke="#D4A84B" strokeWidth="0.6" opacity="0.9" />

        {/* надпись АРЧА сверху */}
        <text
          x="32"
          y="29"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="800"
          fontSize="13"
          letterSpacing="1"
          fill="#E8C875"
        >
          АРЧА
        </text>

        {/* силуэт гор снизу */}
        <path
          d="M14 46 L24 32 L30 38 L38 28 L50 46 Z"
          fill="#D4A84B"
        />
        {/* мини-вершина-блик */}
        <path
          d="M24 32 L27 35 L21 35 Z"
          fill="#1F2A1E"
          opacity="0.5"
        />

        {/* декоративные засечки слева/справа */}
        <line x1="6" y1="32" x2="10" y2="32" stroke="#D4A84B" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="54" y1="32" x2="58" y2="32" stroke="#D4A84B" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  )
}
