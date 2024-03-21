const storage_prefix = "sbbl_react_";

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storage_prefix}token`));
  },
  setToken: (token) => {
    console.log("setToken", token);
    window.localStorage.setItem(
      `${storage_prefix}token`,
      JSON.stringify(token)
    );
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storage_prefix}token`);
  },
};

export default storage;
