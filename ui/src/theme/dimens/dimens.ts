export class DimensSet {
  private baseline: number;

  x0: string;
  x1: string;
  x2: string;
  x3: string;
  x4: string;
  x5: string;
  x6: string;

  constructor(baseline: number) {
    this.baseline = baseline;
    this.x0 = '0rem';
    this.x1 = baseline + 'rem';
    this.x2 = baseline * 2 + 'rem';
    this.x3 = baseline * 3 + 'rem';
    this.x4 = baseline * 4 + 'rem';
    this.x5 = baseline * 5 + 'rem';
    this.x6 = baseline * 6 + 'rem';
  }
}

export const Dimens = new DimensSet(0.25);
