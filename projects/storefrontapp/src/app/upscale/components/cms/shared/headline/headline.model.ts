export interface Heading {
  text: string;
  style: HeadingStyle;
}

export enum HeadingStyle {
  START = 'start',
  CENTER = 'center',
  END = 'end',
}
