import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBadgeCheck = (props: SvgProps) => (
  <Svg viewBox="0 0 17 16" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m15.833 8-1.626-1.86.226-2.46-2.406-.547L10.767 1 8.5 1.973 6.233 1l-1.26 2.127-2.406.54.226 2.466L1.167 8l1.626 1.86-.226 2.467 2.406.546L6.233 15l2.267-.98 2.267.973 1.26-2.126 2.406-.547-.226-2.46L15.833 8Zm-8.606 3.147-2.534-2.54.987-.987 1.547 1.553 3.9-3.913.986.987-4.886 4.9Z"
        fill="currentColor"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBadgeCheck;
