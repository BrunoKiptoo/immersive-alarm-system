import React from 'react';
// import logo from '../Assets/image-removebg-preview (5).png';

function SensorIntegration() {
  // Dummy sensor data for demonstration
  const sensors = [
    { id: 1, name: 'Motion Detector', status: 'Active' },
    { id: 2, name: 'Door/Window Sensor', status: 'Inactive' },
    { id: 3, name: 'Security Camera', status: 'Active' },
  ];

  return (
    <div className="sensor-integration-container bg-black h-screen">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* <img src={logo} alt="Logo" className="mx-auto mb-4 mt-0" /> */}

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Sensor Integration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {sensors.map((sensor) => (
            <div
              key={sensor.id}
              className="p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg text-white flex flex-col items-center"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
                {sensor.name}
              </h3>
              <p className={`text-base sm:text-lg ${sensor.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                {sensor.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SensorIntegration;
