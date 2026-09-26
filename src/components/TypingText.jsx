// import { useState, useEffect } from "react";

// const roles = [
//   "Frontend Developer",
//   "React Developer",
//   "Problem Solver",
//   "UI Enthusiast",
// ];

// function TypingText() {
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentRole = roles[roleIndex];
//     const typingSpeed = isDeleting ? 50 : 100;

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         // typing forward: add one more letter
//         setDisplayText(currentRole.slice(0, displayText.length + 1));

//         if (displayText.length + 1 === currentRole.length) {
//           // full word typed — pause, then start deleting
//           setTimeout(() => setIsDeleting(true), 1200);
//         }
//       } else {
//         // deleting: remove one letter
//         setDisplayText(currentRole.slice(0, displayText.length - 1));

//         if (displayText.length - 1 === 0) {
//           // fully deleted — move to next role, start typing again
//           setIsDeleting(false);
//           setRoleIndex((prev) => (prev + 1) % roles.length);
//         }
//       }
//     }, typingSpeed);

//     // cleanup: cancel the pending timeout if this effect re-runs first
//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, roleIndex]);

//   return (
//     <span className="text-primary">
//       {displayText}
//       <span className="animate-pulse">|</span>
//     </span>
//   );
// }

// export default TypingText;
