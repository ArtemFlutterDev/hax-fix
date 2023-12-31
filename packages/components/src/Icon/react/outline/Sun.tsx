import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSun = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 12h2m0 7 2-2m5 2v2m5-4 2 2M5 5l2 2m12 5h2m-4-5 2-2m-7-2v2m3 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSun;
