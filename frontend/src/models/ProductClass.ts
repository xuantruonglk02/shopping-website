import type Line from './ProductLine';

export default interface Class {
  id: string,
  name: string,
  lines: Line[]
}
