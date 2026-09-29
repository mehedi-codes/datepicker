export interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  disabled?: boolean;
  placeholder?: string;
  format?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  showTime?: boolean;
  clearable?: boolean;
  inline?: boolean;
}

export interface CalendarProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
}
