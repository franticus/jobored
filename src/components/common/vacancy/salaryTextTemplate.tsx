export const salaryTextTemplate = (
  payment_from: number,
  payment_to: number,
  currency: string
) => {
  let result = 'з/п ';

  if (payment_from && payment_to && payment_from === payment_to) {
    result = result + ' ' + payment_from + ` ${currency}`;
  } else if (payment_from && payment_to) {
    result = result + payment_from + ' - ' + payment_to + ` ${currency}`;
  } else if (payment_from) {
    result = result + ' от ' + payment_from + ` ${currency}`;
  } else if (payment_to) {
    result = result + ' до ' + payment_to + ` ${currency}`;
  } else {
    result = result + ' не указана';
  }

  return result;
};


// export const salaryTextTemplate = (
//   payment_from: number,
//   payment_to: number,
//   currency: string
// ) => {
//   const ot =
//     payment_from > 0 && payment_to > 0 ? (
//       <>
//         <span>от</span>&nbsp;
//       </>
//     ) : (
//       ''
//     );

//   const payment_from_text =
//     payment_from > 0 ? (
//       <>
//         <div>{payment_from}</div>&nbsp;
//       </>
//     ) : (
//       ''
//     );

//   const dash =
//     payment_from > 0 && payment_to > 0 ? (
//       <>
//         <span>-</span>&nbsp;
//       </>
//     ) : (
//       ''
//     );

//   const payment_to_text =
//     payment_to > 0 ? (
//       <>
//         <div>{payment_to}</div>&nbsp;
//       </>
//     ) : (
//       ''
//     );

//   return (
//     <>
//       {ot} {payment_from_text} {dash} {payment_to_text} {currency}
//     </>
//   );
// };
