import { AlurakutProfileSidebarMenuDefault } from '../lib/AlurakutCommons';
import { Box } from '../styles/home';

type ProfileSidebarProps = {
  user: string;
};

export function ProfileSidebar({ user }: ProfileSidebarProps){
  return (
    <Box as="aside">
      <img src={`https://github.com/${user}.png`}/>
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${user}`}>
          @{user}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}