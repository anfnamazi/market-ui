// @flow

import { Accordion } from '@mantine/core';
import { IconCircleMinus, IconCirclePlus } from '@tabler/icons-react';
import { useState } from 'react';
import classes from './Accordion.module.css';

type Props = {
  data: {
    title: string;
    body: string;
  }[];
};
export const Accordions = (props: Props) => {
  const [value, setValue] = useState<string | null>('2');
  const items = props.data.map((item, index) => (
    <Accordion.Item key={`${index}`} value={`${index}`} mt={8} px={8} className={classes.accordion}>
      <Accordion.Control
        chevron={
          value === `${index}` ? <IconCircleMinus size={20} /> : <IconCirclePlus size={20} />
        }
      >
        {item.title}
      </Accordion.Control>
      <Accordion.Panel style={{ borderTop: '1px solid #ECECEC', textAlign: 'start' }}>
        {item.body}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="separated" radius="lg" value={value} onChange={setValue}>
      {items}
    </Accordion>
  );
};
