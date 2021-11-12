OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "הקבוצה „%1$s” משמשת את יישומון הקבוצות האוטומטיות ולא ניתן למחוק אותה.",
    "Auto Groups" : "קבוצות אוטומטיות",
    "Automatically adds all users to one or multiple specified groups." : "מוסיף את כל המשתמשים אוטומטית לקבוצה או מגוון קבוצות נבחרות.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "הוסף משתמשים באופן אוטומטי ל-Auto Groups שצוינו, למעט המשתמשים השייכים לאחת מ-Override Groups שצוינו.\nבאופן אופציונלי, ניתן להפעיל את המשימה הקבוצתית בכל כניסה מוצלחת, דבר שימושי עבור backends של משתמש חיצוני.\n\n## תצורה\n\n- עבור אל \"הגדרות מנהל> הגדרות נוספות\"\n- הגדר את Auto Groups\n- אם נדרש, הגדר את ה-Override Groups (למשל, עבור חשבונות שירות)\n- לחלופין, הפעל את ה- Login Hook, שיאכוף חברות נכונה בקבוצה בכל כניסה מוצלחת\n\nשים לב שאפליקציה זו מונעת מחיקות קבוצות עבור קבוצות המכונות בשם \"Auto Groups\" או \"Override Groups\".\n\n## השוואה לאפליקציות דומות\n\n* [Everyone Group] (https://apps.nextcloud.com/apps/group_everyone]: האפליקציה \"Everyone Group\" מוסיפה Group Backend וירטואלי, ותמיד מחזירה את כל המשתמשים. לעומת זאת, \"Auto Groups\" פועלת בקבוצות \"אמיתיות\" ב-Group Backend הרגיל שלך. בנוסף, ניתן לציין Override Groups שימנעו להוסיף משתמשים ל-Auto Groups.\n* [Default Group] (https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" היא למעשה מזלג מודרני ומתוחזק של \"Default Group\", שנראה נטוש מאז NC12 לערך. מבחינת הפונקציונליות, הם כמעט זהים.\n\nבנוסף, אני מתכנן להוסיף כמה תכונות נוספות במשך הזמן, למשל, \"Union Groups\" - ראה את [Milestone Plans]\n (https://github.com/stjosh/auto_groups/milestones) לפרטים נוספים.",
    "Automatically add all users to these groups." : "להוסיף משתמשים אוטומטית לקבוצות אלו.",
    "Override Groups:" : "דריסת קבוצות:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "משתמשים שהם חברים בלפחות אחת מקבוצות אלה מוסרים מה-Auto Groups. זה נכון גם אם המשתמש מתווסף לאחת מהקבוצות הללו לאחר היצירה, כלומר, חברות ב-Override Groups נבדקת לאחר כל שינוי בקבוצה.",
    "Check for correct Auto Group membership on every login." : "לבדוק את החברות הנכונה בקבוצות האוטומטיות עם כל כניסה למערכת.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "הפעל הגדרה זו כדי לאכוף חברות נכונה ל-Auto Group בכל כניסה מוצלחת. זה שימושי אם אחד המשתמשים לא נוצר ב- Nextcloud (למשל, עם backends  חיצוניים של משתמשים) או כדי לאכוף חברות קבוצה נכונה עבור כל המשתמשים כאשר ה-Auto Groups/Override Groups השתנו."
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;");
