# NTF Janggi — Web Janggi (한국 장기)

브라우저에서 바로 즐기는 **HTML5 한국 장기** 미니게임. 설치 없음, 광고 없음, AI 3단계 난이도.

## 빠른 시작

```bash
# 그냥 더블클릭해도 되고,
open index.html

# 로컬 서버로도 가능
python3 -m http.server 5173
# → http://localhost:5173
```

## 무엇이 들어있나요?

| 경로 | 설명 |
|---|---|
| `index.html` | 게임 본체 (단일 파일, 자기 완결형) |
| `uploads/장기_HTML5_미니게임_PRD.md` | 제품 요구사항(PRD) |
| `assets/` · `*.jsx` · `Janggi Mobile UI.html` | 원본 디자인 시안 (다크 톤) |

## 게임 기능

- **AI 3단계 난이도**: 쉬움(랜덤+포획) / 보통(Minimax 3-ply) / 어려움(Minimax 4-ply + 평가 함수)
- **정통 장기 규칙**: 7기물 이동, 멱, 빅장, 외통수 판정
- **UI**: 클릭→클릭 이동, 합법 수 하이라이트, 장군 알림, 잡은 기물 표시
- **부가**: 한자↔한글 표기 토글, 한 수 무르기, 기권, 진영 선택

## 기술 스택

- **순수 HTML5** + 인라인 React 18 (Babel Standalone)
- **외부 의존성 0개** — CDN에서 React/Babel/Pretendard/Noto Serif KR 로드
- **상태 관리** — React useState (서버 없음, 메모리 상태만)
- **AI** — TypeScript 기반 Minimax + Alpha-Beta Pruning

## 디자인 토큰

- **색상**: 초(楚) `#0B6E3D` · 한(漢) `#B72525` · 골드 `#B4863A`
- **타이포**: Pretendard Variable (본문) · Noto Serif KR (한자·로고) · JetBrains Mono (수치)
- **테마**: 라이트 (`#FAF7F1` 배경)

자세한 컴포넌트/토큰 정리는 `design-system.pdf`(별도 생성) 참고.

---

PRD v1.0 · 2026-05-28
