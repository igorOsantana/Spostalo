import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import React from "react";
import { GetServerSideProps } from 'next';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from "../components/ChallengeBox";
import { ConfigButton } from '../components/ConfigButton';
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  toggleTheme: () => void;
}

export default function Home(props: HomeProps) {

  return (
    <>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>Início | Spostalo</title>
          </Head>
          <header className={styles.header}>
            <ExperienceBar />
            <ConfigButton toggleTheme={props.toggleTheme} />
          </header>
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
        </div>
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}