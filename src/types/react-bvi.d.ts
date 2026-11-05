declare module '@sk1llahh/react-bvi' {
    import { ReactNode } from 'react';

    interface BviProviderProps {
        children: ReactNode;
    }

    interface BviButtonProps {
        children?: ReactNode;
    }

    export function BviProvider(props: BviProviderProps): JSX.Element;
    export function BviButton(props: BviButtonProps): JSX.Element;
    export function useBvi(): {
        toggleActive: () => void;
        setTheme: (theme: 'white' | 'black' | 'blue' | 'brown' | 'green') => void;
        setSize: (size: number) => void;
        setImagesMode: (mode: 'true' | 'false' | 'grayscale') => void;
        setLineHeight: (height: 'normal' | 'average' | 'big') => void;
        setLetterSpacing: (spacing: 'normal' | 'average' | 'big') => void;
        setFontFamily: (font: 'default' | 'arial' | 'times') => void;
        speakPage: () => void;
        togglePanelHidden: () => void;
    };
}
