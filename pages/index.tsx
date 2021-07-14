
import React, { useState } from 'react';
import { v4 } from 'uuid';

import { ProfileSidebar } from '../src/components/ProfileSidebar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { Box, MainGrid, ProfileRelationsBoxWrapper } from '../src/styles/home';

type CommunityProps = {
  id: string,
  name?: string,
  urlImage?: string
};

export default function Home() {
  const githubUser = 'vbuchara';
  const userList = ['enzo789416', 'omariosouto'];
  const [ name, setName ] = useState('');
  const [ urlImage, setUrlImage ] = useState('');
  const [ communities, setCommunities ] = useState<CommunityProps[]>([]);

  async function handleCreateCommunity(event: React.FormEvent){
    event.preventDefault();

    if(name.trim() === '' || urlImage == ''){
      return;
    }

    const newCommunity = {
      id: v4(),
      name: name,
      urlImage: urlImage
    };

    setCommunities([...communities, newCommunity]);
    console.log(communities);

    setName('');
    setUrlImage('');
  }

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div className="profile-area" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={githubUser}/>
        </div>
        <div className="welcome-area" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>

            <OrkutNostalgicIconSet slug={2} trust={2} cool={3} sexy={1} />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCreateCommunity}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque a URL de uma imagem para a capa" 
                  name="image" 
                  aria-label="Coloque a URL de uma imagem para a capa"
                  type="text"
                  onChange={event => setUrlImage(event.target.value)}
                  value={urlImage}
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
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
                      <img src={`https://github.com/${item}.png`} alt="Failed to load" />
                      <span>{item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>

            <ul>
              {communities.map(({ id, name, urlImage }) => {
                return (
                  <li key={id}>
                    <a href={`/users/${name}`}>
                      <img src={urlImage} />
                      <span>{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
