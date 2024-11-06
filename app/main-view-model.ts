import { Observable, ApplicationSettings } from '@nativescript/core';
import { translations } from './i18n';

export class MainViewModel extends Observable {
    private _selectedIndex: number;
    private _notes: string;
    private _currentLanguage: string;
    public translations: any;
    public commandments: any[];
    public conditions: any[];

    constructor() {
        super();
        
        // Initialize basic properties
        this._selectedIndex = 0;
        this._notes = ApplicationSettings.getString('confessionNotes', '');
        this._currentLanguage = ApplicationSettings.getString('language', 'en');
        
        // Set translations
        this.translations = translations[this._currentLanguage];
        
        // Initialize commandments and conditions
        this.initializeData();
    }

    private initializeData() {
        // Initialize commandments based on current language
        this.commandments = [
            {
                title: this._currentLanguage === 'sv' ? "1. Du skall inga andra gudar hava jämte mig:" : "1. You shall have no other gods with me:",
                questions: this._currentLanguage === 'sv' ? [
                    "Ger jag tid till Gud varje dag i bön?",
                    "Har jag förnekat min tro?",
                    "Har jag accepterat falska budskap?",
                    "Har jag tvivlat på Guds barmhärtighet?"
                ] : [
                    "Do I give time to God every day in prayer?",
                    "Have I denied my faith?",
                    "Have I accepted false messages?",
                    "Have I doubted God's mercy?"
                ]
            }
            // Add more commandments here following the same pattern
        ];

        // Initialize conditions based on current language
        this.conditions = this.translations.conditions.items;
    }

    get selectedIndex(): number {
        return this._selectedIndex;
    }

    set selectedIndex(value: number) {
        if (this._selectedIndex !== value) {
            this._selectedIndex = value;
            this.notifyPropertyChange('selectedIndex', value);
        }
    }

    get notes(): string {
        return this._notes;
    }

    set notes(value: string) {
        if (this._notes !== value) {
            this._notes = value;
            this.notifyPropertyChange('notes', value);
            this.saveNotes();
        }
    }

    get currentLanguage(): string {
        return this._currentLanguage;
    }

    set currentLanguage(value: string) {
        if (this._currentLanguage !== value && (value === 'en' || value === 'sv')) {
            this._currentLanguage = value;
            ApplicationSettings.setString('language', value);
            this.translations = translations[value];
            
            // Update data for new language
            this.initializeData();
            
            // Notify all changes
            this.notifyPropertyChange('currentLanguage', value);
            this.notifyPropertyChange('translations', this.translations);
            this.notifyPropertyChange('commandments', this.commandments);
            this.notifyPropertyChange('conditions', this.conditions);
        }
    }

    saveNotes() {
        ApplicationSettings.setString('confessionNotes', this._notes);
    }
}