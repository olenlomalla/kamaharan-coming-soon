const SITE_PASSWORD = 'GrowRiver247';

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  
  const storedAuth = localStorage.getItem('site_auth');
  return storedAuth === SITE_PASSWORD;
};

export const authenticate = (password: string) => {
  if (password === SITE_PASSWORD) {
    localStorage.setItem('site_auth', password);
    return true;
  }
  return false;
};