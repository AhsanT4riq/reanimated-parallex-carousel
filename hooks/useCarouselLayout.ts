// CarouselLayout.ts
import { useWindowDimensions } from "react-native";

export function useCarouselLayout() {
  const { width, height } = useWindowDimensions();
  const _imageWidth = width * 0.7;
  const _imageHeight = _imageWidth * 1.76;
  const _spacing = 12;
  const _totalSize = _imageWidth + _spacing;
  return { _imageWidth, _imageHeight, _spacing, _totalSize, width, height };
}
