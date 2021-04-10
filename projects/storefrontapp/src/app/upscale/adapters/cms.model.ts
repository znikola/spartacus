export interface UpscalePage {
  content: UpscaleTemplate[];
}

export interface UpscaleTemplate {
  id: string;
  aliases: string[];
  seo?: {
    title?: string;
    description?: string;
  };
  components: UpscaleComponent[];
}

export interface UpscaleComponent {
  type: string;
  id: string;
  position: number;
  contentIds: string[];
}
