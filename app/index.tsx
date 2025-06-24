import Wallpaper from "@/components/Wallpaper";
import { useCarouselLayout } from "@/hooks/useCarouselLayout";
import { useGetWallpapers } from "@/hooks/useGetWallpapers";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function Index() {
  const { data, isLoading, error } = useGetWallpapers();
  const { _spacing, _imageWidth, width, _totalSize } = useCarouselLayout();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / _totalSize;
    runOnJS(setCurrentIndex)(Math.round(e.contentOffset.x / _totalSize));
  });

  const bgStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [currentIndex - 1, currentIndex, currentIndex + 1],
      [0, 1, 0]
    );
    return {
      opacity,
    };
  });

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (!data) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{error?.message}</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 items-center justify-center">
      <View className="absolute w-full h-full">
        <Animated.Image
          source={{ uri: data.photos[currentIndex].src.portrait }}
          className="w-full h-full"
          style={bgStyle}
          blurRadius={50}
        />
      </View>
      <Animated.FlatList
        data={data.photos ?? []}
        renderItem={({ item, index }) => (
          <Wallpaper photo={item} index={index} scrollX={scrollX} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="grow-0"
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _imageWidth) / 2,
        }}
        decelerationRate="fast"
        snapToInterval={_totalSize}
        onScroll={onScroll}
        scrollEventThrottle={16}
        overScrollMode="never"
        bounces={false}
        alwaysBounceHorizontal={false}
      />
    </View>
  );
}
