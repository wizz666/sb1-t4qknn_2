import { Observable } from '@nativescript/core';

export class ConditionsModel extends Observable {
    public conditions = [
        {
            title: "1. Examination of Conscience",
            description: "Take time to carefully review your actions, thoughts, and omissions since your last confession."
        },
        {
            title: "2. Sincere Sorrow for Sins",
            description: "Feel true remorse for having offended God and neighbor through your sins."
        },
        {
            title: "3. Firm Resolution to Avoid Sin",
            description: "Make a genuine commitment to avoid sin and the near occasions of sin in the future."
        },
        {
            title: "4. Complete Confession",
            description: "Confess all mortal sins by number and kind, being thorough and honest with your confessor."
        },
        {
            title: "5. Willingness to do Penance",
            description: "Be ready to complete the penance assigned by the priest as a sign of your repentance and desire for amendment."
        }
    ];
}