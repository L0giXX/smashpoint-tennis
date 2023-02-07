import React from "react";
import "./home.css";
import tennis from "../assets/undraw_grand_slam_84ep.svg";
export default function Home() {
  return (
<<<<<<< HEAD:client/src/routes/home.tsx
    <div className="grid grid-cols-2 w-screen h-screen bg-gray-200">
      <div className="mt-28 ml-20 max-w-xl p-6 border h-min border-gray-200 rounded-lg shadow bg-gray-900">
        <h2 className="mx-auto text-center mt-2 mb-2 text-3xl font-bold tracking-tight text-white">
          Willkommen
        </h2>
        <h3 className="mx-8 mb-3 font-bold text-center text-xl text-gray-200">
          Der Tennisclub Smashpoint Lounge Biedermannsdorf begrüßt Sie!
        </h3>
        <p className="mx-8 mb-10 text-gray-400">
          Sports nutzt inspirierendes Sporttraining und Mentoring, um Menschen
          zu engagieren und ihre Lebenschancen zu verbessern. Wir bieten jedem
          Menschen, mithilfe des Tennissports, die Möglichkeit, ihre sozialen,
          emotionalen und körperlichen Fähigkeiten zu entwickeln, die ihnen
          helfen, erfolgreich zu sein.
        </p>
        <a href="/mitgliedschaft">
          <div className="ml-8 mr-52 mb-5 bg-orange-500 text-center border p-6 font-bold text-white rounded-lg">
            JOIN US
          </div>
        </a>
      </div>
      <div className="mt-[120px] mx-20">
        <img src={tennis}></img>
      </div>
=======
    <div className="Home">
      <div></div>
>>>>>>> 14fb02971e998fe7a2f55e51d6f5129aeba1c6d3:client/src/routes/home/home.tsx
    </div>
  );
}
