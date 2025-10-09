import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // navigator is a global browser window API providing more details
    // about the device or browser you are using. Look here for more info: https://developer.mozilla.org/en-US/docs/Web/API/Navigator
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("offline", handleOnlineStatus);
    window.addEventListener("online", handleOnlineStatus);

    return () => {
      window.removeEventListener("offline", handleOnlineStatus);
      window.removeEventListener("online", handleOnlineStatus);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
