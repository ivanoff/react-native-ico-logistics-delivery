declare module 'react-native-ico-logistics-delivery' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = '24-hours' |
      'add' |
      'add-1' |
      'application' |
      'bill' |
      'box' |
      'box-1' |
      'box-2' |
      'box-3' |
      'call-center' |
      'call-center-1' |
      'call' |
      'cargo' |
      'cargo-1' |
      'cargo-2' |
      'cargo-3' |
      'clipboard' |
      'clipboard-1' |
      'clipboard-2' |
      'box-4' |
      'box-5' |
      'container' |
      'container-1' |
      'container-2' |
      'conveyor' |
      'customer-service' |
      'delivery' |
      'delivery-1' |
      'delivery-2' |
      'delivery-3' |
      'delivery-4' |
      'delivery-5' |
      'delivery-6' |
      'delivery-7' |
      'delivery-8' |
      'delivery-9' |
      'delivery-10' |
      'delivery-11' |
      'delivery-12' |
      'distribution' |
      'distribution-1' |
      'delivery-13' |
      'delivery-14' |
      'delivery-15' |
      'fast' |
      'fragile' |
      'fragile-1' |
      'global' |
      'global-1' |
      'global-2' |
      'global-3' |
      'global-4' |
      'home' |
      'international' |
      'international-1' |
      'international-2' |
      'location' |
      'logistic' |
      'logistic-1' |
      'logistic-2' |
      'logistic-3' |
      'logistic-4' |
      'logistic-5' |
      'logistic-6' |
      'logistic-7' |
      'logistic-8' |
      'logistic-9' |
      'logistic-10' |
      'logistic-11' |
      'logistic-12' |
      'logistic-13' |
      'logistic-14' |
      'logistic-15' |
      'logistic-16' |
      'logistic-17' |
      'logistic-18' |
      'logistic-19' |
      'mobile' |
      'mobile-1' |
      'monitor' |
      'on-time' |
      'on-time-1' |
      'operator' |
      'box-6' |
      'bill-1' |
      'bill-2' |
      'box-7' |
      'package' |
      'box-8' |
      'box-9' |
      'box-10' |
      'box-11' |
      'box-12' |
      'box-13' |
      'box-14' |
      'parcel' |
      'premium' |
      'premium-1' |
      'premium-2' |
      'priority' |
      'priority-1' |
      'product' |
      'product-1' |
      'protection' |
      'receive' |
      'receive-1' |
      'receive-2' |
      'search' |
      'secure' |
      'secure-1' |
      'service-center' |
      'service-center-1' |
      'service' |
      'share' |
      'shopping-cart' |
      'support' |
      'track' |
      'track-1' |
      'track-2' |
      'trolley' |
      'trolley-1' |
      'box-15' |
      'box-16' |
      'box-17' |
      'warehouse';

    type backgroundType = 'circle' | 'rect' | 'button';

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
