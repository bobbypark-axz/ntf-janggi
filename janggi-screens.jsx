// janggi-screens.jsx — Traditional Janggi mobile screens
// Warm walnut UI · gold accents · green Cho / red Han.
// Exports to window: HomeScreen, NewGameScreen, GameScreen, ResultScreen, MenuSheetScreen, HelpScreen

const { useState, useMemo } = React;

// ─── Palette ──────────────────────────────────────────────────────
const P = {
  bg:        '#161210',  // page bg (deep walnut)
  bgElev:    '#1F1A14',
  bgCard:    '#2A2118',
  border:    '#3C2F22',
  borderHi:  '#5A4732',

  fg1:       '#F4E8D2',
  fg2:       '#C9B89A',
  fg3:       '#8C7860',
  fg4:       '#5D4D3B',

  gold:      '#D6AC5C',
  goldD:     '#B4863A',
  goldL:     '#F0CB80',

  cho:       '#0E7C45',   // green
  choBg:     '#0F2419',
  han:       '#BE2A2A',   // red
  hanBg:     '#2B1010',
};

// ─── Atoms ─────────────────────────────────────────────────────────
const Eyebrow = ({ children, style = {} }) => (
  <span style={{
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 10, fontWeight: 500,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: P.fg3,
    ...style,
  }}>{children}</span>
);

const PrimaryCTA = ({ children, onClick, style = {} }) => (
  <button onClick={onClick} style={{
    width: '100%', height: 56, borderRadius: 12,
    background: `linear-gradient(180deg, ${P.goldL} 0%, ${P.gold} 50%, ${P.goldD} 100%)`,
    border: '1px solid #936B26',
    cursor: 'pointer',
    boxShadow: `inset 0 1px 0 rgba(255,235,180,0.5), 0 6px 16px rgba(0,0,0,0.4)`,
    color: '#3A2A0E',
    fontFamily: 'Pretendard Variable, sans-serif',
    fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    ...style,
  }}>{children}</button>
);

const GhostBtn = ({ children, onClick, style = {} }) => (
  <button onClick={onClick} style={{
    height: 48, borderRadius: 10, padding: '0 16px',
    background: P.bgElev,
    border: `1px solid ${P.border}`,
    cursor: 'pointer',
    color: P.fg1,
    fontFamily: 'Pretendard Variable, sans-serif',
    fontWeight: 500, fontSize: 14,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    ...style,
  }}>{children}</button>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: P.bgElev,
    border: `1px solid ${P.border}`,
    borderRadius: 14,
    ...style,
  }}>{children}</div>
);

const ScreenBG = ({ children, style = {} }) => (
  <div style={{
    width: '100%', height: '100%',
    background: `
      radial-gradient(800px 500px at 50% -10%, rgba(214,172,92,0.10), transparent 60%),
      ${P.bg}
    `,
    color: P.fg1,
    fontFamily: 'Pretendard Variable, sans-serif',
    position: 'relative', overflow: 'hidden',
    ...style,
  }}>{children}</div>
);

const IconBtn = ({ children, style = {} }) => (
  <button style={{
    width: 36, height: 36, borderRadius: 10,
    background: P.bgElev,
    border: `1px solid ${P.border}`,
    color: P.fg1, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    ...style,
  }}>{children}</button>
);

