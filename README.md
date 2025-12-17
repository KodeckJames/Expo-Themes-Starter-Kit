# Welcome to your Expo Themes Starter Kit (Standard) 🎨

<div align="center">
  <video src="https://github.com/user-attachments/assets/330a8642-063c-4c68-832b-0862a33e31e3" width="300" controls autoplay loop muted/>
</div>

> A useful Expo template to kickstart your Expo projects with pre-configured themes. Skip the boilerplate and start building immediately with a clean, organized architecture.

This template package is part of the [create-expo-themes](https://www.npmjs.com/package/create-expo-themes) CLI tool

## How to get started with this template

1. Initialize your project:

   ```bash
   npx create-expo-themes@latest
   ```

2. Select the first option: `Standard (StyleSheet API)`

3. Start the app:

   ```bash
   npx expo start
   ```

## Theme implementation logic

The theme management is located in lib/useColorScheme.tsx and follows a modern, persistent state pattern:

- Zustand Store: Acts as the single source of truth for the colorScheme state across the entire app. It handles three states: light, dark, or system.

- Persistent Storage: Using @react-native-async-storage/async-storage, the user's preference is saved locally. This ensures that if a user manually selects "Dark Mode," the app remains in Dark Mode even after being fully closed and reopened.

- Smart Hook (useColorScheme): * On app launch, it triggers loadColorScheme to hydrate the state from storage.

   - If the state is set to system, it automatically falls back to the device's native color preference using React Native's built-in useColorScheme.

   - If a specific preference is stored (light or dark), it overrides the system setting.

## How to use the theme-toggle components in desired pages

- The toggle components are located in `components/ThemeToggle.tsx`

- You have 4 custom toggling components to choose from:

```typescript
// Simple animated button
<AnimatedThemeToggle/>

// Full theme selector
<ThemeToggle/>

// Custom size button
<ThemeToggleButton size={28}/>

// Custom switch button from react native switch component
<ThemeSwitchToggle/>
```

- You then simply import your desired component and use it, for example:

```typescript
import { AnimatedThemeToggle } from '@/components/ThemeToggle';
```
## Other core Expo configurations from the original Expo docs:

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
