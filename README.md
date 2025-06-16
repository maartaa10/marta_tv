
### Documentació del Projecte

# TV Series Viewer

## Descripció del Projecte
Aquest projecte és una pàgina web que mostra informació d'un conjunt d'elements provinents de l'API pública de TVMaze. L'usuari pot seleccionar entre sèries i actors, i navegar entre ells utilitzant un comandament a distància virtual. La navegació es fa mitjançant el comandament a distància, simulant l'experiència d'estar fent servir una tele real.

## API Utilitzada
### TVMaze API
- **Enllaç**: [TVMaze API](https://www.tvmaze.com/api)
- **Descripció**: L'API de TVMaze proporciona informació sobre sèries de televisió, actors, episodis, i més. Permet obtenir una llista d'elements i consultar detalls específics de cadascun.

### Endpoints Utilitzats
- **Sèries**: `https://api.tvmaze.com/shows`
- **Actors**: `https://api.tvmaze.com/people`

## Funcionament de l'API
### Obtenir Sèries
- **Endpoint**: `https://api.tvmaze.com/shows`
- **Mètode**: GET
- **Descripció**: Obté una llista de sèries de televisió. En aquest projecte, s'obtenen les primeres 20 sèries.

### Obtenir Actors
- **Endpoint**: `https://api.tvmaze.com/people`
- **Mètode**: GET
- **Descripció**: Obté una llista d'actors. En aquest projecte, s'obtenen els primers 20 actors.

## Descripció de la Implementació
### Estructura del Projecte
- **HTML**: Estructura de la pàgina i elements del comandament a distància.
- **CSS**: Estils per a la pàgina i el comandament a distància.
- **JavaScript**: Lògica per obtenir i mostrar dades de l'API, i gestionar la interacció de l'usuari.

### Funcionalitat del Comandament a Distància
Per utilitzar els botons del comandament a distància, la televisió ha d'estar encesa.

| Botó                | Funcionalitat                                                                 |
|---------------------|-------------------------------------------------------------------------------|
| **Ences (Verd)**   | Encén la televisió i carrega les dades del paràmetre actual (sèries o actors).|
| **Apagat (Vermell)**| Apaga la televisió i neteja la pantalla.                                      |
| **Refrescar (Blau)**  | Refresca les dades del paràmetre actual (sèries o actors).                    |
| **ch+**             | Navega al següent element (sèrie o actor).                                     |
| **ch-**             | Navega a l'element anterior (sèrie o actor).                                   |
| **0-9**             | Selecciona un element específic per número.                                    |
| **S (Sèries)**      | Canvia el paràmetre actual a sèries i carrega les dades.                      |
| **A (Actors)**      | Canvia el paràmetre actual a actors i carrega les dades.                      |

### Comentaris Extres
- **Botó de Refrescar (Blau)**: Aquest botó permet refrescar les dades del paràmetre actual (sèries o actors) sense necessitat d'apagar i encendre la televisió.
- **Botó "S" (Sèries)**: Aquest botó canvia el paràmetre actual a sèries i carrega les dades corresponents.
- **Botó "A" (Actors)**: Aquest botó canvia el paràmetre actual a actors i carrega les dades corresponents.

### Versió amb Axios
Dins del projecte, hi ha una versió feta amb `axios` a la carpeta [versio_axios](./versio_axios/) . Aquesta versió utilitza la biblioteca `axios` per fer les sol·licituds HTTP en lloc de `fetch`. La funcionalitat és la mateixa, però la implementació pot ser més fàcil de llegir i mantenir. La carpeta esta dins del mateix projecte global.

### Disseny Frontend
El disseny frontend s'ha agafat d'aquesta URL: [https://codepen.io/mudassirchagan/pen/qNPvJJ](https://codepen.io/mudassirchagan/pen/qNPvJJ), però s'han implementat modificacions com l'addició d'alguns botons (refrescar, S, A, etc).



