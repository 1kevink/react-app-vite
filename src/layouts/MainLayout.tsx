import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export default function MainLayout() {
  return (
    <div className="mainLayout">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
