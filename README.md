Technologies Used in CarbonCrunch 🚀
React ⚛️
React is a JavaScript library for building user interfaces. It helps in creating fast, interactive, and scalable web applications using a component-based architecture.

Why React?
✔ Reusable Components – Build once, use anywhere!
✔ Virtual DOM – Faster rendering and updates.
✔ State Management – Handles UI changes efficiently.
✔ Huge Ecosystem – Tons of libraries and community support.

Tailwind CSS 🎨
Tailwind CSS is a utility-first CSS framework that helps in quickly designing modern and responsive UIs without writing traditional CSS.

Why Tailwind CSS?
✔ Faster Styling – Use predefined classes instead of writing CSS from scratch.
✔ Customizable – Extend styles with a config file.
✔ Responsive by Default – Easily create mobile-friendly designs.
✔ No Unused CSS – Only includes the styles you actually use.

Example:
Instead of writing separate CSS, use Tailwind classes like this:

<button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
  Click Me
</button>
Framer Motion 🏃‍♂️ (for Animations)
Framer Motion is a powerful React library for animations and gestures. It makes adding smooth UI animations easy.

Why Framer Motion?
✔ Declarative Animations – Define animations directly in JSX.
✔ Smooth Transitions – Create fade-ins, bounces, and slides with ease.
✔ Performance Optimized – Uses the browser’s requestAnimationFrame for smooth motion.
✔ Gestures & Scroll Animations – Supports drag, hover, and scroll-based effects.

Example:
A button that animates when hovered:

import { motion } from "framer-motion";

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="bg-blue-500 text-white px-4 py-2 rounded-md"
>
  Hover Me
</motion.button>;

How These Work Together in CarbonCrunch?
🔹 React powers the web app’s structure and functionality.
🔹 Tailwind CSS makes styling easy and responsive.
🔹 Framer Motion adds smooth animations for an engaging UI.