// ─── 1. HOME ───────────────────────────────────────────────────────
function HomeScreen() {
  return (
    <ScreenBG>
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '24px 24px 32px',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 26, height: 26, borderRadius: 6,
              background: `linear-gradient(180deg, ${P.goldL}, ${P.goldD})`,
              border: `1px solid ${P.goldD}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Noto Serif KR', serif", fontWeight: 900,
              fontSize: 14, color: '#3A2A0E',
            }}>將</div>
            <Eyebrow style={{ color: P.fg2 }}>WEB JANGGI · v1.0</Eyebrow>
          </div>
          <IconBtn>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </IconBtn>
        </div>

        <div style={{ marginTop: 48, flex: 1 }}>
          <Eyebrow>새 대국을 시작합니다</Eyebrow>
          <div style={{
            marginTop: 14,
            fontFamily: "'Noto Serif KR', serif",
            fontWeight: 900,
            fontSize: 64, lineHeight: 1.0, letterSpacing: '-0.03em',
            color: P.fg1,
          }}>
            <span style={{ color: P.cho }}>楚</span>
            <span style={{ color: P.fg3, margin: '0 12px', fontWeight: 400 }}>·</span>
            <span style={{ color: P.han }}>漢</span>
          </div>
          <div style={{
            marginTop: 4,
            fontFamily: 'Pretendard Variable, sans-serif',
            fontWeight: 300, fontSize: 28, color: P.fg1,
            letterSpacing: '-0.02em',
          }}>
            한 수, 다시 두다.
          </div>
          <p style={{
            marginTop: 16, fontSize: 14, lineHeight: 1.55,
            color: P.fg3, maxWidth: 280, marginBottom: 0,
          }}>
            설치 없이, 광고 없이. 가벼운 한 판의 장기.
          </p>

          {/* board preview */}
          <div style={{
            marginTop: 28, position: 'relative',
            display: 'flex', justifyContent: 'center',
          }}>
            <div style={{
              transform: 'perspective(800px) rotateX(32deg) scale(0.72)',
              transformOrigin: 'center top',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            }}>
              <JanggiBoard width={260} pieces={INITIAL_SETUP} />
            </div>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(180deg, transparent 50%, ${P.bg} 96%)`,
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          <PrimaryCTA>
            새 대국 시작
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </PrimaryCTA>
          <div style={{ display: 'flex', gap: 8 }}>
            <GhostBtn style={{ flex: 1 }}>이어하기</GhostBtn>
            <GhostBtn style={{ flex: 1 }}>도움말</GhostBtn>
          </div>
        </div>
      </div>
    </ScreenBG>
  );
}

