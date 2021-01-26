OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Échec de la requête, connexion réseau indisponible !",
    "Request unauthorized. Are you logged in?" : "Requête non autorisée. Êtes-vous bien connecté?",
    "Request forbidden. Are you an admin?" : "Requête interdite. Avez-vous les droits administrateurs ?",
    "Token expired or app not enabled! Reload the page!" : "Le jeton a expiré ou l'application n'est pas activée ! Veuillez recharger la page !",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Erreur interne du serveur ! Veuillez consulter votre fichier data/nextcloud.log pour plus d'informations !",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "La requête a échoué, Nextcloud est actuellement en maintenance !",
    "News" : "News",
    "An RSS/Atom feed reader" : "Un lecteur du flux RSS/Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "L'application News est un lecteur de flux RSS / Atom pour Nextcloud pouvant être synchronisé avec de nombreux appareils mobiles. Vous trouverez une liste de tous les clients et de toutes les exigences [dans le fichier README] (https://github.com/nextcloud/news).\n\nAvant de passer à une nouvelle version, [consultez le journal des modifications] (https://github.com/nextcloud/news/blob/master/CHANGELOG.md) pour éviter les surprises.\n\n** Important **: Pour activer les mises à jour de flux, vous devez activer soit [Nextcloud system cron] (https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) ou utiliser [an updater] (https://github.com/nextcloud/news-updater) qui utilise l'API de mise à jour intégrée et désactive les mises à jour cron. Plus d'informations peuvent être trouvées [dans le fichier README] (https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Utiliser le « cron » du système pour les mises à jour",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Désactiver ceci si vous utilisez un logiciel de mise à jour particulier tel que le logiciel de mise à jour Python inclus dans l'application.",
    "Purge interval" : "Intervalle de purge",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Nombre minimum de secondes après lequel les flux et dossiers supprimés seront effacés de la base de données. Les valeurs inférieures à 60 secondes seront ignorées.",
    "Maximum read count per feed" : "Nombre maximum de lecture par flux",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Définit la quantité maximale d'articles pouvant être lus par flux qui ne seront pas supprimés par la tâche de nettoyage. Si d'anciens articles réapparaissent après avoir été lus, augmentez cette valeur. Une valeur négative comme -1 désactivera complètement cette fonctionnalité",
    "Maximum redirects" : "Nombre maximal de redirections",
    "How many redirects the feed fetcher should follow." : "Nombre de redirections que le récupérateur de flux doit suivre",
    "Feed fetcher timeout" : "Délai d'attente maximum du récupérateur de flux",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "Nombre maximal de secondes que peut prendre un flux RSS ou Atom pour être chargé. Si le délai est dépassé, la mise à jour sera annulée",
    "Explore Service URL" : "URL du service d'exploration",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Si indiquée, l'URL de ce service sera interrogée pour afficher les flux dans la section \"Explorer\". Pour revenir au service d'exploration par défaut, laissez ce champ vide.",
    "For more information check the wiki." : "Pour plus d'informations, consultez le wiki.",
    "Update interval" : "Intervalle de mise à jour",
    "Interval in seconds in which the feeds will be updated." : "Fréquence à laquelle les flux seront mis à jour (en secondes).",
    "Saved" : "Enregistré",
    "Download" : "Télécharger",
    "Close" : "Fermer",
    "Subscribe to" : "S'abonner à ",
    "No articles available" : "Aucun article disponible",
    "No unread articles available" : "Aucun article non lu disponible",
    "Open website" : "Ouvrir le site web",
    "Star article" : "Épingler l'article",
    "Unstar article" : "Désépingler l'article",
    "Keep article unread" : "Marquer l'article comme non lu",
    "Remove keep article unread" : "Marquer l'article comme lu",
    "by" : "par",
    "from" : "de",
    "shared from": "partagé par",
    "Play audio" : "Ecouter",
    "Download audio" : "Télécharger le son",
    "Download video" : "Télécharger la vidéo",
    "Keyboard shortcut" : "Raccourcis clavier",
    "Description" : "Description",
    "right" : "droite",
    "Jump to next article" : "Aller au prochain article",
    "left" : "gauche",
    "Jump to previous article" : "Aller à l'article précédent",
    "Toggle star article" : "Épingler / Désépingler l'article",
    "Star article and jump to next one" : "Épingler l'article et aller au suivant",
    "Toggle keep current article unread" : "Marquer l'article comme Lu / Non lu",
    "Open article in new tab" : "Ouvrir l'article dans un nouvel onglet",
    "Toggle expand article in compact view" : "Étendre / Réduire la vue (si en vue compacte)",
    "Refresh" : "Rafraîchir",
    "Load next feed" : "Charger le flux suivant",
    "Load previous feed" : "Charger le flux précédent",
    "Load next folder" : "Charger le dossier suivant",
    "Load previous folder" : "Charger le dossier précédent",
    "Scroll to active navigation entry" : "Aller à l'élément actif",
    "Focus search field" : "Sélectionner le champ de recherche",
    "Mark current article's feed/folder read" : "Marquer comme lu le flux / le répertoire de l'article en cours",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Mode Ajax ou Webcron détecté ! Vos flux ne seront pas mis à jour !",
    "How to set up the operating system cron" : "Comment configurer le cron du système d'exploitation",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Installe et met en place un updater qui utilise la mise à jour API de l'application News",
    "Subscribe" : "S'abonner",
    "Web address" : "Adresse web",
    "Feed exists already!" : "Le flux existe déjà !",
    "Folder" : "Dossier",
    "No folder" : "Aucun dossier",
    "New folder" : "Nouveau dossier",
    "Folder name" : "Nom du dossier",
    "Go back" : "Revenir en arrière",
    "Folder exists already!" : "Le dossier existe déjà !",
    "Credentials" : "Informations d'identification",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Les informations d'identification HTTP Basic Auth doivent être stocké en clair ! Toute personne ayant accès au serveur ou à la base de données y aura accès !",
    "Username" : "Nom d'utilisateur",
    "Password" : "Mot de passe",
    "New Folder" : "Nouveau dossier",
    "Create" : "Créer",
    "Explore" : "Explorer",
    "Update failed more than 50 times" : "La tentative de mise à jour a échoué plus de 50 fois",
    "Deleted feed" : "Flux supprimé",
    "Undo delete feed" : "Annuler la suppression du flux",
    "Rename" : "Renommer",
    "Menu" : "Menu",
    "Mark read" : "Marquer comme lu",
    "Unpin from top" : "Désépingler du haut",
    "Pin to top" : "Épingler en haut",
    "Newest first" : "Le plus récent en premier",
    "Oldest first" : "Le plus ancien en premier",
    "Default order" : "Ordre par défaut",
    "Enable full text" : "Activer le texte intégral",
    "Disable full text" : "Désactiver le texte intégral",
    "Unread updated" : "Mise à jour non lue",
    "Ignore updated" : "Ignorer la sélection",
    "Open feed URL" : "Ouvrir l'URL du flux",
    "Delete" : "Supprimer",
    "Dismiss" : "Ignorer",
    "Collapse" : "Replier",
    "Deleted folder" : "Dossier supprimé",
    "Undo delete folder" : "Annuler la suppression du dossier",
    "Starred" : "Épinglés",
    "Unread articles" : "Articles non lus",
    "All articles" : "Tous les articles",
    "Settings" : "Paramètres",
    "Disable mark read through scrolling" : "Ne pas marquer les articles comme lus lors du parcours des listes",
    "Compact view" : "Vue compacte",
    "Expand articles on key navigation" : "Etendre les articles lors de la navigation avec le clavier",
    "Show all articles" : "Montrer tous les articles",
    "Reverse ordering (oldest on top)" : "Ordre inverse (les plus anciens en haut)",
    "Subscriptions (OPML)" : "Abonnements (OPML)",
    "Import" : "Importer",
    "Export" : "Exporter",
    "Error when importing: File does not contain valid OPML" : "Erreur lors de l'import : Le fichier spécifié n'est pas un fichier OPML valide",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Erreur à l'importation : OPML ne contient ni flux ni dossiers",
    "Unread/Starred Articles" : "Articles non lus / épinglés",
    "Error when importing: file does not contain valid JSON" : "Erreur lors de l'import : le fichier spécifié n'est pas un fichier JSON valide",
    "Help" : "Aide",
    "Keyboard shortcuts" : "Raccourcis clavier",
    "Documentation" : "Documentation",
    "Report a bug" : "Signaler un bogue"
},
"nplurals=2; plural=(n > 1);");
