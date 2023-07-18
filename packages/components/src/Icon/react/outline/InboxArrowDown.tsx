import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgInboxArrowDown = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.268A2 2 0 0 1 21 9v5.053A4.8 4.8 0 1 1 14.422 21H4a2 2 0 0 1-2-2V5Zm11.351 14a4.809 4.809 0 0 1-.085-2H12a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6V5H4v14h9.351Zm.75-4A4.794 4.794 0 0 1 19 13.104V9h-7v6h2.1Zm.699 2.8a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0Zm2.8-2v1.4H16v1h1.6v1.6h1v-1.6H20v-1h-1.4v-1.4h-1Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgInboxArrowDown;
