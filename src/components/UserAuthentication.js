// import React, { useState } from 'react';

// function UserAuthentication() {
//   const [openSide, setOpenSide] = useState(null);
//   const [isCubeSplit, setIsCubeSplit] = useState(false);

//   const handleCubeClick = (side) => {
//     if (isCubeSplit) {
//       setOpenSide(openSide === side ? null : side); // Toggle the open side
//     } else {
//       setIsCubeSplit(true);
//       setOpenSide(side);
//     }
//   };

//   const handleCubeSplit = () => {
//     setIsCubeSplit(!isCubeSplit);
//     setOpenSide(null); // Reset the open side when splitting or unsplitting
//   };

//   const handleInputChange = (event) => {
//     // Handle input changes for each side of the cube
//     const { name, value } = event.target;
//     // You can store the values in state or perform any desired action
//     console.log(`Side: ${name}, Value: ${value}`);
//   };

//   return (
//     <div className="user-authentication-container">
//       <div className={`cube ${isCubeSplit ? 'split' : ''}`} onClick={handleCubeSplit}>
//         <div
//           className={`cube-face front ${openSide === 'front' ? 'open' : ''}`}
//           onClick={() => handleCubeClick('front')}
//         >
//           <span>Front</span>
//           {openSide === 'front' && (
//             <input type="text" name="front" onChange={handleInputChange} autoFocus />
//           )}
//         </div>
//         <div
//           className={`cube-face back ${openSide === 'back' ? 'open' : ''}`}
//           onClick={() => handleCubeClick('back')}
//         >
//           <span>Back</span>
//           {openSide === 'back' && (
//             <input type="text" name="back" onChange={handleInputChange} autoFocus />
//           )}
//         </div>
//         <div
//           className={`cube-face left ${openSide === 'left' ? 'open' : ''}`}
//           onClick={() => handleCubeClick('left')}
//         >
//           <span>Left</span>
//           {openSide === 'left' && (
//             <input type="text" name="left" onChange={handleInputChange} autoFocus />
//           )}
//         </div>
//         <div
//           className={`cube-face right ${openSide === 'right' ? 'open' : ''}`}
//           onClick={() => handleCubeClick('right')}
//         >
//           <span>Right</span>
//           {openSide === 'right' && (
//             <input type="text" name="right" onChange={handleInputChange} autoFocus />
//           )}
//         </div>
//         <div
//           className={`cube-face top ${openSide === 'top' ? 'open' : ''}`}
//           onClick={() => handleCubeClick('top')}
//         >
//           <span>Top</span>
//           {openSide === 'top' && (
//             <input type="text" name="top" onChange={handleInputChange} autoFocus />
//           )}
//         </div>
//         <div
//           className={`cube-face bottom ${openSide === 'bottom' ? 'open' : ''}`}
//           onClick={() => handleCubeClick('bottom')}
//         >
//           <span>Bottom</span>
//           {openSide === 'bottom' && (
//             <input type="text" name="bottom" onChange={handleInputChange} autoFocus />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserAuthentication;


import React, { useState } from 'react';

function UserAuthentication() {
  const [openSide, setOpenSide] = useState(null);
  const [isCubeSplit, setIsCubeSplit] = useState(false);

  const handleCubeClick = (side) => {
    if (isCubeSplit) {
      setOpenSide(openSide === side ? null : side); // Toggle the open side
    } else {
      setIsCubeSplit(true);
      setOpenSide(side);
    }
  };

  const handleCubeSplit = () => {
    setIsCubeSplit(!isCubeSplit);
    setOpenSide(null); // Reset the open side when splitting or unsplitting
  };

  const handleInputChange = (event) => {
    // Handle input changes for each side of the cube
    const { name, value } = event.target;
    // You can store the values in state or perform any desired action
    console.log(`Side: ${name}, Value: ${value}`);
  };

  return (
    <div className="user-authentication-container">
      <div className={`cube ${isCubeSplit ? 'split' : ''}`} onClick={handleCubeSplit}>
        <div
          className={`cube-face front ${openSide === 'front' ? 'open' : ''}`}
          onClick={() => handleCubeClick('front')}
        >
          <span>Front</span>
          {openSide === 'front' && (
            <input type="text" name="front" onChange={handleInputChange} autoFocus />
          )}
        </div>
        <div
          className={`cube-face back ${openSide === 'back' ? 'open' : ''}`}
          onClick={() => handleCubeClick('back')}
        >
          <span>Back</span>
          {openSide === 'back' && (
            <input type="text" name="back" onChange={handleInputChange} autoFocus />
          )}
        </div>
        <div
          className={`cube-face left ${openSide === 'left' ? 'open' : ''}`}
          onClick={() => handleCubeClick('left')}
        >
          <span>Left</span>
          {openSide === 'left' && (
            <input type="text" name="left" onChange={handleInputChange} autoFocus />
          )}
        </div>
        <div
          className={`cube-face right ${openSide === 'right' ? 'open' : ''}`}
          onClick={() => handleCubeClick('right')}
        >
          <span>Right</span>
          {openSide === 'right' && (
            <input type="text" name="right" onChange={handleInputChange} autoFocus />
          )}
        </div>
        <div
          className={`cube-face top ${openSide === 'top' ? 'open' : ''}`}
          onClick={() => handleCubeClick('top')}
        >
          <span>Top</span>
          {openSide === 'top' && (
            <input type="text" name="top" onChange={handleInputChange} autoFocus />
          )}
        </div>
        <div
          className={`cube-face bottom ${openSide === 'bottom' ? 'open' : ''}`}
          onClick={() => handleCubeClick('bottom')}
        >
          <span>Bottom</span>
          {openSide === 'bottom' && (
                        <input type="text" name="bottom" onChange={handleInputChange} autoFocus />
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              
              export default UserAuthentication;
              
              // 

