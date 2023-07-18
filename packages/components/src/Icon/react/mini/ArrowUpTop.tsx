import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgArrowUpTop = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path d="M8 11h3v10h2V11h3l-4-4-4 4ZM4 3v2h16V3H4Z" fill="currentColor" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgArrowUpTop;
