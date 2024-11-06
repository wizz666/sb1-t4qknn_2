import { Application } from '@nativescript/core';
import { registerFontIcon } from '@nativescript/font-icons';

registerFontIcon({
    className: 'mdi',
    fontFamily: 'MaterialIcons-Regular',
    fontUrl: '~/fonts/MaterialIcons-Regular.ttf',
    css: `
        .mdi {
            font-family: "MaterialIcons-Regular";
            font-weight: normal;
        }
    `,
    android: {
        fontFamily: 'MaterialIcons-Regular',
        fontUrl: '~/fonts/MaterialIcons-Regular.ttf'
    },
    ios: {
        fontFamily: 'MaterialIcons-Regular',
        fontUrl: '~/fonts/MaterialIcons-Regular.ttf'
    }
});

Application.run({ moduleName: 'app-root' });