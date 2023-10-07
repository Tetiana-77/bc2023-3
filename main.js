const fs = require('fs'); // підключаємо модуль fs

// Читання файлу
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка при читанні файлу:', err);
    return;
  }

  try {
    // Парсимо JSON дані
    const exchangeRate = JSON.parse(data);

    // Знаходимо максимальний курс
    let maxValue = exchangeRate[0].rate; // Встановимо maxValue на перший курс з масиву

    for (const currency of exchangeRate) {
      if (currency.rate > maxValue) {
        maxValue = currency.rate;
      }
    }

    const output = `Максимальний курс: ${maxValue}`;

    // Запис у файл output.txt
    fs.writeFile('output.txt', output, 'utf8', (err) => {
      if (err) {
        console.error('Помилка при запису у файл:', err);
        return;
      }
      console.log('Максимальний курс успішно збережено у файлі output.txt');
      
      // Виведемо максимальний курс в консоль
      console.log(output);
    });
  } catch (error) {
    console.error('Помилка при парсингу JSON:', error);
  }
});
