import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DetailPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center px-6">
      <Link to="/"><h3 className='text-2xl font-bold text-green-700 mb-4 cursor-pointer hover:text-green-600 py-2 px-4 rounded-lg shadow-lg bg-green-300 absolute top-16 left-[20%]' >Home</h3></Link>
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">💚 Hidup Sehat Itu Penting!</h2>
        <img
          src="https://images.unsplash.com/photo-1669355106052-b7456721510c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhpZHVwJTIwc2VoYXR8ZW58MHx8MHx8fDA%3D"
          alt="Hidup sehat"
          className="rounded-xl mx-auto mb-6"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Menjaga kesehatan tubuh adalah kunci untuk hidup lebih panjang, bahagia, dan produktif. Mulailah dengan pola
          makan seimbang, olahraga rutin, tidur cukup, dan hindari stres berlebihan. Tubuh yang sehat akan mendukung
          aktivitas sehari-hari dan menjaga kualitas hidupmu.
        </p>
      </motion.div>
    </section>
  );
};

export default DetailPage;
