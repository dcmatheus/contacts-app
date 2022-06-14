import tw from 'tailwind-styled-components';

export const InputTitle = tw.p`
  font-medium
  text-primary-200
`;

export const Title = tw.h1`
  text-xl md:text-4xl
  font-bold
  text-primary-200
  ${({ compact }: { compact?: string }) => compact && 'md:text-2xl'}
`;

export const Subtitle = tw.h2`
  mt-6
  text-themeNeutral-600
  font-medium
  md:text-lg
`;
