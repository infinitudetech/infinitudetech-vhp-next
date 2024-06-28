export interface Link {
  label: string;
  href: string;
  description?: string;
  children?: Link[];
}