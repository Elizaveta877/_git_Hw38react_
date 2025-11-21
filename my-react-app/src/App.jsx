import React, { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  
  const handleClick = () => {
    setMessage(`Ви натиснули кнопку! Поточне значення в полі: "${inputValue}"`);
  };

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center gap-6">
        
        <Header />

        {/* Поле для введення імені */}
        <Input 
          type="text" 
          placeholder="Введіть ваше ім'я..." 
          onChange={handleInputChange} 
        />

         {/* Поле для паролю */}
         <Input 
          type="password" 
          placeholder="Введіть пароль..." 
          onChange={(e) => console.log("Пароль змінюється:", e.target.value)} 
        />

        {/* Кнопка відправки */}
        <Button 
          text="Відправити дані" 
          type="submit" 
          onClick={handleClick} 
        />

        {/* Результат */}
        {(inputValue || message) && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg w-full text-sm text-blue-800 border border-blue-200">
            <p><strong>Введено:</strong> {inputValue}</p>
          
          </div>
        )}
        
      </div>
    </div>
  );
};

export default App;