OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Il gruppo \"%1$s\" è utilizzato nell'applicazione Gruppi Automatici e non può essere eliminato.",
    "Auto Groups" : "Gruppi automatici",
    "Automatically adds all users to one or multiple specified groups." : "Aggiungi automaticamente tutti gli utenti a uno o più gruppi.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Aggiungi automaticamente utenti ai gruppi automatici specificati, eccetto quelli appartenenti a uno dei gruppi di sovrascrittura specificati. \nFacoltativamente, l'assegnazione ai gruppi può attivarsi a ogni accesso riuscito, il che è utile per motori di utenti esterni.\n\n## Configurazione\n\n- Vai in \"Impostazioni amministratore > Impostazioni aggiuntive\"\n- Configura i gruppi automatici\n- Se necessario, configura i gruppi di sovrascrittura (ad es. per gli account di servizio)\n- Facoltativamente, attiva l'aggancio per l'accesso, che applicherà la giusta appartenenza a ogni accesso riuscito\n\nNota che questa applicazione impedisce l'eliminazione dei gruppi individuati come gruppi automatici o gruppi di sovrascrittura.\n\n## Confronto con applicazioni simili\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): l'applicazione \"Everyone Group\" aggiunge un motore di gruppi virtuale, che fornisce sempre tutti gli utenti. Al contrario, \"Gruppi automatici\" opera su gruppi \"reali\" nel normale motore di gruppi. In aggiunta, è possibile specificare gruppi di sovrascrittura che impedirà agli utenti di essere aggiunti ai gruppi automatici.\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): Auto Groups\" è attualmente un fork modernizzato e mantenuto di \"Default Group\", che sembra essere abbandonato da NC12 o giù di lì. In termini di funzionalità, sono quasi identici.\n\nIn aggiunta, ho in programma di aggiungere altre funzionalità in futuro, ad es., \"Gruppi unione\" - vedi [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) per ulteriori dettagli.",
    "Auto Groups:" : "Gruppi automatici:",
    "Automatically add all users to these groups." : "Aggiungi automaticamente tutti gli utenti a questi gruppi.",
    "Override Groups:" : "Gruppi di sovrascrittura:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Gli utenti che sono membri di almeno uno di questi gruppi sono rimossi dai gruppi automatici. Questo vale anche se l'utente viene aggiunto a uno di questi gruppi dopo la creazione, cioè l'appartenenza ai gruppi di sovrascrittura viene controllata dopo ogni modifica ai gruppi.",
    "Check for correct Auto Group membership on every login." : "Controlla la corretta appartenenza ai gruppi automatici a ogni accesso.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Attiva questa opzione per applicare l'appartenenza ai gruppi automatici ad ogni accesso riuscito. È utile se gli utenti non sono creati su Nextcloud (es. con backend di utenti esterni) o per applicare la giusta appartenenza al gruppo per tutti gli utenti quando vengono modificati i gruppi automatici / di sovrascrittura.",
    "Only check for Auto Group membership on user creation." : "Controlla la corretta appartenenza ai gruppi automatici in fase di creazione degli utenti.",
    "If checked, Auto Group membership will not be re-enforced on subsequent user modifications." : "Se selezionato, l'appartenenza al gruppo automatico non sarà forzata di nuovo su modifiche dell'utente successive."
},
"nplurals=2; plural=(n != 1);");
