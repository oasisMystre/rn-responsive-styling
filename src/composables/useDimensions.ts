import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default function useDimensions() {
  const [dimensions, setDimensions] = useState({
    screen: Dimensions.get("screen"),
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const unsubsribe = Dimensions.addEventListener("change", (dimensions) =>
      setDimensions(() => ({ ...dimensions }))
    );

    return () => unsubsribe.remove();
  }, []);

  return dimensions;
}
