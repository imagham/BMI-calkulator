// src/components/BMICalculator.jsx
import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeter = height / 100;
    const result = weight / (heightInMeter * heightInMeter);
    setBmi(result.toFixed(2));

    if (result < 18.5) setCategory('Kurus');
    else if (result < 24.9) setCategory('Normal');
    else if (result < 29.9) setCategory('Gemuk');
    else setCategory('Obesitas');
  };

  return (
    <div>
      <h2>Kalkulator BMI</h2>
      <input type="number" placeholder="Berat (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="number" placeholder="Tinggi (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button onClick={calculateBMI}>Hitung</button>
      {bmi && <p>BMI: {bmi} - {category}</p>}
    </div>
  );
};

export default BMICalculator;
