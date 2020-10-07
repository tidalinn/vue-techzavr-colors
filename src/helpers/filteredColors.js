export default function filteredColors(colors, product) {
  const keys = Object.keys(colors);
  const values = Object.values(colors);
  const actualColors = [];

  for (let i = 0; i < keys.length; i += 1) {
    if (product.colorsId.includes(values[i].id)) {
      actualColors.push(
        { 
          id: values[i].id,
          color: values[i].color,
        },
      );
    }
  }
  return actualColors;
}