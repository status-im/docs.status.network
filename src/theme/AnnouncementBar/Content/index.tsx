import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

type Props = React.ComponentPropsWithoutRef<'div'>;

export default function AnnouncementBarContent(props: Props): ReactNode {
  const {announcementBar} = useThemeConfig();
  if (!announcementBar?.content) {
    return null;
  }
  const html = translate({
    id: 'theme.announcementBar.docsArchived2026',
    message: announcementBar.content,
    description:
      'Announcement bar HTML notifying readers that the documentation is archived after the Status Network → Linea merger.',
  });
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
}
