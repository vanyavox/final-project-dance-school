import React from 'react';
import style from './About.module.css';

function About():JSX.Element {
  return (
    <div className={style.about}>
      <h1>О ШКОЛЕ</h1>
      <p>Школа балета «Гармония» — уникальный проект в области хореографии, не просто детская балетная школа или студия балета, а мир красоты и грации, в котором балет для ребёнка — это не просто урок, а шанс подробно узнать и полюбить один из сложнейших видов искусств, понимание которого формирует прекрасный вкус и умение отличать истинное от сиюминутного. Посещение уроков балета, классической хореографии дает возможность достичь успехов в любом виде танца. Ведь классика — это основа всех основ. Хореография для детей — это возможность сформировать красивую осанку, развить музыкальный слух, координацию, стать более гибкими, стройными и уверенными в себе.</p>
    </div>
  );
}

export default About;
