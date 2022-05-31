import tw from 'tailwind-styled-components';

export const Form = tw.form`
  flex
  flex-col
  justify-between
  h-screen
  px-4
  w-full
  md:px-0
  md:w-auto
  lg:w-4/12
  md:h-3/5
`;

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

export const Input = tw.input`
  px-6
  py-4
  text-themeNeutral-700
  rounded
  bg-themeNeutral-400
  w-full
`;

export const InputTitle = tw.p`
  mt-6
  font-medium
  text-primary-200
`;

export const Title = tw.h1`
  text-xl
  font-bold
  text-primary-200
  md:text-4xl
`;

export const Subtitle = tw.h2`
  mt-6
  text-themeNeutral-600
  md:text-lg
`;

export const HeaderStyle = tw.header`
  flex
  justify-between
  w-screen
  px-4
  py-4
  my-4
  text-base
  font-medium
  border-b-2
  md:px-14
  md:my-0
  md:py-6
  md:border-b-0
  md:shadow-md
`;

export const BackButton = tw.button`
  self-start
  text-themeNeutral-600
  md:flex
  md:text-xl
  md:font-medium
`;
