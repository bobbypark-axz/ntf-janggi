// janggi-board.jsx — Traditional Janggi board + octagonal pieces
// Warm wood board, green Cho / red Han characters on cream octagons.
// Exports to window: JanggiBoard, JanggiPiece, JanggiCaptured, INITIAL_SETUP, PIECE_GLYPHS

const PIECE_GLYPHS = {
  king:    { CHO: '楚', HAN: '漢', kor: '궁' },
  guard:   { CHO: '士', HAN: '士', kor: '사' },
  chariot: { CHO: '車', HAN: '車', kor: '차' },
  cannon:  { CHO: '包', HAN: '砲', kor: '포' },
  horse:   { CHO: '馬', HAN: '馬', kor: '마' },
  elephant:{ CHO: '象', HAN: '象', kor: '상' },
  soldier: { CHO: '卒', HAN: '兵', kor: '졸/병' },
};

const INITIAL_SETUP = [
  { t: 'chariot',  s: 'HAN', r: 0, c: 0 },
  { t: 'horse',    s: 'HAN', r: 0, c: 1 },
  { t: 'elephant', s: 'HAN', r: 0, c: 2 },
  { t: 'guard',    s: 'HAN', r: 0, c: 3 },
  { t: 'guard',    s: 'HAN', r: 0, c: 5 },
  { t: 'elephant', s: 'HAN', r: 0, c: 6 },
  { t: 'horse',    s: 'HAN', r: 0, c: 7 },
  { t: 'chariot',  s: 'HAN', r: 0, c: 8 },
  { t: 'king',     s: 'HAN', r: 1, c: 4 },
  { t: 'cannon',   s: 'HAN', r: 2, c: 1 },
  { t: 'cannon',   s: 'HAN', r: 2, c: 7 },
  { t: 'soldier',  s: 'HAN', r: 3, c: 0 },
  { t: 'soldier',  s: 'HAN', r: 3, c: 2 },
  { t: 'soldier',  s: 'HAN', r: 3, c: 4 },
  { t: 'soldier',  s: 'HAN', r: 3, c: 6 },
  { t: 'soldier',  s: 'HAN', r: 3, c: 8 },
  { t: 'chariot',  s: 'CHO', r: 9, c: 0 },
  { t: 'horse',    s: 'CHO', r: 9, c: 1 },
  { t: 'elephant', s: 'CHO', r: 9, c: 2 },
  { t: 'guard',    s: 'CHO', r: 9, c: 3 },
  { t: 'guard',    s: 'CHO', r: 9, c: 5 },
  { t: 'elephant', s: 'CHO', r: 9, c: 6 },
  { t: 'horse',    s: 'CHO', r: 9, c: 7 },
  { t: 'chariot',  s: 'CHO', r: 9, c: 8 },
  { t: 'king',     s: 'CHO', r: 8, c: 4 },
  { t: 'cannon',   s: 'CHO', r: 7, c: 1 },
  { t: 'cannon',   s: 'CHO', r: 7, c: 7 },
  { t: 'soldier',  s: 'CHO', r: 6, c: 0 },
  { t: 'soldier',  s: 'CHO', r: 6, c: 2 },
  { t: 'soldier',  s: 'CHO', r: 6, c: 4 },
  { t: 'soldier',  s: 'CHO', r: 6, c: 6 },
  { t: 'soldier',  s: 'CHO', r: 6, c: 8 },
];

// Traditional palette
const COLORS = {
  // Cho — green; Han — red (traditional)
  cho:   '#0B6E3D',
  choD:  '#054D29',
  han:   '#B72525',
  hanD:  '#7E1717',

  // Wooden board
  woodLight: '#EBCD93',
  woodMid:   '#DCB875',
  woodDark:  '#B98F4D',
  woodLine:  '#3A2511',

  // Piece face (slightly lighter than board for contrast)
  faceLight: '#F4E2BC',
  faceMid:   '#E6CD96',
  faceShadow:'#A88554',
};

// Octagon points (viewBox 0..100)
const OCTAGON_OUTER = "30,3 70,3 97,30 97,70 70,97 30,97 3,70 3,30";
const OCTAGON_INNER = "33,11 67,11 89,33 89,67 67,89 33,89 11,67 11,33";
const OCTAGON_CLIP  = "polygon(30% 3%, 70% 3%, 97% 30%, 97% 70%, 70% 97%, 30% 97%, 3% 70%, 3% 30%)";

