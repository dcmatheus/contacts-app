import { useMediaQuery } from 'react-responsive';
import {
  sm, md, lg, xl, xxl,
} from 'utils/breakpoints.json';

function useBreakpoints() {
  const smScreen = useMediaQuery({ minWidth: sm });
  const mdScreen = useMediaQuery({ minWidth: md });
  const lgScreen = useMediaQuery({ minWidth: lg });
  const xlScreen = useMediaQuery({ minWidth: xl });
  const xxlScreen = useMediaQuery({ minWidth: xxl });
  return {
    smScreen,
    mdScreen,
    lgScreen,
    xlScreen,
    xxlScreen,
  };
}

export default useBreakpoints;
