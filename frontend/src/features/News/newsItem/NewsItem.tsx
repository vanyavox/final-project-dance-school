import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import News from '../newsList/types/News';
import style from './NewsItems.module.css';

interface NewsPropsm {
  oneNews: News;
  handleRemove: (oneNews: News) => void
  handleUpdate: (oneNews: News) => void
}

function NewsItem({ oneNews, handleRemove, handleUpdate }: NewsPropsm): JSX.Element {
  // modal dialog
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);
  const handleClose = (): void => setActive(false);

  const { authChecked, role } = useSelector((state: RootState) => state.user);
  // useform
  const { register, handleSubmit } = useForm<News>();

  function onSubmit(data: News): void {
    const value: News = {
      id: oneNews.id,
      title: data.title,
      image: data.image,
      description: data.description,
      news_type: data.news_type
    };
    handleUpdate(value);
    handleClose();
  }

  return (
    <div id={String(oneNews.id)} className={style.news}>
      <h4>{oneNews.news_type} {oneNews.title}</h4>
      <div className={style.news_item}>
        <img src={oneNews.image} alt="News_image" className={style.img_news} />
        <p className={style.description}>{oneNews.description}</p>
      </div>
          {authChecked && role === 'admin' && (
            <>
            <button className={style.button_edit} type="button" onClick={handleOpen}>Редактировать</button>
            <button className={style.btn_delete} type="button" onClick={() => handleRemove(oneNews)}>Удалить</button>
            </>
          )}

      {active && (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
            <div className={style.modal_form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={oneNews.title} className={style.input__news} {...register('title')} required />
                <br />
                <textarea className={style.input__news} rows={10} defaultValue={oneNews.description} {...register('description')} required />
                <br />
                <input defaultValue={oneNews.image} className={style.input__news} {...register('image')} required />
                <br />
                <input defaultValue={oneNews.news_type} className={style.input__news} {...register('news_type')} required />
                <br />
                <button type="submit" className={style.button_edit}>Обновить</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsItem;
