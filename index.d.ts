import { Button, Form, Layout } from 'antd';
import { ButtonProps, ButtonType } from 'antd/lib/button';
import { Component } from 'react';

declare module '@fyl080801/navijs';

export function bootstrap(): void;

export namespace layout {
  function Button(props: ButtonProps & { buttontype?: ButtonType }): JSX.Element;
  function HeaderForm(props: any): JSX.Element;
  function PageLayout(props: any): JSX.Element;
}
