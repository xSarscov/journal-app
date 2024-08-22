import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { authStatus } from '../store/auth';

import { useCheckAuth } from '../hooks';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if ( status === authStatus.checking ) return <CheckingAuth />

  return (
    <Routes>

      {
        ( status === authStatus.authenticated ) 
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="auth/*" element={ <AuthRoutes /> } />
      }

      <Route path="/*" element={ <Navigate to='/auth/login' /> } />

    </Routes>
  )
}
