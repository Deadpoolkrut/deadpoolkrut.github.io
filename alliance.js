// JavaScript
document.getElementById('authForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем стандартную отправку формы
  
  // Получаем значения полей
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  
  // Проверяем логин и пароль (замените на свои значения)
  if (login === "76561199192370315" && password === "Waldron") {
    // Перенаправление при успешной авторизации
    window.location.href = "index.html";
  } else {
    // Показываем ошибку
    document.getElementById('error').style.display = 'block';
    // Очищаем поля через 1.5 секунды
    setTimeout(() => {
      document.getElementById('login').value = '';
      document.getElementById('password').value = '';
      document.getElementById('error').style.display = 'none';
    }, 1500);
  }
});