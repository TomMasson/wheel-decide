import styles from "./WheelNouveauBail.module.scss";

export interface WheelElement {
  text: string;
  couleur: string;
}

interface IProps {
  elements: WheelElement[];
}

const WheelNouveauBail = ({ elements }: IProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titre}>Roue du fun</h1>
      <svg
        className={styles.hole}
        viewBox="0 0 150 120"
        width="100%"
        height="100%"
      >
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
            <circle cx="75" cy="60" r="30" />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#mask)"
          fill-opacity="1"
          fill="#FFF"
        />
      </svg>
      {elements.map((e, i) => (
        <div
          className={styles.element}
          style={{
            backgroundColor: e.couleur,
            rotate: `${i * (360 / elements.length)}deg`,
          }}
          key={i}
        >
          {e.text}
        </div>
      ))}

      {/* <div className={styles.clockContainer}>
        {/* <div className={styles.clock}></div> *}
      </div> */}
    </div>
  );
};

export default WheelNouveauBail;
