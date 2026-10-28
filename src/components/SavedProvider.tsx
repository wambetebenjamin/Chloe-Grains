"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { site } from "@/lib/data/site";

export type SavedKind = "recipe" | "food";

interface SavedState {
  recipes: string[];
  foods: string[];
  name: string;
}

interface SavedContextValue extends SavedState {
  hydrated: boolean;
  isSaved: (kind: SavedKind, slug: string) => boolean;
  toggle: (kind: SavedKind, slug: string) => void;
  remove: (kind: SavedKind, slug: string) => void;
  clear: () => void;
  setName: (name: string) => void;
  count: number;
}

const emptyState: SavedState = { recipes: [], foods: [], name: "" };

const SavedContext = createContext<SavedContextValue | null>(null);

function readStorage(): SavedState {
  if (typeof window === "undefined") return emptyState;
  try {
    const raw = window.localStorage.getItem(site.savedKey);
    if (!raw) return emptyState;
    const parsed = JSON.parse(raw) as Partial<SavedState>;
    return {
      recipes: Array.isArray(parsed.recipes) ? parsed.recipes.filter((s) => typeof s === "string") : [],
      foods: Array.isArray(parsed.foods) ? parsed.foods.filter((s) => typeof s === "string") : [],
      name: typeof parsed.name === "string" ? parsed.name : "",
    };
  } catch {
    return emptyState;
  }
}

export function SavedProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SavedState>(emptyState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(site.savedKey, JSON.stringify(state));
    } catch {
      // Storage can be full or blocked; saving silently degrades.
    }
  }, [state, hydrated]);

  const isSaved = useCallback(
    (kind: SavedKind, slug: string) =>
      kind === "recipe" ? state.recipes.includes(slug) : state.foods.includes(slug),
    [state]
  );

  const toggle = useCallback((kind: SavedKind, slug: string) => {
    setState((prev) => {
      const key = kind === "recipe" ? "recipes" : "foods";
      const list = prev[key];
      const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug];
      return { ...prev, [key]: next };
    });
  }, []);

  const remove = useCallback((kind: SavedKind, slug: string) => {
    setState((prev) => {
      const key = kind === "recipe" ? "recipes" : "foods";
      return { ...prev, [key]: prev[key].filter((s) => s !== slug) };
    });
  }, []);

  const clear = useCallback(() => {
    setState((prev) => ({ ...prev, recipes: [], foods: [] }));
  }, []);

  const setName = useCallback((name: string) => {
    setState((prev) => ({ ...prev, name: name.slice(0, 60) }));
  }, []);

  const value = useMemo<SavedContextValue>(
    () => ({
      ...state,
      hydrated,
      isSaved,
      toggle,
      remove,
      clear,
      setName,
      count: state.recipes.length + state.foods.length,
    }),
    [state, hydrated, isSaved, toggle, remove, clear, setName]
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved(): SavedContextValue {
  const ctx = useContext(SavedContext);
  if (!ctx) {
    throw new Error("useSaved must be used inside SavedProvider");
  }
  return ctx;
}