// ─── Piece ────────────────────────────────────────────────────────
function JanggiPiece({ type, side, size = 34, captured = false, label = 'hanja', glow = false, threatened = false }) {
  const rawId = React.useId();
  const id = rawId.replace(/[:]/g, '');
  const glyph = label === 'kor'
    ? PIECE_GLYPHS[type].kor
    : PIECE_GLYPHS[type][side];

  const isCho = side === 'CHO';
  const charColor = isCho ? COLORS.cho : COLORS.han;
  const charShadow = isCho ? COLORS.choD : COLORS.hanD;

  // Kings get bigger glyph
  const isKing = type === 'king';
  const charSize = isKing ? 62 : 56;
  // Korean labels are 2 chars for soldier (졸/병) — shrink
  const finalSize = (label === 'kor' && type === 'soldier') ? 34 : charSize;

  return (
    <div style={{
      width: size, height: size,
      position: 'relative',
      filter: captured ? 'saturate(0.35) brightness(0.85)' : 'none',
      opacity: captured ? 0.5 : 1,
    }}>
      {/* selection halo */}
      {glow && (
        <div aria-hidden style={{
          position: 'absolute', inset: -7,
          clipPath: OCTAGON_CLIP,
          background: `radial-gradient(closest-side, ${charColor} 0%, transparent 75%)`,
          filter: 'blur(2px)', opacity: 0.7,
        }} />
      )}
      {/* threatened pulse */}
      {threatened && (
        <div aria-hidden style={{
          position: 'absolute', inset: -5,
          clipPath: OCTAGON_CLIP,
          background: COLORS.han,
          filter: 'blur(2px)',
          animation: 'janggiPulse 1.1s ease-in-out infinite',
          opacity: 0.75,
        }} />
      )}

      <svg viewBox="0 0 100 100" width={size} height={size}
           style={{ display: 'block', overflow: 'visible', position: 'relative' }}>
        <defs>
          {/* Cream wood face with subtle bevel */}
          <radialGradient id={`face-${id}`} cx="36%" cy="28%" r="80%">
            <stop offset="0%"   stopColor="#FBEFD2" />
            <stop offset="55%"  stopColor={COLORS.faceLight} />
            <stop offset="100%" stopColor={COLORS.faceMid} />
          </radialGradient>
          {/* Outer bevel — top-light/bottom-dark */}
          <linearGradient id={`bevel-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#FFF4D4" />
            <stop offset="48%" stopColor={COLORS.faceMid} />
            <stop offset="100%" stopColor={COLORS.faceShadow} />
          </linearGradient>
        </defs>

        {/* shadow plate */}
        <polygon points={OCTAGON_OUTER}
                 transform="translate(0.7,1.4)"
                 fill="rgba(50,30,10,0.55)" />

        {/* bevel rim */}
        <polygon points={OCTAGON_OUTER}
                 fill={`url(#bevel-${id})`} />

        {/* main face (slightly inset) */}
        <polygon points="31,5 69,5 95,31 95,69 69,95 31,95 5,69 5,31"
                 fill={`url(#face-${id})`} />

        {/* inner double frame line — classical janggi engraving */}
        <polygon points={OCTAGON_INNER}
                 fill="none"
                 stroke={charColor} strokeOpacity="0.55"
                 strokeWidth="1.6" />
        <polygon points="36,14 64,14 86,36 86,64 64,86 36,86 14,64 14,36"
                 fill="none"
                 stroke={charColor} strokeOpacity="0.22"
                 strokeWidth="0.7" />

        {/* the character — optically centered for CJK glyphs */}
        <text x="50" y="50"
              textAnchor="middle"
              dominantBaseline="central"
              dy="-0.04em"
              fontFamily="'Noto Serif KR', 'Nanum Myeongjo', serif"
              fontWeight="900"
              fontSize={finalSize}
              fill={charColor}
              style={{
                letterSpacing: '-0.02em',
                filter: `drop-shadow(0 1px 0 ${charShadow}55)`,
              }}>
          {glyph}
        </text>
      </svg>
    </div>
  );
}

// ─── Board ────────────────────────────────────────────────────────
function JanggiBoard({
  width = 320,
  pieces = INITIAL_SETUP,
  selected = null,
  legalMoves = [],
  lastMove = null,
  check = false,
  checkedKing = null,
  label = 'hanja',
  showCoords = false,
}) {
  const cols = 9, rows = 10;
  const cell = width / (cols - 1);
  const boardW = width;
  const boardH = cell * (rows - 1);
  const pad = cell * 0.6;
  const totalW = boardW + pad * 2;
  const totalH = boardH + pad * 2;
  const pieceSize = cell * 0.94;

  const x = (c) => pad + c * cell;
  const y = (r) => pad + r * cell;

  const lineStroke = COLORS.woodLine;

  // Build vertical/horizontal grid lines.
  // In tradition, the river cuts the central vertical lines — except cols 0 and 8.
  // For simplicity, draw all lines continuous (most digital boards do this).
  const lines = [];
  for (let c = 0; c < cols; c++) {
    lines.push(
      <line key={`v${c}`} x1={x(c)} y1={y(0)} x2={x(c)} y2={y(rows-1)}
            stroke={lineStroke} strokeWidth="1.1" />
    );
  }
  for (let r = 0; r < rows; r++) {
    lines.push(
      <line key={`h${r}`} x1={x(0)} y1={y(r)} x2={x(cols-1)} y2={y(r)}
            stroke={lineStroke} strokeWidth="1.1" />
    );
  }
  const palaceDiag = (r0, c0) => ([
    <line key={`pd1-${r0}`} x1={x(c0)} y1={y(r0)} x2={x(c0+2)} y2={y(r0+2)}
          stroke={lineStroke} strokeWidth="1.1" />,
    <line key={`pd2-${r0}`} x1={x(c0+2)} y1={y(r0)} x2={x(c0)} y2={y(r0+2)}
          stroke={lineStroke} strokeWidth="1.1" />,
  ]);

  // bracket marks at soldier/cannon points (전통 +자 표시)
  const bracketMarks = [
    [2,1],[2,7],[7,1],[7,7],
    [3,0],[3,2],[3,4],[3,6],[3,8],
    [6,0],[6,2],[6,4],[6,6],[6,8],
  ];

  return (
    <div style={{
      position: 'relative',
      width: totalW, height: totalH,
      borderRadius: 10,
      background: `
        radial-gradient(120% 80% at 50% 50%, ${COLORS.woodLight} 0%, ${COLORS.woodMid} 65%, ${COLORS.woodDark} 100%)
      `,
      boxShadow: `
        0 14px 32px rgba(0,0,0,0.45),
        inset 0 0 0 1px rgba(58,37,17,0.35),
        inset 0 0 12px rgba(255,235,200,0.25)
      `,
      overflow: 'hidden',
    }}>
      {/* subtle wood grain */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          repeating-linear-gradient(180deg,
            rgba(120,75,30,0.04) 0px,
            rgba(120,75,30,0.04) 1px,
            transparent 1px,
            transparent 4px),
          repeating-linear-gradient(90deg,
            rgba(60,35,10,0.02) 0px,
            rgba(60,35,10,0.02) 1px,
            transparent 1px,
            transparent 7px)
        `,
        mixBlendMode: 'multiply', opacity: 0.6,
      }} />
      {/* vignette */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        boxShadow: 'inset 0 0 40px rgba(80,45,15,0.35)',
        borderRadius: 10,
      }} />

      {/* grid SVG */}
      <svg width={totalW} height={totalH}
           style={{ position: 'absolute', inset: 0 }}>
        {lines}
        {palaceDiag(0, 3)}
        {palaceDiag(7, 3)}

        {/* river label — 楚河 漢界 */}
        <g opacity="0.7">
          <text x={x(2) - cell * 0.32} y={y(4) + cell * 0.62}
                fill={COLORS.woodLine}
                fontFamily="'Noto Serif KR', serif"
                fontSize={cell * 0.58}
                fontWeight="700"
                letterSpacing={cell * 0.2}>楚 河</text>
          <text x={x(6) - cell * 0.32} y={y(4) + cell * 0.62}
                fill={COLORS.woodLine}
                fontFamily="'Noto Serif KR', serif"
                fontSize={cell * 0.58}
                fontWeight="700"
                letterSpacing={cell * 0.2}>漢 界</text>
        </g>

        {/* + bracket marks (전통적 위치 표시) */}
        {bracketMarks.map(([r,c], i) => {
          const cx = x(c), cy = y(r);
          const s = cell * 0.14;     // bracket arm length
          const o = cell * 0.18;     // offset from intersection
          return (
            <g key={`mk${i}`} stroke={lineStroke} strokeWidth="1.1" fill="none">
              {c > 0 && <>
                <line x1={cx - o} y1={cy - o + s} x2={cx - o} y2={cy - o} />
                <line x1={cx - o} y1={cy - o} x2={cx - o + s} y2={cy - o} />
                <line x1={cx - o} y1={cy + o - s} x2={cx - o} y2={cy + o} />
                <line x1={cx - o} y1={cy + o} x2={cx - o + s} y2={cy + o} />
              </>}
              {c < 8 && <>
                <line x1={cx + o} y1={cy - o + s} x2={cx + o} y2={cy - o} />
                <line x1={cx + o} y1={cy - o} x2={cx + o - s} y2={cy - o} />
                <line x1={cx + o} y1={cy + o - s} x2={cx + o} y2={cy + o} />
                <line x1={cx + o} y1={cy + o} x2={cx + o - s} y2={cy + o} />
              </>}
            </g>
          );
        })}

        {/* last move trail */}
        {lastMove && (
          <line x1={x(lastMove.from.c)} y1={y(lastMove.from.r)}
                x2={x(lastMove.to.c)}   y2={y(lastMove.to.r)}
                stroke="rgba(180,90,30,0.55)" strokeWidth="2"
                strokeDasharray="3 4" />
        )}
      </svg>

      {/* selected ring — octagonal */}
      {selected && (
        <svg style={{
          position: 'absolute',
          left: x(selected.c) - pieceSize/2 - 5,
          top:  y(selected.r) - pieceSize/2 - 5,
          width: pieceSize + 10, height: pieceSize + 10,
          overflow: 'visible', pointerEvents: 'none',
        }} viewBox="0 0 100 100">
          <polygon points={OCTAGON_OUTER}
                   fill="none"
                   stroke={COLORS.cho} strokeWidth="2.6"
                   style={{ filter: `drop-shadow(0 0 6px ${COLORS.cho}aa)` }} />
        </svg>
      )}

      {/* legal moves */}
      {legalMoves.map((m, i) => {
        const occupied = pieces.find(p => p.r === m.r && p.c === m.c);
        if (occupied) {
          return (
            <svg key={`lm${i}`} style={{
              position: 'absolute',
              left: x(m.c) - pieceSize/2 - 4,
              top:  y(m.r) - pieceSize/2 - 4,
              width: pieceSize + 8, height: pieceSize + 8,
              overflow: 'visible', pointerEvents: 'none',
            }} viewBox="0 0 100 100">
              <polygon points={OCTAGON_OUTER}
                       fill="none"
                       stroke={COLORS.han} strokeWidth="2.6"
                       style={{ filter: `drop-shadow(0 0 6px ${COLORS.han}99)` }} />
            </svg>
          );
        }
        return (
          <div key={`lm${i}`} style={{
            position: 'absolute',
            left: x(m.c) - 6,
            top:  y(m.r) - 6,
            width: 12, height: 12,
            borderRadius: '50%',
            background: COLORS.woodLine,
            opacity: 0.45,
            pointerEvents: 'none',
          }} />
        );
      })}

      {/* pieces */}
      {pieces.map((p, i) => (
        <div key={`p${i}`} style={{
          position: 'absolute',
          left: x(p.c) - pieceSize/2,
          top:  y(p.r) - pieceSize/2,
          width: pieceSize, height: pieceSize,
          transition: 'all 240ms cubic-bezier(0.22,1,0.36,1)',
        }}>
          <JanggiPiece
            type={p.t} side={p.s}
            size={pieceSize}
            label={label}
            glow={selected && selected.r === p.r && selected.c === p.c}
            threatened={check && checkedKing && checkedKing.r === p.r && checkedKing.c === p.c}
          />
        </div>
      ))}

      {showCoords && (
        <>
          {[...Array(9)].map((_, c) => (
            <div key={`fc${c}`} style={{
              position: 'absolute', left: x(c) - 10, top: totalH - pad + 4,
              width: 20, textAlign: 'center',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              color: COLORS.woodLine, opacity: 0.65,
              letterSpacing: '0.14em',
            }}>{c+1}</div>
          ))}
        </>
      )}
    </div>
  );
}

function JanggiCaptured({ captured = [], side = 'HAN' }) {
  const order = ['chariot','cannon','horse','elephant','guard','soldier'];
  const grouped = {};
  captured.forEach(t => { grouped[t] = (grouped[t]||0)+1; });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
      {order.filter(t => grouped[t]).map(t => (
        <div key={t} style={{
          display: 'flex', alignItems: 'center', gap: 3,
          padding: '3px 6px 3px 3px', borderRadius: 9999,
          background: 'rgba(40,28,16,0.5)',
          border: '1px solid rgba(94,72,46,0.5)',
        }}>
          <JanggiPiece type={t} side={side} size={18} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11, color: '#B5A48F', fontWeight: 500,
          }}>×{grouped[t]}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { JanggiBoard, JanggiPiece, JanggiCaptured, INITIAL_SETUP, PIECE_GLYPHS, JANGGI_COLORS: COLORS });
