export type DeepPartial<T> = Partial<{
  [K in keyof T]: T[K] extends object ? Partial<T[K]> : T[K];
}>;
