document.addEventListener('DOMContentLoaded', function () {
  const btn1 = document.getElementById('btn1');
  const container4 = document.getElementById('container4');

  btn1.addEventListener('click', function () {
    if (container4.style.display === 'none' || container4.style.display === '') {
      container4.style.display = 'flex';
      btn1.textContent = 'Скрыть';
    } else {
      container4.style.display = 'none';
      btn1.textContent = 'Показать ещё';
    }
  });

  const input = document.getElementById('input');
  const cities = document.getElementById('cities');

  input.addEventListener('click', () => {
    cities.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !cities.contains(e.target)) {
      cities.style.display = 'none';
    }
  });

  const cityItems = cities.querySelectorAll('.list-city');
  cityItems.forEach(item => {
    item.addEventListener('click', () => {
      input.value = item.textContent;
      cities.style.display = 'none';
    });
  });

  const btn2 = document.querySelector('.btn2');
  const mainVideo = document.getElementById('main-video');

  btn2.addEventListener('click', function () {
    const city = input.value.trim();
    const timeInputs = document.querySelectorAll('input[name="choice"]');
    let selectedTime = 'день'; 

    for (const radio of timeInputs) {
      if (radio.checked) {
        selectedTime = radio.value;
        break;
      }
    }

    const cityMap = {
      'белгород': 'Белгород',
      'адлер': 'Адлер',
      'воронеж': 'Воронеж',
      'зеленоградск': 'Зеленоградск',
      'зеленоград': 'Зеленоградск'
    };

    const cityKey = cityMap[city.toLowerCase()] || null;

    const images = {
      'Белгород': {
        'утро': '../Фотки спринт 2/Белгород утро.jpg',
        'день': '../Фотки спринт 2/Белгород день.jpg',
        'ночь': '../Фотки спринт 2/Белгород ночь.jpg'
      },
      'Адлер': {
        'утро': '../Фотки спринт 2/Адлер утро.jpg',
        'день': '../Фотки спринт 2/Адлер день.jpg',
        'ночь': '../Фотки спринт 2/Адлер ночь.jpg'
      },
      'Воронеж': {
        'утро': '../Фотки спринт 2/Воронеж утро.jpg',
        'день': '../Фотки спринт 2/Воронеж день.webp',
        'ночь': '../Фотки спринт 2/Воронеж ночь.jpg'
      },
      'Зеленоградск': {
        'утро': '../Фотки спринт 2/Зеленоградск утро.jpg',
        'день': '../Фотки спринт 2/Зеленоград день.webp',
        'ночь': '../Фотки спринт 2/Зеленоградск ночь.jpg'
      }
    };

    if (cityKey && images[cityKey] && images[cityKey][selectedTime]) {
      mainVideo.src = images[cityKey][selectedTime];
    } else {
      mainVideo.src = '../Фотки спринт 2/Frame 15.png'; 
    }
  });
});