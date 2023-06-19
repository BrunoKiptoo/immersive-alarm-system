


// import React, { useState } from 'react';
// import logo from '../Assets/image-removebg-preview (5).png'; // Replace 'logo.png' with the path to your logo file

// function SensorIntegration() {
//   // Dummy sensor data for demonstration
//   const [motionDetectorMode, setMotionDetectorMode] = useState('Home');
//   const [doorWindowSensorMode, setDoorWindowSensorMode] = useState('Home');
//   const [securityCameraMode, setSecurityCameraMode] = useState('Home');
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const sensors = [
//     { id: 1, name: 'Motion Detector', status: 'Active', modes: ['Home', 'Away', 'Sleep'] },
//     { id: 2, name: 'Door/Window Sensor', status: 'Inactive', modes: ['Home', 'Away', 'Sleep'] },
//     { id: 3, name: 'Security Camera', status: 'Active', modes: ['Home', 'Away'] },
//   ];

//   const handleMotionDetectorModeChange = (mode) => {
//     setMotionDetectorMode(mode);
//     setIsModalVisible(true);
//   };

//   const handleDoorWindowSensorModeChange = (mode) => {
//     setDoorWindowSensorMode(mode);
//     setIsModalVisible(true);
//   };

//   const handleSecurityCameraModeChange = (mode) => {
//     setSecurityCameraMode(mode);
//     setIsModalVisible(true);
//   };

//   const closeModal = () => {
//     setIsModalVisible(false);
//   };

//   const handleModalOverlayClick = (event) => {
//     if (event.target.classList.contains('modal-overlay')) {
//       closeModal();
//     }
//   };

//   return (
//     <div className="sensor-integration-container bg-black h-screen text-white">
//       <div className="container mx-auto h-full flex flex-col justify-center">
//         {/* <img src={logo} alt="Logo" className="logo mx-auto mb-4 mt-0" /> */}

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
//           Sensor Integration
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
//           {sensors.map((sensor) => (
//             <div
//               key={sensor.id}
//               className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl"
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                 backdropFilter: 'blur(10px)',
//               }}
//             >
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{sensor.name}</h3>
//               <p
//                 className={`text-base sm:text-lg ${
//                   sensor.status === 'Active' ? 'text-green-500' : 'text-red-500'
//                 }`}
//               >
//                 {sensor.status}
//               </p>
//               <div className="flex items-center mt-4">
//                 {sensor.modes.map((mode) => (
//                   <button
//                     key={mode}
//                     className={`px-3 py-2 mr-2 rounded-full ${
//                       sensor.name === 'Motion Detector' && motionDetectorMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : sensor.name === 'Door/Window Sensor' && doorWindowSensorMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : sensor.name === 'Security Camera' && securityCameraMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-600 text-gray-400 hover:text-white hover:bg-blue-600'
//                     }`}
//                     onClick={() => {
//                       if (sensor.name === 'Motion Detector') {
//                         handleMotionDetectorModeChange(mode);
//                       } else if (sensor.name === 'Door/Window Sensor') {
//                         handleDoorWindowSensorModeChange(mode);
//                       } else if (sensor.name === 'Security Camera') {
//                         handleSecurityCameraModeChange(mode);
//                       }
//                     }}
//                   >
//                     {mode}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isModalVisible && (
//         <div className="fixed inset-0 flex items-center justify-center z-10">
//           <div className="modal-overlay fixed"></div>
//           <div className="modal-container bg-white w-80 mx-auto rounded-lg p-6">
//             <h3 className="text-xl font-bold mb-4 text-center">
//               <span className="text-green-500">House Armed!</span>
//             </h3>
//             <p className="text-gray-700 mb-6 text-center">
//               The house is now armed in <span className="font-bold">{motionDetectorMode}</span>/
//               <span className="font-bold">{doorWindowSensorMode}</span>/
//               <span className="font-bold">{securityCameraMode}</span> mode.
//             </p>
//             <button
//               className="mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 block mx-auto"
//               onClick={closeModal}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SensorIntegration;

// import React, { useState } from 'react';
// import logo from '../Assets/image-removebg-preview (5).png'; // Replace 'logo.png' with the path to your logo file

// function SensorIntegration() {
//   // Dummy sensor data for demonstration
//   const [motionDetectorMode, setMotionDetectorMode] = useState('Home');
//   const [doorWindowSensorMode, setDoorWindowSensorMode] = useState('Home');
//   const [securityCameraMode, setSecurityCameraMode] = useState('Home');
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [notifications, setNotifications] = useState([]);

//   const sensors = [
//     { id: 1, name: 'Motion Detector', status: 'Active', modes: ['Home', 'Away', 'Sleep'] },
//     { id: 2, name: 'Door/Window Sensor', status: 'Inactive', modes: ['Home', 'Away', 'Sleep'] },
//     { id: 3, name: 'Security Camera', status: 'Active', modes: ['Home', 'Away'] },
//   ];

//   const handleMotionDetectorModeChange = (mode) => {
//     setMotionDetectorMode(mode);
//     setIsModalVisible(true);
//     addNotification(`Motion Detector mode changed to ${mode}`);
//   };

//   const handleDoorWindowSensorModeChange = (mode) => {
//     setDoorWindowSensorMode(mode);
//     setIsModalVisible(true);
//     addNotification(`Door/Window Sensor mode changed to ${mode}`);
//   };

//   const handleSecurityCameraModeChange = (mode) => {
//     setSecurityCameraMode(mode);
//     setIsModalVisible(true);
//     addNotification(`Security Camera mode changed to ${mode}`);
//   };

//   const closeModal = () => {
//     setIsModalVisible(false);
//   };

//   const handleModalOverlayClick = (event) => {
//     if (event.target.classList.contains('modal-overlay')) {
//       closeModal();
//     }
//   };

//   const addNotification = (message) => {
//     const newNotification = {
//       id: notifications.length + 1,
//       message: message,
//     };

//     setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
//   };

//   const clearNotifications = () => {
//     setNotifications([]);
//   };

//   return (
//     <div className="sensor-integration-container bg-black h-screen text-white">
//       <div className="container mx-auto h-full flex flex-col justify-center">
//         {/* <img src={logo} alt="Logo" className="logo mx-auto mb-4 mt-0" /> */}

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
//           Sensor Integration
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
//           {sensors.map((sensor) => (
//             <div
//               key={sensor.id}
//               className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl"
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                 backdropFilter: 'blur(10px)',
//               }}
//             >
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{sensor.name}</h3>
//               <p
//                 className={`text-base sm:text-lg ${
//                   sensor.status === 'Active' ? 'text-green-500' : 'text-red-500'
//                 }`}
//               >
//                 {sensor.status}
//               </p>
//               <div className="flex items-center mt-4">
//                 {sensor.modes.map((mode) => (
//                   <button
//                     key={mode}
//                     className={`px-3 py-2 mr-2 rounded-full ${
//                       sensor.name === 'Motion Detector' && motionDetectorMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : sensor.name === 'Door/Window Sensor' && doorWindowSensorMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : sensor.name === 'Security Camera' && securityCameraMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-600 text-gray-400 hover:text-white hover:bg-blue-600'
//                     }`}
//                     onClick={() => {
//                       if (sensor.name === 'Motion Detector') {
//                         handleMotionDetectorModeChange(mode);
//                       } else if (sensor.name === 'Door/Window Sensor') {
//                         handleDoorWindowSensorModeChange(mode);
//                       } else if (sensor.name === 'Security Camera') {
//                         handleSecurityCameraModeChange(mode);
//                       }
//                     }}
//                   >
//                     {mode}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isModalVisible && (
//         <div className="fixed inset-0 flex items-center justify-center z-10">
//           <div className="modal-overlay fixed"></div>
//           <div className="modal-container bg-white w-80 mx-auto rounded-lg p-6">
//             <h3 className="text-xl font-bold mb-4 text-center">
//               <span className="text-green-500">House Armed!</span>
//             </h3>
//             <p className="text-gray-700 mb-6 text-center">
//               The house is now armed in <span className="font-bold">{motionDetectorMode}</span>/
//               <span className="font-bold">{doorWindowSensorMode}</span>/
//               <span className="font-bold">{securityCameraMode}</span> mode.
//             </p>
//             <button
//               className="mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 block mx-auto"
//               onClick={closeModal}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="fixed bottom-0 right-0 p-4">
//         {notifications.length > 0 && (
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
//             <h4 className="text-lg font-bold mb-2">Notifications</h4>
//             {notifications.map((notification) => (
//               <p key={notification.id} className="text-gray-700 mb-2">
//                 {notification.message}
//               </p>
//             ))}
//             <button
//               className="px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
//               onClick={clearNotifications}
//             >
//               Clear
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SensorIntegration;



// import React, { useState, useEffect } from 'react';
// import logo from '../Assets/image-removebg-preview (5).png'; // Replace 'logo.png' with the path to your logo file

// function SensorIntegration() {
//   // Dummy sensor data for demonstration
//   const [motionDetectorMode, setMotionDetectorMode] = useState('Home');
//   const [doorWindowSensorMode, setDoorWindowSensorMode] = useState('Home');
//   const [securityCameraMode, setSecurityCameraMode] = useState('Home');
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [notifications, setNotifications] = useState([]);

//   const sensors = [
//     { id: 1, name: 'Motion Detector', status: 'Active', modes: ['Home', 'Away', 'Sleep'] },
//     { id: 2, name: 'Door/Window Sensor', status: 'Inactive', modes: ['Home', 'Away', 'Sleep'] },
//     { id: 3, name: 'Security Camera', status: 'Active', modes: ['Home', 'Away'] },
//   ];

//   useEffect(() => {
//     checkAlarmStatus();
//   }, [motionDetectorMode, doorWindowSensorMode, securityCameraMode]);

//   const handleMotionDetectorModeChange = (mode) => {
//     setMotionDetectorMode(mode);
//     setIsModalVisible(true);
//     addNotification(`Motion Detector mode changed to ${mode}`);
//   };

//   const handleDoorWindowSensorModeChange = (mode) => {
//     setDoorWindowSensorMode(mode);
//     setIsModalVisible(true);
//     addNotification(`Door/Window Sensor mode changed to ${mode}`);
//   };

//   const handleSecurityCameraModeChange = (mode) => {
//     setSecurityCameraMode(mode);
//     setIsModalVisible(true);
//     addNotification(`Security Camera mode changed to ${mode}`);
//   };

//   const closeModal = () => {
//     setIsModalVisible(false);
//   };

//   const handleModalOverlayClick = (event) => {
//     if (event.target.classList.contains('modal-overlay')) {
//       closeModal();
//     }
//   };

//   const addNotification = (message) => {
//     const newNotification = {
//       id: notifications.length + 1,
//       message: message,
//     };

//     setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
//   };

//   const clearNotifications = () => {
//     setNotifications([]);
//   };

//   const checkAlarmStatus = () => {
//     const allSensorsInactive = sensors.every((sensor) => sensor.status === 'Inactive');

//     if (allSensorsInactive) {
//       addNotification('ALERT: Alarm deactivated! Contact security immediately.');
//     }
//   };

//   return (
//     <div className="sensor-integration-container bg-black h-screen text-white">
//       <div className="container mx-auto h-full flex flex-col justify-center">
//         {/* <img src={logo} alt="Logo" className="logo mx-auto mb-4 mt-0" /> */}

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">
//           Sensor Integration
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
//           {sensors.map((sensor) => (
//             <div
//               key={sensor.id}
//               className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl"
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                 backdropFilter: 'blur(10px)',
//               }}
//             >
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{sensor.name}</h3>
//               <p
//                 className={`text-base sm:text-lg ${
//                   sensor.status === 'Active' ? 'text-green-500' : 'text-red-500'
//                 }`}
//               >
//                 {sensor.status}
//               </p>
//               <div className="flex items-center mt-4">
//                 {sensor.modes.map((mode) => (
//                   <button
//                     key={mode}
//                     className={`px-3 py-2 mr-2 rounded-full ${
//                       sensor.name === 'Motion Detector' && motionDetectorMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : sensor.name === 'Door/Window Sensor' && doorWindowSensorMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : sensor.name === 'Security Camera' && securityCameraMode === mode
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-600 text-gray-400 hover:text-white hover:bg-blue-600'
//                     }`}
//                     onClick={() => {
//                       if (sensor.name === 'Motion Detector') {
//                         handleMotionDetectorModeChange(mode);
//                       } else if (sensor.name === 'Door/Window Sensor') {
//                         handleDoorWindowSensorModeChange(mode);
//                       } else if (sensor.name === 'Security Camera') {
//                         handleSecurityCameraModeChange(mode);
//                       }
//                     }}
//                   >
//                     {mode}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isModalVisible && (
//         <div className="fixed inset-0 flex items-center justify-center z-10">
//           <div className="modal-overlay fixed"></div>
//           <div className="modal-container bg-white w-80 mx-auto rounded-lg p-6">
//             <h3 className="text-xl font-bold mb-4 text-center">
//               <span className="text-green-500">House Armed!</span>
//             </h3>
//             <p className="text-gray-700 mb-6 text-center">
//               The house is now armed in <span className="font-bold">{motionDetectorMode}</span>/
//               <span className="font-bold">{doorWindowSensorMode}</span>/
//               <span className="font-bold">{securityCameraMode}</span> mode.
//             </p>
//             <button
//               className="mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 block mx-auto"
//               onClick={closeModal}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="fixed bottom-0 right-0 p-4">
//         {notifications.length > 0 && (
//           <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
//             <h4 className="text-lg font-bold mb-2">Notifications</h4>
//             {notifications.map((notification) => (
//               <p key={notification.id} className="text-gray-700 mb-2">
//                 {notification.message}
//               </p>
//             ))}
//             <button
//               className="px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
//               onClick={clearNotifications}
//             >
//               Clear
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SensorIntegration;


import React, { useState, useEffect } from 'react';
import logo from '../Assets/image-removebg-preview (5).png'; // Replace 'logo.png' with the path to your logo file

function SensorIntegration() {
  const [motionDetectorMode, setMotionDetectorMode] = useState('Home');
  const [doorWindowSensorMode, setDoorWindowSensorMode] = useState('Home');
  const [securityCameraMode, setSecurityCameraMode] = useState('Home');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [sensors, setSensors] = useState([
    { id: 1, name: 'Motion Detector', status: 'Active', modes: ['Home', 'Away', 'Sleep'] },
    { id: 2, name: 'Door/Window Sensor', status: 'Active', modes: ['Home', 'Away', 'Sleep'] },
    { id: 3, name: 'Security Camera', status: 'Active', modes: ['Home', 'Away'] },
  ]);

  useEffect(() => {
    checkAlarmStatus();
  }, [motionDetectorMode, doorWindowSensorMode, securityCameraMode]);

  const handleMotionDetectorModeChange = (mode) => {
    setMotionDetectorMode(mode);
    setIsModalVisible(true);
    addNotification(`Motion Detector mode changed to ${mode}`);
    updateSensorStatus();
  };

  const handleDoorWindowSensorModeChange = (mode) => {
    setDoorWindowSensorMode(mode);
    setIsModalVisible(true);
    addNotification(`Door/Window Sensor mode changed to ${mode}`);
    updateSensorStatus();
  };

  const handleSecurityCameraModeChange = (mode) => {
    setSecurityCameraMode(mode);
    setIsModalVisible(true);
    addNotification(`Security Camera mode changed to ${mode}`);
    updateSensorStatus();
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleModalOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const addNotification = (message) => {
    const newNotification = {
      id: notifications.length + 1,
      message: message,
    };

    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const checkAlarmStatus = () => {
    const allSensorsInactive = sensors.every((sensor) => sensor.status === 'Inactive');

    if (allSensorsInactive) {
      addNotification('ALERT: Alarm deactivated! Contact security immediately.');
    }
  };

  const updateSensorStatus = () => {
    const updatedSensors = sensors.map((sensor) => {
      let updatedStatus = sensor.status;
  
      if (sensor.name === 'Motion Detector') {
        updatedStatus = motionDetectorMode === 'Sleep' ? 'Inactive' : 'Active';
      } else if (sensor.name === 'Door/Window Sensor') {
        updatedStatus = doorWindowSensorMode === 'Sleep' ? 'Inactive' : 'Active';
      } else if (sensor.name === 'Security Camera') {
        updatedStatus = securityCameraMode === 'Sleep' ? 'Inactive' : 'Active';
      }
  
      return {
        ...sensor,
        status: updatedStatus,
      };
    });
  
    setSensors(updatedSensors);
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
              className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 hover:shadow-xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
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
          <div className="modal-overlay fixed"></div>
          <div className="modal-container bg-white w-80 mx-auto rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              <span className="text-green-500">House Armed!</span>
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              The house is now armed in <span className="font-bold">{motionDetectorMode}</span>/
              <span className="font-bold">{doorWindowSensorMode}</span>/
              <span className="font-bold">{securityCameraMode}</span> mode.
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

      <div className="fixed bottom-0 right-0 mr-4 mb-4">
        <button
          className="px-3 py-2 rounded-full bg-red-500 text-white hover:bg-red-600"
          onClick={clearNotifications}
        >
          Clear Notifications
        </button>
      </div>

      {notifications.length > 0 && (
        <div
          className="fixed bottom-0 left-0 ml-4 mb-4 p-4 rounded bg-white text-black"
          style={{ maxHeight: '200px', maxWidth: '300px', overflowY: 'auto' }}
        >
          {notifications.map((notification) => (
            <p key={notification.id} className="mb-2">
              {notification.message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SensorIntegration;
