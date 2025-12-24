# RIME 신년회 초대장

고급스러운 검은색과 금색 테마의 인터랙티브 신년회 초대장 웹페이지입니다.

## ✨ 주요 기능

### 🎁 인터랙티브 봉투 애니메이션
- **실링 왁스 호버 효과**: 마우스를 올리면 반짝이는 스파클 효과
- **봉투 열기**: 실링 왁스 클릭 시 스프링 바운스 효과와 함께 봉투가 앞으로 회전하며 열림
- **컨페티 효과**: 봉투가 열릴 때 금색 컨페티가 사방으로 퍼지는 애니메이션
- **부드러운 닫기**: 봉투를 닫을 때 자연스러운 ease-out 애니메이션

### 🎨 고급스러운 디자인
- **검은색 배경에 금색 장식**: 우아하고 격조 있는 색상 조합
- **떠다니는 금색 파티클**: 배경에서 끊임없이 떠오르는 파티클 효과 (GPU 가속 최적화)
- **커스텀 배경 이미지**: 상단/중간/하단으로 나뉜 눈꽃 패턴 배경
- **우아한 타이포그래피**: Cormorant Garamond & Noto Serif KR 폰트 사용
- **골드 섀도우 효과**: 제목과 주요 텍스트에 금색 그림자 효과

### 📱 완벽한 반응형 디자인
- **PC/태블릿/모바일 최적화**: 모든 디바이스에서 완벽한 레이아웃
- **터치 인터페이스**: 모바일에서 자연스러운 터치 조작
- **미디어 쿼리**: 768px, 480px 브레이크포인트로 세밀한 조정
- **가로 스크롤 방지**: overflow-x hidden 처리

### 🗺️ 지도 연동
- **네이버 지도**: 한 번의 클릭으로 네이버 지도 앱 실행
- **구글 지도**: 구글 지도로 길찾기 가능
- **반응형 버튼**: 모바일에서는 세로 배치로 자동 변경

### 📝 참석 여부 확인
- **Google Forms 연동**: 간편한 참석 여부 등록
- **반응형 RSVP 섹션**: 눈에 잘 띄는 골드 버튼 디자인

### ⌨️ 키보드 내비게이션
- **ESC 키**: 편지 닫기
- **접근성 개선**: 키보드만으로도 모든 기능 사용 가능

## 🚀 빠른 시작

### 1. 파일 다운로드
```bash
git clone <repository-url>
cd RIME_S
```

### 2. 로컬에서 실행
프로젝트 폴더에서 `index.html`을 브라우저로 열기만 하면 됩니다.

**VS Code 사용자:**
1. Live Server 확장 프로그램 설치
2. `index.html` 우클릭 → "Open with Live Server"

## 🛠️ 설정 방법

### Google Forms 연동

