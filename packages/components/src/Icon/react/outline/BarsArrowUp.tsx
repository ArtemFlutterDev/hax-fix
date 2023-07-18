import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBarsArrowUp = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M3 18h6v-2H3v2ZM3 6v2h18V6H3Zm0 7h12v-2H3v2Z"
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
export default SvgBarsArrowUp;
