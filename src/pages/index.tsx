import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import React from "react";
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { GetServerSideProps } from 'next';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from "../components/ChallengeBox";
import { ConfigButton } from '../components/ConfigButton';
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
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
              <ConfigButton toggleTheme={toggleTheme} />
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
      </ThemeProvider>
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