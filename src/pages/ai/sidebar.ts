// Define the TypeScript interfaces for the data structure
interface SidebarEntry {
  type: string;
  label: string;
  fileName?: string;
  entries?: SidebarEntry[]; // Optional property, since not all entries will have sub-entries
}

export const sidebarData: SidebarEntry[] = [
  {
    type: 'group',
    label: 'AI',
    entries: [
      {
        type: 'group',
        label: 'HiMarket',
        fileName: 'himarket',
        entries: []
      },
      {
        type: 'group',
        label: '场景体验',
        fileName: 'scene-guide',
        entries: []
      }
    ]
  }
];

export const sidebarDataEn: SidebarEntry[] = [
  {
    type: 'group',
    label: 'AI',
    entries: [
      {
        type: 'group',
        label: 'HiMarket',
        fileName: 'himarket',
        entries: []
      },
      {
        type: 'group',
        label: 'Scene Guide',
        fileName: 'scene-guide',
        entries: []
      }
    ]
  }
];
