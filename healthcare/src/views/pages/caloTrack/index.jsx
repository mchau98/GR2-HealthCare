import React, { useState } from "react";
import axios from "axios";

const CaloTracker = () => {
  const [foodName, setFoodName] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const addFood = async () => {
    if (!foodName) return;

    try {
      const response = await axios.post('http://localhost:8000/caloRoute/getCalo', { name: foodName });
      const calo = response.data.data; // Giá trị calo từ API

      const newFood = { name: foodName, calo: calo };
      setFoodList([...foodList, newFood]);
      setTotalCalories(totalCalories + calo);
      setFoodName('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Không tìm thấy đồ ăn');
      console.error("Error fetching calorie data", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calorie Tracker</h1>
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Nhập tên đồ ăn"
      />
      <button onClick={addFood}>Thêm</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <h2>Danh sách đồ ăn</h2>
      <ul>
        {foodList.map((food, index) => (
          <li key={index}>{food.name}: {food.calo} calo</li>
        ))}
      </ul>

      <h3>Tổng số calo: {totalCalories} calo</h3>
    </div>
  );
}

export default CaloTracker;
