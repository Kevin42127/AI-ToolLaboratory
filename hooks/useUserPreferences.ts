'use client';

import { useState, useEffect } from 'react';

interface UserPreferences {
  profession: string;
  experienceLevel: string;
  primaryGoals: string[];
  recentlyViewed: string[];
  favoriteTools: string[];
}

const defaultPreferences: UserPreferences = {
  profession: '',
  experienceLevel: '',
  primaryGoals: [],
  recentlyViewed: [],
  favoriteTools: [],
};

export function useUserPreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
    const saved = localStorage.getItem('userPreferences');
    
    if (saved) {
      const parsed = JSON.parse(saved);
      setPreferences(parsed);
    }
    
    // Only show onboarding if user hasn't completed it
    setIsFirstVisit(!hasCompletedOnboarding);
    setIsLoaded(true);
  }, []);

  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    const updated = { ...preferences, ...newPreferences };
    setPreferences(updated);
    localStorage.setItem('userPreferences', JSON.stringify(updated));
  };

  const addToRecentlyViewed = (toolId: string) => {
    const recentlyViewed = [toolId, ...preferences.recentlyViewed.filter(id => id !== toolId)].slice(0, 10);
    updatePreferences({ recentlyViewed });
  };

  const addToFavorites = (toolId: string) => {
    const favoriteTools = preferences.favoriteTools.includes(toolId)
      ? preferences.favoriteTools.filter(id => id !== toolId)
      : [...preferences.favoriteTools, toolId];
    updatePreferences({ favoriteTools });
  };

  const completeOnboarding = (onboardingData: {
    profession: string;
    experienceLevel: string;
    primaryGoals: string[];
  }) => {
    updatePreferences(onboardingData);
    setIsFirstVisit(false);
    // Set flag to prevent showing onboarding again
    localStorage.setItem('hasCompletedOnboarding', 'true');
  };

  const resetOnboarding = () => {
    localStorage.removeItem('hasCompletedOnboarding');
    localStorage.removeItem('userPreferences');
    setPreferences(defaultPreferences);
    setIsFirstVisit(true);
  };

  return {
    preferences,
    isFirstVisit,
    isLoaded,
    updatePreferences,
    addToRecentlyViewed,
    addToFavorites,
    completeOnboarding,
    resetOnboarding,
  };
}
