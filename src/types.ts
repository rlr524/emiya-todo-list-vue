export interface Item {
  id: string
  title: string
  itemDescription: string | null
  due: Date | null
  complete: boolean | null
  importance: string | null
  owner: string
  deleted: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ItemState {
  items: Item[];
  loading: boolean;
  error: string | null;
}
