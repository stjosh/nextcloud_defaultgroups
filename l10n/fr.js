OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Le groupe \"%1$s\" est utilisé pour l'application Auto Groups et ne peut pas être supprimé.",
    "Auto Groups" : "Groupes automatiques",
    "Automatically adds all users to one or multiple specified groups." : "Ajoute automatiquement tous les utilisateurs à un ou plusieurs groupes indiqués.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Ajoute automatiquement les utilisateurs aux Groupes Automatiques spécifiés, excepté ceux appartenant à l'un des Groupes d'Exception spécifiés.\nEn option, l’affectation à un groupe peut être déclenchée à chaque connexion réussie, ce qui est utile pour les moteurs d’utilisateur externe.\n\n##Configuration\n\nAller à \"Paramètres administrateurs > Paramètres supplémentaires\"\n- Configurer les Groupes Automatiques\n- Si nécessaire, configurer les Groupes d'Exceptions (par exemple pour les comptes de service)\n- En option, activez le déclenchement par login, ce qui permettra le respect de l'appartenance au bon groupe à chaque connexion réussie.\n\nNotez que cette application empêche les suppressions de groupes pour les groupes référencés comme Groupes Auto ou Groupes d'Exceptions. \n\n## Comparaison avec les fonctionnalités similaires\n\n*[Groupe Tout le monde](https://apps.nextcloud.com/apps/group_everyone) : La fonctionnalité \"groupe Tout le monde\" ajoute un fournisseur de  groupe virtuel qui retourne toujours tous les utilisateurs.  A l'inverse, lla fonctionnalité \"Groupe Automatique\" agit sur les groupes existants dans votre fournisseur de groupes normal. De plus, il est possible de spécifier des Groupes d'Exception qui empêchent les utilisateurs d'être intégrés au(x) groupe(s) Automatique(s).\n* [Groupe par Défaut](https://apps.nextcloud.com/apps/defaultgroup) : la fonctionnalité \"Groupe Automatique\" est actuellement une variante modernisée et maintenue de \"Groupe par Défaut\" qui semble être abandonnée depuis la version NC12. En terme de fonctionnalités, ils sont presque identiques. \n\nEn outre, j’ai l’intention d’ajouter plus de fonctionnalités au fil du temps, par exemple \"Groupes d'Union\" - voir l' [échéancier](https://github.com/stjosh/auto_groups/milestones) pour de plus amples détails.",
    "Automatically add all users to these groups." : "Ajouter automatiquement tous les utilisateurs à ces groupes.",
    "Override Groups:" : "Remplacer ces groupes :",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Les utilisateurs qui sont membres d'au moins un de ces groupes sont supprimés des groupes automatiques. C'est également le cas si l'utilisateur est ajouté à l'un de ces groupes après sa création, c'est-à-dire que l'appartenance aux groupes de substitution est vérifiée après chaque modification de groupe.",
    "Check for correct Auto Group membership on every login." : "Vérifiez l'appartenance au groupe automatique à chaque connexion.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Activez ce paramètre pour appliquer l'adhésion appropriée au groupe automatique à chaque connexion réussie. Cela est utile si aucun utilisateur n'est créé dans Nextcloud (par exemple, avec des connexions d'utilisateurs externes) ou pour appliquer l'appartenance à un groupe correct pour tous les utilisateurs lorsque les groupes automatiques / groupes de remplacement ont changé."
},
"nplurals=2; plural=(n > 1);");
