OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Le groupe \"%1$s\" est utilisé pour l'application Groupes Automatiques et ne peut pas être supprimé.",
    "Auto Groups" : "Groupes Automatiques",
    "Automatically adds all users to one or multiple specified groups." : "Ajoute automatiquement tous les utilisateurs à un ou plusieurs groupes indiqués.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Settings > Administration > Additional settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Ajoute automatiquement les utilisateurs aux Groupes Automatiques, à l'exception de ceux appartenant à l'un des Groupes Dérogatoires.\nFacultativement, l'affectation des groupes peut être déclenchée à chaque connexion, ce qui est particulièrement utile avec les interfaces d'authentification externes.\n\n## Configuration\n\n- Rendez-vous dans \"Paramètres > Administration > Paramètres supplémentaires",
    "Automatically add all users to these groups." : "Ajouter automatiquement tous les utilisateurs à ces groupes.",
    "Override Groups:" : "Groupes dérogatoires : ",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Les utilisateurs qui sont membres d'au moins un de ces groupes sont supprimés des groupes automatiques. C'est également le cas si l'utilisateur est ajouté à l'un de ces groupes après sa création, c'est-à-dire que l'appartenance aux groupes de substitution est vérifiée après chaque modification de groupe.",
    "Set Auto Group membership on user creation." : "Définir l’adhésion automatique au groupe lors de la création de l’utilisateur.",
    "If checked, Auto Group membership will be enforced on user creation." : "Si coché, l’adhésion automatique au groupe sera appliquée à la création de l’utilisateur.",
    "Check Auto Group membership on modification of a user's groups." : "Vérifier l'adhésion aux groupes automatiques lors de la modification d'un groupe de l'utilisateur",
    "If checked, Auto Group membership will be re-enforced for a user account every time it is added to or removed from a group." : "Si coché, l'adhésion aux groupes automatiques sera revérifiée pour chaque compte qui est ajouté ou supprimé d'un groupe.",
    "Check for correct Auto Group membership on every login." : "Vérifier l'adhésion au groupe automatique à chaque connexion.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Activer ce paramètre pour appliquer l'adhésion automatique au groupe à chaque connexion réussie. Cela est utile si aucun utilisateur n'est créé dans Nextcloud (par exemple, avec des connexions d'utilisateurs externes) ou pour appliquer l'appartenance à un groupe correct pour tous les utilisateurs lorsque les groupes automatiques / groupes dérogatoires ont changé."
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
