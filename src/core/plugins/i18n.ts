import { createI18n } from "vue-i18n";

const messages = {
  en: {
    dashboard: "Dashboard",
    layoutBuilder: "Layout builder",
    craft: "Crafted",
    pages: "Pages",
    profile: "Profile",
    profileOverview: "Overview",
    projects: "Projects",
    campaigns: "Campaigns",
    documents: "Documents",
    connections: "Connections",
    wizards: "Wizards",
    horizontal: "Horizontal",
    vertical: "Vertical",
    account: "Account",
    accountOverview: "Overview",
    settings: "Settings",
    authentication: "Authentication",
    basicFlow: "Basic Flow",
    signIn: "Sign-in",
    signUp: "Sign-up",
    passwordReset: "Password Reset",
    error404: "Error 404",
    error500: "Error 500",
    apps: "Apps",
    chat: "Chat",
    privateChat: "Private Chat",
    groupChat: "Group Chat",
    drawerChat: "Drawer Chat",
    widgets: "Widgets",
    widgetsLists: "Lists",
    widgetsStatistics: "Statistics",
    widgetsCharts: "Charts",
    widgetsMixed: "Mixed",
    widgetsTables: "Tables",
    widgetsFeeds: "Feeds",
    changelog: "Changelog",
    docsAndComponents: "Docs & Components",
    megaMenu: "Mega Menu",
    exampleLink: "Example link",
    modals: "Modals",
    general: "General",
    inviteFriends: "Invite Friends",
    viewUsers: "View Users",
    upgradePlan: "Upgrade Plan",
    shareAndEarn: "Share & Earn",
    forms: "Forms",
    newTarget: "New Target",
    newCard: "New Card",
    newAddress: "New Address",
    createAPIKey: "Create API Key",
    twoFactorAuth: "Two Factor Auth",
    createApp: "Create App",
    createAccount: "Create Account",
    // NEWS HERE ---->
    activity: "Activity",
    report: "report",
    tracing:"Tracing",
    autoProgram: "Schedule activity",
    Notify: "Notify",
    incident:"Incidents",
    admUsers: "Adm. Users",
    seeAll: "See all",
    virtual: "Virtual",
    automatic:"Automatic",
    manual:"Manual",
    material:"Materials",
    lastearthquake: "Last Earthquake",
    showUser :"Show Users",
    createUser:"Create User",
    updateUser:"Update User",
    createProgram:"Create Activity",
    updateProgram:"Update Activity",
    listProgram:"List Activity",
    deleteProgram:"Delete Activity",
    showAll:"Show all",
    crit:"Critical",
    noCrit:"No critical",
    admAct:"Admin assets",
    create:"Create",
    update:"Update",
    remove:"Remove",
    graph:"Graphics",
    statistics:"Statistics",
    inform:"Inform",
    export:"Export",
    userActivity:"User activity",
    list:"List",
    news:"News",
    physical:"Physicals",
    admInci:"Adm incidents",
    state:"State"





    
  },
  es: {
    dashboard: "Tablero",
    layoutBuilder: "Opciones del tablero",
    craft: "Gestión",
    pages: "Paginas",
    profile: "Perfil",
    profileOverview: "Descripción general",
    projects: "Proyectos",
    campaigns: "Campañas",
    documents: "Documentos",
    connections: "Conexiones",
    wizards: "Magos",
    horizontal: "Horizontal",
    vertical: "Vertical",
    account: "Cuenta",
    accountOverview: "Descripción general",
    settings: "Ajustes",
    authentication: "Autenticación",
    basicFlow: "Flujo básico",
    signIn: "Registrarse",
    signUp: "Inscribirse",
    passwordReset: "Restablecimiento de contraseña",
    error404: "Error 404",
    error500: "Error 500",
    apps: "Aplicaciones",
    chat: "Chat",
    privateChat: "Chat privado",
    groupChat: "Grupo de chat",
    drawerChat: "Chat del cajón",
    widgets: "Widgets",
    widgetsLists: "Liza",
    widgetsStatistics: "Estadísticas",
    widgetsCharts: "Gráficos",
    widgetsMixed: "Mezclada",
    widgetsTables: "Mesas",
    widgetsFeeds: "Alimenta",
    changelog: "Registro de cambios",
    docsAndComponents: "Documentos & Componentes",
    megaMenu: "Mega menú",
    exampleLink: "Enlace de ejemplo",
    modals: "Modales",
    general: "General",
    inviteFriends: "Invitar A Amigos",
    viewUsers: "Ver Usuarios",
    upgradePlan: "Plan De Actualización",
    shareAndEarn: "Compartir Y Ganar",
    forms: "Formas",
    newTarget: "Nuevo Objetivo",
    newCard: "Nueva Tarjeta",
    newAddress: "Nueva Direccion",
    createAPIKey: "Crea Clave De Api",
    twoFactorAuth: "Dos Factores",
    createApp: "Crear Aplicacion",
    createAccount: "Crear Una Cuenta",
    activity: "Actividad",
    // AQUI NUEVOS ---->
    report: "Reportes",
    extra: "Extras",
    tracing: "Monitoreo",
    autoProgram: "Programar actividad",
    Notify: "Notificaciones",
    incident:"Incidentes",
    admUsers: "Adm. Usuarios",
    seeAll:"Mostrar todo",
    virtual: "Virtuales",
    automatic:"Automático",
    manual:"Manuales",
    material:"Materiales",
    lastearthquake: "Ultimo Sismo",
    showUser :"Mostrar usuarios",
    createUser:"Crear usuario",
    updateUser:"Actualizar usuario",
    createProgram:"Crear actividad",
    updateProgram:"Actualizar actividad",
    listProgram:"Listar actividades",
    deleteProgram:"Eliminar actividad",
    showAll:"Ver todos",
    crit:"Criticos",
    noCrit:"No criticos",
    admAct:"Adminisitrar activos",
    create:"Crear",
    update:"Actualizar",
    remove:"Eliminar",
    graph:"Graficos",
    statistics:"Estadisticas",
    inform:"Informe",
    export:"Exportar",
    userActivity:"Actividad de usuario",
    list:"Listar",
    news:"Nuevos",
    physical:"Físicos",
    admInci:"Administrar incidentes",
    state:"Estado"
    

  },
  // Cambiar nombres de pestañas setCurrentPageBreadcrumbs
  de: {
    dashboard: "Instrumententafel",
    craft: "Hergestellt",
    pages: "Seiten",
    profile: "Profil",
    profileOverview: "Überblick",
    projects: "Projekte",
    campaigns: "Kampagnen",
    documents: "Unterlagen",
    connections: "Anschlüsse",
    wizards: "Zauberer",
    horizontal: "Horizontal",
    vertical: "Vertikal",
    account: "Konto",
    accountOverview: "Überblick",
    settings: "Die Einstellungen",
    authentication: "Authentifizierung",
    basicFlow: "Grundfluss",
    signIn: "Einloggen",
    signUp: "Anmelden",
    passwordReset: "Passwort zurücksetzen",
    error404: "Fehler 404",
    error500: "Fehler 500",
    apps: "Apps",
    chat: "Plaudern",
    privateChat: "Private Chat",
    groupChat: "Privater Chat",
    drawerChat: "Gruppenchat Schubladen-Chat",
    widgets: "Widgets",
    widgetsLists: "Listen",
    widgetsStatistics: "Statistiken",
    widgetsCharts: "Diagramme",
    widgetsMixed: "Gemischt",
    widgetsTables: "Tabellen",
    widgetsFeeds: "Einspeisungen",
    changelog: "Änderungsprotokoll",
    docsAndComponents: "Dokumente & Komponenten",
    megaMenu: "Mega-Menü",
    exampleLink: "Beispiellink",
    modals: "Modale",
    general: "Allgemeines",
    inviteFriends: "Freunde Einladen",
    viewUsers: "Benutzer Anzeigen.",
    upgradePlan: "Upgrade-Plan",
    shareAndEarn: "Teilen & Verdienen",
    forms: "Formen",
    newTarget: "Neues Ziel",
    newCard: "Neue Karte",
    newAddress: "Neue Adresse",
    createAPIKey: "Api-Key Erstellen",
    twoFactorAuth: "Zwei Faktor Auth.",
    createApp: "App Erstellen",
    createAccount: "Benutzerkonto Erstellen",
    activity: "Aktivität",
  },
  ja: {
    dashboard: "ダッシュボード",
    layoutBuilder: "レイアウトビルダー",
    craft: "作成された",
    pages: "ページ",
    profile: "プロフィール",
    profileOverview: "概要",
    projects: "プロジェクト",
    campaigns: "キャンペーン",
    documents: "書類",
    connections: "接続",
    wizards: "ウィザード",
    horizontal: "横",
    vertical: "垂直",
    account: "アカウント",
    accountOverview: "概要",
    settings: "設定",
    authentication: "認証",
    basicFlow: "基本的な流れ",
    signIn: "サインイン",
    signUp: "サインアップ",
    passwordReset: "パスワードのリセット",
    error404: "エラー404",
    error500: "エラー 500",
    apps: "アプリ",
    chat: "チャット",
    privateChat: "プライベートチャット",
    groupChat: "グループチャット",
    drawerChat: "ドロワーチャット",
    widgets: "ウィジェット",
    widgetsLists: "リスト",
    widgetsStatistics: "統計",
    widgetsCharts: "チャート",
    widgetsMixed: "混合",
    widgetsTables: "テーブル",
    widgetsFeeds: "フィード",
    changelog: "変更ログ",
    docsAndComponents: "ドキュメントとコンポーネント",
    megaMenu: "メガメニュー",
    exampleLink: "リンク例",
    modals: "モーダルズ",
    general: "一般",
    inviteFriends: "友達を招待",
    viewUsers: "ユーザーを表示します",
    upgradePlan: "アップグレードプラン",
    shareAndEarn: "シェア＆稼働",
    forms: "フォーム",
    newTarget: "新しいターゲット",
    newCard: "新しいカード",
    newAddress: "新しいアドレス",
    createAPIKey: "Apiキーを作成します",
    twoFactorAuth: "2つの要因Auth",
    createApp: "アプリを作成します",
    createAccount: "アカウントを作成する",
    activity: "アクティビティ",
  },
  fr: {
    dashboard: "Générateur de mise",
    layoutBuilder: "En page",
    craft: "Fabriqué",
    pages: "Pages",
    profile: "Profil",
    profileOverview: "Aperçu",
    projects: "Projets",
    campaigns: "Campagnes",
    documents: "Documents",
    connections: "Connexions",
    wizards: "Sorciers",
    horizontal: "Horizontal",
    vertical: "Verticale",
    account: "Compte",
    accountOverview: "Aperçu",
    settings: "Paramètres",
    authentication: "Authentification",
    basicFlow: "Flux de base",
    signIn: "SS'identifier",
    signUp: "Inscrivez-vous",
    passwordReset: "Réinitialisation du mot de passe",
    error404: "Erreur 404",
    error500: "Erreur 500",
    apps: "Applications",
    chat: "Discuter",
    privateChat: "Discussion privée",
    groupChat: "Discussion de groupe",
    drawerChat: "Chat de tiroir",
    widgets: "Widgets",
    widgetsLists: "Listes",
    widgetsStatistics: "Statistiques",
    widgetsCharts: "Graphiques",
    widgetsMixed: "Mixte",
    widgetsTables: "Les tables",
    widgetsFeeds: "Flux",
    changelog: "Journal des modifications",
    docsAndComponents: "Documents & composants",
    megaMenu: "Méga Menu",
    exampleLink: "Exemple de lien",
    modals: "Modals",
    general: "Général",
    inviteFriends: "Inviter Des Amis",
    viewUsers: "Voir Les Utilisateurs",
    upgradePlan: "Plan De Mise À Niveau",
    shareAndEarn: "Partager Et Gagner",
    forms: "Formes",
    newTarget: "Nouvelle Cible",
    newCard: "Nouvelle Carte",
    newAddress: "Nouvelle Adresse",
    createAPIKey: "Créer Une Touche Api",
    twoFactorAuth: "Deux Facteurs D'Authentification",
    createApp: "Créer Une Application",
    createAccount: "Créer Un Compte",
    activity: "Activité",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages,
});

export default i18n;