import * as Yup from 'yup';

Yup.addMethod(Yup.number, 'ignoreEmptyString', function () {
  return this.transform((value) => {
    if (Number.isNaN(value)) return undefined;

    return value;
  });
});

declare module 'yup' {
  interface NumberSchema {
    ignoreEmptyString(): NumberSchema;
  }
}

export const yup = Yup;
export type yup = typeof Yup;
