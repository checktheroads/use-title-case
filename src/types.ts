export type UseTitleCaseFn = (title: string) => string;

export type UseTitleCaseOptions = {
  overrides?: string[];
  useBuiltIns?: boolean;
};

export type UseTitleCaseOptionsKeys = keyof UseTitleCaseOptions;

export type MergedUseTitleCaseOptions = {
  [K in UseTitleCaseOptionsKeys]: NonNullable<UseTitleCaseOptions[K]>;
};
