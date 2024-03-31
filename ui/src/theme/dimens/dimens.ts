export class DimensSet {
  private baseline: number;

  x0: string;
  x1: string;
  x2: string;
  x3: string;
  x4: string;
  x5: string;
  x6: string;
  x7: string;
  x8: string;
  x9: string;
  x10: string;
  x11: string;
  x12: string;

  constructor(baseline: number) {
    this.baseline = baseline;
    this.x0 = '0rem';
    this.x1 = baseline + 'rem';
    this.x2 = baseline * 2 + 'rem';
    this.x3 = baseline * 3 + 'rem';
    this.x4 = baseline * 4 + 'rem';
    this.x5 = baseline * 5 + 'rem';
    this.x6 = baseline * 6 + 'rem';
    this.x7 = baseline * 7 + 'rem';
    this.x8 = baseline * 8 + 'rem';
    this.x9 = baseline * 9 + 'rem';
    this.x10 = baseline * 10 + 'rem';
    this.x11 = baseline * 11 + 'rem';
    this.x12 = baseline * 12 + 'rem';
  }
}

export const Dimens = new DimensSet(0.25);
