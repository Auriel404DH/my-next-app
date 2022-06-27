import Router from 'next/router';
import React from 'react';
import MainLayout from '../components/MainLayout';
import cl from '../styles/error.module.scss';

export default function ErrPage({}) {
  const handleBack = () => {
    Router.push('/');
  };
  
  return (
    <MainLayout title={'Error'}>
      <div className={cl.full}>
        <h1 className={cl.error}> Error 404</h1>
        <h2> Нет таких вот дел...</h2>
        <h4>Вернись туда, откуда пришел.</h4>
        <button className={cl.button} onClick={handleBack}>
          На главную
        </button>
      </div>
    </MainLayout>
  );
}
