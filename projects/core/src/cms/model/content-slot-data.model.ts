import { ContentSlotComponentData } from './content-slot-component-data.model';

export interface ContentSlotData {
  components?: ContentSlotComponentData[];
  properties?: any;
  headline?: string;
  subHeadline?: string;
}
