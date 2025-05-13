import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWeight, FaRulerVertical, FaHeartbeat } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("text-blue-700");

  const calculateBMI = () => {
    const heightInMeter = height / 100;
    const result = weight / (heightInMeter * heightInMeter);
    const rounded = result.toFixed(2);
    setBmi(rounded);

    if (result < 18.5) {
      setCategory("Kurus 😟");
      setColor("text-yellow-600");
    } else if (result < 24.9) {
      setCategory("Normal 😊");
      setColor("text-green-600");
    } else if (result < 29.9) {
      setCategory("Gemuk 😅");
      setColor("text-orange-600");
    } else {
      setCategory("Obesitas 😱");
      setColor("text-red-600");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col justify-between items-center">
      {/* Hero */}
      <header className="text-center pt-12 pb-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-purple-800 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🧮 Kalkulator BMI
        </motion.h1>
        <p className="text-gray-600 mt-2">
          Hitung indeks massa tubuhmu & lihat hasilnya!
        </p>
      </header>

      {/* Kalkulator */}
      <motion.div
        className="bg-white shadow-2xl rounded-2xl px-8 py-10 w-[90%] max-w-md mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <FaWeight className="text-blue-500 text-xl" />
            <input
              type="number"
              placeholder="Berat badan (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <FaRulerVertical className="text-green-500 text-xl" />
            <input
              type="number"
              placeholder="Tinggi badan (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <motion.button
            onClick={calculateBMI}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hitung Sekarang 💪
          </motion.button>

          {bmi && (
            <motion.div
              className={`mt-4 border-l-4 p-4 rounded-xl bg-white shadow-md ${color}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-bold text-xl">BMI Kamu: {bmi}</p>
              <p className="text-md font-medium">Kategori: {category}</p>
            </motion.div>
          )}
        </div>
        <div className="text-center mt-6">
          <Link to="/detail">
            <motion.button
              className="bg-pink-400 text-white px-6 py-2 rounded-xl shadow-md hover:bg-pink-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💡 Tips Hidup Sehat
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-sm text-gray-500 pb-4 text-center">
        Dibuat dengan ❤️ oleh imagham — 2025
      </footer>
    </section>
  );
};

export default BMICalculator;
