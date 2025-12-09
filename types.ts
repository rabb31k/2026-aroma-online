import { LucideIcon } from 'lucide-react';

export enum ElementType {
  Wood = 'Wood',
  Fire = 'Fire',
  Earth = 'Earth',
  Metal = 'Metal',
  Water = 'Water',
  Prologue = 'Prologue' // Special case for the first card
}

export interface ExhibitionCardData {
  id: string;
  type: ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  imageUrl: string;
  tag: string;
}

export interface FiveElementResult {
  number: number;
  element: ElementType;
  description: string;
  traits: string;
  color: string;
  icon: LucideIcon;
}