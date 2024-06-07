import cn from 'classnames';

import ButtonLoader from './ButtonLoader';
import { ButtonSizes, ButtonTypes, Variants } from '../../constants/common';

const ButtonSizeClasses: { [key in ButtonSizes]: string } = {
  [ButtonSizes.LARGE]: 'btn-large',
  [ButtonSizes.MEDIUM]: 'btn-medium',
  [ButtonSizes.SMALL]: 'btn-small',
};

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  image?: string;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSizes;
  text?: string;
  type?: ButtonTypes;
  variant?: Variants;
  withIcon?: boolean;
};

export default function Button({ text, type, className, disabled, image, isLoading, onClick, variant, size = ButtonSizes.MEDIUM, withIcon = false }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cn('btn', variant, disabled && 'disabled', ButtonSizeClasses[size], className)} disabled={disabled} onClick={onClick} type={type}>
      {isLoading ? (
        <ButtonLoader />
      ) : (
        <>
          {image && <img className="btn__image" src={image} alt="" />}
          <span className={!withIcon ? 'btn__text' : ''}>{text}</span>
          {withIcon && <i className="fa-solid fa-arrow-right fa-lg icon" />}
        </>
      )}
    </button>
  );
}
