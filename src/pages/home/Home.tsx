import React from 'react';
import {TitleComponent} from "../../components/title/Title.component";

type HomeProps = {}

export const Home: React.FC<HomeProps> = (props) => {
  return (
    <>
      <TitleComponent>Home works! <span className="header">aaa</span></TitleComponent>
    </>
  )
}
