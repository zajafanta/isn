# isn
Générer ders Lorem Ipsum : http://lipsum.com/


Les sites qui sauvent :
    Design :
        https://material.io/
        
    HTML/CSS/JS :
        https://developer.mozilla.org (même si le prof aime pas)
        http://www.w3schools.com/
        https://www.w3.org/ <-- why not?
        https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
        https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS
        
        
    Idée webapp :
        https://app.keeweb.info/ démo de KeeWeb qui est une webapp dont le code source est là : https://github.com/keeweb/keeweb/
        



Le truc qu'on veut faire :
    Une application web qui présente des quizz sur le programme de SVT. 
    
Fonctionnalités :
    * Permettre de faire un quizz sur tout le programme
    * Permettre de faire un quizz sur quelques thématiques
    * Les quizz sont générés de manière aléatoire à chaque nouveau quizz
    * Il y a une page bonus accessible via le code Konami
    * Il y a une version accessible aux personnes dislexiques/malvoyantes
    * La version classique est utilisable avec un lecteur d'écran
    
    
Aspect global :
    * Material design parce que le but c'est que les gens aient pas envie de fuir le site en le voyant
    * Peu de pages : 
        - Une page d'accueil qui donne le choix entre démarrer un quizz complet ou un quizz sur une notion en particulier.
        - Les pages avec les questions
        - La page finale
        - La page bonus (prendre exemple sur komic.eu ou omfgdogs.com)
        - Une page mention légales / license / about / toussa ?
    * Responsive pour permettre un usage sur tablette / smartphone
        
        
Faire attention à laisser de la place à l'évolution :
Mettre des variables partout même quand ça sert à rien. Par exemple on met les propriétés des quizz dans des variables
parce qu'au cours du projet on peut changer d'avis et décider de permettre de sélectionner la longueur du quizz.
Mettre aussi des variables dans les éléments visuels pour faciliter le changement de thème entre classique et a11y, l'i18n,
et pourquoi pas pouvoir réutiliser l'application pour faire des quizz sur des sujets complètements différents (comme les maths).
    
    
Comment gérer :
    * L'accessibilité :
        * Avec le police opendyslexique
        * En n'utilisant que des couleurs discernables par les dyslexiques
        * Pas de photographies de SVT mais des schémas ?
        Voir  https://material.io/guidelines/usability/accessibility.html
            http://opendyslexic.org/
            
Dossier final :
    décrire tout ce qu'on a fait de A  à Z :
        -pq on l'a fait, comment on l'a fait, pq on l'a fait de cette manière blablabla... et se documenter sur tout les outils qu'on a utiliser
