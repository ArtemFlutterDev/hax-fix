import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgQrCode = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.018 16.408v2.41a.804.804 0 0 1-1.371.569l-7.24-7.242 7.196-7.197a.804.804 0 0 1 1.372.568V9.12s6.36.386 11.261-4.513c.553-.553 1.494-.033 1.342.734-.826 4.174-3.553 11.066-12.56 11.066v.001Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgQrCode;
