# RIME 신년회 초대장

고급스러운 검은색과 금색 테마의 인터랙티브 신년회 초대장 웹페이지입니다.

## 주요 기능

✨ **인터랙티브 봉투 애니메이션**
- 실링 왁스를 클릭하면 봉투가 열리는 애니메이션
- 화려한 컨페티 효과
- 부드러운 전환 효과

🎨 **고급스러운 디자인**
- 검은색 배경에 금색 장식
- 떠다니는 금색 파티클 효과
- 우아한 타이포그래피

📱 **반응형 디자인**
- 모바일, 태블릿, 데스크톱 모두 지원
- 터치 인터페이스 최적화

🗺️ **지도 연동**
- 네이버 지도 바로가기
- 구글 지도 바로가기

📝 **참석 여부 확인**
- Google Forms 연동

## 설정 방법

### 1. Google Forms 만들기

1. [Google Forms](https://forms.google.com)에 접속
2. 새 설문지 만들기
3. 다음 질문들을 추가:
   - **이름** (단답형, 필수)
   - **전화번호** (단답형, 필수)
   - **참석 여부** (객관식, 필수)
     - 참석
     - 불참
   - **동반 인원** (단답형, 선택)
   - **기타 문의사항** (장문형, 선택)

4. 설문지 설정:
   - 우측 상단 설정 아이콘 클릭
   - "응답 1회로 제한" 체크 (선택)
   - "응답 수정 허용" 체크 (선택)

5. 폼 완성 후 "보내기" 클릭
6. 링크 아이콘 클릭하여 URL 복사

### 2. 초대장에 Google Forms 연결

`index.html` 파일을 열고 다음 부분을 찾으세요:

```html
<a href="YOUR_GOOGLE_FORM_URL_HERE" target="_blank" class="rsvp-button">
```

`YOUR_GOOGLE_FORM_URL_HERE`를 복사한 Google Forms URL로 교체하세요.

예시:
```html
<a href="https://forms.gle/abcd1234" target="_blank" class="rsvp-button">
```

## 로컬에서 테스트하기

1. 프로젝트 폴더를 엽니다
2. `index.html` 파일을 더블클릭하여 브라우저에서 실행
3. 또는 Live Server를 사용 (VS Code 확장 프로그램)

## 웹 배포하기

### Vercel로 배포 (추천)

1. [Vercel](https://vercel.com) 가입
2. "Add New" → "Project" 클릭
3. GitHub 저장소 연결 또는 폴더 업로드
4. 배포 완료 후 URL 받기

### Netlify로 배포

1. [Netlify](https://netlify.com) 가입
2. "Add new site" → "Deploy manually" 클릭
3. 프로젝트 폴더를 드래그 앤 드롭
4. 배포 완료 후 URL 받기

### GitHub Pages로 배포

1. GitHub 저장소 생성
2. 파일들을 저장소에 푸시
3. Settings → Pages
4. Source를 "main" 브랜치로 설정
5. 배포 완료 후 `https://username.github.io/repository-name` 형식의 URL 받기

## 파일 구조

```
RIME_S/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 애니메이션
└── README.md          # 이 파일
```

## 커스터마이징

### 색상 변경

`styles.css` 파일의 최상단에 있는 색상 변수를 수정하세요:

```css
:root {
    --gold: #d4af37;           /* 주 금색 */
    --light-gold: #f4e4b8;     /* 밝은 금색 */
    --dark-gold: #b8941e;      /* 어두운 금색 */
    --dark-bg: #1a1a1a;        /* 배경색 */
    --darker-bg: #0f0f0f;      /* 더 어두운 배경색 */
}
```

### 이벤트 정보 수정

`index.html` 파일에서 해당 섹션을 찾아 수정하세요:
- 날짜/시간
- 장소
- 주소
- 참가비
- 연락처

### 초대 문구 변경

`index.html` 파일의 `.invitation-message` 섹션을 수정하세요.

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome)

## 문의

문제가 발생하거나 도움이 필요하시면 연락주세요:
- 전화: 010-2710-9037

## 라이선스

개인적인 용도로 자유롭게 사용하실 수 있습니다.
