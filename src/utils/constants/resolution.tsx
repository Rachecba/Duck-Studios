export enum resolutionSizesNames {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const resolutionSizes = {
  small: { name: resolutionSizesNames.small, minSize: '0', maxSize: '760' },
  medium: { name: resolutionSizesNames.small, minSize: '760', maxSize: '1024' },
  large: { name: resolutionSizesNames.medium, minSize: '1024', maxSize: '3080' },
};

export const calculateResolutionSize = (windowWidth: any) => {
  if (windowWidth < resolutionSizes.small.maxSize) {
    return resolutionSizesNames.small;
  } else if (windowWidth >= resolutionSizes.medium.minSize && windowWidth <= resolutionSizes.medium.maxSize) {
    return resolutionSizesNames.medium;
  }
  return resolutionSizesNames.large;
};