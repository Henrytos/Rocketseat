import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Avatar({ ...props }: AvatarProps) {
  return <img {...props} />;
}
