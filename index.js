import readlineSync from 'readline-sync';

function getComputerChoice() {
  const choices = ['камень', 'ножницы', 'бумага'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Ничья!';
  }
	if (
    (userChoice === 'камень' && computerChoice === 'ножницы')) {
			return 'Вы победили! Камень бьет ножницы.';
		} else if (
    (userChoice === 'ножницы' && computerChoice === 'бумага')) {
			return 'Вы победили! Ножницы режут бумагу.';
		} else if (
    (userChoice === 'бумага' && computerChoice === 'камень')) {
    return 'Вы победили! Бумага накрывает камень.';
  } else {
    return 'Компьютер победил!';
  }
}

function isValidInput(input) {
  const validInputs = ['1', '2', '3'];
  return validInputs.includes(input);
}

function isValidReplayInput(input) {
  const validInputs = ['да', 'нет'];
  return validInputs.includes(input.toLowerCase());
}

while (true) {
  console.log('Выберите вашу фигуру:');
  console.log('1.Камень');
  console.log('2.Ножницы');
  console.log('3.Бумага');
  let userChoice = readlineSync.question('Ваш выбор: ');

  while (!isValidInput(userChoice)) {
    console.log('Неверный ввод. Пожалуйста, введите "1", "2" или "3".');
    userChoice = readlineSync.question('Ваш выбор: ');
  }

  const choices = ['камень', 'ножницы', 'бумага'];
  userChoice = choices[parseInt(userChoice) - 1];
  console.log('Вы выбрали:', userChoice);

  const computerChoice = getComputerChoice();
  console.log('Компьютер выбирает:', computerChoice);
  
  console.log('Результат:', determineWinner(userChoice, computerChoice));
  
  let playAgain = readlineSync.question('Хотите сыграть еще раз? (да/нет): ');
  
  while (!isValidReplayInput(playAgain)) {
    console.log('Неверный ввод. Пожалуйста, введите "да" или "нет".');
    playAgain = readlineSync.question('Хотите сыграть еще раз? (да/нет): ');
  }

  if (playAgain.toLowerCase() !== 'да') {
    console.log('Спасибо за игру! До встречи!');
    break;
  }
}
