import React from 'react';
import Router from '../../node_modules/next/router';
import MainLayout from '../../components/MainLayout';

export default function About({ title }) {
  const linkHandler = () => {
    Router.push('/');
  };

  return (
    <MainLayout>
      <h1>{title}</h1>
      <button onClick={linkHandler}>GO Home</button>
      <button onClick={() => Router.push('/')}>GO Home Line</button>
      <button onClick={() => Router.push('/posts')}>GO Posts Line</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const resp = await fetch(`${process.env.API_URL}/about`);
  const data = await resp.json();

  return {
    title: data.title,
  };
};
