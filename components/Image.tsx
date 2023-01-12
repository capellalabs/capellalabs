import _Image from "next/image";
import { ThemeMode, imgUriWithTheme } from "../utils";


interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  icon: string;
  themeMode: ThemeMode;
  width: number,
  height: number,
}

export const Image: React.FC<ImageProps> = (props) => {
  const { icon, themeMode, height, width } = props;

  return (
    <_Image
      src={imgUriWithTheme(icon.toLowerCase(), themeMode)}
      alt={`${icon} Icon`}
      width={width}
      height={height}
    />
  );
};
