# javascript-racingcar-precourse

## **과제 진행 요구 사항**

- 미션은 [자동차 경주](https://github.com/woowacourse-precourse/javascript-racingcar-7) 저장소를 포크하고 클론하는 것으로 시작한다.
- **기능을 구현하기 전 `README.md`에 구현할 기능 목록을 정리**해 추가한다.
- Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.
  - [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## **기능 요구 사항**

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

### **입출력 요구 사항**

### **입력**

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)

```
pobi,woni,jun
```

- 시도할 횟수

```
5
```

### **출력**

- 차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내 문구

```
최종 우승자 : pobi
```

- 공동 우승자 안내 문구

```
최종 우승자 : pobi, jun
```

### **실행 결과 예시**

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

## **프로그래밍 요구 사항 1**

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, **제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.**
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
  - 기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙으로 한다.

## **프로그래밍 요구 사항 2**

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
    - [Using Matchers](https://jestjs.io/docs/using-matchers)
    - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
    - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

### **라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
  - Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
  - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

### **사용 예시**

- 0에서 9까지의 정수 중 한 개의 정수 반환

```jsx
MissionUtils.Random.pickNumberInRange(0, 9);
```

---

## ⚙️ 구현 기능 목록

### **1. 입력 처리**

- **자동차 이름 입력 받기**
  - 사용자로부터 자동차 이름을 쉼표(,)로 구분하여 받기 ⭕️
  - 입력 문자열의 양 끝 공백을 제거 ⭕️
  - **예외 처리** ⭕️
    - 입력이 비어 있는 경우:
      - `[ERROR] 입력이 비어 있습니다.` 메시지 출력 후 애플리케이션 종료 ⭕️
    - 구분자가 쉼표가 아닐 경우:
      - `[ERROR] 구분자는 쉼표(,)로 입력해주세요.` 메시지 출력 후 애플리케이션 종료
    - 입력값 앞에 쉼표(,)가 있거나, 연속된 쉼표(,)가 있을 경우:
      - `[ERROR] 자동차 이름은 공백이 될 수 없습니다.` 메시지 출력 후 애플리케이션 종료
    - 이름이 5자 초과인 경우:
      - `[ERROR] 자동차 이름은 5자 이하로 입력해주세요.` 메시지 출력 후 애플리케이션 종료 ⭕️
    - 동일한 이름이 존재하는 경우:
      - `[ERROR] 자동차 이름은 중복될 수 없습니다.` 메시지 출력 후 애플리케이션 종료 ⭕️
- **횟수 입력 받기**
  - 사용자로부터 시도 횟수를 숫자로 입력 ⭕️
  - **예외 처리**
    - 입력이 비어 있는 경우:
      - `[ERROR] 시도 횟수를 입력해 주세요.` 메시지 출력 후 애플리케이션 종료 ⭕️
    - 숫자가 아닌 값이 포함된 경우:
      - `[ERROR] 시도 횟수는 숫자여야 합니다.` 메시지 출력 후 애플리케이션 종료 ⭕️
    - 1 미만의 값을 입력한 경우:
      - `[ERROR] 시도 횟수는 1 이상의 값이어야 합니다.` 메시지 출력 후 애플리케이션 종료 ⭕️

### **2. 자동차 경주 진행**

- **무작위 값 생성 및 전진 조건 확인**
  - 각 자동차는 시도 횟수마다 0에서 9 사이의 무작위 값을 생성 ⭕️
  - 생성된 무작위 값이 4 이상일 경우에만 전진 ⭕️
- **결과 저장 및 출력**
  - 매 시도 후 각 자동차의 전진 상태를 저장하고 다음 형식으로 출력 ⭕️
    - 예: `pobi : --`

### **3. 최종 우승자 계산 및 출력**

- **최종 우승자 계산**
  - 모든 시도가 완료되면 가장 많이 전진한 자동차의 거리를 구하기 ⭕️
  - 해당 거리와 동일한 거리를 이동한 모든 자동차를 우승자로 설정 ⭕️
- **우승자 출력**
  - 단독 우승자가 있는 경우:
    - 예: `최종 우승자 : pobi` ⭕️
  - 공동 우승자가 있는 경우 쉼표로 구분하여 출력:
    - 예: `최종 우승자 : pobi, jun` ⭕️
