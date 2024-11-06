import styles from './ShowImage.module.css';

interface ShowImageProps {
  src: string;
  alt: string;
  isSelected: boolean;
  onClick: () => void;
}

const ShowImage = ({ src, alt, isSelected, onClick }: ShowImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${styles.showImage} ${isSelected ? styles.selected : ''}`}
    />
  );
};

export default ShowImage;
