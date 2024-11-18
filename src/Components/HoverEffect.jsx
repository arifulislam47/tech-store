// import React, { useState } from "react";

// const HoverEffect = () => {
//   const [overlayPosition, setOverlayPosition] = useState("");
//   const [overlayAnchor, setOverlayAnchor] = useState("");
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const distances = {
//       top: mouseY,
//       right: rect.width - mouseX,
//       bottom: rect.height - mouseY,
//       left: mouseX,
//     };

//     const minSide = Object.keys(distances).reduce((a, b) =>
//       distances[a] < distances[b] ? a : b
//     );

//     setOverlayPosition(minSide + "-0");
//     setIsHovered(true);
//   };

//   const handleMouseLeave = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const distances = {
//       top: mouseY,
//       right: rect.width - mouseX,
//       bottom: rect.height - mouseY,
//       left: mouseX,
//     };

//     const minSide = Object.keys(distances).reduce((a, b) =>
//       distances[a] < distances[b] ? a : b
//     );

//     setOverlayAnchor(minSide + "-0");
//     setIsHovered(false);
//   };

//   return (
//     <div>
//       <div
//         className="relative w-[300px] h-[250px] overflow-hidden bg-gray-200"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div
//           className={`absolute ${overlayAnchor} bg-[#2bc213] transition-all duration-500 ${
//             isHovered
//               ? "w-full h-full"
//               : overlayAnchor.includes("top") ||
//                 overlayAnchor.includes("bottom")
//               ? "h-0 w-full"
//               : "w-0 h-full"
//           }`}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default HoverEffect;

import React from "react";

const HoverEffect = () => {
  
  return (
    <div className="">
      <svg
        className="w-[1000px] sm:w-[300px] svg"
        viewBox="0 0 184 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className=" path"
          d="M11.54 15H8.18V2.88H0.7V0.38H19.04V2.88H11.54V15ZM24.6256 2.88V5.64H35.3656V7.76H24.6256V12.5H38.2056V15H21.2856V0.38H38.2056V2.88H24.6256ZM43.8416 4.3V11.08C43.8416 12.04 44.3616 12.5 45.3816 12.5H57.2016V15H44.0616C41.7016 15 40.5016 13.94 40.5016 11.84V3.54C40.5016 1.44 41.7016 0.38 44.0616 0.38H57.2016V2.88H45.3816C44.3616 2.88 43.8416 3.36 43.8416 4.3ZM75.0413 7.76H63.1413V15H59.8013V0.38H63.1413V5.64H75.0413V0.38H78.4013V15H75.0413V7.76ZM92.7913 5.64H101.151C103.831 5.64 105.171 6.82 105.171 9.2V11.44C105.171 13.82 103.831 15 101.151 15H88.2313V12.5H100.091C101.271 12.5 101.871 11.96 101.871 10.9V9.38C101.871 8.3 101.271 7.76 100.091 7.76H91.7313C89.3713 7.76 88.1913 6.78 88.1913 4.82V3.32C88.1913 1.36 89.3713 0.38 91.7313 0.38H104.631V2.88H92.7913C91.9313 2.88 91.4713 3.2 91.4713 3.84V4.64C91.4713 5.3 91.9313 5.64 92.7913 5.64ZM116.97 15H113.61V2.88H106.13V0.38H124.47V2.88H116.97V15ZM138.555 2.88H130.815C129.675 2.88 129.115 3.4 129.115 4.48V10.9C129.115 11.96 129.675 12.5 130.815 12.5H138.555C139.695 12.5 140.255 11.98 140.255 10.9V4.48C140.255 3.4 139.695 2.88 138.555 2.88ZM139.655 15H129.715C127.075 15 125.775 13.82 125.775 11.44V3.94C125.775 1.56 127.075 0.38 129.715 0.38H139.655C142.295 0.38 143.595 1.56 143.595 3.94V11.44C143.595 13.82 142.295 15 139.655 15ZM146.54 15V0.38H160.34C162.98 0.38 164.28 1.56 164.28 3.94V5.9C164.28 8.18 163.08 9.36 160.68 9.46L165 14.86V15H161.3L156.92 9.46H149.88V15H146.54ZM160.98 5.7V4.44C160.98 3.36 160.42 2.82 159.28 2.82H149.88V7.32H159.28C160.42 7.32 160.98 6.78 160.98 5.7ZM170.309 2.88V5.64H181.049V7.76H170.309V12.5H183.889V15H166.969V0.38H183.889V2.88H170.309Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default HoverEffect;
