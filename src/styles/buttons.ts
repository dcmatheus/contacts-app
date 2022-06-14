import tw from 'tailwind-styled-components';

export const Button = tw.button`
  px-6
  py-4
  text-themeNeutral-300
  rounded-lg
  bg-primary-200
  w-full
`;

export const SubButton = tw.button`
  w-full
  mt-1
  text-right
  text-themeNeutral-600
`;

export const BackButton = tw.button`
  text-themeNeutral-600
  md:flex
  md:text-xl
  md:font-medium
`;
