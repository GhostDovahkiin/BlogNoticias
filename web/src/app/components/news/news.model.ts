import { Moment } from 'moment';

export interface News {
  id?: number;
  authorId: number;
  date: Moment;
  hour: Moment;
  categoryId: number;
  title: string;
  description: string;
}
