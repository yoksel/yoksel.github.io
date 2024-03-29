import Link from '../Link';

const ErrorMessage = ({ message = 'Страница не найдена' }: { message?: string }) => (
  <>
    <p>{message}</p>
    <p>
      <Link href="/">Вернуться на главную</Link>
    </p>
  </>
);

export default ErrorMessage;
