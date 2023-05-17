import { FC, useEffect, useRef } from 'react';
import s from './VacancyDescription.module.scss';
import { parseHtml } from '../../../helpers/parseHtml';

interface IVacancyDescription {
  vacancyRichText: string;
}

export const VacancyDescription: FC<IVacancyDescription> = (props) => {
  const { vacancyRichText } = props;
  const richText = useRef<any>('');

  useEffect(() => {
    if (richText.current) {
      richText.current.innerHTML = parseHtml(vacancyRichText);
    }
  }, [vacancyRichText]);

  return (
    <div className={s.description_container}>
      <div className={s.vacancyRichText} ref={richText}>
        {parseHtml(vacancyRichText)}
      </div>
    </div>
  );
};
