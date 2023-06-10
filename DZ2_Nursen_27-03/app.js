var Starbucks = {
  coffee: {
    americano: "Классический кофе, приготовленный путем добавления горячей воды в эспрессо.",
    cappuccino: "Кофе с равными частями эспрессо, молока и молочной пены.",
    latte: "Кофе, приготовленный с большим количеством молока и небольшим количеством эспрессо.",
    mocha: "Кофе с добавлением шоколада или шоколадного сиропа.",
    macchiato: "Кофе, приготовленный путем добавления эспрессо к небольшому количеству молока."
  },
  tea: {
    green: "Зеленый чай с освежающим вкусом и антиоксидантными свойствами.",
    black: "Черный чай с насыщенным вкусом и тонизирующим эффектом.",
    herbal: "Травяной чай с различными ароматами и полезными свойствами.",
    chai: "Чай, приготовленный на основе пряностей, молока и черного чая."
  }
};

var item = prompt("Введите название кофе или чая:").toLowerCase();

if (item in Starbucks.coffee) {
  alert("Вы заказали кофе: " + item + ". Описание: " + Starbucks.coffee[item]);
} else if (item in Starbucks.tea) {
  alert("Вы заказали чай: " + item + ". Описание: " + Starbucks.tea[item]);
} else {
  alert("Извините, выбранный напиток \"" + item + "\" недоступен. Пожалуйста, выберите что-то другое.");
}
