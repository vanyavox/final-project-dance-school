import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { RootState, useAppDispatch } from '../../../store';
import NewsItem from '../newsItem/NewsItem';
import { deleteNews, loadAsyncNews, updateNews, addNews } from './newsSlice';
import style from './NewsLists.module.css';
import News from './types/News';

function NewsList(): JSX.Element {
  const { news } = useSelector((state: RootState) => state.news);
  const { authChecked, role } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  // delete news item
  const handleRemove = (newsToDelete: News): void => {
    dispatch(deleteNews(newsToDelete.id));
  };
  // update news item
  const handleUpdate = (newsToUpdate: News): void => {
    dispatch(updateNews(newsToUpdate));
  };
  // add news item
  const handleAdd = (newsToAdd: News): void => {
    dispatch(addNews(newsToAdd));
  };
  // modal dialog
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);
  const handleClose = (): void => setActive(!active);

  const { register, handleSubmit } = useForm<News>();

  function onSubmit(data: News): void {
    handleAdd(data);
    handleClose();
  }

  return (
    <div className={style.news_list}>
      <h1>Новости</h1>
      {role === 'admin' &&
      (<button type="button" onClick={handleOpen} className={style.button_add}>Добавить  Новость / Анонс</button>)}

      {active && (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
            <div className={style.modal_form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className={style.input__news} {...register('title')} placeholder="Название" required />
                <textarea className={style.input__news} rows={10} {...register('description')} placeholder="Описание" required />
                <input className={style.input__news} {...register('image')} placeholder="Ссылка на картинку" required />
                <select className={style.input__news} {...register('news_type')} placeholder="Тип события: Новость/ Анонс Турнира" required >
                  <option className={style.option__news}>Новость</option>
                  <option className={style.option__news}>Турнир</option>
                </select>
                <button className={style.button_add} type="submit">Добавить</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div>
        {news.map((oneNews) => (
          <NewsItem
            key={oneNews.id}
            oneNews={oneNews}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
