import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// Responsive font sizes
const bigText = responsiveFontSize(2.8);
const mediumText = responsiveFontSize(2.2);
const smallText = responsiveFontSize(1.9);

export {
  responsiveHeight as windowHeight,
  responsiveWidth as windowWidth,
  smallText,
  bigText,
  mediumText,
};
