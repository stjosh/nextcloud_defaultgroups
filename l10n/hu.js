OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "A(z) \"%1$s\" csoportot az Automatikus csoport alkalmazás használja, és nem törölhető.",
    "Auto Groups" : "Automatikus csoportok",
    "Automatically adds all users to one or multiple specified groups." : "Az összes felhasználót automatikusan hozzáadja egy vagy több megadott csoporthoz.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Automatikusan hozzáadja a felhasználókat a megadott automatikus csoportokhoz, kivéve a megadott felülírási csoportok valamelyikéhez tartozó felhasználókat.\nOpcionálisan a csoport hozzárendelés minden sikeres bejelentkezéskor kiváltható, ami hasznos a külső felhasználói háttérprogramok számára.\n## Konfiguráció\n\n- Lépjen az \"Adminisztrátori beállítások> További beállítások\" részhez\n- Konfigurálja az automatikus csoportokat\n- Ha szükséges, konfigurálja a Csoportok felülbírálását (pl. Szolgáltatási fiókokhoz)\n- Opcionálisan engedélyezze a bejelentkezés horgot, amely minden sikeres bejelentkezéskor érvényesíti a helyes csoporttagságot\n\nNe feledje, hogy ez az alkalmazás megakadályozza az automatikus csoportok vagy a csoportok felülbírálása néven hivatkozott csoportok törlését.\n\n## Összehasonlítás hasonló alkalmazásokkal\n\n* [Mindenki csoportja] (https://apps.nextcloud.com/apps/group_everyone): A \"Mindenki csoport\" alkalmazás hozzáad egy virtuális csoport háttérprogramot, mindig az összes felhasználót visszadva. Ezzel szemben az \"Automatikus Csoportok\" a normál Csoport httérprogram \"valós\" csoportjain működik. Ezenkívül megadható a csoportok felülbírálása, amely megakadályozza a felhasználók felvételét az automatikus csoportokba.\n* [Alapértelmezett csoport] (https://apps.nextcloud.com/apps/defaultgroup): Az \"Automatikus csoportok\" valójában az NC 12 óta elhagyatott és nem frissített \"Alapértelmezett csoport\" modernizált és karbantartott változata. A funkcionalitás szempontjából szinte azonosak.\n\nEzen túlmenően azt tervezem, hogy az idő múlásával még néhány funkciót felveszek, például: \"Egyesített csoportok\" - további részletekért lásd a [Milestone Plans] -ot (https://github.com/stjosh/auto_groups/milestones).",
    "Auto Groups:" : "Automatikus csoportok:",
    "Automatically add all users to these groups." : "Az összes felhasználó automatikus hozzáadása ehhez a csoporthoz.",
    "Override Groups:" : "Csoportok felülbírálása:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Azokat a felhasználókat, akik ezen csoportok legalább egyikének tagjai, eltávolítják az automatikus csoportokból. Ez akkor is így van, ha a felhasználót a létrehozás után felvesszük ezen csoportok egyikébe, vagyis minden csoportmódosítás után ellenőrizzük a felülírási csoportok tagságát.",
    "Check for correct Auto Group membership on every login." : "Automatikus csoport tagság ellenőrzése minden belépéskor.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Engedélyezze ezt a beállítást a megfelelő Automatikus csoportok tagság kikényszerítéséhez minden sikeres bejelentkezéskor. Ez akkor hasznos, ha vagy a felhasználókat nem a Nextcloudban hozzák létre (például külső felhasználói háttérprogramokkal), vagy a megfelelő csoporttagság kikényszerítése az összes felhasználó számára, amikor az Automatikus csoportok / Csoportok felülbírálása megváltozott.",
    "Only check for Auto Group membership on user creation." : "Csak a felhasználó létrehozásakor ellenőrizze az automatikus csoport tagságot.",
    "If checked, Auto Group membership will not be re-enforced on subsequent user modifications." : "Ha be van jelölve, az Automatikus csoportok tagságát a későbbi felhasználói módosítások nem érvényesítik."
},
"nplurals=2; plural=(n != 1);");
