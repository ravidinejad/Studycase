export interface ModalProps {
    variant: "Terang" | "Gelap";
    title: string;
    description?: string;
    accept: string;
    reject?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}