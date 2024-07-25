import { openDB } from 'idb';

const initDB = async () => {
  // Open a database
  const db = await openDB('textEditorDB', 1, {
    upgrade(db) {
      // Create a store for storing content if it doesn't already exist
      if (!db.objectStoreNames.contains('content')) {
        db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const putDb = async (content) => {
  const db = await openDB('textEditorDB', 1);
  const tx = db.transaction('content', 'readwrite');
  const store = tx.objectStore('content');
  await store.put({ content });
  await tx.done;
};

export const getDb = async () => {
  const db = await openDB('textEditorDB', 1);
  const tx = db.transaction('content', 'readonly');
  const store = tx.objectStore('content');
  const result = await store.getAll();
  await tx.done;
  return result;
};

// Initialize the database
initDB();