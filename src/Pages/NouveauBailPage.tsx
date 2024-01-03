import WheelNouveauBail, {
  WheelElement,
} from "../components/NouveauBail/WheelNouveauBail";

const NouveauBailPage = () => {
  const elements: WheelElement[] = [
    { text: "Jean Dujardin", couleur: "#f19066" },
    { text: "Jean Dujardin", couleur: "#ff4d4d" },
    { text: "Jean Dujardin", couleur: "#7158e2" },
    { text: "Jean Dujardin", couleur: "#ff9f1a" },
    { text: "Jean Dujardin", couleur: "#18dcff" },
    { text: "Jean Dujardin", couleur: "#32ff7e" },
    { text: "Jean Dujardin", couleur: "#67e6dc" },
    { text: "Jean Dujardin", couleur: "#fed330" },
    { text: "Jean Dujardin", couleur: "#eb3b5a" },
    { text: "Jean Dujardin", couleur: "#26de81" },
    { text: "Jean Dujardin", couleur: "#778ca3" },
    { text: "Jean Dujardin", couleur: "#8854d0" },
  ];

  return <WheelNouveauBail elements={elements} />;
};

export default NouveauBailPage;
