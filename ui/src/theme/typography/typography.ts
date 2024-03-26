export class TypographySet {
  private bodySmallPt: number;
  private bodyMediumPt: number;
  private bodyLargePt: number;
  bodySmall: string;
  bodyMedium: string;
  bodyLarge: string;

  private labelSmallPt: number;
  private labelMediumPt: number;
  private labelLargePt: number;
  labelSmall: string;
  labelMedium: string;
  labelLarge: string;

  private headlineSmallPt: number;
  private headlineMediumPt: number;
  private headlineLargePt: number;
  headlineSmall: string;
  headlineMedium: string;
  headlineLarge: string;

  constructor(
    headlineSmallPt: number,
    headlineMediumPt: number,
    headlineLargePt: number,
    bodySmallPt: number,
    bodyMediumPt: number,
    bodyLargePt: number,
    labelSmallPt: number,
    labelMediumPt: number,
    labelLargePt: number,
  ) {
    this.bodySmallPt = bodySmallPt;
    this.bodyMediumPt = bodyMediumPt;
    this.bodyLargePt = bodyLargePt;

    this.bodySmall = this.bodySmallPt + 'pt';
    this.bodyMedium = this.bodyMediumPt + 'pt';
    this.bodyLarge = this.bodyLargePt + 'pt';

    this.labelSmallPt = labelSmallPt;
    this.labelMediumPt = labelMediumPt;
    this.labelLargePt = labelLargePt;

    this.labelSmall = this.labelSmallPt + 'pt';
    this.labelMedium = this.labelMediumPt + 'pt';
    this.labelLarge = this.labelLargePt + 'pt';

    this.headlineSmallPt = headlineSmallPt;
    this.headlineMediumPt = headlineMediumPt;
    this.headlineLargePt = headlineLargePt;

    this.headlineSmall = this.headlineSmallPt + 'pt';
    this.headlineMedium = this.headlineMediumPt + 'pt';
    this.headlineLarge = this.headlineLargePt + 'pt';
  }
}

export const Typography = new TypographySet(57, 45, 36, 12, 14, 16, 14, 12, 11);
