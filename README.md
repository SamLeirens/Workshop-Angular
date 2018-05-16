# Workshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.


# Workshop Angular
Tijdens deze workshop zullen wij kennismaken met het populaire front-end framework “Angular”. We zullen hiervoor de laatste versie van Angular gebruiken, namelijk versie 6. Voor deze workshop dient men Node Pack Manager (NPM) en een IDE (IntelliJ IDEA Ultimate, PhpStorm, …) te installeren.

Aanmaken van project
1.	Installeer Angular CLI met het volgende commando: npm install -g @angular/cli
2.	Creëer een nieuw project met het volgende commando: ng new PROJECT_NAME
3.	Ga naar de folder van het project
4.	Start het project op met het volgende commando: ng serve --open

Oefening 1
We beginnen met een eerste pagina aan te maken. Deze pagina moeten we kunnen bereiken aan de hand van de URL. Routing is een heel belangrijk concept binnen webapplicaties.

1.	Creëer de app routing module. Deze module zal de routing voor de applicatie verzorgen, waarbij de gebruiker een URL ingeeft en de module de gepaste webpagina zal terugsturen. Dit doen we met het volgende commando in de folder “src/app”: ng generate module app-routing –flat

2.	Binnen de AppRoutingModule zullen we de verschillende routes definiëren door middel van een constante array. Deze array ziet er als volgt uit: 

