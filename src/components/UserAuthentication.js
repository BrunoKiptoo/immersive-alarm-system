

// import React, { useState } from 'react';

// function UserAuthentication() {
//   const [openSide, setOpenSide] = useState(null);
//   const [isCubeSplit, setIsCubeSplit] = useState(false);
//   const [isCubeRotating, setIsCubeRotating] = useState(true);

//   const handleCubeClick = (side, isSplit) => {
//     if (isSplit) {
//       setOpenSide(openSide === side ? null : side); // Toggle the open side
//     } else {
//       setIsCubeSplit(true);
//       setOpenSide(side);
//       setIsCubeRotating(false);
//     }
//   };

//   const handleCubeSplit = () => {
//     setIsCubeSplit(!isCubeSplit);
//     setOpenSide(null); // Reset the open side when splitting or unsplitting
//     setIsCubeRotating(!isCubeSplit); // Toggle the rotating state
//   };

//   const handleInputChange = (event) => {
//     // Handle input changes for each side of the cube
//     const { name, value } = event.target;
//     // You can store the values in state or perform any desired action
//     console.log(`Side: ${name}, Value: ${value}`);
//   };

//   return (
//     <div className="user-authentication-container">
//       <div
//         className={`cube ${isCubeSplit ? 'split' : ''} ${isCubeRotating ? 'rotating' : ''}`}
//         onClick={() => handleCubeSplit()}
//       >
//         {isCubeSplit ? (
//           <>
//             <div className="cube-container">
//               <div className={`cube-face front ${openSide === 'front' ? 'open' : ''}`}>
//                 <span>Front</span>
//                 {openSide === 'front' && (
//                   <input type="text" name="front" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face back ${openSide === 'back' ? 'open' : ''}`}>
//                 <span>Back</span>
//                 {openSide === 'back' && (
//                   <input type="text" name="back" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face left ${openSide === 'left' ? 'open' : ''}`}>
//                 <span>Left</span>
//                 {openSide === 'left' && (
//                   <input type="text" name="left" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face right ${openSide === 'right' ? 'open' : ''}`}>
//                 <span>Right</span>
//                 {openSide === 'right' && (
//                   <input type="text" name="right" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face top ${openSide === 'top' ? 'open' : ''}`}>
//                 <span>Top</span>
//                 {openSide === 'top' && (
//                   <input type="text" name="top" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face bottom ${openSide === 'bottom' ? 'open' : ''}`}>
//                 <span>Bottom</span>
//                 {openSide === 'bottom' && (
//                   <input type="text" name="bottom" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="cube-face" onClick={() => handleCubeClick('front', true)}>
//               <span>
//               Front</span>
// </div>
// <div className="cube-face" onClick={() => handleCubeClick('back', true)}>
// <span>Back</span>
// </div>
// <div className="cube-face" onClick={() => handleCubeClick('left', true)}>
// <span>Left</span>
// </div>
// <div className="cube-face" onClick={() => handleCubeClick('right', true)}>
// <span>Right</span>
// </div>
// <div className="cube-face" onClick={() => handleCubeClick('top', true)}>
// <span>Top</span>
// </div>
// <div className="cube-face" onClick={() => handleCubeClick('bottom', true)}>
// <span>Bottom</span>
// </div>
// </>
// )}
// </div>
// </div>
// );
// }

// export default UserAuthentication;



// import React, { useState } from 'react';

// function UserAuthentication() {
//   const [openSide, setOpenSide] = useState(null);
//   const [isCubeSplit, setIsCubeSplit] = useState(false);
//   const [isCubeRotating, setIsCubeRotating] = useState(true);

//   const handleCubeClick = (side, isSplit) => {
//     if (isSplit) {
//       setOpenSide(openSide === side ? null : side); // Toggle the open side
//     } else {
//       setIsCubeSplit(true);
//       setOpenSide(side);
//       setIsCubeRotating(false);
//     }
//   };

//   const handleCubeSplit = () => {
//     setIsCubeSplit(!isCubeSplit);
//     setOpenSide(null); // Reset the open side when splitting or unsplitting
//     setIsCubeRotating(!isCubeRotating); // Toggle the rotating state
//   };

//   const handleInputChange = (event) => {
//     // Handle input changes for each side of the cube
//     const { name, value } = event.target;
//     // You can store the values in state or perform any desired action
//     console.log(`Side: ${name}, Value: ${value}`);
//   };

