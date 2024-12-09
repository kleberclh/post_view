import React from "react";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Sobre o Projeto
        </h1>
        <p className="text-xl text-gray-600">
          Este é um projeto de demonstração desenvolvido utilizando as seguintes
          tecnologias:
        </p>
        <ul className="mt-4 pl-6 text-gray-600">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Axios</li>
        </ul>
        <p className="mt-6 text-gray-500">
          O objetivo deste projeto é mostrar como essas tecnologias podem ser
          integradas para construir uma aplicação moderna, dinâmica e
          responsiva.
        </p>
      </div>
    </div>
  );
}
