import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { Calendar } from './Calendar';
import type { DatePickerProps } from '../types/index';
import '../index.css';

export const DatePicker: React.FC<DatePickerProps> = ({
  value = null,
  onChange,
  disabled = false,
  placeholder = 'Pick a date',
  format: dateFormat = 'PPP',
  minDate,
  maxDate,
  className = '',
  clearable = true,
}) => {
  const [open, setOpen] = useState(false);

  const handleDateSelect = (date: Date | null) => {
    onChange?.(date);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange?.(null);
  };

  const formattedDate = value ? format(value, dateFormat) : placeholder;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          disabled={disabled}
          className={`datepicker-trigger gap-2 ${className} ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Open date picker"
        >
          <CalendarIcon className="w-4 h-4" />
          <span className={value ? 'text-foreground' : 'text-muted-foreground'}>
            {formattedDate}
          </span>
          {clearable && value && (
            <button
              onClick={handleClear}
              className="ml-auto hover:bg-accent rounded p-0.5"
              aria-label="Clear date"
            >
              <Cross2Icon className="w-3 h-3" />
            </button>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Content align="start" className="datepicker-popover">
        <Calendar
          value={value}
          onChange={handleDateSelect}
          minDate={minDate}
          maxDate={maxDate}
          className="datepicker-calendar"
        />
      </Popover.Content>
    </Popover.Root>
  );
};
