import { ProfileRelationsBoxWrapper } from '../styles/home';

export type ProfileRelationProps = {
  id: string,
  name?: string,
  urlImage?: string
};

type ProfileRelationsBoxProps = {
  title: string,
  list: ProfileRelationProps[]
}

export function ProfileRelationsBox({ title, list }: ProfileRelationsBoxProps){
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({list.length})
      </h2>

      <ul>
        {list.map(({ id, name, urlImage }) => {
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
  );
}