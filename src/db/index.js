let request;
let db;
let version = 1;

export const Stores = {
  Highlights: "hightlights",
};

export const initDB = () => {
  return new Promise((resolve) => {
    // open the conneciton
    request = indexedDB.open("quote_book");

    // if the data object store doesn't exist, create it
    request.onupgradeneeded = (e) => {
      db = e.target.result;

      if (!db.objectStoreNames.contains(Stores.Highlights)) {
        console.log("Creating quote book store");
        db.createObjectStore(Stores.Highlights, { keyPath: "id" });
      }
      // no need to resolve here
    };

    request.onsuccess = (e) => {
      db = e.target.result;
      version = db.version;
      console.log("request.onsuccess - initDB", version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

export const addData = (storeName, data) => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open("quote_book");

    request.onsuccess = (e) => {
      db = e.target.result;
      console.log("request.onsuccess - addData", data);
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve("Unknown Erorr");
      }
    };
  });
};

export const addDataInBulk = (storeName, data) => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open("quote_book");

    request.onsuccess = (e) => {
      db = e.target.result;
      console.log("request.onsuccess - addData", data);
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      data.forEach((item) => {
        store.add(item);
      });
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve("Unknown Erorr");
      }
    };
  });
};

export const deleteData = (storeName, key) => {
  return new Promise((resolve) => {
    request = indexedDB.open("quote_book", version);

    request.onsuccess = (e) => {
      console.log("request.onsuccess - deleteData", key);
      db = e.target.result;

      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.delete(key);
      res.onsuccess = () => {
        resolve(true);
      };
      res.onerror = () => {
        resolve(false);
      };
    };
  });
};

export const updateData = (storeName, key, data) => {
  return new Promise((resolve) => {
    request = indexedDB.open("quote_book", version);

    request.onsuccess = (e) => {
      console.log("request.onsuccess - updateData", key);
      db = e.target.result;

      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.get(key);
      res.onsuccess = () => {
        const newData = { ...res.result, ...data };
        store.put(newData);
        resolve(true);
      };
      res.onerror = () => {
        resolve(null);
      };
    };
  });
};

export const getStoreData = (storeName) => {
  return new Promise((resolve) => {
    request = indexedDB.open("quote_book", version);

    request.onsuccess = (e) => {
      console.log("request.onsuccess - getStoreData");
      db = e.target.result;

      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};
