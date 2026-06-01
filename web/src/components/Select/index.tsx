import { type ChangeEvent } from 'react';
import Label from '../Label';

export interface SelectOption {
  value: string;
  label: string;
}

export interface ISelect {
  label?: string;
  name: string;
  value: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Selecione uma opção'
}: ISelect) {
  return (
    <div className="flex flex-col gap-1 h-13.5">
      {label && (
        <Label
          htmlFor={name}
          className="font-inter font-bold text-[10.4px] leading-[15.6px] tracking-[1.4px] text-surface-light-400 uppercase text-left"
        >
          {label}
        </Label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500"
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
