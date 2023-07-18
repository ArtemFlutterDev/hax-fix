import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlusCircle = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.268A2 2 0 0 1 21 9v5.053A4.8 4.8 0 1 1 14.422 21H4a2 2 0 0 1-2-2V5Zm11.351 14a4.809 4.809 0 0 1-.085-2H12a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6V5H4v14h9.351Zm.75-4A4.794 4.794 0 0 1 19 13.104V9h-7v6h2.1Zm.699 2.8a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0Zm3.64-1.204-.708-.707-1.94 1.94 1.94 1.939.707-.707-.66-.661H20v-1h-2.364l.803-.804Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgPlusCircle;
