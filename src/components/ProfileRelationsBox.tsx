import { useState, useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';

import { ProfileRelationsBoxWrapper } from '../styles/home';

export type ProfileRelationProps = {
  id: string,
  name?: string,
  urlImage?: string,
  link?: string
};

type ProfileRelationsBoxProps = {
  title: string,
  list: ProfileRelationProps[],
  redirect: string,
  isLoading?: boolean
}

export function ProfileRelationsBox({ title, list, isLoading, redirect }: ProfileRelationsBoxProps){
  const { colors } = useContext(ThemeContext);

  return (
    <ProfileRelationsBoxWrapper>
      {isLoading ? (
        <Loader type="TailSpin" color={colors.secondaryText} height={60} width={60} />
        ) : (
          <>
            <h2 className="smallTitle">
              {title} ({list.length})
            </h2>

            <ul>
              {list.slice(0, 6).map(({ id, name, urlImage, link }) => {
                return (
                  <li key={id}>
                    <a href={link}>
                      <img src={urlImage} />
                      <span>{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            {(list.length > 6) && (
              <a className="redirect" href={redirect}>
                Ver todos 
              </a>
            )}
          </>
        )}
    </ProfileRelationsBoxWrapper>
  );
}