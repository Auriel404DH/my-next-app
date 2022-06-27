import NextNProgress from 'nextjs-progressbar';
import cl from '../styles/app.module.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={cl.body}>
      <NextNProgress
        color="purple"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </div>
  );
}
