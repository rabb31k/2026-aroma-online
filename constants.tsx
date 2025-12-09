import { Leaf, Flame, Mountain, CircleDashed, Droplets } from 'lucide-react';
import { ElementType, ExhibitionCardData, FiveElementResult } from './types';

export const EXHIBITION_DATA: ExhibitionCardData[] = [
  {
    id: 'prologue',
    type: ElementType.Prologue,
    title: "光影序章",
    subtitle: "了解五行哲學與芳療的連結",
    description: "前導區域",
    tag: "前導區域",
    color: "text-white",
    bgGradient: "from-stone-800 to-stone-600",
    imageUrl: "https://picsum.photos/id/10/800/600" // Forest/Foggy
  },
  {
    id: 'wood',
    type: ElementType.Wood,
    title: "木 · 生發之力",
    subtitle: "包含：植物能量配對遊戲",
    description: "木之展區",
    tag: "木之展區",
    color: "text-emerald-100",
    bgGradient: "from-emerald-600 to-teal-500",
    imageUrl: "https://picsum.photos/id/28/800/600" // Forest/Green
  },
  {
    id: 'fire',
    type: ElementType.Fire,
    title: "火 · 熱情之光",
    subtitle: "包含：香氣記憶挑戰",
    description: "火之展區",
    tag: "火之展區",
    color: "text-orange-100",
    bgGradient: "from-red-600 to-orange-500",
    imageUrl: "https://picsum.photos/id/312/800/600" // Warmth/Light
  },
  {
    id: 'earth',
    type: ElementType.Earth,
    title: "土 · 穩定之基",
    subtitle: "包含：調香比例實驗",
    description: "土之展區",
    tag: "土之展區",
    color: "text-yellow-100",
    bgGradient: "from-yellow-600 to-amber-500",
    imageUrl: "https://picsum.photos/id/106/800/600" // Flowers/Earth
  },
  {
    id: 'metal',
    type: ElementType.Metal,
    title: "金 · 收斂之質",
    subtitle: "包含：精油分子探索",
    description: "金之展區",
    tag: "金之展區",
    color: "text-gray-100",
    bgGradient: "from-slate-500 to-gray-400",
    imageUrl: "https://picsum.photos/id/250/800/600" // Minimal/Texture
  },
  {
    id: 'water',
    type: ElementType.Water,
    title: "水 · 流動之韻",
    subtitle: "包含：冥想引導體驗",
    description: "水之展區",
    tag: "水之展區",
    color: "text-blue-100",
    bgGradient: "from-blue-600 to-cyan-500",
    imageUrl: "https://picsum.photos/id/486/800/600" // Water/Drop
  },
];

export const ELEMENT_MAPPING: Record<number, Omit<FiveElementResult, 'number'>> = {
  1: { element: ElementType.Water, description: "獨立與創新的開拓者", traits: "流動、智慧、適應力強", color: "bg-blue-600", icon: Droplets },
  2: { element: ElementType.Earth, description: "協調與合作的平衡者", traits: "穩定、包容、滋養萬物", color: "bg-yellow-600", icon: Mountain },
  3: { element: ElementType.Wood, description: "創意與表達的藝術家", traits: "生長、仁慈、向上發展", color: "bg-emerald-500", icon: Leaf },
  4: { element: ElementType.Metal, description: "秩序與穩定的建設者", traits: "堅毅、果斷、收斂沉穩", color: "bg-slate-500", icon: CircleDashed },
  5: { element: ElementType.Fire, description: "自由與變化的冒險家", traits: "熱情、光明、禮節周到", color: "bg-orange-500", icon: Flame },
  6: { element: ElementType.Metal, description: "關懷與責任的療癒者", traits: "奉獻、正義、精煉純粹", color: "bg-slate-500", icon: CircleDashed },
  7: { element: ElementType.Water, description: "分析與真理的探求者", traits: "深沉、內省、源遠流長", color: "bg-blue-600", icon: Droplets },
  8: { element: ElementType.Earth, description: "權力與豐盛的管理者", traits: "務實、承載、信用可靠", color: "bg-yellow-600", icon: Mountain },
  9: { element: ElementType.Fire, description: "智慧與人道的慈善家", traits: "昇華、明理、照耀四方", color: "bg-orange-500", icon: Flame },
};