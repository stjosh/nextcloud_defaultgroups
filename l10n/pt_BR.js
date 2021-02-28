OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "O Grupo \"%1$s\" é usado no Aplicativo Grupos Automáticos e não pode ser excluído.",
    "Auto Groups" : "Auto Grupos",
    "Automatically adds all users to one or multiple specified groups." : "Adiciona automaticamente todos os usuários a um ou vários grupos especificados.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Adicione automaticamente usuários aos Grupos Automáticos especificados, exceto aqueles que pertencem a um dos Grupos de Substituição especificados. \nOpcionalmente, os grupos de atribuição podem ser designados em todo login, o que é útil para backends de usuários externos.\n\n## Configuração\n\n- Vá em \"Configurações Administrativas > Configurações  Adicionais\"\n- Configure os Grupos Automáticos\n- Se necessário, configure os Grupos de Substituição (por ex., para Contas de Serviço)\n- Opcionalmente, ative o Hook de Login, que aplicará a associação correta ao grupo em cada login\n\nObserve que esta aplicação previne a exclusão de grupos referenciados como Grupos Automáticos ou de Substituição.\n\n## Comparativo com Aplicativos similares\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): O \"Everyone Group\" adiciona um Backend de Grupo virtual, sempre retornando todos os usuários. Em contraste à isso, o \"Grupos Automáticos\" opera em grupos reais no seu Backend de Grupo normal. Além disso, é possível especificar Grupos de Substituição que impedirão que os usuários sejam adicionados aos Grupos Automáticos.\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Grupos Automáticos\" é, na verdade, uma bifurcação moderna e mantida de \"Default Groups\", que parece ter sido abandonado desde o NC12. Em termos de funcionalidade, eles são quase idênticos.\n\nEm adição à isso, pretendo adicionar mais recursos, por ex. \"Grupos de União\" - Leia [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) para mais detalhes.",
    "Auto Groups:" : "Auto Grupos:",
    "Automatically add all users to these groups." : "Adicionar todos os usuários a estes grupos automaticamente.",
    "Override Groups:" : "Grupos de Substituição:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Usuários que são membros de pelo menos um desses grupos são removidos dos grupos automáticos. Esse também é o caso se o usuário for adicionado a um desses grupos após a criação, ou seja, a associação nos grupos de substituição será verificada após cada modificação do grupo.",
    "Check for correct Auto Group membership on every login." : "Verifique a associação correta do Grupo Automático em cada login.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Ative essa configuração para forçar a associação adequada ao Grupo Automático em cada login bem-sucedido. Isso é útil se os usuários não forem criados no Nextcloud (por exemplo, com backend de usuários externos) ou para forçar a associação correta ao grupo para todos os usuários quando os Grupos Automáticos/Grupos de Substituição forem alterados.",
    "Only check for Auto Group membership on user creation." : "Verifique apenas a adesão ao Grupo Automático na criação do usuário.",
    "If checked, Auto Group membership will not be re-enforced on subsequent user modifications." : "Se configurada, a adesão ao Grupo Automático não será reaplicada em modificações subsequentes do usuário."
},
"nplurals=2; plural=(n > 1);");