const appRoutes: Routes = [
 {path: 'overzicht', component: OverzichtComponent},
  	{path: '**', redirectTo: 'overzicht’}
];
(“OverzichtComponent dient nog aangemaakt te worden”)
	
3.	Initialiseer vervolgens de RouterModule die gebruik zal maken van onze routes. Dit doen we door “RouterModule.forRoot(appRoutes)” te importeren in onze AppRoutingModule.

4.	Importeer de AppRoutingModule in de AppModule.


5.	Plaats het “<router-outlet>”-element in de AppComponent template.

6.	Tenslotte moeten we de uiteindelijke component met zijn bijhorende module creëren. We starten met een pagina waarop we een overzicht van alle –Pokémon te zien krijgen. In deze oefening dienen we enkel de component aan te maken. Dit doen we met de volgende commando’s in de folder “src/app”: ng generate component COMPONENT_NAME en ng generate module MODULE_NAME

Nu de routing afgerond is, kunnen we ons naar de route begeven die we aangegeven hebben in onze AppRoutingModule. Surf naar “Localhost:4200/overzicht”.
Oefening 2
In deze oefening gaan we de pagina opvullen met inhoud. Het gaat hier om een overzicht van alle Pokémon. Voor de datavoorziening zullen we gebruik maken van een In Memory Database Service van Angular zelf. Deze bootst het gedrag na van een echte API die op een server draait. Deze Database Service bevindt zich tussen de bijgeleverde bronbestanden.

1.	Voeg een nieuwe dependency toe met het volgende commando: npm install angular-in-memory-web-api --save

2.	Initialiseer de HttpClientInMemoryWebApiModule die gebruik zal maken van onze dataservice. Dit doen we door “HttpClientModule” en “HttpClientInMemoryWebApiModule.forRoot(PokemonDataService)” te importeren in onze AppModule.

3.	Een Pokémon stelt een model voor. Dit model dienen we eerst te creëren zodat we dit later kunnen koppelen aan de data die we ontvangen van onze dataservice. Creëer manueel een nieuw bestand, genaamd “Pokemon.ts”, om vervolgens de klasse te definiëren.

4.	Nu dienen we onze eigen service te creëren, die alle API-calls zal verzorgen en functies zal voorzien om de data op te halen of aan te passen. Dit doen we met het volgende commando: ng generate service SERVICE_NAME

5.	Onze eigen service zal de functies bevatten om CRUD-operaties uit te voeren op de database, wat in onze geval in memory is. Schrijf een functie om alle Pokémon op te halen.

6.	Nu moeten we de Pokémon weergeven op onze webpagina. Allereerst dienen we de data in de component op te halen, en vervolgens moeten we deze weergeven in te template aan de hand van (two-way) binding.

7.	Om het iets overzichtelijker te maken, gaan we deze data in een tabel verwerken. Schrijf hiervoor de nodige code en maak hiervoor gebruik van *ngFor.


8.	Zorg ervoor dat de types van elke Pokémon de achtergrondkleur krijgt die de Pokémon bezit. Gebruik hiervoor [ngStyle].


Oefening 3
Natuurlijk moet het ook mogelijk zijn om data toe te voegen, aan te passen of te verwijderen. In deze oefening gaan we de nodige functionaliteit hiervoor toevoegen. Voor het toevoegen of aanpassen van een Pokémon zullen we gebruik maken van modals, een soort ‘dialog box’ die over onze pagina zal openen. Gebruik bij deze oefening de documentatie van de betrokken dependencies. De links naar deze documentatie kan u in de bijlage vinden.

3.1 Toevoegen van een Pokémon

1.	Voeg twee nieuwe dependencies toe, namelijk @angular/material en @angular/cdk

2.	Creëer een nieuwe component voor de modal die we zullen gebruiken voor het toevoegen van een Pokémon.

3.	Wanneer de gebruiker op de knop “Toevoegen” klikt, zal er een dialog openen met de net aangemaakte component.

4.	Zorg ervoor dat we de gegevens van een Pokémon kunnen invullen in de dialog. Hiervoor maken we gebruik van een FormBuilder. Voor de kleur van een Pokémon kan de gebruiker een colorpicker gebruiken, waarvoor we eerst een nieuwe dependency moeten toevoegen, namelijk ngx-color-picker. 

5.	Wanneer de gebruiker op de knop “Toevoegen” klikt, zal de Pokémon aangemaakt worden in de dialog en terug gestuurd worden naar de overzichtpagina, waar het vervolgens opgeslagen wordt.  Hiervoor dienen we een nieuwe functie met een HTTP Post-request toe te voegen aan onze service.
(Tip: Dit object wordt in de overzichtpagina opgevangen in de vorm van een event. Dit doen we met een subscribe.)

6.	We willen ervoor zorgen dat gebruikers geen velden leeg mogen laten of foute gegevens kunnen invullen. Hiervoor gaan we validators toevoegen aan de FormBuilder of HTML attributen gebruiken. De fouten moeten bij het gepaste  veld getoond worden. 
We willen volgende validatie toevoegen:
•	Alle velden zijn verplicht
•	De gebruikers mogen geen waarden kunnen intypen in de colorpicker
•	De naam bestaat uit minstens 3 karakters en maximum 20 karakters





3.2 Aanpassen van een Pokémon

1.	Creëer een nieuwe component voor de modal die we zullen gebruiken voor het aanpassen van een Pokémon. Hiervoor kan je de component voor het toevoegen kopiëren.

2.	Voeg een nieuwe kolom “Acties” toe aan het overzicht van de Pokémon. Zet hier een icoontje naast elke rij voor deze te kunnen wijzigen met het volgende HTML-element: <span class="glyphicon glyphicon-pencil"></span>. Wanneer de gebruiker hierop klikt, zal de bijhorende dialog openen en moeten we de identifier van de gekozen Pokémon doorsturen als parameter.
(Tip: We gebruiken hiervoor MAT_DIALOG_DATA.)

3.	Wanneer we de identifier ontvangen in de dialog, zullen we de Pokémon moeten ophalen. We moeten hiervoor dus een functie in de service schrijven. Tenslotte moeten we ervoor zorgen dat de opgehaalde Pokémon correct weergegeven wordt en bij het opslaan deze Pokémon teruggestuurd wordt.
(Tip: Two-way binding maakt dit een stuk eenvoudiger. Gebruik hiervoor de [(ngModel)]-attribuut.)

4.	Wanneer de gebruiker op de knop “Aanpassen” klikt, zal de Pokémon terug gestuurd worden naar de overzichtpagina, waar het vervolgens opgeslagen wordt. Hiervoor dienen we een nieuwe functie met een HTTP Put-request toe te voegen aan onze service.

3.3 Verwijderen van een Pokémon

1.	Voeg een nieuw icoon toe aan de acties met het volgende HTML-element:         <span class="glyphicon glyphicon-remove"></span>. Wanneer de gebruiker hierop klikt, zal de Pokémon verwijdert worden. Hiervoor dienen we een nieuwe functie met een HTTP Delete-request toe te voegen aan onze service.

2.	Voeg een knop toe waarmee alle Pokémon verwijdert worden. Wanneer de lijst van Pokémon leeg is, moet je een gepaste boodschap tonen.

3.	Voeg een knop toe waarmee men de pokedex opnieuw kan opvullen. Deze knop mag enkel getoond worden als de lijst van Pokémon leeg is.
 

Oefening 4
In deze oefening gaan we een aparte component aanmaken die ervoor zal zorgen dat we Pokémon kunnen opzoeken op basis van naam. Deze component tonen we op de overzichtspagina. Wanneer een gebruiker hier een term ingeeft, zal de component een lijst van Pokémon op basis van de invoer terugsturen naar de overzichtspagina, die deze vervolgens zal weergeven.
(Tip: Maak hier gebruik van events. In dit geval gaat het om een Output-event van de nieuwe ‘SearchBar’-component.)

 

Bijlage
Voor deze workshop zijn er heel wat dependencies nodig om het gewenste resultaat te bekomen. Hieronder vindt u een lijst met al deze dependencies. Weet dat sommige libraries onderling ook andere libraries nodig hebben. Ook deze staan hier opgesomd. We zullen deze installeren met Node Package Manager (NPM), gebruik makend van volgend commando: npm install DEPENDENCY_NAME –save. ‘—save’ wilt zeggen dat we deze dependency zullen toevoegen aan het ‘package.json’-bestand. Wanneer we later het commando ‘npm install’ uitvoeren in de folder waarin dit bestand zich bevind, zal npm automatisch alle dependencies ophalen die zich in het bestand bevinden.

•	angular-in-memory-web-api
(In memory database voor CRUD-operaties uit te voeren op data)

•	@angular/material
(Documentatie te vinden op : https://material.angular.io/components/dialog/overview)

•	@angular/cdk

•	ngx-color-picker
(Documentatie te vinden op : https://www.npmjs.com/package/ngx-color-picker)

•	@angular/forms
(Deze dependency is standaard toegevoegd en moet dus niet apart geïnstalleerd worden)
(Documentatie te vinden op : https://angular.io/api/forms/FormBuilder)


•	<link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
(Plaats deze in het <head>-element van het “index.html”-bestand)


•	“@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';”
(Plaats deze in het globale “styles.css”-bestand voor de dialogs)






