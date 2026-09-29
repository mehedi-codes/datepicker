import React, { useState } from 'react';
import { format, getDaysInMonth, getDay, startOfMonth, addMonths, subMonths } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import type { CalendarProps } from '../types/index';

export const Calendar: React.FC<CalendarProps> = ({
  value = null,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  className = '',
}) => {
  const [displayDate, setDisplayDate] = useState(value ? new Date(value) : new Date());

  const handlePrevMonth = () => {
    setDisplayDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setDisplayDate((prev) => addMonths(prev, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(displayDate.getFullYear(), displayDate.getMonth(), day);

    // Check if date is within min/max range
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;

    onChange?.(newDate);
  };

  const firstDayOfMonth = getDay(startOfMonth(displayDate));
  const daysInMonth = getDaysInMonth(displayDate);
  const monthName = format(displayDate, 'MMMM');
  const year = displayDate.getFullYear();

  const days: (number | null)[] = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isDateDisabled = (day: number): boolean => {
    const date = new Date(year, displayDate.getMonth(), day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isDateSelected = (day: number): boolean => {
    if (!value) return false;
    return (
      day === value.getDate() &&
      displayDate.getMonth() === value.getMonth() &&
      displayDate.getFullYear() === value.getFullYear()
    );
  };

  return (
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-2">
        <button
          onClick={handlePrevMonth}
          disabled={disabled}
          className="p-1 hover:bg-accent rounded-md transition-colors disabled:opacity-50"
          aria-label="Previous month"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold">
          {monthName} {year}
        </h2>

        <button
          onClick={handleNextMonth}
          disabled={disabled}
          className="p-1 hover:bg-accent rounded-md transition-colors disabled:opacity-50"
          aria-label="Next month"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => day && handleDateClick(day)}
            disabled={!day || isDateDisabled(day) || disabled}
            className={`
              w-10 h-10 rounded-md text-sm font-medium transition-colors
              ${
                !day
                  ? 'cursor-default'
                  : isDateSelected(day)
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : isDateDisabled(day)
                      ? 'text-muted-foreground cursor-not-allowed opacity-50'
                      : 'hover:bg-accent text-foreground'
              }
            `}
            aria-label={day ? `${monthName} ${day}, ${year}` : undefined}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};
