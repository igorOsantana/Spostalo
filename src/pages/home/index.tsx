import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { TOKEN_KEY } from '../../services/auth';
import { database, storage } from '../../services/firebase';

import { CompletedChallenges } from '../../components/CompletedChallenges';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { Countdown } from '../../components/Countdown';
import { ChallengeBox } from '../../components/ChallengeBox';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { CountdownProvider } from '../../contexts/CountdownContext';

import { Container, Header } from '../../styles/pages/home.styles';
import { firebaseAdmin } from '../../services/firebase_admin';

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const {
    userData: { id, avatar, data },
  } = props;
  const gameData = {
    level: data.level,
    currentExperience: data.currentExperience,
    challengesCompleted: data.challengesCompleted,
  };

  return (
    <ChallengesProvider
      userID={id}
      username={data.username}
      avatar={avatar ? avatar : data.photoUrl}
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

  if (!userToken)
    return {
      props: {} as never,
      redirect: { permanent: false, destination: '/sign' },
    };

  try {
    const authUser = await firebaseAdmin.auth().verifyIdToken(userToken);
    const userID = authUser.uid;
    const hasSignInWithGoogle =
      authUser.firebase.sign_in_provider === 'google.com';

    const userProfile = await database.ref('users').child(userID).get();

    if (userProfile.exists() && !hasSignInWithGoogle) {
      const userAvatar = await storage
        .ref('images/users')
        .child(userID)
        .child('avatar')
        .getDownloadURL();

      return {
        props: {
          userData: {
            id: userID,
            avatar: userAvatar,
            data: userProfile.val(),
          },
        },
      };
    } else if (userProfile.exists()) {
      const userData = userProfile.val();
      return {
        props: {
          userData: {
            id: userID,
            avatar: userData.photoUrl,
            data: userData,
          },
        },
      };
    }
  } catch (error) {
    return {
      props: {} as never,
      redirect: { permanent: false, destination: '/sign' },
    };
  }
};
