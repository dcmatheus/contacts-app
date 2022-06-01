import tw from 'tailwind-styled-components';

export const Form = tw.form`
  flex
  flex-col
  justify-between
  h-screen md:h-3/5
  px-4 md:px-0
  w-full md:w-auto lg:w-4/12
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
  font-medium
  text-primary-200
`;

export const Title = tw.h1`
  text-xl md:text-4xl
  font-bold
  text-primary-200
  ${({ compact }: { compact: Boolean }) => compact && 'md:text-2xl'}
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
  px-4 md:px-14
  py-4 md:py-6
  mt-4 md:mt-0
  text-base
  font-medium
  border-b-2 md:border-b-0
  md:shadow-md
  bg-white
`;

export const BackButton = tw.button`
  text-themeNeutral-600
  md:flex
  md:text-xl
  md:font-medium
`;

export const HeaderCellStyle = tw.div`
  flex
  items-center
  text-primary-200
  font-bold
  text-xl
  w-1/4
  ${({ md }: { md:Boolean }) => md && 'w-1/5'}
  ${({ sm }: { sm:Boolean }) => sm && 'w-1/12'}
`;

export const TableCell = tw.div`
  w-1/4
  font-medium
  ${({ start }: { start: Boolean }) => (start ? 'font-bold text-primary-200 w-1/12' : 'text-themeNeutral-700')}
  ${({ end }: { end: Boolean }) => end && 'flex flex-wrap justify-between w-1/5'}
`;

export const ContactsListHeaderStyle = tw.div`
  flex
  justify-between
  font-medium
  md:py-5
  md:border-b-2
  md:px-7
  md:border-themeNeutral-500
`;

export const TableLine = tw.div`
  flex
  justify-between
  py-5
  px-7
  ${({ dark }: { dark:Boolean }) => dark && 'bg-themeNeutral-400'}
`;

export const ContactCardStyle = tw.div`
  flex
  justify-between
  h-40
  p-6
  mt-4
  border-2
  rounded-lg
`;
