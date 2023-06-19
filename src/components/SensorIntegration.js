import React, { useState } from 'react';
import logo from '../Assets/image-removebg-preview (5).png'; // Replace 'logo.png' with the path to your logo file

function SensorIntegration() {
  // Dummy sensor data for demonstration
  const [motionDetectorMode, setMotionDetectorMode] = useState('Home');
  const [doorWindowSensorMode, setDoorWindowSensorMode] = useState('Home');
  const [securityCameraMode, setSecurityCameraMode] = useState('Home');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sensors = [
    { id: 1, name: 'Motion Detector', status: 'Active', modes: ['Home', 'Away', 'Sleep'] },
    { id: 2, name: 'Door/Window Sensor', status: 'Inactive', modes: ['Home', 'Away', 'Sleep'] },
    { id: 3, name: 'Security Camera', status: 'Active', modes: ['Home', 'Away'] },
  ];

  const handleMotionDetectorModeChange = (mode) => {
    setMotionDetectorMode(mode);
    setIsModalVisible(true);
  };

  const handleDoorWindowSensorModeChange = (mode) => {
    setDoorWindowSensorMode(mode);
    setIsModalVisible(true);
  };

  const handleSecurityCameraModeChange = (mode) => {
    setSecurityCameraMode(mode);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleModalOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="sensor-integration-container bg-black h-screen text-white">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* <img src={logo} alt="Logo" className="logo mx-auto mb-4 mt-0" /> */}

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
          Sensor Integration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {sensors.map((sensor) => (
            <div
              key={sensor.id}
              className="p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{sensor.name}</h3>
              <p
                className={`text-base sm:text-lg ${
                  sensor.status === 'Active' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {sensor.status}
              </p>
              <div className="flex items-center mt-4">
                {sensor.modes.map((mode) => (
                  <button
                    key={mode}
                    className={`px-3 py-2 mr-2 rounded-full ${
                      sensor.name === 'Motion Detector' && motionDetectorMode === mode
                        ? 'bg-blue-600 text-white'
                        : sensor.name === 'Door/Window Sensor' && doorWindowSensorMode === mode
                        ? 'bg-blue-600 text-white'
                        : sensor.name === 'Security Camera' && securityCameraMode === mode
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-600 text-gray-400 hover:text-white hover:bg-blue-600'
                    }`}
                    onClick={() => {
                      if (sensor.name === 'Motion Detector') {
                        handleMotionDetectorModeChange(mode);
                      } else if (sensor.name === 'Door/Window Sensor') {
                        handleDoorWindowSensorModeChange(mode);
                      } else if (sensor.name === 'Security Camera') {
                        handleSecurityCameraModeChange(mode);
                      }
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-10">
    <div className="modal-overlay fixed   "></div>
    <div className="modal-container bg-white w-80 mx-auto rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-center">House Armed!</h3>
      <p className="text-gray-700 mb-6 text-center">
        The house is now armed in {motionDetectorMode}/{doorWindowSensorMode}/{securityCameraMode} mode.
      </p>
      <button
        className="mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 block mx-auto"
        onClick={closeModal}
      >
        OK
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default SensorIntegration;
