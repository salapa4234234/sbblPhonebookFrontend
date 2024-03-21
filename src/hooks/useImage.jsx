const avatar = {
  "m,M":
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "f,F":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const useImage = () => {
  const getAvatar = (logo) => {
    const key = Object.keys(avatar).find((keys) => {
      return keys.toLowerCase().includes(logo.toLowerCase());
    });

    return avatar[key] || null;
  };
  return [getAvatar];
};

export default useImage;
