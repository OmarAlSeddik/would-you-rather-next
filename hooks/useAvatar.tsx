// -- basic & custom hooks -- //
import useAvatars from "./useAvatars";

const useAvatar = (avatarValue: string) => {
  const avatars = useAvatars();

  const loadedAvatarObject = avatars.find(
    (avatarObject) => avatarObject.value === avatarValue
  );

  const avatar = loadedAvatarObject?.label;

  return avatar;
};

export default useAvatar;
