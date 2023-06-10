var month = Number(prompt("Введите номер месяца вашего рождения (от 1 до 12):"));

var day = Number(prompt("Введите день вашего рождения (от 1 до 31):"));

if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    alert("Ваш знак зодиака - Водолей");
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    alert("Ваш знак зодиака - Рыбы");
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    alert("Ваш знак зодиака - Овен");
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    alert("Ваш знак зодиака - Телец");
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    alert("Ваш знак зодиака - Близнецы");
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    alert("Ваш знак зодиака - Рак");
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    alert("Ваш знак зодиака - Лев");
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    alert("Ваш знак зодиака - Дева");
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    alert("Ваш знак зодиака - Весы");
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    alert("Ваш знак зодиака - Скорпион");
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    alert("Ваш знак зодиака - Стрелец");
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    alert("Ваш знак зодиака - Козерог");
  }
}
else {
    alert("Введены некорректные данные месяца или дня");
}
