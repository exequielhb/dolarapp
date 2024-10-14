import React, { useEffect, useState } from 'react';
import { DollarSign } from 'lucide-react';

interface DolarData {
  nombre: string;
  compra: number;
  venta: number;
}

const App: React.FC = () => {
  const [dolarData, setDolarData] = useState<DolarData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares');
        const data = await response.json();
        setDolarData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-white">Popular</h1>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 font-normal text-gray-400">Tipo de Cambio</th>
              <th className="text-right py-2 font-normal text-gray-400">Compra</th>
              <th className="text-right py-2 font-normal text-gray-400">Venta</th>
            </tr>
          </thead>
          <tbody>
            {dolarData.map((dolar) => (
              <tr key={dolar.nombre} className="border-b border-gray-700 last:border-b-0">
                <td className="py-3 flex items-center">
                  <div className="bg-gray-700 rounded-full p-2 mr-3">
                    <DollarSign className="text-blue-400" size={24} />
                  </div>
                  <span className="font-semibold text-white">{dolar.nombre}</span>
                </td>
                <td className="py-3 text-right font-semibold text-green-400">${dolar.compra.toFixed(2)}</td>
                <td className="py-3 text-right font-semibold text-red-400">${dolar.venta.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="mt-[40px] text-gray-400">
        Desarrollado con ❤️ por <a href="https://x.com/soyExeh">@soyExeh</a>
      </footer>
    </div>
  );
};

export default App;