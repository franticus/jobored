import DOMPurify from 'dompurify';

export const parseHtml = (vacancyText) => {
  if (vacancyText) {
    return DOMPurify.sanitize(vacancyText);
  }

  return '';
};
