// detailPage.jsx
import React from "react";

function DetailPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md max-w-2xl w-full p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">Gaya Hidup Sehat</h1>
        <img
          src="https://source.unsplash.com/800x400/?healthy,lifestyle"
          alt="Gaya Hidup Sehat"
          className="rounded-lg mb-4 w-full object-cover h-64"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Gaya hidup sehat adalah pola hidup yang memperhatikan keseimbangan antara asupan gizi, aktivitas fisik, dan kesehatan mental. 
          Dengan mengonsumsi makanan bergizi seimbang, rutin berolahraga, tidur cukup, dan mengelola stres, seseorang dapat meningkatkan kualitas hidup secara keseluruhan. 
          Menjaga tubuh tetap aktif dan pikiran tetap positif merupakan kunci utama dalam menerapkan gaya hidup sehat.
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
