# Plan de la formation JS

## Scopes
* Scope = function (registre de déclaration)
* Principes du compilateurs JS (construction des registres de déclarations dans chaque scope)
  * JS est compilé (JIT) et non interprété
  * Hoisting
* Exemple
  * de déclaration de variables (expliquer le fonctionnement de la déclaration)
  * d'exécution (expliquer le fonctionnement)
* Function declaration vs Function expression
* Lexical scope
  * Eval modifie le scope lexical : ne pas utiliser
* IIFE pattern
* Closure
* Module pattern (classical)
* Dynamic Scope : this
  * 4 règles de binding (default, implicit, explicit, new)
* Prototype

## Le Document Object Model (DOM)
* Accès aux éléments et attributs
  * accessor
    * getElementById
    * getElementByClassName
    * querySelector / querySelectorAll
  * Les formulaires
* Modification de la page : ajout et suppression de nœuds
* Accès aux propriétés de style et à la classe CSS
* Gestion des événements
  * Evenement Natif (MouseEvent, TouchEvent ...)
  * CustomEvent

## Environement du Navigateur
* Cookies
* Location, Hash, pushState
* Canvas
* Sound API
* Navigator
  * geolocation
  * languages
* Worker
* WebSocket / ServerEvent
* WebRTC
