import { type LabelHTMLAttributes } from 'react';

export interface ILabel
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

function Label({
  children,
  className = '',
  ...props
}: ILabel) {
  return (
    <label
      className={`font-inter font-bold text-[10.4px] leading-[15.6px] tracking-[1.4px] text-surface-light-400 uppercase text-left ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
