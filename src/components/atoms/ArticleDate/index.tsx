import FadedText from '../FadedText';

const ArticleDate = ({ date, className }: { date: string; className?: string }) => {
  return (
    <time
      dateTime={date}
      className={className}
    >
      <FadedText>{date.split('-').reverse().join('/')}</FadedText>
    </time>
  );
};

export default ArticleDate;
