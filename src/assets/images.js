// Optimized image imports using vite-imagetools

// Background images
export { default as fuji } from '../Images/Fuji1.jpg?format=webp&quality=85';
export { default as bar } from '../Images/bar.jpg?format=webp&quality=85';
export { default as cherry } from '../Images/cherry.jpg?format=webp&quality=85';

// Profile & icons
export { default as passport } from '../Images/Passport_Final.png?w=200&format=webp';
export { default as queens } from '../Images/Queens.png?w=200&format=webp';
export { default as mail } from '../Images/mail.png?w=128&format=webp';

// Project images
import flowersImg from '../Images/flowers.jpg?w=200&format=webp';
import darkImg from '../Images/dark.jpg?w=200&format=webp';
import mellowImg from '../Images/mellow.jpg?w=200&format=webp';

export const imageMap = {
  flowers: flowersImg,
  dark: darkImg,
  mellow: mellowImg
};
