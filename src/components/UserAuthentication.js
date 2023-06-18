



// import React, { useState, useEffect } from 'react';

// function UserAuthentication() {
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [codes, setCodes] = useState(['', '', '', '']);
//   const [accessMessage, setAccessMessage] = useState('');

//   useEffect(() => {
//     if (accessMessage) {
//       setTimeout(() => {
//         setRotationAngle(0);
//         setShowLoginForm(false);
//         setAccessMessage('');
//       }, 2000);
//     }
//   }, [accessMessage]);

//   const handleCubeClick = () => {
//     if (!showLoginForm) {
//       setRotationAngle(180);
//       setShowLoginForm(true);
//     }
//   };

//   const handleCodeChange = (e, index) => {
//     const updatedCodes = [...codes];
//     updatedCodes[index] = e.target.value;
//     setCodes(updatedCodes);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // Check the entered code for authentication
//     const enteredCode = codes.join('');
//     if (enteredCode === '1234') {
//       setAccessMessage('Access granted!');
//       setRotationAngle(180); // Rotate the cube to show "Access granted" message
//     } else {
//       setAccessMessage('Access denied!');
//       setRotationAngle(0); // Rotate the cube to show "Access denied" message
//     }
//     // Reset codes
//     setCodes(['', '', '', '']);
//   };

//   return (
//     <div className="cube" onClick={handleCubeClick}>
//       <div className={`side front ${showLoginForm ? 'hidden' : ''}`}>
//         <button>ENTER SECURITY KEY</button>
//       </div>
//       <div className={`side back ${showLoginForm ? '' : 'hidden'}`}>
//         <form onSubmit={handleLoginSubmit}>
//           <div className="code-container">
//             {codes.map((code, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 value={code}
//                 onChange={(e) => handleCodeChange(e, index)}
//                 maxLength={1}
//                 required
//               />
//             ))}
//           </div>
//           <button type="submit">ACCESS</button>
//         </form>
//       </div>
//       <div className={`side left ${accessMessage ? 'access-message-side' : ''}`}>Left</div>
//       <div className={`side right ${accessMessage ? 'access-message-side' : ''}`}>Right</div>
//       <div className={`side top ${accessMessage ? 'access-message-side' : ''}`}>Top</div>
//       <div className={`side bottom ${accessMessage ? 'access-message-side' : ''}`}>Bottom</div>
//       {accessMessage && (
//         <div className="access-message">{accessMessage}</div>
//       )}

//       <style jsx>{`
//         .cube {
//           position: relative;
//           width: 200px;
//           height: 200px;
//           transform-style: preserve-3d;
//           transform: rotateY(${rotationAngle}deg);
//           transition: transform 0.5s ease;
//           cursor: pointer;
//         }

//         .side {
//           position: absolute;
//           width: 200px;
//           height: 200px;
//           background-color: rgba(0, 0, 0, 0.2);
//           border: 1px solid black;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           font-size: 20px;
//         }

//         .front {
//           transform: translateZ(100px);
//         }

//         .back {
//           transform: rotateY(180deg) translateZ(100px);
//         }

//         .left {
//           transform: rotateY(-90deg) translateZ(100px);
//         }

//         .right {
//           transform: rotateY(90deg) translateZ(100px);
//         }

//         .top {
//           transform: rotateX(90deg) translateZ(100px);
//         }

//         .bottom {
//           transform: rotateX(-90deg) translateZ(100px);
//         }

//         .hidden {
//           display: none;
//         }

//         .code-container {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 5px;
//           margin-bottom: 10px;
//         }

//         .code-container input {
//           width: 40px;
//           height: 40px;
//           text-align: center;
//           font-size: 16px;
//         }

//         .access-message-side {
//           background-color: white;
//           padding: 10px;
//           font-size: 20px;
//           font-weight: bold;
//         }

//         .access-message {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default UserAuthentication;




// import React, { useState, useEffect, useRef } from 'react';