// ─── 2. NEW GAME SETUP ────────────────────────────────────────────
function NewGameScreen() {
  const [difficulty, setDifficulty] = useState('normal');
  const [side, setSide] = useState('CHO');
  const [timer, setTimer] = useState('10min');

  const difficulties = [
    { id: 'easy',   name: '쉬움',   en: 'NOVICE', sub: '1수 앞 · 잡기 우선',     plies: '1 PLY'  },
    { id: 'normal', name: '보통',   en: 'STEADY', sub: '3~4수 앞 · α-β 가지치기', plies: '3-4 PLY'},
    { id: 'hard',   name: '어려움', en: 'MASTER', sub: '5~6수 앞 · 위치 가산',     plies: '5-6 PLY'},
  ];

  return (
    <ScreenBG>
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '20px 24px 28px',
        display: 'flex', flexDirection: 'column', height: '100%',
        gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconBtn>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </IconBtn>
          <Eyebrow>새 대국 설정</Eyebrow>
          <div style={{ width: 36 }} />
        </div>

        <div>
          <h1 style={{
            fontFamily: 'Pretendard Variable, sans-serif',
            fontWeight: 300, fontSize: 32, lineHeight: 1.1,
            letterSpacing: '-0.025em', color: P.fg1, margin: 0,
          }}>대국 준비</h1>
        </div>

        {/* difficulty */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <Eyebrow>01 · 난이도</Eyebrow>
            <span style={{ fontSize: 11, color: P.fg4 }}>AI Difficulty</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {difficulties.map(d => {
              const active = difficulty === d.id;
              return (
                <button key={d.id} onClick={() => setDifficulty(d.id)} style={{
                  width: '100%', padding: '14px 16px',
                  borderRadius: 12, cursor: 'pointer',
                  background: active ? P.bgCard : P.bgElev,
                  border: active ? `1px solid ${P.gold}` : `1px solid ${P.border}`,
                  boxShadow: active ? `inset 0 0 0 1px ${P.gold}33` : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  textAlign: 'left',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontSize: 17, fontWeight: 600, color: P.fg1, letterSpacing: '-0.015em' }}>{d.name}</span>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                        letterSpacing: '0.16em', color: P.fg4,
                      }}>{d.en}</span>
                    </div>
                    <div style={{ marginTop: 2, fontSize: 12, color: P.fg3 }}>{d.sub}</div>
                  </div>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                    letterSpacing: '0.1em', padding: '4px 8px',
                    borderRadius: 999,
                    color: active ? P.gold : P.fg4,
                    border: `1px solid ${active ? P.goldD : P.border}`,
                  }}>{d.plies}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* side */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <Eyebrow>02 · 진영</Eyebrow>
            <span style={{ fontSize: 11, color: P.fg4 }}>Your Side</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { id: 'CHO', name: '초',  en: 'CHO · 楚', desc: '후수 · 푸른색' },
              { id: 'HAN', name: '한',  en: 'HAN · 漢', desc: '선수 · 붉은색' },
            ].map(s => {
              const active = side === s.id;
              const sideAccent = s.id === 'CHO' ? P.cho : P.han;
              return (
                <button key={s.id} onClick={() => setSide(s.id)} style={{
                  padding: '18px 14px 16px',
                  borderRadius: 12, cursor: 'pointer',
                  background: active ? P.bgCard : P.bgElev,
                  border: active ? `1px solid ${sideAccent}` : `1px solid ${P.border}`,
                  boxShadow: active ? `inset 0 0 0 1px ${sideAccent}44` : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                }}>
                  <JanggiPiece type="king" side={s.id} size={56} glow={active} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: P.fg1 }}>{s.name}</div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                      letterSpacing: '0.14em', color: active ? sideAccent : P.fg3, marginTop: 2,
                    }}>{s.en}</div>
                    <div style={{ fontSize: 11, color: P.fg3, marginTop: 4 }}>{s.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* timer */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <Eyebrow>03 · 시간</Eyebrow>
            <span style={{ fontSize: 11, color: P.fg4 }}>Time Control</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { id: 'none',  label: '없음',  sub: '∞' },
              { id: '10min', label: '10분',  sub: '+5s' },
              { id: '5min',  label: '5분',   sub: '+3s' },
            ].map(t => {
              const active = timer === t.id;
              return (
                <button key={t.id} onClick={() => setTimer(t.id)} style={{
                  flex: 1, padding: '10px 8px', borderRadius: 10, cursor: 'pointer',
                  background: active ? P.bgCard : P.bgElev,
                  border: active ? `1px solid ${P.gold}` : `1px solid ${P.border}`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: P.fg1 }}>{t.label}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: P.fg3, letterSpacing: '0.1em' }}>{t.sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <PrimaryCTA>
          대국 시작
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </PrimaryCTA>
      </div>
    </ScreenBG>
  );
}

// ─── 3. GAME ───────────────────────────────────────────────────────
function GameScreen({ variant = 'idle' }) {
  const samplePieces = useMemo(() => {
    const pieces = INITIAL_SETUP.map(p => ({ ...p }));
    pieces.find(p => p.t==='horse'   && p.s==='HAN' && p.r===0 && p.c===1).r = 2;
    const choCannon = pieces.find(p => p.t==='cannon' && p.s==='CHO' && p.c===1);
    choCannon.r = 7; choCannon.c = 4;
    const choSoldier = pieces.find(p => p.t==='soldier' && p.s==='CHO' && p.r===6 && p.c===4);
    choSoldier.r = 5;
    const hanSoldier = pieces.find(p => p.t==='soldier' && p.s==='HAN' && p.r===3 && p.c===4);
    hanSoldier.r = 4;
    return pieces;
  }, []);

  const selected = variant === 'selected' ? { r: 9, c: 7 } : null;
  const legalMoves = variant === 'selected'
    ? [{ r: 7, c: 6 }, { r: 7, c: 8 }, { r: 8, c: 5 }]
    : [];
  const check = variant === 'check';
  const checkedKing = check ? { r: 8, c: 4 } : null;

  return (
    <ScreenBG>
      {check && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: `
            radial-gradient(60% 35% at 0% 0%, rgba(190,42,42,0.30), transparent 60%),
            radial-gradient(60% 35% at 100% 0%, rgba(190,42,42,0.30), transparent 60%),
            radial-gradient(60% 35% at 0% 100%, rgba(190,42,42,0.30), transparent 60%),
            radial-gradient(60% 35% at 100% 100%, rgba(190,42,42,0.30), transparent 60%)
          `,
        }} />
      )}

      <div style={{
        position: 'relative', zIndex: 1,
        padding: '14px 16px 18px',
        display: 'flex', flexDirection: 'column', gap: 10, height: '100%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconBtn>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </IconBtn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Eyebrow>MOVE</Eyebrow>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 500,
              color: P.gold, letterSpacing: '0.05em',
            }}>014</span>
          </div>
          <IconBtn>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>
            </svg>
          </IconBtn>
        </div>

        <PlayerBar side="HAN" name="AI · 보통" isActive={false} time="08:42" captured={['soldier']} />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <JanggiBoard
            width={306}
            pieces={samplePieces}
            selected={selected}
            legalMoves={legalMoves}
            lastMove={{ from: { r: 7, c: 4 }, to: { r: 5, c: 4 } }}
            check={check}
            checkedKing={checkedKing}
          />
        </div>

        <PlayerBar side="CHO" name="당신" isActive={true} time="09:18" captured={['soldier']} hint={variant === 'selected' ? '마(馬) 선택됨 · 이동할 곳을 누르세요' : null} />

        <div style={{ display: 'flex', gap: 8 }}>
          <ControlBtn icon="undo"  label="무르기" sub="1/1" />
          <ControlBtn icon="bulb"  label="힌트"  sub="3" />
          <ControlBtn icon="flag"  label="항복"  danger />
        </div>
      </div>

      {check && (
        <div style={{
          position: 'absolute', top: '42%', left: '50%',
          transform: 'translate(-50%, -50%)', zIndex: 5,
        }}>
          <div style={{
            padding: '14px 32px', borderRadius: 8,
            background: `linear-gradient(180deg, ${P.han} 0%, #8C1414 100%)`,
            border: '2px solid #5A0A0A',
            boxShadow: '0 0 0 1px rgba(255,180,180,0.3), 0 0 48px rgba(190,42,42,0.65), 0 8px 24px rgba(0,0,0,0.55)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              fontFamily: "'Noto Serif KR', serif", fontWeight: 900,
              fontSize: 32, color: '#fff', letterSpacing: '0.2em',
              textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            }}>장군!</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)',
              borderLeft: '1px solid rgba(255,255,255,0.3)', paddingLeft: 14,
            }}>CHECK</div>
          </div>
        </div>
      )}
    </ScreenBG>
  );
}

