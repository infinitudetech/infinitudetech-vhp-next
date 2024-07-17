export type ListItem = {
  title: string;
  description?: string;
  children?: ListItem[];
  icon?: string;
  href?: string;
};

export type EntryId = {
  sys: {
    id: string;
  }
}