// function declines words 
// @num - number in accordance with the declination is produced
// @expressions - massive of declined words like ['товар', 'товара', 'товаров']

export default function wordDecline(num, expressions) {
  let result;
  let count = num % 100;

  if (count >= 5 && count <= 20) {
    result = expressions['2'];
  } else {
    count %= 10;
    if (count === 1) {
      result = expressions['0'];
    } else if (count >= 2 && count <= 4) {
      result = expressions['1'];
    } else {
      result = expressions['2'];
    }
  }
  return result;
}