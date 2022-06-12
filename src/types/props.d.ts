export interface PageTitleProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export interface InputLabelProps {
  label: string;
  placeholder: string;
  type: string;
  value?: string | number;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HeaderProps {
  text?: string;
  path: string;
}

export interface HeaderCellProps {
  children: React.ReactNode,
  sm?: Boolean,
  md?: Boolean,
}
