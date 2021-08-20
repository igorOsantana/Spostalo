import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { isTokenValid, TOKEN_KEY, USER_ID } from '../../services/auth';
import { database } from '../../services/firebase';

import { CompletedChallenges } from '../../components/CompletedChallenges';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { Countdown } from '../../components/Countdown';
import { ChallengeBox } from '../../components/ChallengeBox';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { CountdownProvider } from '../../contexts/CountdownContext';

import { Container, Header } from '../../styles/pages/home.styles';

export default function Home(props) {
  const gameData = {
    level: props.userData.level,
    currentExperience: props.userData.currentExperience,
    challengesCompleted: props.userData.challengesCompleted,
  };
  return (
    <ChallengesProvider
      userID={props.userID}
      username={props.userData.username}
      avatar={props.userData.photoURL}
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

  const authUserData = await isTokenValid(userToken);
  if (authUserData.error)
    return { props: {}, redirect: { permanent: false, destination: '/sign' } };

  const userData = await database.ref('users').child(userID).get();

  if (userData.exists()) {
    return {
      props: {
        userData: userData.val(),
        userID: userID,
      },
    };
  }

  return { props: {}, redirect: { permanent: false, destination: '/sign' } };
};
