import man from "../icons/man.png";
import women from "../icons/woman.png";

const avatar = {
  "m,M": man,
  "f,F": women,
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
