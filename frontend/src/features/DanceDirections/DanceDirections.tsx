import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DanceDirections(): JSX.Element {
  const navigate = useNavigate();

  const rotateBack = (): void => {
    navigate(-1);
  }

  return (
    <div>
      <h1>Направления занятий в школе</h1>
      <div>
        <p>Латиноамериканские танцы</p>
        <p>
          — общее название бальных и народных танцев, сформировавшихся на территории Латинской Америки. Подобно тому как сама Латинская Америка появилась в результате испано-португальской колонизации, то и латиноамериканские танцы в основе имели преимущественно испанское влияние.

          Танцы хабанера и румба появились на основе завезенного в XVIII веке контрданса, а бачата — на основе болеро. В бразильской самбе, колумбийской кумбии, кубинских мамбе и румбе, помимо европейских традиций прослеживаются и африканские, а в диабладе — индейские. Уникальным латиноамериканским танцем признано танго.[1]

          К характерным чертам латиноамериканских танцев относят энергичные, страстные зажигательные движения и покачивание бедрами.

          Платья дам, как правило, короткие, очень открытые и облегающие. Костюмы кавалеров тоже очень облегающие, часто (но не всегда) черного цвета. Смысл таких костюмов — показать работу мышц спортсменов.

          В XX веке наблюдается расцвет латиноамериканских танцев. Появляются такие новые виды как сальса, ча-ча-ча, мамбо, ламбада, зук, кизомба, бачата, меренге, хастл, аргентинские танго и вальс-танго, реггетон и другие, которые стали относиться к категории так называемых клубных танцев (в противовес бальным). Некоторые латиноамериканские танцы были перенесены на лёд и ныне входят в обязательную программу спортивных танцев на льду (ча-ча конгеладо, румба, серебряная самба, танго, танго романтика и аргентинское танго).

          В настоящее время в программу латиноамериканских бальных танцев входят 5 элементов:

          Самба
          Ча-ча-ча
          Румба
          Пасодобль
          Джайв
        </p>
      </div>
      <div>
        <p>Стандарт</p>
        <p>В Европейскую программу (Modern или Standard) входят 5 танцев: квикстеп (темп — 50-52 тактов в минуту), медленный вальс (темп — 28-29 тактов в минуту), танго (темп — 30-32 тактов в минуту), медленный фокстрот (темп — 27-29 тактов в минуту), и венский вальс (темп — 58-60 тактов в минуту). В эту программу должны быть одеты в соответствующие требованиям бальные платья. Кавалеры должны быть одеты во фраки чёрного или тёмно-синего цвета и носить бабочку или галстук. Вместо фрака разрешено танцевание в смокинге или в жилете. Современный танцевальный костюм отличается от повседневного в первую очередь покроем, одна из особенностей которого в том, что плечи костюма партнёра должны оставаться ровными, когда руки поднимаются в стороны.</p>
      </div>
      <div>
        <p>Двоеборье</p>
        <p>В программу десяти танцев, или так называемой "десятки", включены все танцы европейской и латиноамериканской программ. В каждой части турнира танцорам приходится менять костюмы переходя от европейской программы к латиноамериканской и наоборот. Танцоры, исполняющие десять танцев, являются универсальными.</p>
      </div>
      <button onClick={rotateBack}>Назад</button>
    </div>
  );
}

export default DanceDirections;
