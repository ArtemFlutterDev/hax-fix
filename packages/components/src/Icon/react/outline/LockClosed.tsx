import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLockClosed = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 11V7c0-1.333.8-4 4-4s4 2.667 4 4v4m-8 0H5v10h14V11h-3m-8 0h8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgLockClosed;
