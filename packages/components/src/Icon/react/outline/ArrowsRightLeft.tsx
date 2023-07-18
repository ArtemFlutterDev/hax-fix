import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsRightLeft = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.534 3.682V1.976a.568.568 0 0 0-.97-.402L5.437 6.7l5.096 5.096c.358.358.97.104.97-.403V8.842s4.504-.274 7.973 3.194c.39.392 1.057.024.95-.52-.586-2.955-2.516-7.834-8.892-7.834Z"
      fill="currentColor"
    />
    <Path
      d="M12.466 20.318v1.706c0 .506.612.76.97.402l5.126-5.126-5.095-5.096a.568.568 0 0 0-.97.403v2.552s-4.504.273-7.973-3.196c-.39-.39-1.057-.023-.95.52.586 2.956 2.516 7.835 8.892 7.835Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgArrowsRightLeft;
