
import React from 'react';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { Box, MainGrid, ProfileRelationsBoxWrapper } from '../src/styles/home';

type ProfileSidebarProps = {
  user: string;
};

function ProfileSidebar({ user }: ProfileSidebarProps){
  return (
    <Box>
      <img src={`https://github.com/${user}.png`}/>
    </Box>
  );
}

export default function Home() {
  const githubUser = 'vbuchara';
  const userList = ['enzo789416', 'omariosouto'];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profile-area" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={githubUser}/>
        </div>
        <div className="welcome-area" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="relations-area" style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({userList.length})
            </h2>

            <ul>
              {userList.map((item) => {
                return (
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <Box>
            <h2 className="smallTitle">
              Comunidades
            </h2>
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
