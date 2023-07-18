import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgChevronRight = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z"
        fill="currentColor"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgChevronRight;