// function UserAuthentication() {
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [codes, setCodes] = useState(['', '', '', '']);
//   const [accessMessage, setAccessMessage] = useState('');
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     if (accessMessage) {
//       setTimeout(() => {
//         setRotationAngle(0);
//         setShowLoginForm(false);
//         setAccessMessage('');
//       }, 2000);
//     }
//   }, [accessMessage]);

//   const handleCubeClick = () => {
//     if (!showLoginForm) {
//       setRotationAngle(180);
//       setShowLoginForm(true);
//       inputRefs.current[0].focus();
//     }
//   };

//   const handleCodeChange = (e, index) => {
//     const updatedCodes = [...codes];
//     updatedCodes[index] = e.target.value;
//     setCodes(updatedCodes);

//     const nextIndex = index + 1;
//     if (nextIndex < codes.length && e.target.value) {
//       inputRefs.current[nextIndex].focus();
//     }
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const enteredCode = codes.join('');
//     if (enteredCode === '1234') {
//       setAccessMessage('Access granted!');
//       setRotationAngle(180);
//     } else {
//       setAccessMessage('Access denied!');
//       setRotationAngle(0);
//     }
//     setCodes(['', '', '', '']);
//     inputRefs.current[0].focus();
//   };

//   return (
//     <div className="cube" onClick={handleCubeClick}>
//       <div className={`side front ${showLoginForm ? 'hidden' : ''}`}>
//         <button>ENTER SECURITY KEY</button>
//       </div>
//       <div className={`side back ${showLoginForm ? '' : 'hidden'}`}>
//         <form onSubmit={handleLoginSubmit}>
//           <div className="code-container">
//             {codes.map((code, index) => (
//               <input
//                 ref={(ref) => (inputRefs.current[index] = ref)}
//                 key={index}
//                 type="text"
//                 value={code}
//                 onChange={(e) => handleCodeChange(e, index)}
//                 maxLength={1}
//                 required
//               />
//             ))}
//           </div>
//           <button type="submit">ACCESS</button>
//         </form>
//       </div>
//       <div className={`side left ${accessMessage ? 'access-message-side' : ''}`}>
//         Left
//       </div>
//       <div className={`side right ${accessMessage ? 'access-message-side' : ''}`}>
//         Right
//       </div>
//       <div className={`side top ${accessMessage ? 'access-message-side' : ''}`}>
//         Top
//       </div>
//       <div
//         className={`side bottom ${accessMessage ? 'access-message-side' : ''}`}
//       >
//         Bottom
//       </div>
//       {accessMessage && <div className="access-message">{accessMessage}</div>}

//          <style jsx>{`
//         .cube {
//           position: relative;
//           width: 200px;
//           height: 200px;
//           transform-style: preserve-3d;
//           transform: rotateY(${rotationAngle}deg);
//           transition: transform 0.5s ease;
//           cursor: pointer;
//         }

//         .side {
//           position: absolute;
//           width: 200px;
//           height: 200px;
//           background-color: rgba(0, 0, 0, 0.2);
//           border: 1px solid black;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           font-size: 20px;
//           backface-visibility: hidden; /* Hide the back face of the cube */
//         }

//         .front {
//           transform: translateZ(100px);
//         }

//         .back {
//           transform: rotateY(180deg) translateZ(100px);
//         }

//         .left {
//           transform: rotateY(-90deg) translateZ(100px);
//         }

//         .right {
//           transform: rotateY(90deg) translateZ(100px);
//         }

//         .top {
//           transform: rotateX(90deg) translateZ(100px);
//         }

//         .bottom {
//           transform: rotateX(-90deg) translateZ(100px);
//         }

//         .hidden {
//           display: none;
//         }

//         .code-container {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 5px;
//           margin-bottom: 10px;
//         }

//         .code-container input {
//           width: 40px;
//           height: 40px;
//           text-align: center;
//           font-size: 16px;
//         }

//         .access-message-side {
//           background-color: white;
//           padding: 10px;
//           font-size: 20px;
//           font-weight: bold;
//         }

//         .access-message {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }
//     `}</style>
//     </div>
//   );
// }

// export default UserAuthentication;



import React, { useState, useEffect, useRef } from 'react';

function UserAuthentication() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [codes, setCodes] = useState(['', '', '', '']);
  const [accessMessage, setAccessMessage] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    if (accessMessage) {
      setTimeout(() => {
        setRotationAngle(0);
        setShowLoginForm(false);
        setAccessMessage('');
      }, 2000);
    }
  }, [accessMessage]);

  const handleCubeClick = () => {
    if (!showLoginForm) {
      setRotationAngle(180);
      setShowLoginForm(true);
      inputRefs.current[0].focus();
    }
  };

  const handleCodeChange = (e, index) => {
    const updatedCodes = [...codes];
    updatedCodes[index] = e.target.value;
    setCodes(updatedCodes);

    const nextIndex = index + 1;
    if (nextIndex < codes.length && e.target.value) {
      inputRefs.current[nextIndex].focus();
    }

    const enteredCode = updatedCodes.join('');
    if (enteredCode.length === 4) {
      if (enteredCode === '1234') {
        setAccessMessage('Access granted!');
        setRotationAngle(180);
      } else {
        setAccessMessage('Access denied!');
        setRotationAngle(0);
      }
      setCodes(['', '', '', '']);
      inputRefs.current[0].focus();
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const enteredCode = codes.join('');
    if (enteredCode === '1234') {
      setAccessMessage('Access granted!');
      setRotationAngle(180);
    } else {
      setAccessMessage('Access denied!');
      setRotationAngle(0);
    }
    setCodes(['', '', '', '']);
    inputRefs.current[0].focus();
  };

  return (
    <div className="cube" onClick={handleCubeClick}>
      <div className={`side front ${showLoginForm ? 'hidden' : ''}`}>
        <button>ENTER SECURITY KEY</button>
      </div>
      <div className={`side back ${showLoginForm ? '' : 'hidden'}`}>
        <form onSubmit={handleLoginSubmit}>
          <div className="code-container">
            {codes.map((code, index) => (
              <input
                ref={(ref) => (inputRefs.current[index] = ref)}
                key={index}
                type="text"
                value={code}
                onChange={(e) => handleCodeChange(e, index)}
                maxLength={1}
                required
              />
            ))}
          </div>
          <button type="submit" className="hidden">ACCESS</button>
        </form>
      </div>
      <div className={`side left ${accessMessage ? 'access-message-side' : ''}`}>
        Left
      </div>
      <div className={`side right ${accessMessage ? 'access-message-side' : ''}`}>
        Right
      </div>
      <div className={`side top ${accessMessage ? 'access-message-side' : ''}`}>
        Top
      </div>
      <div
        className={`side bottom ${accessMessage ? 'access-message-side' : ''}`}
      >
        Bottom
      </div>
      {accessMessage && <div className="access-message">{accessMessage}</div>}

      <style jsx>{`
        .cube {
          position: relative;
          width: 200px;
          height: 200px;
          transform-style: preserve-3d;
          transform: rotateY(${rotationAngle}deg);
          transition: transform 0.5s ease;
          cursor: pointer;
        }

        .side {
          position: absolute;
          width: 200px;
          height: 200px;
          background-color: rgba(0, 0, 0, 0.2);
          border: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          backface-visibility: hidden; /* Hide the back face of the cube */
        }

        .front {
          transform: translateZ(100px);
        }

        .back {
          transform: rotateY(180deg) translateZ(100px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(100px);
        }

        .right {
          transform: rotateY(90deg) translateZ(100px);
        }

        .top {
          transform: rotateX(90deg) translateZ(100px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(100px);
        }

        .hidden {
          display: none;
        }

        .code-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5px;
          margin-bottom: 10px;
        }

        .code-container input {
          width: 40px;
          height: 40px;
          text-align: center;
          font-size: 16px;
        }

        .access-message-side {
          background-color: white;
          padding: 10px;
          font-size: 20px;
          font-weight: bold;
        }

        .access-message {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
    `}</style>
    </div>
  );
}

export default UserAuthentication;
