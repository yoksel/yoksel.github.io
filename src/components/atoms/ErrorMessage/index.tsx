const ErrorMessage = ({ message = 'Страница не найдена' }: { message?: string }) => (
  <>
    <p>{message}</p>
    <p>
      <a href="/">Вернуться на главную</a>
    </p>
  </>
);

export default ErrorMessage;
