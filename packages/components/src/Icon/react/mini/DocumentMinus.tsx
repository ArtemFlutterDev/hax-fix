import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDocumentMinus = (props: SvgProps) => (
  <Svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <Path
      fillRule="evenodd"
      d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5zm7.75 9.75a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5h4.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDocumentMinus;
