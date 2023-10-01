export default function getSpecial(character) {
  const array = [];
  character.special.forEach(element => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    array.push({
      id, name, icon, description,
    });
  });
  return array;
}