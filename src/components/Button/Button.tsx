import cn from 'classnames';

import ButtonLoader from './ButtonLoader';

enum ButtonSizes {
  LARGE,
  MEDIUM,
  SMALL,
}

const ButtonSizeClasses: { [key in ButtonSizes]: string } = {
  [ButtonSizes.LARGE]: 'btn-large',
  [ButtonSizes.MEDIUM]: 'btn-medium',
  [ButtonSizes.SMALL]: 'btn-small',
};

enum Variants {
  PRIMARY = 'primary',
  QUATERNARY = 'quaternary',
  SECONDARY = 'secondary',
  TETRIARY = 'tetriary',
}

enum ButtonTypes {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

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
};

export default function Button({ text, type, className, disabled, image, isLoading, onClick, variant, size = ButtonSizes.MEDIUM }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cn('btn', variant, disabled && 'disabled', ButtonSizeClasses[size], className)} disabled={disabled} onClick={onClick} type={type}>
      {!isLoading ? (
        <ButtonLoader />
      ) : (
        <>
          {image && <img className="btn__image" src={image} alt="" />}
          {text}
        </>
      )}
    </button>
  );
}
