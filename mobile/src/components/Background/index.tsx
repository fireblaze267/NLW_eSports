import { ImageBackground } from "react-native";
import { styles } from "./styles";

import backgroundImg from "../../assets/background-galaxy.png";

interface props {
  children: React.ReactNode;
}

export function Background({ children }: props) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
