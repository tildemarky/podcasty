import Nav from './Nav';
import Player from './Player';
import tw, { styled, theme } from 'twin.macro';
import Link from 'next/link';
import Head from 'next/head';
import common from '../../locales/en/common';

const Layout = ({ children, playing }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>{common.title}</title>
        <meta name="viewport" content="width=device-width"></meta>
        <meta
          name="description"
          content="Podcasti is the ultimate place to listen to your favorite podcasts for free, keep up with your favorite hosts, explore and discover new shows from every genre around from news to entertainment to comedy!"
        ></meta>
        <meta name="theme-color" content={theme`colors.bg`}></meta>
      </Head>
      <StyledHeader>
        <Link href="/" passHref>
          <a>
            <Title>{common.title}</Title>
          </a>
        </Link>
        <Nav />
      </StyledHeader>

      {children}
      {playing.playing.length >= 1 ? (
        <Player playing={playing.playing} name={playing.name} img={playing.img} author={playing.author} />
      ) : null}
    </>
  );
};

export default Layout;

const StyledHeader = styled.header`
  > button,
  > a {
    margin: 1rem;
  }
  color: ${theme`colors.main`};
  ${tw`fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-24 ml-auto mr-auto backdrop-filter backdrop-blur-xl`}
`;
const Title = tw.h1`text-xl font-bold sm:(text-3xl) lg:(text-4xl font-black)`;
