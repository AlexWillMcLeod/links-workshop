import type { NextPage } from 'next';
import Head from 'next/head';
import LinkEntry from '../components/LinkEntry';
// @ts-ignore
import { links, name } from '/config.json';
import { Avatar, Text, Card, Container } from '@nextui-org/react';
import Confetti from 'react-confetti';

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div
      className="app"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'radial-gradient(circle farthest-corner at center center, #F6F8F9 0%, #E5EBEE 30%, #D7DEE3 60%, #F5F7F9 100%)',
      }}
    >
      <Confetti />
      <Container xs>
        <Card
          css={{
            padding: '2rem',
            border: 'black',
          }}
        >
          <Card.Body>
            <Head>
              <title>My Links</title>
              <meta
                name="description"
                content={`${name}'s Links`}
              />
              <link
                rel="icon"
                href="/favicon.ico"
              />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
              />
            </Head>

            <main>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Avatar
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQFtfOfWwiCcsQ/profile-displayphoto-shrink_400_400/0/1663838700645?e=1670457600&v=beta&t=2PinXfagTN2xwGr_-XZZ73-VhYSCEF-OtDmHGcr8Y54"
                  css={{
                    size: '6rem',
                  }}
                ></Avatar>
                <Text
                  size={40}
                  color="gradient"
                  css={{
                    fontFamily: 'Product Sans',
                    fontWeight: 'bold',
                    textGradient: '45deg, $blue600 -20%, $pink600 50%',
                  }}
                >
                  Alex McLeod
                </Text>
              </div>
              <div
                style={{
                  width: 'fit-content',
                  display: 'flex',
                  flexDirection: 'column',
                  aspectRatio: '1 / 1',
                  gap: '2rem',
                }}
              >
                {links.map(LinkEntry)}
              </div>
            </main>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
