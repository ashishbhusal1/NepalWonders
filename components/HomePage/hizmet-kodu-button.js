import { useMemo } from "react";
import styles from "./hizmet-kodu-button.module.css";
const HizmetKoduButton = ({
  serviceCode,
  hizmetKoduButtonBorder,
  hizmetKoduButtonPosition,
  hizmetKoduButtonWidth,
  hizmetKoduButtonTop,
  hizmetKoduButtonRight,
  hizmetKoduButtonLeft,
  hizmetKoduFontSize,
  hizmetKoduFontWeight,
  hizmetKoduColor,
}) => {
  const hizmetKoduButtonStyle = useMemo(() => {
    return {
      border: hizmetKoduButtonBorder,
      position: hizmetKoduButtonPosition,
      width: hizmetKoduButtonWidth,
      top: hizmetKoduButtonTop,
      right: hizmetKoduButtonRight,
      left: hizmetKoduButtonLeft,
    };
  }, [
    hizmetKoduButtonBorder,
    hizmetKoduButtonPosition,
    hizmetKoduButtonWidth,
    hizmetKoduButtonTop,
    hizmetKoduButtonRight,
    hizmetKoduButtonLeft,
  ]);

  const hizmetKoduStyle = useMemo(() => {
    return {
      fontSize: hizmetKoduFontSize,
      fontWeight: hizmetKoduFontWeight,
      color: hizmetKoduColor,
    };
  }, [hizmetKoduFontSize, hizmetKoduFontWeight, hizmetKoduColor]);

  return (
    <div className={styles.hizmetkodubutton} style={hizmetKoduButtonStyle}>
      <div className={styles.hizmetKodu} style={hizmetKoduStyle}>
        {serviceCode}
      </div>
    </div>
  );
};

export default HizmetKoduButton;
