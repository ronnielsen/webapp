import DefaultColors from './DefaultColors';

// initialize with default colors
let Colors = Object.assign({}, DefaultColors);

// constant colors
// Colors.primary = '#2555D9';
// Colors.primary2 = '#4C73DF';
// Colors.primary3 = '#7492E6';
// Colors.primary4 = '#9BB1ED';
// Colors.primary5 = '#C3D0F4';
// Colors.primary6 = '#EBEFF8';
// Colors.greyscale1 = '#22212D';
// Colors.greyscale2 = '#4A4953';
// Colors.greyscale3 = '#727179';
// Colors.greyscale4 = '#9A9A9F';
// Colors.greyscale5 = '#C2C2C5';
// Colors.greyscale6 = '#EAEAEB';
// Colors.white = '#FFFFFF';
// Colors.danger = '#FF4C5B';
// Colors.success = '#00BF6F';
// Colors.negative = '#9A9A9F';
// Colors.warning = '#FFCC1E';

Colors.dark = Colors.greyscale1;
Colors.light = Colors.greyscale2;

Colors.darken = Colors.gray(0,.25);
Colors.lighten = Colors.gray(255,.25);
Colors.lighter = Colors.gray(255,.025);

// section colors
Colors.background = Colors.greyscale1;
Colors.secondary = Colors.greyscale4;
Colors.text = Colors.greyscale6;
Colors.secondaryText = Colors.greyscale4;
Colors.lightText = Colors.white;
Colors.border = Colors.greyscale3;
Colors.fill = Colors.light;
Colors.focus = Colors.primary4;

export default Colors;
