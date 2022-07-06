import Nav from './Nav';
import Masthead from './Masthead';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Masthead />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
