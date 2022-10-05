export type LinkEntryProps = {
  name: string;
  link: string;
  icon?: string;
};

import { Card, Container } from '@nextui-org/react';
import Link from 'next/link';

const LinkEntry = ({ name, link, icon }: LinkEntryProps) => (
  <Container xs>
    <Card
      isPressable
      isHoverable
    >
      <Card.Body>
        <Link
          href={link}
          className="entry"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
            }}
          >
            {name}
            {icon && <i className={icon} />}
          </div>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);

export default LinkEntry;
