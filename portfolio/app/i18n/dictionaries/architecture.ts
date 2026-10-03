import type { ArchitectureDiagram } from "./types";

export const architectureDiagrams = {
  beyondpass: { src: "/architecture/beyondpass.webp", width: 4000, height: 3117 },
  cvforyou: { src: "/architecture/cvforyou.webp", width: 4000, height: 3435 },
  friendtasks: { src: "/architecture/friendtasks.webp", width: 4000, height: 5064 },
  spacio: { src: "/architecture/spacio.webp", width: 4000, height: 4034 },
} satisfies Record<string, ArchitectureDiagram>;
