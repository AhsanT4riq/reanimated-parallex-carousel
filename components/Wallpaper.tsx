import { View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useCarouselLayout } from "../hooks/useCarouselLayout";
import { Photo } from "../types/pexels";

interface WallpaperProps {
  photo: Photo;
  index: number;
  scrollX: SharedValue<number>;
}

export default function Wallpaper({ photo, index, scrollX }: WallpaperProps) {
  const { _imageWidth, _imageHeight } = useCarouselLayout();

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [1.8, 1, 1.8]
    );
    const rotate = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [10, 0, -10]
    );
    return {
      transform: [{ scale }, { rotate: `${rotate}deg` }],
    };
  });

  return (
    <View
      style={{
        width: _imageWidth,
        height: _imageHeight,
        overflow: "hidden",
        borderRadius: 16,
      }}
    >
      <Animated.Image
        source={{ uri: photo.src.large2x }}
        style={[animatedStyle, { flexGrow: 1 }]}
      />
    </View>
  );
}
