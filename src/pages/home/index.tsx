import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { isAuthenticated, TOKEN_KEY, USER_ID } from '../../services/auth';
import { database } from '../../services/firebase';

import { CompletedChallenges } from '../../components/CompletedChallenges';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { Countdown } from '../../components/Countdown';
import { ChallengeBox } from '../../components/ChallengeBox';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { CountdownProvider } from '../../contexts/CountdownContext';

import { Container, Header } from '../../styles/pages/home.styles';

export default function Home(userData) {
  console.log(userData);
  const gameData = {
    level: userData.level,
    currentExperience: userData.currentExperience,
    challengesCompleted: userData.challengesCompleted,
  };
  return (
    <ChallengesProvider
      username={userData.username}
      avatar={userData.photoURL}
      game={gameData}
    >
      <Container>
        <Head>
          <title>Home | Spostalo</title>
        </Head>
        <Header>
          <ExperienceBar />
        </Header>
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const userToken = ctx.req.cookies[TOKEN_KEY];
  const userID = ctx.req.cookies[USER_ID];

  if (!userToken || !userID)
    return { props: {}, redirect: { permanent: false, destination: '/sign' } };

  const authUserData = await isAuthenticated(userToken);
  if (authUserData.error)
    return { props: {}, redirect: { permanent: false, destination: '/sign' } };

  const userData = await database.ref('users').child(userID).get();
  if (userData.exists()) {
    return {
      props: userData.val(),
    };
  }

  return { props: {}, redirect: { permanent: false, destination: '/sign' } };
};
