
# newsstand

최신 뉴스와 언론사별 뉴스, 구독한 언론사를 확인할 수 있는 뉴스스탠드를 구현했습니다.

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [주요 기능](#주요-기능)
- [핵심 고민 & 해결 방법](#핵심-고민--해결-방법)
- [프로젝트 실행 방법](#프로젝트-실행-방법)
- [배포 링크](#배포-링크)
- [회고](#회고)
- [향후 개선 사항](#향후-개선-사항)

---

## 프로젝트 소개

리액트 애플리케이션 개발을 경험하고, 리액트의 렌더링 원리와 SPA 구조를 이해하기 위해 시작했습니다.  
사용자는 최신 뉴스를 확인할 수 있고, 카테고리별 언론사 뉴스를 볼 수 있으며 원하는 언론사를 구독하거나 구독 해지할 수 있습니다.  
언론사 화면은 **그리드 뷰**와 **리스트 뷰**를 제공하여 원하는 방식으로 볼 수 있습니다.

---

## 기술 스택

| 역할 | 기술 |
|------|------|
| 프레임워크 | React, Vite |
| 상태 관리 | Context API |
| 스타일링 | Emotion |
| 스케쥴링 및 기록용 도구 | Trello, Notion |
| 기타 | ESLint, Prettier |

---

## 폴더 구조

```
src/
├── assets/            # 이미지, 폰트 등 정적 파일
├── components/        # UI 컴포넌트 모음
│   ├── common/        # 공통 컴포넌트
│   ├── Header/        # 헤더 영역 컴포넌트
│   ├── Media/         # 언론사 관련 컴포넌트
│   ├── NewsRolling/   # 롤링 뉴스 컴포넌트
│   └── Theme/         # 다크 모드 테마 관련 컴포넌트
├── context/           # 전역 상태 관리 (Context API)
├── styles/            # 글로벌 스타일, Emotion 관련 스타일링
├── utils/             # 유틸리티 함수 모음
├── App.jsx            # App 컴포넌트
└── main.jsx           # 애플리케이션 엔트리 포인트
```

---

## 주요 기능

- ✅ 롤링 뉴스 (최신 뉴스가 5초마다 순차적으로 롤링)
- ✅ 그리드 뷰 / 리스트 뷰 전환
- ✅ 전체 언론사 보기
- ✅ 내가 구독한 언론사만 보기
- ✅ 구독 및 구독 해지 기능
- ✅ 자동 / 수동 캐러셀
- ✅ 다크 모드
- ✅ 프로그레스 바 (20초마다 자동 캐러셀 진행도 표시)

---

## 핵심 고민 & 해결 방법

> 별도로 위키 문서에 정리했습니다.  
> 👉 [프로젝트 wiki](https://github.com/wan0514/FE-newsstand/wiki)

---

## 프로젝트 실행 방법

1. 프로젝트 클론
```bash
git clone https://github.com/내-계정/newsstand.git
cd newsstand
```

2. 패키지 설치
```bash
npm install
```

3. 프로젝트 실행
```bash
npm run dev
```

---

## 회고

3주간 진행된 뉴스스탠드 프로젝트를 마무리했습니다.  
react 랜더링 사이클을 충분히 이해하지 못하고 있으며, 기획서 토대로 컴포넌트 설계를 생각보다 더 자세히 해야함을 인지할 수 있었습니다.

이번 프로젝트를 통해 얻은 인사이트:
- 프로젝트 설계 초기 단계에서 **컴포넌트 역할을 명확히** 하고 진행하는 것이 개발 효율을 높인다는 것을 깨달음
- Trello 등 협업 도구를 끝까지 활용하는 것이 중요함
- 기획서 내용을 반복적으로 검토하는 습관의 필요성
- 챗GPT 등 AI의 도움을 받더라도 **이해하고 사용하는 것**의 중요성
- 하루 회고는 **10분 안으로 정리** 하기
- 자료를 철저히 검토하고 공식 문서와 병행하여 학습할 것
- 구현 방식에 대해 너무 깊이 고민하지 말고, **1시간 이상 고민 시 일단 구현**하는 방식으로 실행력 높이기

---

## 향후 개선 사항

- 📌 List 관련 컴포넌트 재설계 (데이터 흐름 및 역할 명확화)
- 📌 구독 관련 기능 재설계 (상태 변경에 의한 랜더링 사이클 최적화)
- 📌 Fetch URL을 환경변수로 관리
- 📌 매직 넘버 및 하드코딩된 메시지를 상수 파일로 분리
- 📌 컴포넌트 분리 및 설계 개선

---
