import { type TextareaHTMLAttributes } from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({
  className = '',
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`w-full rounded-lg border border-surface-light-700 h-[102.25px] placeholder:font-inter placeholder:font-medium
        placeholder:text-[14px] leading-[22.8px] placeholder:text-surface-light-400 placeholder:opacity-40 outline-none px-4 py-3.75"
        ${className}
      `}
      {...props}
    />
  );
}

export default Textarea;
