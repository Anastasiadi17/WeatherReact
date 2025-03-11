const API_KEY = "c10d85d9cfcfc0d9049826ad8066e407";

export const fetchWeather = async (city) => {
  if (!city) {
    throw new Error("Город не указан");
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных!!!");
  }
  return response.json();
};
