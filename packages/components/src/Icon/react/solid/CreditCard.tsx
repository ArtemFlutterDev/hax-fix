import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCreditCard = (props: SvgProps) => (
  <Svg viewBox="0 0 18 18" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M15.75 13.5v.75c0 .825-.675 1.5-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h10.5c.825 0 1.5.675 1.5 1.5v.75H9A1.5 1.5 0 0 0 7.5 6v6A1.5 1.5 0 0 0 9 13.5h6.75ZM9 12h7.5V6H9v6Zm3-1.875A1.123 1.123 0 0 1 10.875 9c0-.623.502-1.125 1.125-1.125s1.125.502 1.125 1.125-.502 1.125-1.125 1.125Z"
        fill="currentColor"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCreditCard;
