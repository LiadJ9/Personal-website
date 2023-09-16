export type blogType = {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  img: string;
  key: number;
  timestamp: string;
};

export type segmentType = {
  header?: string;
  text: string;
  img?: string;
  imgstyle?: React.CSSProperties;
};
