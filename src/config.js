export const LANGUAGE = {
    "LANGUAGE_TEXT": [
        {
            "TEXT1": "Hi,",
            "TEXT2": "It's Jarvis!",
            "FOOTER_TEXT": "Made in Toronto",
            "FOOTER_LINKS": [{"text": "Privacy & Terms", "link": "https://payjarvis-public.s3.amazonaws.com/Website+Terms+%26+Privacy+v16112019.pdf"}, {"text": "Contact Us", "link": "mailto:support@payjarvis.com?subject=Payjarvis Support Message"}],
            "HOME_COMPONENT": {
                "TEXT": "Toronto’s parking ticket butler.",
                "LABEL": "I’ll help you settle this parking ticket quickly to get on with your day.",
                "UPLOAD_BUTTON_TEXT": "Upload Your Ticket",
                "UPLOAD_BUTTON_LABEL": "You can upload a ticket by taking a photo with your camera or importing an image from your library."
            },
            "CONFIRM_DETAILS_COMPONENT":{
                "LABEL":"Confirm Details",
                "TEXT":"Validate the details below based on the Parking Violation Notice.",
                "FIELDS":{
                    "DATE_OF_VIOLATION":"Date of Violation",
                    "VIOLATION_NOTICE":"Violation Notice Number",
                    "PLATE_NUMBER":"Plate Number",
                    "PENALTY_AMOUNT":"Administrative Penalty",
                    "ADDRESS_SEARCH_FEE":"Address Search Fee",
                    "LATE_PAYMENT_FEE":"Late Payment Fee",
                    "EMAIL":"E-mail"
                },
                "PAYMENTS":{
                    "ADMINISTRATIVE_PENALTY":"Administrative Penalty",
                    "ADDRESS_SEARCH_FEE":"Address Search Fee",
                    "LATE_PAYMENT_FEE":"Late Payment Fee",
                    "SERVICE_CHARGE":"Processing Fees",
                    "TOTAL":"Total",
                    "PAY_WITH_CARD":"Pay with Card"
                },
                "CARD_FIELDS":{
                    "CREDIT_CARD":"Credit Card",
                    "EXPIRY_DATE":"Expiry Date",
                    "CVC":"CVC",
                    "PAY":"Pay"
                }

            },
            "PAYMENT":{
                "VIOLATION_NOTICE":"Violation Notice Number",
                "PAYMENT_AMOUNT":"Payment Amount",
                "PAYMENT_MADE":"Payment made",
                "PLATE_NUMBER":"Plate Number",
                "SERVICE_CHARGE":"Processing Fees",
                "PENALTY_AMOUNT":"Administrative Penalty",
                "ADDRESS_SEARCH_FEE":"Address Search Fee",
                "LATE_PAYMENT_FEE":"Late Payment Fee",
                "WAITING_FOR":"Waiting for",
                "PAYMENT_DATE":"Payment date",
                "REFERENCE_NO":"Reference Number",
                "SEND":"Send me a reciept",
                "SEND_RECECIPT":"Validate the details below based on the Parking Violation Notice.",
                "EMAIL":"E-mail",
                "SEND_BUTTON":"Send"
            },
            "SUBSCRIBE_POPUP":{
                "TEXT1":"We are working on making your bill payments easier, would you like us to email you once we expand our service?",
                "TEXT2":"You are now subscribed!",
                "TEXT3":"We are working on making your bill payments easier!",
                "BTN1":"Yes, please",
                "BTN2":"No, thanks",
                "BTN3":"Ok"
            },
            "LANGUAGE": "ENGLISH"
        }, {
            "TEXT1": "Salut",
            "TEXT2": "c'est Jarvis!",
            "FOOTER_TEXT": "Fabriqué à Toronto par Onebill",
            "FOOTER_LINKS": ["Confidentialité et modalités", "Contactez-nous"],
            "HOME_COMPONENT": {
                "TEXT": "Votre ticket de parking majordome",
                "LABEL": "Je vais vous aider à régler ce billet rapidement pour commencer votre journée. Vous pouvez commencer par télécharger une photo de votre billet.",
                "UPLOAD_BUTTON_TEXT": "Téléchargez votre billet",
                "UPLOAD_BUTTON_LABEL": "Vous pouvez télécharger un ticket en important ou en numérisant avec votre appareil photo"
            },
            "CONFIRM_DETAILS_COMPONENT":{
                "LABEL":"Confirmer les détails",
                "TEXT":"Validez les détails ci-dessous en fonction de la notification d'infraction de stationnement.",
                "FIELDS":{
                    "DATE_OF_VIOLATION":"Date de violation",
                    "VIOLATION_NOTICE":"Numéro d'avis d'infraction",
                    "PLATE_NUMBER":"Numéro de la plaque",
                    "PENALTY_AMOUNT":"Montant de la pénalité administrative",
                    "EMAIL":"Email"
                },
                "PAYMENTS":{
                    "ADMINISTRATIVE_PENALTY":"Sanction administrative",
                    "ADDRESS_SEARCH_FEE":"Frais de recherche d'adresse",
                    "LATE_PAYMENT_FEE":"Frais de retard de paiement",
                    "SERVICE_CHARGE":"Frais de service",
                    "TOTAL":"Totale",
                    "PAY_WITH_CARD":"Payer avec la carte"
                },
                "CARD_FIELDS":{
                    "CREDIT_CARD":"Carte de crédit",
                    "EXPIRY_DATE":"Date d'expiration",
                    "CVC":"CVC",
                    "PAY":"Payer"
                }
            },
            "PAYMENT":{
                "VIOLATION_NOTICE":"Numéro d'avis d'infraction",
                "PAYMENT_AMOUNT":"Montant du paiement",
                "PAYMENT_MADE":"Paiement effectué",
                "WAITING_FOR":"Attendre",
                "PAYMENT_DATE":"Date de paiement",
                "REFERENCE_NO":"Numéro de réference",
                "SEND":"Envoyez-moi un reçu",
                "SEND_RECECIPT":"Validez les détails ci-dessous en fonction de la notification d'infraction de stationnement.",
                "EMAIL":"Email",
                "SEND_BUTTON":"Envoyer"
            },
            "SUBSCRIBE_POPUP":{
                "TEXT1":"Nous travaillons à faciliter le paiement de vos factures. Souhaitez-vous que nous vous envoyions un e-mail une fois que nous avons étendu notre service?",
                "TEXT2":"Email a été envoyé à votre mail!",
                "TEXT3":"Nous travaillons à faciliter le paiement de vos factures!",
                "BTN1":"Oui s'il vous plaît",
                "BTN2":"Non merci",
                "BTN3":"D'accord"
            },
            "LANGUAGE": "FRENCH"
        }
    ],
    "LANGUAGE_MENU": ["ENGLISH", "FRENCH"],
    "LANGUAGE_DEFAULT": "ENGLISH"
}

export const ENV = {
    // "server": "http://localhost:3000"
    "server": "https://api.payjarvis.com",
    // "server": "https://bf901ace.ngrok.io"
}