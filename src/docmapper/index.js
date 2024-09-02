import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
const licenseKey =
  "Intralinks, Inc.:OEM:See Agreement::B+:AMS(20241209):36F56F106A76230BAABBC8B253284802404F2D56AD13A9AD05636A3C70F024DABEF5C7";
export const MyComponent = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        licenseKey: licenseKey,
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};
