import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSquare3Stack3D = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12.667 0H3.333c-.366 0-.666.3-.666.667 0 .366.3.666.666.666h9.334c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667ZM3.333 16h9.334c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666H3.333c-.366 0-.666.3-.666.666 0 .367.3.667.666.667Zm10-13.333H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333ZM8 4.5c.827 0 1.5.673 1.5 1.5S8.827 7.5 8 7.5 6.5 6.827 6.5 6 7.173 4.5 8 4.5Zm3.333 6.833H4.667v-1c0-1.113 2.22-1.666 3.333-1.666s3.333.553 3.333 1.666v1Z"
        fill="currentColor"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSquare3Stack3D;
