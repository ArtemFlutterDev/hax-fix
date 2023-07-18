import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBookOpen = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#a)" fill="currentColor">
      <Path d="M11.113 8.753c.914.62 1.554 1.46 1.554 2.58v2h2.666v-2c0-1.453-2.38-2.313-4.22-2.58ZM10 8a2.666 2.666 0 1 0 0-5.333c-.313 0-.607.066-.887.16a3.987 3.987 0 0 1 0 5.013c.28.093.574.16.887.16ZM6 8a2.666 2.666 0 1 0 0-5.333A2.666 2.666 0 1 0 6 8Zm0-4c.733 0 1.333.6 1.333 1.333S6.733 6.666 6 6.666s-1.333-.6-1.333-1.333S5.267 4 6 4ZM6 8.666c-1.78 0-5.333.894-5.333 2.667v2h10.666v-2C11.333 9.56 7.78 8.666 6 8.666ZM10 12H2v-.66C2.133 10.86 4.2 10 6 10c1.8 0 3.867.86 4 1.333V12Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBookOpen;
