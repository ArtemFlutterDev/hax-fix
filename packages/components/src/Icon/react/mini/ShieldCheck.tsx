import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgShieldCheck = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M7.46.907 2.793 2.98C2.313 3.194 2 3.674 2 4.2v3.134c0 3.7 2.56 7.16 6 8 3.44-.84 6-4.3 6-8V4.2c0-.526-.313-1.006-.793-1.22L8.54.907a1.325 1.325 0 0 0-1.08 0ZM6.193 10.86 4.467 9.134a.664.664 0 1 1 .94-.94l1.26 1.253 3.92-3.92a.664.664 0 1 1 .94.94L7.133 10.86a.664.664 0 0 1-.94 0Z"
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
export default SvgShieldCheck;
