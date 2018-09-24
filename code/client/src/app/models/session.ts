import { Speaker } from './speaker';

export interface Session {
  id: string;
  title: string;
  abstract: string;
  speaker: Speaker;
}
