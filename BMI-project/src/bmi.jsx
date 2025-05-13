// src/components/BMICalculator.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.header
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Kalkulator BMI
          </h1>
          <p className="text-center text-sm text-gray-500 mt-1">Cek kesehatan tubuhmu sekarang</p>
        </motion.header>

        <div className="space-y-4">
          <motion.input
            type="number"
            placeholder="Berat (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="number"
            placeholder="Tinggi (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            onClick={calculateBMI}
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hitung
          </motion.button>

          {bmi && (
            <motion.div
              className="mt-4 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-xl text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-medium text-lg">BMI: {bmi}</p>
              <p className="text-sm">Kategori: {category}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default BMICalculator;
