import { theme, type ThemeConfig } from 'antd';

export const themeConfig: ThemeConfig = {
    algorithm: theme.darkAlgorithm,

    token: {
        colorBgBase: '#0B0F14',
        colorTextBase: '#E6EEF8',
        colorTextDescription: '#9FB0C3',
        colorPrimary: '#1677FF',
        colorSuccess: '#22C55E',
        colorBorderSecondary: '#1E2A3A',
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    },

    components: {
        Layout: {
            bodyBg: '#0B0F14',
        },
        Button: {
            borderRadius: 8,
            fontWeight: 500,
            boxShadow: 'none',
        },
        Card: {
            boxShadow: '0 2px 10px -2px rgba(0,0,0,0.2)',
            colorBgContainer: '#121923',
            colorBorderSecondary: '#1E2A3A',
            paddingLG: 24,
            borderRadiusLG: 16,
        },
        Typography: {
            colorTextHeading: '#E6EEF8',
            titleMarginBottom: 0,
            titleMarginTop: 0,
        }
    }
}