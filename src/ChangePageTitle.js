import React, { useEffect } from "react";

const ChangePageTitle = ({ pageTitle }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = pageTitle;
    return () => {
      document.title = prevTitle;
    };
  }, [pageTitle]);

  return <></>;
};

export default ChangePageTitle;