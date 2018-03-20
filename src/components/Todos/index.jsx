import React from 'react';
import Todo from 'components/Todo';

const Todos = ({ items, remove }) => (
  <div>
    {items.length > 0
      ? items.map((item, i) =>
          <Todo
            key={i}
            value={item.value}
            onRemove={() => remove(item.id)}
          />
        )
      : 'No items'}
  </div>
);

export default Todos;
