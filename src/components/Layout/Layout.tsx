import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
