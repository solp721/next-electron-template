# Next.js + Electron 데스크탑 앱 템플릿

## 📋 개요

다음 기술들을 결합한 데스크탑 애플리케이션 템플릿입니다:
- **Next.js 15** - 웹 애플리케이션 구축을 위한 React 프레임워크
- **TypeScript** - 타입 안전한 JavaScript 개발
- **Electron** - 크로스 플랫폼 데스크탑 앱 프레임워크
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크

웹 기술로 최신 크로스 플랫폼 데스크탑 애플리케이션을 만들기에 완벽합니다.

## 🚀 기술 스택

- **프론트엔드**: Next.js 15 + React 19 + TypeScript
- **스타일링**: Tailwind CSS 4
- **데스크탑**: Electron 37
- **빌드**: Electron Builder
- **패키지 매니저**: Yarn

## 🛠️ 설치

```bash
# 저장소 클론
git clone <your-repo-url>
cd nuri-note

# 의존성 설치
yarn install
```

## 🏃‍♂️ 개발

### 웹 개발 모드
```bash
# Next.js 개발 서버 실행
yarn dev
# 브라우저에서 http://localhost:3000 접속
```

### 데스크탑 개발 모드
```bash
# 터미널 1: Next.js 개발 서버 실행
yarn dev

# 터미널 2: Electron 개발 모드 실행
yarn electron-dev
```

## 🏗️ 프로덕션

### 데스크탑 앱 빌드 및 실행
```bash
# Next.js 앱 빌드 후 Electron 실행
yarn build-electron
```

### 배포용 파일 생성
```bash
# 배포용 파일 생성 (.dmg, .exe, .AppImage)
yarn dist
```

## 📁 프로젝트 구조

```
├── app/                      # Next.js 앱 디렉토리
│   ├── page.tsx             # 메인 페이지 컴포넌트
│   ├── layout.tsx           # 루트 레이아웃
│   └── globals.css          # 전역 스타일 (Tailwind)
├── public/                  # 정적 자산
├── main.js                  # Electron 메인 프로세스
├── fix-electron-paths.js    # Electron용 경로 수정 스크립트
├── next.config.ts           # Next.js 설정
├── package.json            # 의존성 및 스크립트
└── out/                    # 빌드된 정적 파일 (생성됨)
```

## 🔧 핵심 파일들

### `main.js`
데스크탑 윈도우를 생성하고 관리하는 Electron의 메인 프로세스입니다.

### `fix-electron-paths.js`
Electron 호환성을 위해 절대 경로를 상대 경로로 변환하는 필수 스크립트입니다.
**삭제하지 마세요** - 이 파일은 정상 동작에 필요합니다.

### `next.config.ts`
정적 내보내기 및 Electron 호환성을 위해 최적화된 Next.js 설정입니다.

## 📦 사용 가능한 스크립트

| 스크립트 | 설명 |
|--------|------|
| `yarn dev` | Next.js 개발 서버 시작 |
| `yarn build` | 프로덕션용 Next.js 앱 빌드 |
| `yarn electron` | 빌드된 파일로 Electron 실행 |
| `yarn electron-dev` | 개발 모드로 Electron 실행 |
| `yarn build-electron` | 빌드 후 데스크탑 앱 실행 |
| `yarn dist` | 배포용 파일 생성 |
| `yarn lint` | ESLint 실행 |

## 🎨 스타일링

이 템플릿은 다크 모드를 지원하는 Tailwind CSS 4를 사용합니다. 주요 스타일은 다음에서 설정됩니다:
- `app/globals.css` - 전역 스타일 및 Tailwind 가져오기
- `tailwind.config.js` - Tailwind 설정

## 🔄 워크플로우

1. **개발**: 핫 리로드를 위해 `yarn dev` + `yarn electron-dev` 사용
2. **테스트**: 프로덕션 빌드 테스트를 위해 `yarn build-electron` 사용
3. **배포**: 설치 프로그램 생성을 위해 `yarn dist` 사용

## 🚨 중요 사항

- `fix-electron-paths.js` 스크립트는 Electron 호환성을 위해 필수입니다
- 별도의 빌드 명령 대신 항상 `yarn build-electron`을 사용하세요
- 개발 모드와 프로덕션 모드는 다른 로딩 전략을 사용합니다
- Electron 호환성을 위해 정적 내보내기가 활성화되어 있습니다

## 📝 커스터마이징

### 앱 정보
`package.json`을 편집하여 다음을 커스터마이징:
- 앱 이름, 버전, 설명
- 다양한 플랫폼을 위한 빌드 설정
- 의존성 추가 또는 제거

### Electron 윈도우
`main.js`를 편집하여 다음을 커스터마이징:
- 윈도우 크기 및 속성
- 메뉴 설정
- 플랫폼별 동작

### Next.js 설정
`next.config.ts`를 편집하여 다음을 수정:
- 빌드 최적화
- 정적 내보내기 설정
- 커스텀 webpack 설정

## 🔒 보안

이 템플릿은 Electron 보안 모범 사례를 따릅니다:
- Node 통합 비활성화
- 컨텍스트 분리 활성화
- 웹 보안 활성화
- 원격 모듈 비활성화

## 📦 빌드 설정

템플릿은 다음에 대한 빌드 설정을 포함합니다:
- **macOS**: .dmg 설치 프로그램
- **Windows**: NSIS 설치 프로그램
- **Linux**: AppImage

## 📄 라이선스

MIT 라이선스 - 이 템플릿을 자유롭게 프로젝트에 사용하세요.
