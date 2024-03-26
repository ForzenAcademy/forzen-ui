export class ModifierSet {
  _padding?: string = undefined;
  _paddingVertical?: string = undefined;
  _paddingHorizontal?: string = undefined;
  _paddingStart?: string = undefined;
  _paddingEnd?: string = undefined;
  _paddingTop?: string = undefined;
  _paddingBottom?: string = undefined;
  _margin?: string = undefined;
  _background?: string = undefined;
  _foreground?: string = undefined;
  _size?: string = undefined;
  _width?: string = undefined;
  _height?: string = undefined;
  _onClick?: (() => void) | undefined = undefined;
  _cornerRadius?: string = undefined;
  _fillMaxWidth?: boolean = undefined;
  _fillMaxHeight?: boolean = undefined;
  _weight?: number = undefined;

  public toCss(): React.CSSProperties {
    const style: React.CSSProperties = {};

    if (this._background !== undefined) style.background = this._background;
    if (this._foreground !== undefined) style.color = this._foreground;
    if (this._padding !== undefined) style.padding = this._padding;
    if (
      this._padding !== undefined ||
      this._paddingVertical !== undefined ||
      this._paddingTop !== undefined
    ) {
      style.paddingTop = this._padding ?? this._paddingVertical ?? this._paddingTop;
    }
    if (
      this._padding !== undefined ||
      this._paddingVertical !== undefined ||
      this._paddingBottom !== undefined
    ) {
      style.paddingBottom = this._padding ?? this._paddingVertical ?? this._paddingBottom;
    }
    if (
      this._padding !== undefined ||
      this._paddingHorizontal !== undefined ||
      this._paddingStart !== undefined
    ) {
      style.paddingLeft = this._padding ?? this._paddingHorizontal ?? this._paddingStart;
    }
    if (
      this._padding !== undefined ||
      this._paddingHorizontal !== undefined ||
      this._paddingEnd !== undefined
    ) {
      style.paddingRight = this._padding ?? this._paddingHorizontal ?? this._paddingEnd;
    }
    if (this._fillMaxWidth !== undefined) style.width = '100%';
    else style.width = 'fit-content';
    if (this._fillMaxHeight !== undefined) style.height = '100%';
    else style.height = 'fit-content';
    if (this._size !== undefined || this._width !== undefined)
      style.width = this._size ?? this._width;
    if (this._size !== undefined || this._height !== undefined)
      style.height = this._size ?? this._height;
    if (this._cornerRadius !== undefined) style.borderRadius = this._cornerRadius;
    if (this._margin !== undefined) style.margin = this._margin;
    if (this._weight != undefined) style.flex = this._weight;

    style.boxSizing = 'border-box';
    style.overflow = 'hidden';
    return style;
  }

  background(value: string): ModifierSet {
    this._background = value;
    return this;
  }

  foreground(value: string): ModifierSet {
    this._foreground = value;
    return this;
  }

  padding(value: string): ModifierSet {
    this._padding = value;
    return this;
  }

  margin(value: string): ModifierSet {
    this._margin = value;
    return this;
  }

  size(value: string): ModifierSet {
    this._size = value;
    return this;
  }

  width(value: string): ModifierSet {
    this._width = value;
    return this;
  }

  height(value: string): ModifierSet {
    this._height = value;
    return this;
  }

  onClick(value: () => void): ModifierSet {
    this._onClick = value;
    return this;
  }

  cornerRadius(value: string): ModifierSet {
    this._cornerRadius = value;
    return this;
  }

  fillMaxWidth(): ModifierSet {
    this._fillMaxWidth = true;
    return this;
  }

  fillMaxHeight(): ModifierSet {
    this._fillMaxHeight = true;
    return this;
  }

  fillMaxSize(): ModifierSet {
    this._fillMaxWidth = true;
    this._fillMaxHeight = true;
    return this;
  }

  weight(value: number): ModifierSet {
    this._weight = value;
    return this;
  }

  public then(modifier: ModifierSet): ModifierSet {
    throw 'FINISH THIS METHOD';
    if (modifier._background) this.background = modifier.background;
    if (modifier._padding) this.padding = modifier.padding;
    if (modifier._size) this.size = modifier.size;
    return this;
  }
}

export class Modifier {
  static background(value: string): ModifierSet {
    return new ModifierSet().background(value);
  }

  static foreground(value: string): ModifierSet {
    return new ModifierSet().foreground(value);
  }

  static padding(value: string): ModifierSet {
    return new ModifierSet().padding(value);
  }

  static margin(value: string): ModifierSet {
    return new ModifierSet().margin(value);
  }

  static size(value: string): ModifierSet {
    return new ModifierSet().size(value);
  }

  static width(value: string): ModifierSet {
    return new ModifierSet().width(value);
  }

  static height(value: string): ModifierSet {
    return new ModifierSet().height(value);
  }

  static onClick(value: () => void): ModifierSet {
    return new ModifierSet().onClick(value);
  }

  static cornerRadius(value: string): ModifierSet {
    return new ModifierSet().cornerRadius(value);
  }

  static fillMaxWidth(): ModifierSet {
    return new ModifierSet().fillMaxWidth();
  }

  static fillMaxHeight(): ModifierSet {
    return new ModifierSet().fillMaxHeight();
  }

  static fillMaxSize(): ModifierSet {
    return new ModifierSet().fillMaxSize();
  }

  static weight(value: number): ModifierSet {
    return new ModifierSet().weight(value);
  }
}
