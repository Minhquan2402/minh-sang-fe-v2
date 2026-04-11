import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';

type UserInfo = {
  name?: string;
  email?: string;
};

export function Header() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const syncAuthState = () => {
    const token = localStorage.getItem('userToken');
    const rawUserInfo = localStorage.getItem('userInfo');

    if (!token || !rawUserInfo) {
      setUserInfo(null);
      return;
    }

    try {
      setUserInfo(JSON.parse(rawUserInfo));
    } catch {
      setUserInfo(null);
    }
  };

  useEffect(() => {
    syncAuthState();
    window.addEventListener('storage', syncAuthState);
    return () => window.removeEventListener('storage', syncAuthState);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    navigate('/login');
  };

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                <div>
                  <img
                    src="/assets/logo.jpg"
                    alt="Minh Sang Logo"
                    className="w-10 h-10 object-contain"
                    style={{ borderRadius: '0.5rem' }}
                  />
                </div>
            <div>
              <h1 className="text-xl text-primary-foreground">Dịch Vụ Nấu Ăn Minh Sang</h1>
              <p className="text-xs text-primary-foreground/80">Chất lượng dịch vụ hàng đầu</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <a href="/#book" className="hover:text-accent transition-colors">Book Table</a>
            <a href="/#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
            
            <div className="flex items-center gap-2 ml-4">
              {userInfo ? (
                <>
                  <span className="text-sm text-primary-foreground/90">Hi, {userInfo.name || 'User'}</span>
                  <Button
                    variant="outline"
                    className="text-primary border-primary-foreground hover:bg-primary/20 bg-primary-foreground/10"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="text-primary border-primary-foreground hover:bg-primary/20 bg-primary-foreground/10" size="sm">Log In</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="default" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
