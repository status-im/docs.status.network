import React, {type ComponentProps, type ReactNode} from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';

type FormatterProp = ComponentProps<typeof TitleFormatterProvider>['formatter'];

const formatter: FormatterProp = ({title, siteTitle}) => {
  const trimmedTitle = title.trim();
  return trimmedTitle ? trimmedTitle : siteTitle;
};

export default function ThemeProviderTitleFormatter({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <TitleFormatterProvider formatter={formatter}>
      {children}
    </TitleFormatterProvider>
  );
}
