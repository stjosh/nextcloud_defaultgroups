OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Grupa \"%1$s\" jest używana w aplikacji Grup automatycznych i nie można jej usunąć.",
    "Auto Groups" : "Grupy automatyczne",
    "Automatically adds all users to one or multiple specified groups." : "Automatycznie dodaje wszystkich użytkowników do jednej lub wielu określonych grup.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Settings > Administration > Additional settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Automatycznie dodawaj użytkowników do określonych Grup automatycznych, z wyjątkiem użytkowników należących do jednej z określonych Grup przypisanych.\nOpcjonalnie przypisanie grupy można uruchomić przy każdym udanym logowaniu, co jest przydatne w przypadku zewnętrznych użytkowników.\n\n## Konfiguracja\n\n- Wybierz \"Ustawienia > Administracja > Ustawienia dodatkowe\"\n- Skonfiguruj Grupy automatyczne\n- W razie potrzeby skonfiguruj Grupy przypisane (np. dla kont usług)\n- Opcjonalnie włącz logowanie Hook, które wymusi prawidłowe członkostwo w grupie przy każdym udanym logowaniu\n\nPamiętaj, że ta aplikacja zapobiega usuwaniu grup w przypadku grup określanych jako Grupy automatyczne lub Grupy przypisane.\n\n## Porównanie z podobnymi aplikacjami\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): Aplikacja \"Everyone Group” dodaje wirtualne zaplecze grupy, zawsze oddając wszystkich użytkowników. W przeciwieństwie do \"Everyone Group\", aplikacja \"Auto Groups\" działa na rzeczywistych grupach w normalnym zapleczu grupy. Dodatkowo możliwe jest wyszczególnienie \"Override Groups\", które zapobiegną dodawaniu użytkowników do Grup automatycznych.\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" jest w rzeczywistości zmodernizowanym i utrzymywanym rozwidleniem \"Default Group\", która wydaje się być porzucona mniej więcej od czasu NC12 oraz pod względem funkcjonalności są prawie identyczne.\n\nPonadto z czasem planuję dodać więcej funkcji, np. \"Union Groups\" - więcej informacji można znaleźć w [Planach kamieni milowych](https://github.com/stjosh/auto_groups/milestones).",
    "Automatically add all users to these groups." : "Automatycznie dodaj wszystkich użytkowników do tych grup.",
    "Override Groups:" : "Grupy przypisane:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Użytkownicy, którzy są członkami co najmniej jednej z tych grup, są usuwani z grup automatycznych. Dzieje się to również wtedy, gdy użytkownik zostanie dodany do jednej z tych grup po jej utworzeniu. Członkostwo w grupach przypisanych jest sprawdzane po każdej modyfikacji grupy.",
    "Set Auto Group membership on user creation." : "Ustaw członkostwo w Grupie automatycznej podczas tworzenia użytkownika.",
    "If checked, Auto Group membership will be enforced on user creation." : "Jeśli zaznaczone, członkostwo w Grupie automatycznej będzie wymuszane podczas tworzenia użytkownika.",
    "Check Auto Group membership on modification of a user's groups." : "Sprawdź członkostwo w Grupie automatycznej po modyfikacji grup użytkownika.",
    "If checked, Auto Group membership will be re-enforced for a user account every time it is added to or removed from a group." : "Jeśli zaznaczone, członkostwo w Grupie automatycznej będzie ponownie wymuszane dla konta użytkownika za każdym razem, gdy zostanie ono dodane lub usunięte z grupy.",
    "Check for correct Auto Group membership on every login." : "Sprawdź poprawność członkostwo w grupach automatycznych przy każdym logowaniu.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Włącz to ustawienie, aby wymuszać prawidłowe członkostwo w grupach automatycznych przy każdym udanym logowaniu. Jest to przydatne, gdy użytkownicy nie są utworzeni w Nextcloud (np. z zewnętrznymi zapleczami użytkowników) lub w celu wymuszenia prawidłowego członkostwa w grupie dla wszystkich użytkowników, gdy zmieniły się Grupy automatyczne/Grupy przypisane."
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
