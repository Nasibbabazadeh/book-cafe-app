import React from 'react';


export type TNullable<T> = T | null;

export type TOptional<T> = T | undefined;

type TAsProp<C extends React.ElementType> = {
  as?: C;
};

type TPropsToOmit<C extends React.ElementType, P> = keyof (TAsProp<C> & P);

export type TPolymorphicComponentProps<C extends React.ElementType, P = unknown> = React.PropsWithChildren<
  P & TAsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, TPropsToOmit<C, P>>;