function PlayerBar({ side, name, isActive, time, captured = [], hint = null }) {
  const isCho = side === 'CHO';
  const accent = isCho ? P.cho : P.han;
  return (
    <div style={{
      padding: '8px 12px',
      borderRadius: 12,
      background: isActive ? P.bgCard : P.bgElev,
      border: `1px solid ${isActive ? accent : P.border}`,
      boxShadow: isActive ? `inset 0 0 0 1px ${accent}33` : 'none',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{ position: 'relative' }}>
        <JanggiPiece type="king" side={side} size={36} />
        {isActive && (
          <div style={{
            position: 'absolute', top: -2, right: -2,
            width: 9, height: 9, borderRadius: '50%',
            background: P.gold,
            boxShadow: `0 0 8px ${P.gold}`,
            border: `1.5px solid ${P.bg}`,
          }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: P.fg1 }}>{name}</span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
            letterSpacing: '0.16em', color: accent,
            padding: '2px 6px', borderRadius: 4,
            border: `1px solid ${accent}55`, background: `${accent}1A`,
          }}>{side}</span>
        </div>
        {hint ? (
          <div style={{ fontSize: 11, color: P.gold, marginTop: 3 }}>{hint}</div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
            {captured.length === 0 ? (
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: P.fg4, letterSpacing: '0.12em' }}>잡은 기물 없음</span>
            ) : (
              captured.map((t, i) => (
                <JanggiPiece key={i} type={t} side={side === 'CHO' ? 'HAN' : 'CHO'} size={14} />
              ))
            )}
            {captured.length > 0 && (
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: P.fg3, marginLeft: 4 }}>+2</span>
            )}
          </div>
        )}
      </div>
      <div style={{
        textAlign: 'right',
        fontFamily: 'JetBrains Mono, monospace',
        fontWeight: 500,
        fontSize: 18, color: isActive ? P.fg1 : P.fg3,
        letterSpacing: '-0.01em',
        fontVariantNumeric: 'tabular-nums',
      }}>{time}</div>
    </div>
  );
}

