import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgRectangleGroup = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)" fill="currentColor">
      <Path d="M10.667 2.667H5.333c-.366 0-.666.3-.666.667V12c0 .367.3.667.666.667h5.334c.366 0 .666-.3.666-.667V3.334c0-.367-.3-.667-.666-.667ZM2.667 4C2.3 4 2 4.3 2 4.667v6c0 .366.3.666.667.666.366 0 .666-.3.666-.666v-6c0-.367-.3-.667-.666-.667ZM13.333 4c-.366 0-.666.3-.666.667v6c0 .366.3.666.666.666.367 0 .667-.3.667-.666v-6C14 4.3 13.7 4 13.333 4Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRectangleGroup;
