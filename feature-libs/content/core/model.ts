declare module '@spartacus/core' {
  interface CmsComponent {
    link?: {
      type?: string;
      value?: string;
      behavior: LinkBehavior;
    };
  }
}

export enum LinkBehavior {
  OPEN_IN_SAME_WINDOW = 'OPEN_IN_SAME_WINDOW',
}
