export default function destructure(character) {
  const { special } = character;
  const array = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    array.push({
      id, name, icon, description,
    });
  });
  return array;
}
