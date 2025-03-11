import React, { useRef } from "react";
import { fetchWeather } from "../../Api/responses";
import { useQuery } from "@tanstack/react-query";

export default function Weather() {
  const inputRef = useRef(null);
  const city = null;

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["weather"],
    queryFn: () => {
      const city = inputRef.current.value;
      if (!city) throw new Error("Город не указан");
      return fetchWeather(city);
    },
    enabled: false, // Отключаем автоматический запрос при рендеринге
  });

  const hadlerClick = () => {
    refetch();
  };

  if (isLoading) return <div>Загрузка...</div>;

  if (isError) return <div>Ошибка: {error.message}</div>;

  console.log(data);

  return (
    <>
      <div className="weather--container">
        <input
          type="text"
          className="cityName"
          placeholder="Введите название города"
          ref={inputRef}
        />
        <button onClick={hadlerClick}>Получить данные</button>
      </div>
    </>
  );
}
