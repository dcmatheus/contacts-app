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

export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string,
  invalidCredential?: string
}

export interface Contact {
  name: string;
  email: string;
  mobile: string;
}

export interface ContactResponse extends Contact {
  id: number;
}

export interface HeaderCellProps {
  children: React.ReactNode,
  sm?: Boolean,
  md?: Boolean,
}

export interface ContactsContext {
  contacts: ContactResponse[];
  setContacts: (contacts: ContactResponse[]) => void;
  addContact: (newContact: Contact) => void;
  addContacts: (newContacts: ContactResponse[]) => void;
  deleteContact: (id: number) => void;
  editContact: (id: number, contact: Contact) => void;
}
