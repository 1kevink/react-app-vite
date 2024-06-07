import cn from 'classnames';

export interface LoaderProps {
  className?: string;
  size?: number;
}

export default function ButtonLoader({ size, className = '' }: LoaderProps) {
  return <i className="fa-sharp fa-solid fa-spinner fa-lg fa-spin" />;
}
