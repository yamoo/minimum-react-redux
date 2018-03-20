export const findItemIndexById = (items, id) =>
  items.findIndex(item => item.id === id);

export const addNewItem = (items, id, value) =>
  items.concat({ id, value });

export const removeItemById = (items, id) => {
  const index = findItemIndexById(items, id);
  return [].concat(items.slice(0, index), items.slice(index + 1));
}

export const updateItemById = (items, id, value) => {
  const index = findItemIndexById(items, id);
  return [].concat(items.slice(0, index), { id, value }, items.slice(index + 1));
}
