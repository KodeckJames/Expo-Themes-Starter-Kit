import { useColorScheme as useRNColorScheme } from 'react-native';
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

type ColorScheme = 'light' | 'dark' | 'system';

interface ColorSchemeStore {
  colorScheme: ColorScheme;
  isLoaded: boolean;
  setColorScheme: (scheme: ColorScheme) => void;
  loadColorScheme: () => Promise<void>;
}

export const useColorSchemeStore = create<ColorSchemeStore>((set) => ({
  colorScheme: 'system',
  isLoaded: false,
  setColorScheme: async (scheme: ColorScheme) => {
    await AsyncStorage.setItem('color-scheme', scheme);
    set({ colorScheme: scheme });
  },
  loadColorScheme: async () => {
    try {
      const stored = await AsyncStorage.getItem('color-scheme');
      if (stored) {
        set({ colorScheme: stored as ColorScheme, isLoaded: true });
      } else {
        set({ isLoaded: true });
      }
    } catch (error) {
      console.error('Failed to load color scheme:', error);
      set({ isLoaded: true });
    }
  },
}));

export function useColorScheme() {
  const systemColorScheme = useRNColorScheme();
  const { colorScheme, isLoaded, loadColorScheme } = useColorSchemeStore();

  // Load the stored preference on mount
  useEffect(() => {
    if (!isLoaded) {
      loadColorScheme();
    }
  }, [isLoaded, loadColorScheme]);

  if (colorScheme === 'system') {
    return systemColorScheme ?? 'light';
  }

  return colorScheme;
}