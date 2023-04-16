import { TShirt } from '../types';

export async function fetchTShirts() {
  try {
    const response = await fetch(`/api/TShirt`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function addTShirt(item: Omit<TShirt, 'id'>) {
  try {
    const response = await fetch('/api/TShirt', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function editTShirt(item: TShirt) {
  try {
    const response = await fetch(`/api/TShirt/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteTShirt(item: TShirt) {
  try {
    const response = await fetch(`/api/TShirt/${item.id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}
