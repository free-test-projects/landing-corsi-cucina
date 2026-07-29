# Documento di architettura — Cucina Aperta

## Tecnologie: com'è oggi

Pagina statica: HTML, CSS e JavaScript senza librerie. Nessun processo di build.

## Tecnologie: dove deve arrivare

React con Vite per l'interfaccia.

Le librerie necessarie a raggiungere questo stato sono ammesse, comprese quelle per le animazioni. Ogni aggiunta va dichiarata: cosa è stato aggiunto e perché.

## Organizzazione dei file

Oggi: `index.html` la pagina, `style.css` gli stili, `script.js` i comportamenti.

Dopo la conversione: `frontend/` per l'interfaccia, e `backend/` per il servizio dove previsto.

## Regole di scrittura del codice

- Una regola di stile vale per tutti gli elementi dello stesso tipo: niente classi numerate.
- Nessun valore di stile scritto dentro i tag.
- Le funzioni si collegano agli elementi dal codice, non con attributi nel markup.
- Ogni informazione sta scritta in un punto solo: se compare in due posti, arriva dalla stessa fonte.
- Nessuna chiave, password o dato personale scritto nel codice.
- I nomi dicono cosa fa la cosa che nominano.

## Regole sulle animazioni

- Si animano solo `transform` e `opacity`.
- Va rispettata l'impostazione `prefers-reduced-motion`.

## Come si sviluppa

Una parte alla volta, seguendo il piano di sviluppo del documento dei requisiti. Ogni parte attraversa interfaccia, logica e dati.
