// -- svgs -- //
import Avatar1 from "../public/svgs/avatar1.svg";
import Avatar2 from "../public/svgs/avatar2.svg";
import Avatar3 from "../public/svgs/avatar3.svg";
import Avatar4 from "../public/svgs/avatar4.svg";
import Avatar5 from "../public/svgs/avatar5.svg";
import Avatar6 from "../public/svgs/avatar6.svg";
import Avatar7 from "../public/svgs/avatar7.svg";
import Avatar8 from "../public/svgs/avatar8.svg";
import Avatar9 from "../public/svgs/avatar9.svg";
import Avatar10 from "../public/svgs/avatar10.svg";
import Avatar11 from "../public/svgs/avatar11.svg";
import Avatar12 from "../public/svgs/avatar12.svg";

const useAvatars = () => {
  const avatars = [
    { value: "1", label: <Avatar1 /> },
    { value: "2", label: <Avatar2 /> },
    { value: "3", label: <Avatar3 /> },
    { value: "4", label: <Avatar4 /> },
    { value: "5", label: <Avatar5 /> },
    { value: "6", label: <Avatar6 /> },
    { value: "7", label: <Avatar7 /> },
    { value: "8", label: <Avatar8 /> },
    { value: "9", label: <Avatar9 /> },
    { value: "10", label: <Avatar10 /> },
    { value: "11", label: <Avatar11 /> },
    { value: "12", label: <Avatar12 /> },
  ];

  return avatars;
};

export default useAvatars;
