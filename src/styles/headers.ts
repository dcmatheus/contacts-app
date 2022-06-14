import tw from 'tailwind-styled-components';

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

export const ContactsListHeaderStyle = tw.div`
  flex
  justify-between
  font-medium
  md:py-5
  md:border-b-2
  md:px-7
  md:border-themeNeutral-500
`;

export const HeaderCellStyle = tw.div`
  flex
  items-center
  text-primary-200
  font-bold
  text-xl
  w-1/4
  ${({ md }: { md?:string }) => md && 'w-1/5'}
  ${({ sm }: { sm?:string }) => sm && 'w-1/12'}
`;
