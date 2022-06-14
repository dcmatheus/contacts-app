import tw from 'tailwind-styled-components';

export const Form = tw.form`
  flex
  flex-col
  justify-between
  h-screen md:h-3/5
  px-4 md:px-0
  w-full md:w-auto lg:w-4/12
`;

export const Input = tw.input`
  px-6
  py-4
  text-themeNeutral-700
  rounded
  bg-themeNeutral-400
  w-full
`;
