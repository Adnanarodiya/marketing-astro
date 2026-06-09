export const languages = {
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'de';

export const ui = {
  de: {
    'footer.description': 'Pontora ist eine Multi-Tenant-Betriebsplattform für Treuhandgesellschaften, Unternehmen, Bauleiter und Mitarbeiter zur Verwaltung von Personalverwaltung, Dokumenten, Aufgaben, Genehmigungen, Arbeitszeittabellen, Belegen und täglichen Geschäftsabläufen.',
    'footer.copyright': 'Copyright © {year} Pontora. Alle Rechte vorbehalten.',
    'footer.resources': 'Ressourcen',
    'footer.quick_info': 'Schnellzugriff',
    'dashboard.label': 'Dashboard',
    'back_to_home': 'Zurück zur Startseite',
    'page_not_found': 'Seite nicht gefunden',
    'page_not_found_desc': 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    'read_more': 'Weiterlesen',
    'by': 'von',
    'last_modified': 'Zuletzt aktualisiert',
  },
  en: {
    'footer.description': 'Pontora is a multi-tenant operations platform for trustee firms, companies, site managers, and employees to manage workforce administration, documents, tasks, approvals, timesheets, receipts, and daily business operations.',
    'footer.copyright': 'Copyright © {year} Pontora. All Rights Reserved',
    'footer.resources': 'Resources',
    'footer.quick_info': 'Quick Info',
    'dashboard.label': 'Dashboard',
    'back_to_home': 'Back to home',
    'page_not_found': 'Page not found',
    'page_not_found_desc': 'The page you are looking for does not exist or has been moved.',
    'read_more': 'Read More',
    'by': 'by',
    'last_modified': 'Last modified',
  }
} as const;

export function useTranslations(lang: string | undefined) {
  const selectedLang = (lang === 'en' ? 'en' : 'de') as keyof typeof ui;
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[selectedLang][key] || ui[defaultLang][key];
  };
}
