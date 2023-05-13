export const salaryTextTemplate = (payment_from, payment_to, currency) => {
  const ot =
    payment_from > 0 && payment_to > 0 ? (
      <>
        <span>от</span>&nbsp;
      </>
    ) : (
      ''
    );

  const payment_from_text =
    payment_from > 0 ? (
      <>
        <div>{payment_from}</div>&nbsp;
      </>
    ) : (
      ''
    );

  const dash =
    payment_from > 0 && payment_to > 0 ? (
      <>
        <span>-</span>&nbsp;
      </>
    ) : (
      ''
    );

  const payment_to_text =
    payment_to > 0 ? (
      <>
        <div>{payment_to}</div>&nbsp;
      </>
    ) : (
      ''
    );

  return (
    <>
      {ot} {payment_from_text} {dash} {payment_to_text} {currency}
    </>
  );
};