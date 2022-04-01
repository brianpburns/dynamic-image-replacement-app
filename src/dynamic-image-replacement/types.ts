export interface Props {
  firstName: string;
  onUpdate: (newFirstName: string) => void;
  onClose: () => void;
}
