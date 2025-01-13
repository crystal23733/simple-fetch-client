# simple-fetch-client

초보자로써 클라이언트에서 fetch를 사용하기 쉽게 만들어주는 라이브러리입니다.

> ⚠️ 현재 개발 진행 중인 프로젝트입니다.

## 개발 예정 주요 기능
- [ ] 간편한 API 요청 설정
- [ ] 인터셉터를 통한 요청/응답 처리
- [ ] 타입스크립트 지원
- [ ] 에러 핸들링 간소화
- [ ] 요청 취소 기능
- [ ] 재시도 메커니즘
- [ ] 캐싱 지원

## 사용 예시 (개발 예정)
```typescript
import { createClient } from 'simple-fetch-client';

const client = createClient({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  }
});

// GET 요청 예시
const getData = async () => {
  const response = await client.get('/users');
  return response.data;
};

// POST 요청 예시
const createUser = async (userData) => {
  const response = await client.post('/users', userData);
  return response.data;
};
```

# 브랜치 전략 **(Git Flow 간소화 버전)**

```
main              # 안정적인 배포 버전
    ├── develop   # 개발 중인 다음 버전
    ├── feature/* # 새로운 기능 개발
    ├── fix/*     # 버그 수정
    └── release/* # 배포 준비
```

**브랜치 규칙:**

- main: 배포된 안정 버전
- develop: 개발 중인 다음 버전
- feature/인터셉터-구현: 새 기능 개발
- fix/타입-오류-수정: 버그 수정
- release/v1.0.0: 배포 준비

# **커밋 컨벤션**

```
type: 제목 (한글로 작성, 최대 50자)

본문 (선택사항, 한글로 작성)
- 무엇을, 왜 변경했는지 설명
- 여러 줄 작성 가능

footer (선택사항)
```

커밋 타입:

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 코드
chore: 빌드 업무 수정
```

예시:

```
feat: 요청 인터셉터 기능 구현

- 요청 전 공통 헤더 추가 기능 구현
- 인터셉터 체이닝 구조 설계

Closes #123
```

# PR 전략

```
## 변경 사항
<!-- 이번 PR에서 작업한 내용을 설명해주세요 -->

## 테스트 방법
<!-- 테스트 방법을 설명해주세요 -->

## 체크리스트
- [ ] 테스트 코드를 작성했나요?
- [ ] 문서를 업데이트했나요?
- [ ] lint 검사를 통과했나요?

## 관련 이슈
<!-- 관련된 이슈 번호를 적어주세요 -->
Closes #
```

**PR 규칙:**

- PR 제목은 커밋 컨벤션과 동일하게 작성
- 리뷰어 최소 1명 이상 지정
- CI 통과 필수
- 충돌 해결은 PR 작성자 책임

# **개발 프로세스**

1. **기능 개발 시작:**

```bash
git checkout develop
git pull origin develop
git checkout -b feature/인터셉터-구현
```

2. **작업 및 커밋:**

```bash
git add .
git commit -m "feat: 인터셉터 기본 구조 구현"
```

3. **PR 생성 전:**

```bash
git pull origin develop  # 최신 develop 반영
npm run test            # 테스트 실행
npm run lint           # 린트 검사
```

4. **PR 생성 후:**
    - 코드 리뷰 진행
    - CI 통과 확인
    - 승인 후 머지

# 버전 관리

```bash
# 패치 버전 업데이트 (버그 수정)
npm version patch # 0.1.0 -> 0.1.1

# 마이너 버전 업데이트 (새 기능)
npm version minor # 0.1.1 -> 0.2.0

# 메이저 버전 업데이트 (호환성 깨짐)
npm version major # 0.2.0 -> 1.0.0
```

### 이슈 라벨
- `🐛 버그`: 버그 수정
- `✨ 기능`: 새로운 기능 추가
- `🎨 UI/UX`: 사용자 인터페이스 개선
- `🔧 리팩토링`: 코드 리팩토링
- `📝 문서`: 문서 작업
- `🔒 보안`: 보안 관련 수정
- `⚡ 성능`: 성능 개선
- `🧪 테스트`: 테스트 코드 추가/수정