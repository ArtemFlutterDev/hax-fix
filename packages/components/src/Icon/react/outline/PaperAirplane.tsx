import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPaperAirplane = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.982 7.592v-2.41a.804.804 0 0 1 1.371-.569l7.24 7.24-7.197 7.198a.803.803 0 0 1-1.371-.568v-3.604s-6.361-.386-11.261 4.513c-.553.553-1.494.033-1.342-.734.826-4.174 3.553-11.066 12.56-11.066Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgPaperAirplane;