function ControlBtn({ icon, label, sub, danger = false }) {
  const icons = {
    undo: <path d="M3 7v6h6M3 13a9 9 0 1 0 3-7"/>,
    bulb: <><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.4 1 2.3v1h6v-1c0-.9.4-1.7 1-2.3A7 7 0 0 0 12 2z"/></>,
    flag: <><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></>,
  };
  const accent = danger ? P.han : P.fg1;
  return (
    <button style={{
      flex: 1, padding: '10px 8px', borderRadius: 10, cursor: 'pointer',
      background: danger ? `${P.han}14` : P.bgElev,
      border: `1px solid ${danger ? `${P.han}55` : P.border}`,
      color: accent,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {icons[icon]}
      </svg>
      <span style={{ fontSize: 11, fontWeight: 500, lineHeight: 1 }}>{label}</span>
      {sub && (
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          letterSpacing: '0.1em', color: danger ? `${P.han}cc` : P.fg4, lineHeight: 1,
        }}>{sub}</span>
      )}
    </button>
  );
}

// ─── 4. RESULT ──────────────────────────────────────────────────────
function ResultScreen({ won = true }) {
  return (
    <ScreenBG>
      <div aria-hidden style={{
        position: 'absolute', top: -150, left: '50%',
        transform: 'translateX(-50%)',
        width: 480, height: 480, borderRadius: '50%',
        background: won
          ? `radial-gradient(circle, rgba(214,172,92,0.30) 0%, rgba(214,172,92,0.10) 40%, transparent 70%)`
          : `radial-gradient(circle, rgba(190,42,42,0.25) 0%, rgba(140,20,20,0.10) 40%, transparent 70%)`,
        filter: 'blur(8px)', zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: '20px 24px 28px',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Eyebrow>대국 결과 · 2026.05.28</Eyebrow>
          <IconBtn style={{ width: 32, height: 32 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </IconBtn>
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          {/* 결과 인장 (印) — large octagonal seal */}
          <div style={{
            margin: '0 auto', width: 132, height: 132, position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg viewBox="0 0 100 100" width={132} height={132} style={{ overflow: 'visible' }}>
              <defs>
                <radialGradient id="sealBg" cx="40%" cy="30%" r="80%">
                  <stop offset="0%" stopColor={won ? '#F0CB80' : '#E66060'} />
                  <stop offset="60%" stopColor={won ? '#C9A04A' : '#BE2A2A'} />
                  <stop offset="100%" stopColor={won ? '#7A5612' : '#5C0F0F'} />
                </radialGradient>
              </defs>
              <polygon points="30,3 70,3 97,30 97,70 70,97 30,97 3,70 3,30"
                       fill={won ? '#7A5612' : '#5C0F0F'} transform="translate(1,2)" opacity="0.6"/>
              <polygon points="30,3 70,3 97,30 97,70 70,97 30,97 3,70 3,30" fill="url(#sealBg)" />
              <polygon points="33,11 67,11 89,33 89,67 67,89 33,89 11,67 11,33"
                       fill="none" stroke="rgba(255,240,210,0.6)" strokeWidth="1.4"/>
              <text x="50" y="50" textAnchor="middle" dominantBaseline="central" dy="-0.04em"
                    fontFamily="'Noto Serif KR', serif" fontWeight="900"
                    fontSize="60" fill="#fff"
                    style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))', letterSpacing: '-0.02em' }}>
                {won ? '勝' : '敗'}
              </text>
            </svg>
          </div>

          <div style={{ marginTop: 24 }}>
            <Eyebrow style={{ color: won ? P.gold : P.han }}>
              {won ? '외통수 · 승리' : '외통수 · 패배'}
            </Eyebrow>
            <h1 style={{
              marginTop: 10,
              fontFamily: 'Pretendard Variable, sans-serif',
              fontWeight: 300, fontSize: 36, lineHeight: 1.1,
              letterSpacing: '-0.025em', color: P.fg1, margin: 0,
            }}>
              {won ? <>한 수가 마무리 지었다.</> : <>다음 한 수를 기약하다.</>}
            </h1>
            <p style={{ marginTop: 10, fontSize: 13, color: P.fg3, margin: '10px 0 0' }}>
              {won ? 'AI · 보통 난이도를 14수만에 제압했습니다.' : '아쉽지만 한 수 차이입니다. 다시 도전해보세요.'}
            </p>
          </div>
        </div>

        <Card style={{ marginTop: 28, padding: '16px 18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { label: '총 수', val: '14' },
              { label: '소요', val: '4:32' },
              { label: '점수', val: '+5' },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: 'center',
                borderRight: i < 2 ? `1px solid ${P.border}` : 'none',
                paddingRight: i < 2 ? 12 : 0,
              }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 500,
                  fontSize: 28, color: P.fg1, letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums',
                }}>{s.val}</div>
                <div style={{
                  fontFamily: 'Pretendard Variable, sans-serif', fontSize: 11,
                  color: P.fg3, marginTop: 4,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ marginTop: 10, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <Eyebrow>최근 기보</Eyebrow>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: P.gold, letterSpacing: '0.1em' }}>전체 보기 ↗</span>
          </div>
          <div style={{ display: 'flex', gap: 6, overflow: 'hidden' }}>
            {[
              { m: '차e3', side: 'CHO' },
              { m: '포c8', side: 'HAN' },
              { m: '마f6', side: 'CHO' },
              { m: '차×e8', side: 'HAN' },
              { m: '포×e8#', side: 'CHO' },
            ].map((x, i) => {
              const last = i === 4;
              return (
                <div key={i} style={{
                  padding: '5px 9px', borderRadius: 6,
                  background: last ? `${P.gold}1A` : P.bgCard,
                  border: `1px solid ${last ? P.goldD : P.border}`,
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                  color: last ? P.gold : (x.side === 'CHO' ? P.cho : P.han),
                  whiteSpace: 'nowrap',
                  fontWeight: last ? 600 : 500,
                }}>{x.m}</div>
              );
            })}
          </div>
        </Card>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryCTA>
            다시 두기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>
            </svg>
          </PrimaryCTA>
          <div style={{ display: 'flex', gap: 8 }}>
            <GhostBtn style={{ flex: 1 }}>기보 보기</GhostBtn>
            <GhostBtn style={{ flex: 1 }}>공유</GhostBtn>
            <GhostBtn style={{ width: 48 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l9-9 9 9M5 10v10h14V10"/>
              </svg>
            </GhostBtn>
          </div>
        </div>
      </div>
    </ScreenBG>
  );
}

// ─── 5. MENU SHEET / PAUSE ──────────────────────────────────────────
function MenuSheetScreen() {
  return (
    <ScreenBG>
      <div style={{
        position: 'absolute', inset: 0,
        opacity: 0.45, filter: 'blur(2px) saturate(0.7)',
        padding: '16px 16px 20px',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <JanggiBoard width={310} pieces={INITIAL_SETUP} />
        </div>
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(11,8,5,0.7)',
        backdropFilter: 'blur(6px)',
      }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: P.bgElev,
        borderTop: `1px solid ${P.gold}55`,
        borderTopLeftRadius: 24, borderTopRightRadius: 24,
        boxShadow: '0 -16px 56px rgba(0,0,0,0.6)',
        padding: '14px 20px 28px',
        zIndex: 5,
      }}>
        <div style={{
          width: 38, height: 4, borderRadius: 2,
          background: P.border,
          margin: '0 auto 16px',
        }} />
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <Eyebrow>대국 진행 중</Eyebrow>
            <h3 style={{
              marginTop: 6,
              fontFamily: 'Pretendard Variable, sans-serif',
              fontWeight: 600, fontSize: 22, color: P.fg1, margin: '6px 0 0',
            }}>대국 메뉴</h3>
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: P.gold, letterSpacing: '0.14em',
          }}>14수 · 4:32</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 12 }}>
          {[
            { i: 'play',   k: '대국 계속하기',  d: '이어서 진행',       primary: true },
            { i: 'undo',   k: '한 수 무르기',  d: '남은 무르기 1회',   sub: '1/1' },
            { i: 'flip',   k: '판 뒤집기',    d: '시점 전환',          sub: '↻' },
            { i: 'label',  k: '한글 표기',    d: '한자 → 한글',        toggle: false },
            { i: 'sound',  k: '효과음',      d: '클릭 · 이동 · 장군',  toggle: true },
            { i: 'restart',k: '재시작',      d: '같은 설정으로 다시',    sub: '' },
            { i: 'home',   k: '메인 화면으로', d: '현재 대국 종료',      danger: true },
          ].map((row, i) => (
            <button key={i} style={{
              padding: '13px 12px', borderRadius: 10,
              background: row.primary ? `${P.gold}1A` : 'transparent',
              border: row.primary ? `1px solid ${P.gold}66` : '1px solid transparent',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: row.danger
                  ? `${P.han}1A`
                  : row.primary
                  ? `${P.gold}26`
                  : P.bgCard,
                color: row.danger ? P.han : row.primary ? P.gold : P.fg2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <SheetIcon name={row.i} />
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: row.danger ? P.han : P.fg1 }}>{row.k}</div>
                <div style={{ fontSize: 11, color: P.fg3, marginTop: 2 }}>{row.d}</div>
              </div>
              {row.toggle !== undefined ? (
                <Toggle on={row.toggle} />
              ) : row.sub !== undefined ? (
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                  letterSpacing: '0.1em', color: P.fg3,
                }}>{row.sub}</span>
              ) : (
                !row.primary && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P.fg3} strokeWidth="1.6">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                )
              )}
            </button>
          ))}
        </div>
      </div>
    </ScreenBG>
  );
}