1. **Google Forms 만들기**
   - [Google Forms](https://forms.google.com) 접속
   - 새 설문지 생성
   - 질문 추가:
     - 이름 (단답형, 필수)
     - 전화번호 (단답형, 필수)
     - 참석 여부 (객관식 - 참석/불참, 필수)
     - 동반 인원 (단답형, 선택)
     - 문의사항 (장문형, 선택)

2. **URL 복사**
   - "보내기" 클릭 → 링크 아이콘 → URL 복사

3. **초대장에 연결**
   - `index.html` 파일 열기
   - 약 122번째 줄 찾기:
   ```html
   <a href="https://forms.gle/qZrrupXuMwc3Y39K6" target="_blank" class="rsvp-button">
   ```
   - URL을 본인의 Google Forms URL로 교체

### 지도 링크 변경

`index.html` 파일에서 지도 링크를 수정하세요:

```html
<!-- 네이버 지도 (약 106번째 줄) -->
<a href="YOUR_NAVER_MAP_URL" target="_blank" class="map-button naver">

<!-- 구글 지도 (약 109번째 줄) -->
<a href="YOUR_GOOGLE_MAP_URL" target="_blank" class="map-button google">
```

### 이벤트 정보 수정

`index.html` 파일의 `.event-details` 섹션에서 수정:
- **일시**: 71-72번째 줄
- **장소**: 80-81번째 줄
- **참가비**: 89번째 줄
- **연락처**: 97번째 줄

## 🎨 커스터마이징

### 색상 테마 변경

`styles.css` 파일 최상단의 CSS 변수를 수정하세요:

```css
:root {
    --gold: #d4af37;           /* 주 금색 */
    --light-gold: #f4e4b8;     /* 밝은 금색 */
    --dark-gold: #b8941e;      /* 어두운 금색 */
    --dark-bg: #1a1a1a;        /* 주 배경색 */
    --darker-bg: #0f0f0f;      /* 그라디언트 배경색 */
    --envelope-dark: #2a2a2a;  /* 봉투/카드 배경색 */
}
```

### 배경 이미지 교체

`images` 폴더의 이미지를 교체하세요:
- `letter-background-top.png`: 편지지 상단 장식
- `letter-background-middle.png`: 편지지 중간 반복 패턴
- `letter-background-bottom.png`: 편지지 하단 장식

**권장 사양:**
- 너비: 800px
- 형식: PNG (투명 배경 가능)
- 최적화: TinyPNG 등으로 용량 최소화

### 봉투 이미지 교체

`images` 폴더의 봉투 이미지:
- `envelope-back.png`: 봉투 하단 본체
- `envelope-flap.png`: 봉투 상단 뚜껑
- `wax-seal.png`: 실링 왁스

### 애니메이션 속도 조정

`styles.css`에서 애니메이션 duration 수정:

```css
/* 봉투 열기 속도 (기본: 1.2초) */
.envelope-flap {
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 봉투 닫기 속도 (기본: 1초) */
.envelope-flap.closing {
    transition: transform 1s ease-out;
}

/* 편지 나타나기 (기본: 0.8초) */
.letter {
    animation: letterSlideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 파티클 개수 조정

`script.js` 파일에서 파티클 수 변경:

```javascript
// 2번째 줄 근처
function createParticles() {
    const particleCount = 50;  // 원하는 개수로 변경
    // ...
}
```

## 📁 파일 구조

```
RIME_S/
├── index.html                      # 메인 HTML 파일
├── styles.css                      # 전체 스타일시트
├── script.js                       # JavaScript 애니메이션 & 인터랙션
├── README.md                       # 프로젝트 문서
└── images/                         # 이미지 리소스
    ├── envelope-back.png           # 봉투 하단
    ├── envelope-flap.png           # 봉투 상단 뚜껑
    ├── wax-seal.png                # 실링 왁스
    ├── letter-background.png       # (레거시) 전체 배경
    ├── letter-background-top.png   # 편지지 상단 배경
    ├── letter-background-middle.png # 편지지 중간 배경 (반복)
    └── letter-background-bottom.png # 편지지 하단 배경
```

## 🌐 웹 배포하기

### Vercel로 배포 (추천)

1. [Vercel](https://vercel.com) 가입 및 로그인
2. "Add New" → "Project" 클릭
3. GitHub 저장소 연결 또는 직접 폴더 업로드
4. 프로젝트 이름 설정
5. "Deploy" 클릭
6. 배포 완료 후 `https://your-project.vercel.app` 형식의 URL 받기

**장점:**
- 무료
- 자동 HTTPS
- GitHub 연동 시 자동 배포
- 빠른 CDN

### Netlify로 배포

1. [Netlify](https://netlify.com) 가입
2. "Add new site" → "Deploy manually" 클릭
3. 프로젝트 폴더를 드래그 앤 드롭
4. 배포 완료 후 `https://your-site.netlify.app` URL 받기

### GitHub Pages로 배포

1. GitHub 저장소 생성
2. 파일들을 저장소에 푸시:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Settings → Pages
4. Source를 "main" 브랜치로 설정
5. `https://username.github.io/repository-name` 형식의 URL로 접속

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**:
  - CSS Variables (커스텀 속성)
  - Flexbox & Grid 레이아웃
  - 3D Transforms
  - Animations & Transitions
  - Media Queries
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Web Animations API
  - Event Handling
  - Intersection Observer
- **Google Fonts**: Cormorant Garamond, Noto Serif KR

## 🎯 성능 최적화

- **GPU 가속**: `transform: translateZ(0)` 및 `will-change` 사용
- **이미지 최적화**: PNG 압축 및 적절한 해상도
- **애니메이션 최적화**: `transform`과 `opacity`만 사용하여 리플로우 방지
- **메모리 관리**:
  - 컨페티 자동 제거 (`onfinish` 이벤트)
  - 스파클 interval 정리
  - 이벤트 리스너 중복 방지

## 📱 브라우저 호환성

| 브라우저 | 최소 버전 | 상태 |
|---------|---------|------|
| Chrome | 90+ | ✅ 완벽 지원 |
| Firefox | 88+ | ✅ 완벽 지원 |
| Safari | 14+ | ✅ 완벽 지원 |
| Edge | 90+ | ✅ 완벽 지원 |
| iOS Safari | 14+ | ✅ 완벽 지원 |
| Chrome Mobile | 90+ | ✅ 완벽 지원 |

## 🐛 알려진 이슈 & 해결 방법

### 모바일에서 배경이 흔들림
- ✅ **해결됨**: GPU 가속 활성화로 해결

### 컨페티 파티클이 남아있음
- ✅ **해결됨**: `animation.onfinish` 이벤트로 확실한 제거

### 스크롤바가 보임
- ✅ **해결됨**: 완전 투명 처리

### 배경 이미지가 찌그러짐
- ✅ **해결됨**: top/middle/bottom 분할 배경으로 해결

## 📞 문의 및 지원

문제가 발생하거나 도움이 필요하시면 연락주세요:
- **전화**: 010-2710-9037
- **이슈 제보**: GitHub Issues (저장소가 있다면)

## 📝 변경 이력

### v1.0.0 (2025-12-25)
- 초기 릴리스
- 봉투 열기 애니메이션
- 컨페티 효과
- 반응형 디자인
- 배경 파티클 효과
- Google Forms 연동
- 지도 링크 연동

## 📄 라이선스

개인적인 용도로 자유롭게 사용하실 수 있습니다.

---

**Made with ❤️ for RIME 2026 New Year Party**
