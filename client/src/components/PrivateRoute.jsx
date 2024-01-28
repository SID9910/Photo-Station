import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';


// outlet helps to direct the children page
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}