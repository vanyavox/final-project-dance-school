import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncTeachers } from '../TeacherList/teacherSlice';
import style from './lessoncss.module.css';
import TeachersDiv from './TeachersDiv';

function LessonForm():JSX.Element {
  const { teachers } = useSelector((state:RootState) => state.teachers);
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(addAsyncTeachers());
  }, []);

  return (
  <div className={style.form__div}>
    <div className={style.table__main}>
      <div className={style.table__line}>
          <p className={style.table__teachers}>Преподаватели</p>
          <div className={style.table__header}>
              <p className={style.table__td}>пн</p>
              <p className={style.table__td}>вт</p>
              <p className={style.table__td}>ср</p>
              <p className={style.table__td}>чт</p>
              <p className={style.table__td}>пт</p>
              <p className={style.table__td}>сб</p>
              <p className={style.table__td}>вс</p>
          </div>
      </div>
      {teachers.map((teacher) => (
         <TeachersDiv key={teacher.id} teacher={teacher} />
      ))}
    </div>
  </div>
  );
}
export default LessonForm;
