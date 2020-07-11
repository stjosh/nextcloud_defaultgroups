OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "\"%1$s\" taldea ezin da ezabatu Talde automatikoak aplikazioan erabiltzen delako.",
    "Auto Groups" : "Talde automatikoak",
    "Automatically adds all users to one or multiple specified groups." : "Automatikoki gehitzen ditu erabiltzaile guztiak hautaturiko talde batera edo batzuetara.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Gehitu automatikoki erabiltzaileak Talde automatikoetan, Gainidazpen taldeetako kide diren erabiltzaileak ezik. \nAukeran, talde esleipena saio-hasiera bakoitzean abiarazi daiteke, mesedegarri dena kanpoko-atzealdea duten erabiltzaileentzat.\n\n## Konfigurazioa\n\n- Joan hona: \"Admin ezarpenak > Ezarpen gehiago\"\n- Konfiguratu Talde automatikoak\n- Beharrezkoa bada, konfiguratu Gainidazpen taldeak (adib: zerbitzu-kontuetarako)\n- Aukeran, gaitu saio hasierako lotura, taldeetako kidetzak ondo egotea ziurtatuko duena saio hasiera bakoitzean.\n\nKontuan izan aplikazio honek taldeen ezabaketa galarazten duela Talde automatiko eta Gainidazpen taldeen kasuan.\n\n## Konparaketa antzeko aplikazioekin \n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): \"Denak taldea\" aplikazioak  taldearen atzealde birtual bat gehitzen du, erabiltzaile guztiak etengabe atzera ekarriz. Talde automatikoak aplikazioak, ordea, \"egiazko\" taldeekin lan egiten du taldearen atzealde arruntean. \nHorrez gain, posible da Gainidazpen taldeak zehaztea, erabiltzaileak Talde automatiko batean gehitzea galarazteko.\n * [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Talde automatikoak\", berez, \"Talde lehenetsia\" aplikazioaren adarkatze modernizatu eta mantenua daukana da. NC12-az geroztik bertan behera dago. Funtzionaltasunari dagokionez, ia berdinak dira.\n\nGainera, eginbide gehiago gehitzeko asmoa dugu, adibidez,  \"Union Groups\"- xehetasun gehiagorako ikus  [Milestone Plans](https://github.com/stjosh/auto_groups/milestones).",
    "Auto Groups:" : "Talde automatikoak:",
    "Automatically add all users to these groups." : "Gehitu automatikoki erabiltzaile guztiak talde hauetara.",
    "Override Groups:" : "Gainidazte taldeak:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Talde hauetakoren batean dauden erabiltzaileak kendu egiten dira talde automatikoetatik. Hala gertatzen da, baita ere, erabiltzaile bat taldea sortu ondoren gehitzen bada. Esaterako, gainidazpen-taldeetako kidetzak berrikusi egiten dira taldeetan aldaketak egiten diren bakoitzean.",
    "Check for correct Auto Group membership on every login." : "Egiaztatu beti Talde automatikoaren kidetza saioa hastean",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Gaitu ezarpen hau Talde automatikoen kidetzak saio-hasiera bakoitzean ondo berrezartzeko. Hau erabilgarria da bai erabiltzaileak Nextclouden sortuak ez badira (adib. kanpoko-atzealdea dutenean), bai talde automatikoek edo gainidazpen taldeek aldaketak jasan dituztenean,  erabiltzaile guztien talde-kidetzak ondo berrezartzeko."
},
"nplurals=2; plural=(n != 1);");