function Toggle({ on }) {
  return (
    <div style={{
      width: 36, height: 20, borderRadius: 999,
      background: on ? P.gold : P.bgCard,
      border: `1px solid ${on ? P.goldD : P.border}`,
      position: 'relative',
      transition: 'all 240ms ease',
    }}>
      <div style={{
        position: 'absolute',
        top: 1, left: on ? 17 : 1,
        width: 16, height: 16, borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.4)',
        transition: 'all 240ms ease',
      }} />
    </div>
  );
}

function SheetIcon({ name }) {
  const props = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch(name) {
    case 'play':    return <svg {...props}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></svg>;
    case 'undo':    return <svg {...props}><path d="M3 7v6h6M3 13a9 9 0 1 0 3-7"/></svg>;
    case 'flip':    return <svg {...props}><path d="M3 12a9 9 0 1 0 9-9M3 12V3M3 12h9"/></svg>;
    case 'label':   return <svg {...props}><path d="M4 7V5h16v2M9 19h6M12 5v14"/></svg>;
    case 'sound':   return <svg {...props}><path d="M11 5L6 9H2v6h4l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>;
    case 'restart': return <svg {...props}><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5"/></svg>;
    case 'home':    return <svg {...props}><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>;
    default: return null;
  }
}

// ─── 6. HELP / RULES ────────────────────────────────────────────────
function HelpScreen() {
  const pieces = [
    { type: 'king',     desc: '궁성 안 상하좌우 한 칸',         range: '宮 · 9칸' },
    { type: 'guard',    desc: '궁성 내 격자선을 따라 한 칸',     range: '士 · 사' },
    { type: 'chariot',  desc: '직선 무제한, 장애물 통과 불가',   range: '車 · 13점' },
    { type: 'cannon',   desc: '직선, 반드시 하나를 넘어 이동',   range: '包 · 7점' },
    { type: 'horse',    desc: '한 칸 직진 후 대각선 · 멱 적용',   range: '馬 · 5점' },
    { type: 'elephant', desc: '한 칸 직진 후 대각 두 칸 · 멱',     range: '象 · 3점' },
    { type: 'soldier',  desc: '전·좌·우 한 칸 (후진 불가)',       range: '卒/兵 · 2점' },
  ];

  return (
    <ScreenBG>
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '20px 24px 28px',
        display: 'flex', flexDirection: 'column', gap: 18, height: '100%',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconBtn>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </IconBtn>
          <Eyebrow>도움말 · 기물 1/3</Eyebrow>
          <div style={{ width: 36 }} />
        </div>

        <div>
          <h1 style={{
            fontFamily: 'Pretendard Variable, sans-serif',
            fontWeight: 300, fontSize: 28, lineHeight: 1.15,
            letterSpacing: '-0.025em', color: P.fg1, margin: 0,
          }}>
            <span style={{ color: P.cho }}>일곱 기물,</span><br/>
            <span style={{ color: P.han }}>일곱 가지 길.</span>
          </h1>
          <p style={{ marginTop: 8, fontSize: 13, color: P.fg3, margin: '8px 0 0' }}>
            장기는 일곱 종류의 기물이 각자의 방식으로 움직여 상대 궁을 외통수에 빠뜨리는 게임입니다.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {pieces.map((p, i) => (
            <div key={i} style={{
              padding: '12px 14px', borderRadius: 12,
              background: P.bgElev,
              border: `1px solid ${P.border}`,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <JanggiPiece type={p.type} side={i % 2 === 0 ? 'CHO' : 'HAN'} size={40} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: P.fg1, letterSpacing: '-0.01em' }}>
                    {PIECE_GLYPHS[p.type].kor}
                  </span>
                  <span style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 13, color: P.fg3 }}>
                    {PIECE_GLYPHS[p.type].CHO}{PIECE_GLYPHS[p.type].CHO !== PIECE_GLYPHS[p.type].HAN ? ` / ${PIECE_GLYPHS[p.type].HAN}` : ''}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: P.fg3, marginTop: 2 }}>{p.desc}</div>
              </div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
                letterSpacing: '0.12em', color: P.fg4,
                whiteSpace: 'nowrap',
              }}>{p.range}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 'auto' }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: i === 0 ? 20 : 6, height: 6, borderRadius: 999,
              background: i === 0 ? P.gold : P.border,
            }} />
          ))}
        </div>
      </div>
    </ScreenBG>
  );
}

Object.assign(window, {
  HomeScreen, NewGameScreen, GameScreen, ResultScreen, MenuSheetScreen, HelpScreen,
});
