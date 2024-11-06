import { Observable } from '@nativescript/core';

export class CommandmentsModel extends Observable {
    public commandments = [
        {
            title: "1. You shall have no other gods with me:",
            questions: [
                "Do I give time to God every day in prayer?",
                "Have I denied my faith?",
                "Have I accepted false messages or substitutions for God?",
                "Have I doubted God's mercy?"
            ]
        },
        {
            title: "2. You shall not abuse the name of the Lord your God:",
            questions: [
                "Have I used God's name as a swear word or to ridicule?",
                "Have I broken a promise or an oath?",
                "Have I promised something without meaning it?"
            ]
        },
        {
            title: "3. Consider the day of rest, so that you sanctify it:",
            questions: [
                "Have I sanctified every Sunday and the Church's greatest feasts by avoiding unnecessary work and attending Mass?",
                "Was I paying attention in the Fair?",
                "Did I arrive unnecessarily late or did I leave the Fair before it ended?",
                "Did I chew gum in the church room?"
            ]
        },
        {
            title: "4. Honor your father and your mother:",
            questions: [
                "Have I shown a Christian respect for my parents, respect for other family members and those who are legitimate superiors in the Church and in society?",
                "Do I help at home without nagging?",
                "Do I try to get along with my siblings?"
            ]
        },
        {
            title: "5. You shall not kill:",
            questions: [
                "Have I neglected the body's health and safety for myself and others?",
                "Have I given support in any way to abortion or suicide?",
                "Have I been impatient, jealous, haughty, jealous, vindictive, lazy?",
                "Have I forgiven others?",
                "Have I in any way discriminated against others because of skin color or other reasons?",
                "Do I encourage others to do stupid things?",
                "Am I teasing so that others will be sad?"
            ]
        },
        {
            title: "6. You shall not be unchaste - the body is the temple of the Holy Spirit:",
            questions: [
                "Have I been chaste in thought or word?",
                "Have I indulged in self-gratification?",
                "Have I voluntarily watched unchaste content on TV, newspapers, internet, read unchaste books, looked at pornographic images, etc."
            ]
        },
        {
            title: "7. You shall not steal:",
            questions: [
                "Have I taken anything from others, from my school or association I'm part of?",
                "Am I ready to repay what I took?",
                "Did I destroy someone else's things?",
                "Have I spent money on gambling or been irresponsible so that my family suffered?"
            ]
        },
        {
            title: "8. You shall not bear false witness against your neighbor:",
            questions: [
                "Am I honest in my school work?",
                "Am I lying to appear good?",
                "Have I spoken ill of other people?",
                "Have I been able to keep a secret or a confidence?"
            ]
        },
        {
            title: "9. You shall not covet your neighbor's wife:",
            questions: [
                "Do I allow myself impure thoughts and fantasies about someone else's boyfriend or girlfriend?",
                "Do I let my parents have time for each other, or do I leave and be jealous and wish they would give me more attention?",
                "Do I get angry when I have to share my friends with others?"
            ]
        },
        {
            title: "10. You shall not covet your neighbor's house and home:",
            questions: [
                "Have I desired to have something that belongs to other people?",
                "Have I wished anyone else ill?",
                "Am I grateful to God and my parents for everything I have been given?",
                "Do I share what I have with others?"
            ]
        }
    ];
}