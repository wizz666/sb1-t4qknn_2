import { EventData, Page, action } from '@nativescript/core';
import { MainViewModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new MainViewModel();
    }
}

export function showLanguageDialog(args: EventData) {
    const context = (<any>args.object).bindingContext;
    
    action({
        message: "Choose your language",
        actions: ["English", "Svenska"],
        cancelable: true
    }).then((result) => {
        if (result === "English") {
            context.currentLanguage = "en";
        } else if (result === "Svenska") {
            context.currentLanguage = "sv";
        }
    });
}