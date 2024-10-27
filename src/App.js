import { Console } from '@woowacourse/mission-utils';
import { CAR_NAME_VALIDATOR } from './Validators.js';

class App {
  async run() {
    const CAR_NAME = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const CAR_NAME_ARRAY = CAR_NAME.trim()
      .split(',')
      .map(name => name.trim());

    CAR_NAME_VALIDATOR(CAR_NAME_ARRAY);
  }
}

export default App;
