
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { ProfileRelationsBox, ProfileRelationProps } from '../src/components/ProfileRelationsBox';
import { ProfileSidebar } from '../src/components/ProfileSidebar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { Box, MainGrid, FormOptionsButtons } from '../src/styles/home';

export default function Home() {
  const githubUser = 'vbuchara';

  //Loading states
  const [ followingLoading, setFollowingLoading ] = useState(true);
  const [ communityLoading, setCommunityLoading ] = useState(true);
  const [ createCommunityLoading, setCreateCommunityLoading ] = useState(true);
  
  //Change Form state
  const [ activatedForm, setActivatedForm ] = useState('community');

  //Users and Communities Lists States
  const [ userList, setUserList ] = useState<ProfileRelationProps[]>([]);
  const [ communities, setCommunities ] = useState<ProfileRelationProps[]>([]);

  //Form states
  const [ name, setName ] = useState('');
  const [ urlImage, setUrlImage ] = useState('');
  const [ link, setLink ] = useState('');

  useEffect(() => {
    (async() => {
      //Getting User Followers
      const githubApiResponse = await fetch('https://api.github.com/users/vbuchara/following');
      const githubFollowingInfo = await githubApiResponse.json();
      const formattedUsersArray: ProfileRelationProps[] = [];

      githubFollowingInfo.map(({ id, login, avatar_url }) => {
        formattedUsersArray.push({
          id: id,
          name: login,
          urlImage: avatar_url,
          link: `/users/${login}`
        });
      });

      setUserList(formattedUsersArray);
      setFollowingLoading(false);

      // Get Communities from DatoCMS
      const datoCommunityResponse = await fetch('/api/communities', 
        { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      const dataObject = await datoCommunityResponse.json();
      const formattedCommunitiesArray: ProfileRelationProps[] = [];
      
      dataObject.map(({ title, communityid, imageurl, communitylink }) => {
        formattedCommunitiesArray.push({
          id: communityid,
          name: title,
          urlImage: imageurl,
          link: communitylink
        });
      });

      setCommunities(formattedCommunitiesArray);
      setCommunityLoading(false);
    })()
  },[]);

  async function handleCreateCommunity(event: React.FormEvent){
    event.preventDefault();

    if(name.trim() === '' || urlImage == ''){
      return;
    }

    const newCommunity = {
      id: v4(),
      name: name,
      urlImage: urlImage,
      link: link,
      creator: githubUser,
      createdAt: new Date()
    };

    const response = await fetch('/api/communities', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCommunity)
    });
    const record = await response.json();
    const formattedRecord: ProfileRelationProps = {
      id: record.communityid,
      name: record.title,
      urlImage: record.imageurl,
      link: record.communitylink
    }
    
    setCommunities([formattedRecord, ...communities]);

    setName('');
    setUrlImage('');
    setLink('');
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
            <FormOptionsButtons>
              <button 
                className={(activatedForm == 'community') ? "isActive" : ""}
                onClick={() => setActivatedForm('community')}
              >
                Criar comunidade
              </button>
              <button 
                className={(activatedForm == 'brief') ? "isActive" : ""}
                onClick={() => setActivatedForm('brief')}
              >
                Escrever depoimento
              </button>
              <button 
                className={(activatedForm == 'scrap') ? "isActive" : ""}
                onClick={() => setActivatedForm('scrap')}
              >
                Deixar um scrap
              </button>
            </FormOptionsButtons>
            <form 
              onSubmit={handleCreateCommunity} 
              style={(!(activatedForm == 'community')) ? { display: 'none' } : {}}
            >
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
              <div>
                <input 
                  placeholder="Coloque o link para sua comunidade" 
                  name="link" 
                  aria-label="Coloque o link para sua comunidade"
                  type="text"
                  onChange={event => setLink(event.target.value)}
                  value={link}
                />
              </div>

              <button className="submit">
                Confirmar Envio
              </button>
            </form>
            <form 
              style={(!(activatedForm == 'brief')) ? { display: 'none' } : {}}
            >
              <div>
                <textarea
                  placeholder="Escreva aqui seu depoimento"
                  aria-label="Escreva aqui seu depoimento"
                />
              </div>

              <button className="submit">
                Confirmar Envio
              </button>
            </form>
          </Box>
        </div>
        <div className="relations-area" style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBox 
            title="Seguidores" 
            list={userList} 
            isLoading={followingLoading}
            redirect={`https://github.com/${githubUser}?tab=following`}
          />
          <ProfileRelationsBox 
            title="Comunidades" 
            list={communities} 
            isLoading={communityLoading}
            redirect={''}
          />
        </div>
      </MainGrid>
    </>
  );
}
