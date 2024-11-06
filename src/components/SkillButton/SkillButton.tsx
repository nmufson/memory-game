import styles from './SkillButton.module.css';

interface SkillButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SkillButton = ({ label, isSelected, onClick }: SkillButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.skillButton} ${isSelected ? styles.selected : ''}`}
    >
      {label}
    </button>
  );
};

export default SkillButton;
