import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors:{
            background: string;
            text: string;
            colorWhite: string;
            colorGrayLine: string;
            colorTextHighlight: string;
            colorTitle: string;
            colorRed: string;
            colorBlue: string;
            colorGreen: string;
            colorBlueDark: string;
            colorBlueTwitter: string;
            colorGrayChallenges: string;
        }
    }
}