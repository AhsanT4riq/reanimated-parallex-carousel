# Reanimated Carousel

A beautiful, interactive carousel component built with React Native Reanimated and Expo. This project showcases smooth animations, gesture handling, and a delightful user experience for browsing through content with a parallax effect.

## Features

- 🎨 Smooth parallax scrolling effects
- ✨ High-performance animations with React Native Reanimated
- 👆 Intuitive gesture handling with React Native Gesture Handler
- 📱 Responsive design that works on both iOS and Android
- 🎨 Styled with Tailwind CSS using NativeWind
- 🚀 Optimized performance with native animations
- 🌓 Dark mode support

## Demo

[![App Demo GIF](demo/demo.gif)](https://github.com/ahsant4riq/reanimated-carousel/raw/main/demo/demo.mov)

_The GIF above shows a preview of the carousel in action. Click on it to view the full demo video (`demo.mov`)._ (Note: You'll need to add your own demo files)

## Tech Stack

- [Expo](https://expo.dev/) - Development platform
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - For smooth animations
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - For gesture handling
- [NativeWind](https://www.nativewind.dev/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety

## Prerequisites

- Node.js (v16 or later)
- npm or Yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ahsant4riq/reanimated-carousel.git
   cd reanimated-carousel
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

4. Run on your device/emulator:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## Project Structure

```
.
├── app/                    # Main application screens and navigation (Expo Router)
├── assets/                 # Static assets (images, fonts, etc.)
├── components/             # Reusable UI components
│   └── Wallpaper.tsx       # Wallpaper component with parallax effect
├── hooks/                  # Custom React hooks
│   ├── useCarouselLayout.ts # Carousel layout logic
│   └── useGetWallpapers.ts # Wallpaper data fetching
├── app.json               # Expo configuration
└── package.json           # Project dependencies and scripts
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

## Customization

You can easily customize the carousel by modifying the following:

- Wallpaper images in the `assets` directory
- Animation parameters in `useCarouselLayout` hook
- Styling in the component files using Tailwind CSS classes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ using Expo and React Native
- Special thanks to the React Native Reanimated team
- Inspired by modern mobile UI/UX patterns