//   return (
//     <div className="user-authentication-container">
//       <div
//         className={`cube ${isCubeSplit ? 'split' : ''} ${isCubeRotating ? 'rotating' : ''}`}
//         onClick={() => handleCubeSplit()}
//       >
//         {isCubeSplit ? (
//           <>
//             <div className="cube-container">
//               <div className={`cube-face front ${openSide === 'front' ? 'open' : ''}`}>
//                 <span>Front</span>
//                 {openSide === 'front' && (
//                   <input type="text" name="front" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face back ${openSide === 'back' ? 'open' : ''}`}>
//                 <span>Back</span>
//                 {openSide === 'back' && (
//                   <input type="text" name="back" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face left ${openSide === 'left' ? 'open' : ''}`}>
//                 <span>Left</span>
//                 {openSide === 'left' && (
//                   <input type="text" name="left" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face right ${openSide === 'right' ? 'open' : ''}`}>
//                 <span>Right</span>
//                 {openSide === 'right' && (
//                   <input type="text" name="right" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face top ${openSide === 'top' ? 'open' : ''}`}>
//                 <span>Top</span>
//                 {openSide === 'top' && (
//                   <input type="text" name="top" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//               <div className={`cube-face bottom ${openSide === 'bottom' ? 'open' : ''}`}>
//                 <span>Bottom</span>
//                 {openSide === 'bottom' && (
//                   <input type="text" name="bottom" onChange={handleInputChange} autoFocus />
//                 )}
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="cube-face front" onClick={() => handleCubeClick('front', true)}>
//               <span>Front</span>
//             </div>
//             <div className="cube-face back" onClick={() => handleCubeClick('back', true)}>
// <span>Back</span>
// </div>
// <div className="cube-face left" onClick={() => handleCubeClick('left', true)}>
// <span>Left</span>
// </div>
// <div className="cube-face right" onClick={() => handleCubeClick('right', true)}>
// <span>Right</span>
// </div>
// <div className="cube-face top" onClick={() => handleCubeClick('top', true)}>
// <span>Top</span>
// </div>
// <div className="cube-face bottom" onClick={() => handleCubeClick('bottom', true)}>
// <span>Bottom</span>
// </div>
// </>
// )}
// </div>
// </div>
// );
// }

// export default UserAuthentication;


import React, { useState } from 'react';

function UserAuthentication() {
  const [openSide, setOpenSide] = useState(null);
  const [isCubeSplit, setIsCubeSplit] = useState(false);
  const [isCubeRotating, setIsCubeRotating] = useState(true);

  const handleCubeClick = (side, isSplit) => {
    if (isSplit) {
      setOpenSide(openSide === side ? null : side); // Toggle the open side
    } else {
      setIsCubeSplit(true);
      setOpenSide(side);
      setIsCubeRotating(false);
    }
  };

  const handleCubeSplit = () => {
    setIsCubeSplit(!isCubeSplit);
    setOpenSide(null); // Reset the open side when splitting or unsplitting
    setIsCubeRotating(!isCubeRotating); // Toggle the rotating state
  };

  const handleInputChange = (event) => {
    // Handle input changes for each side of the cube
    const { name, value } = event.target;
    // You can store the values in state or perform any desired action
    console.log(`Side: ${name}, Value: ${value}`);
  };

  return (
    <div className="user-authentication-container">
      <div
        className={`cube ${isCubeSplit ? 'split' : ''} ${isCubeRotating ? 'rotating' : ''}`}
        onClick={() => handleCubeSplit()}
      >
        {isCubeSplit ? (
          <div className="cube-container">
            <div className={`cube-face front ${openSide === 'front' ? 'open' : ''}`}>
              <span>Front</span>
              {openSide === 'front' && (
                <input type="text" name="front" onChange={handleInputChange} autoFocus />
              )}
            </div>
            <div className={`cube-face back ${openSide === 'back' ? 'open' : ''}`}>
              <span>Back</span>
              {openSide === 'back' && (
                <input type="text" name="back" onChange={handleInputChange} autoFocus />
              )}
            </div>
            <div className={`cube-face left ${openSide === 'left' ? 'open' : ''}`}>
              <span>Left</span>
              {openSide === 'left' && (
                <input type="text" name="left" onChange={handleInputChange} autoFocus />
              )}
            </div>
            <div className={`cube-face right ${openSide === 'right' ? 'open' : ''}`}>
              <span>Right</span>
              {openSide === 'right' && (
                <input type="text" name="right" onChange={handleInputChange} autoFocus />
              )}
            </div>
            <div className={`cube-face top ${openSide === 'top' ? 'open' : ''}`}>
              <span>Top</span>
              {openSide === 'top' && (
                <input type="text" name="top" onChange={handleInputChange} autoFocus />
              )}
            </div>
            <div className={`cube-face bottom ${openSide === 'bottom' ? 'open' : ''}`}>
              <span>Bottom</span>
              {openSide === 'bottom' && (
                <input type="text" name="bottom" onChange={handleInputChange} autoFocus />
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="cube-face front" onClick={() => handleCubeClick('front', true)}>
<span>Front</span>
</div>
<div className="cube-face back" onClick={() => handleCubeClick('back', true)}>
<span>Back</span>
</div>
<div className="cube-face left" onClick={() => handleCubeClick('left', true)}>
<span>Left</span>
</div>
<div className="cube-face right" onClick={() => handleCubeClick('right', true)}>
<span>Right</span>
</div>
<div className="cube-face top" onClick={() => handleCubeClick('top', true)}>
<span>Top</span>
</div>
<div className="cube-face bottom" onClick={() => handleCubeClick('bottom', true)}>
<span>Bottom</span>
</div>
</>
)}
</div>
</div>
);
}

export default UserAuthentication;
