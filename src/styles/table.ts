import tw from 'tailwind-styled-components';

export const TableLine = tw.div`
  flex
  justify-between
  py-5
  px-7
  ${({ dark }: { dark?:Boolean }) => dark && 'bg-themeNeutral-400'}
`;

export const TableCell = tw.div`
  w-1/4
  font-medium
  ${({ start }: { start?: Boolean }) => (start ? 'font-bold text-primary-200 w-1/12' : 'text-themeNeutral-700')}
  ${({ end }: { end?: Boolean }) => end && 'flex flex-wrap justify-between w-1/5'}
`;
