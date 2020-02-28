import Colors from './colors';

const _rem = (v) => `${v}rem`;
const _px = (v) => `${v}rem`;

const _scale = (base, _fn = _rem) => ({
  xxxs: _fn(base / 4),
  xxs: _fn(base / 3),
  xs: _fn(base / 2),
  sm: _fn(base / 1.5),
  md: _fn(base),
  lg: _fn(base * 1.5),
  xl: _fn(base * 2),
  xxl: _fn(base * 3),
  xxxl: _fn(base * 4)
});


// Theme field definitions: https://system-ui.com/theme/
export default class Theme {
  static DEFAULT = 'DefaultColors';
  static DARK = 'DarkColors';

  constructor() {
    this.init();
  }

  init(colors = Theme.DEFAULT) {
    this.currentTheme = colors;
    this.colors = Colors[colors] || Colors[Theme.DEFAULT];


    // layout
    this.sizes = _scale(2, _rem);

    // space (margins/paddings)
    this.space = _scale(2, _rem);

    // border
    this.radii = _scale(0.5, _rem);
    this.borderWidths = _scale(1, _px);
    this.borderStyles = {};
    this.borders = {};

    // typography
    this.fontSizes = _scale(32, _px);
    this.lineHeights = _scale(3, _rem);
    this.fonts = {
      default: 'Roboto',
    }
    this.fontWeights = {
      regular: 400,
      bold: 700,
    };

    // shadow
    this.shadows = {
      xs: '1px 1px 2px rgba(0,0,0,0.12)',
      sm: '2px 2px 4px rgba(0,0,0,0.12)',
      md: '4px 4px 8px rgba(0,0,0,0.24)',
      lg: '6px 6px 12px rgba(0,0,0,0.24)',
      xl: '8px 8px 16px rgba(0,0,0,0.48)',
    }

    // position
    this.zIndices = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    }

    // breakpoints
    this.breakpoints = ['768px', '1024px', '1280px', '1920px'];
    this.breakpoints.sm = this.breakpoints[0];
    this.breakpoints.md = this.breakpoints[1];
    this.breakpoints.lg = this.breakpoints[2];
    this.breakpoints.xl = this.breakpoints[3];
    this.mediaQuery = {
      mobile: `@media (max-width: ${this.breakpoints[0]})`,
      tablet: `@media (min-width: ${this.breakpoints[0]}) and (max-width: ${this.breakpoints[1]})`,
      laptop: `@media (min-width: ${this.breakpoints[1]}) and (max-width: ${this.breakpoints[2]})`,
      desktop: `@media (min-width: ${this.breakpoints[2]})`,
    }
  }

  static self = new Theme()
  static setTheme(newTheme) {
    Theme.self.init(newTheme);
  }
}
