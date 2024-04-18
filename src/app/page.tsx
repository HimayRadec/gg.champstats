import Image from 'next/image';
import '@/styles/landingPage.css';

import Settings from '@/components/settings';
import Bell from '@/components/bell';
import Messages from '@/components/messages';

export default function Home() {
  return (
    <main>
      <nav className="side-nav">
        Nav
      </nav>
      <div className="body">
        <header >
          <Messages />
          <Settings />
          <Bell />
          <button className="login-button">Login</button>
        </header>
        <div className="container">
          <div className="col-container">
            <div className="col1">
              <div className="row1">
                <div className="radec-text">Radec</div>
                <div>
                  <Image
                    src="/lol-logo.png"
                    alt="League of Legends logo"
                    className="lol-image"
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
              </div>
              <div className="row2">
                <input name="search" className='search-home' placeholder="Search Yourself or a Champion" />
              </div>
              <div className="row3">
                <Image
                  src="/lol-cover-image.jpg"
                  alt="League of Legends cover image"
                  className="lol-cover-image"
                  width={800}
                  height={400}
                  quality={100}
                />
              </div>
            </div>
            <div className="col2">
              Download now
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}