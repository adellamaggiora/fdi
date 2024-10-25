# Relazioni

***Una relazione $R$ tra l'insieme $A$ e l'insieme $B$ è un sottoinsieme del prodotto cartesiano $A \times B$***.

3 diversi tipi di notazione:

> $R \subseteq A \times B$

> $R \in Rel(A, B) Rel(A,B)= \mathcal{P(A \times B)}$

Dove Rel è l'insieme di tutte le relazioni tra A e B, ovvero l'insieme delle parti.

> $R: A \iff B$

Ad esempio, dato l'insieme $A = \{ a, b, c \}$ e l'insieme $B = \{ x, y \}$ alcuni esempi di relazione sono:
$R = \{(a, x); \ (b, y); \ (c, y)\} \subseteq A \times B$
$S = \{(y, c) \} \subseteq A \times B$
$\emptyset_{A, B} = \{ \} \subseteq A \times B$
Un qualsiasi sottoinsieme di $A \times B$ è una relazione tra $A \text{ e } B$.
Il più grande insieme di relazioni tra due insiemi è $A \times B$ .

Indicheremo *l'insieme di tutte le relazioni* tra $A$ e $B$ con la notazione $Rel(A, B)$.
Per indicare che $R$ è una relazione tra $A$ e $B$, ovvero $R \in Rel(A, B)$ scriveremo spesso $R: A \leftrightarrow B$

> $Rel(A, B) = \mathcal{P}(A \times B)$

l'insieme delle parti  $\mathcal{P}(A \times B)$ contiene tutti i sottoinsiemi del prodotto cartesiano $ A \times B$ e quindi tutt le possibili relazioni tra $A$ e $B$

> Se $A = \{x, y\}$ e $B = \{ a, b, c \}$ il sottoinsieme $\{ (x, a), (x, c) \}$ è una relazione in $Rel(A,B)$

Un esempio di relazione è quella di successore e si definisce così:
$\text{Succ}= \{ (x, y) \in \N \times \N \ | \ y = x + 1 \} \subseteq \N \times \N$
Da notare che l'insieme di partenza e l'insieme di arrivo sono gli stessi.

#### Alcuni tipi di relazione:

> Per tutti gli insiemi $A$ e $B$, il prodotto cartesiano $A \times B$ è una relazione in $Rel(A, B)$. Questa è anche detta RELAZIONE COMPLETA

- Relazione completa
  ![relazione completa](assets/images/rel-completa.png)

> Per tutti gli insiemi $A$ e $B$, $\varnothing$ è una relazione in $Rel(A, B)$. Questa è anche detta RELAZIONE VUOTA e viene denotata con $\varnothing_{A,B}$

- Relazione vuota
  ![relazione vuota](assets/images/rel-vuota.png)

> Per tutti gli insiemi $A$, $\{ \ (x, x) \ | \ x \in A \ \} \subseteq A \times A$ è una relazione ed è chiamata RELAZIONE IDENTITÀ

- Relazione identità
  ![relazione identità](assets/images/rel-identita.png)

La realazione identità può anche essere vista come
$I = \{ (x, y) \in \R \times \R \ | \ x = y \}$
e quindi può essere vista graficamente come la bisettrice del primo e terzo quadrante.

La funzione identità è l' elemento neutro della composizione.

Talvolta l'insieme di partenza e di arrivo possono essere il prodotto cartesiano di altri insiemi:

$\text{Plus} =  \{ ((x, y), z) \in (\N \times \N) \times \N \ | \ z = x + y \} \in (\N \times \N) \times \N$

### Operazioni su relazioni

Come gli insiemi, anche le relazioni possono essere combinate in vari modi per ottenere nuove relazioni.

Ad esempio, data la relazione Madre e la relazione padre, l'unione di queste due relazione genera la relazione Genitore.

$\text{Madre} = \{ (x, y) \in \text{EU} \times \text{EU} \ | \ \text{x è madre di y} \}$
$\text{Padre} = \{ (x, y) \in \text{EU} \times \text{EU} \ | \ \text{x è padre di y} \}$
$\text{Madre} \cup \text{Padre} = \text{Genitore}$

quindi

$\text{Genitore} = \{ (x, y) \in \text{EU} \times \text{EU} \ | \text{x è madre di y oppure x è padre di y} \}$

Le leggi sulle relazioni sono uguali a quelle degli insiemi, ad eccezione che l'insieme universo adesso è il prodotto cartesiano.

- Composizione

Siano $R \subseteq A \times B$ e $S \subseteq B \times C$ (da notare che l'insieme di arrivo della relazione $R$ è l'insieme di partenza della relazione $S$), la composizione di $R$ con $S$ è la relazione:

> $ R; S= \{ (a, c) \in A \times C \ | \ \text{esiste almeno un elemento di } B \text{ tale che } (a, b) \in \R \ e \ (b, c) \in S \}$

L'insieme di partenza e l'insieme di arrivo non cambiano, sono fissati e restano uguali anche al termine della composizione.

Facciamo un esempio: che relazione è Padre;Genitore?

$ \text{Padre; Genitore} \subseteq \text{EU} \times \text{EU}$
$ \text{Padre; Genitore} = \{ (x, z) \ | \ \exist \ y \in \text{EU} \ | \ (x, y) \in \text{Padre e }  (y, z) \in \text{ Genitore} \}$
$ = \{ (x, z) \ | \ \text{ x è nonno di z} \} $

- Relazione opposta

> $R^{op} = \{ (y, x) \in B \times A \ | \ (x, y) \in R \ \}$

#### Quantificatori

$\exist a \in A \ | \ P(a)$ "Esiste almeno un a in A tale che P(a) è vera"
$\forall a \in A \ | \ P(a)$ "Per ogni a in A vale che P(a) è vera"

#### Proprietà di relazioni

- Totale
  Ogni elemento di A è mappato ***ad almeno*** un elemento di B.
- Univalente
  Ogni elemento di A è mappato ***al più*** a un elemento di B.
- Surgettiva
  Ogni elemento di B è l'immagine ***di almeno*** un elemento di A.
- Iniettiva
  Ogni elemento di B è l'immagine di ***al più*** un elemento di A.


|         | partenza   | arrivo     |
| --------- | ------------ | ------------ |
| almeno  | TOTALE     | SURGETTIVA |
| al più | UNIVALENTE | INIETTIVA  |

#### Teorema di caratterizzazione

Sia $R \subset A \times B$ definita da $R: A \rightarrow B$

- R **totale** $\iff Id_A \subseteq R;R^{op}$
- R **univalente** $\iff R^{op};R \subseteq Id_B$
- R **surgettiva** $\iff Id_b \subseteq R^{op};R$
- R **iniettiva** $\iff R;R^{op} \subseteq Id_A$

#### Relazione $R;R^{op}$

Che cos'è? come risultato dà sempre l'identità?

Dati due insiemi $A = \{ 1, 2 \}$ $B=\{ a, b \}$
$R: A \rightarrow B=\{ (1, a)(2, a) \}$
$R^{op} = \{ (a, 1)(a, 2)  \}$

$R;R^{op} = \{ (1, 1)(2, 2) \} = Id_A$
$Id_A \subseteq R;R^{op}$ ***(condizione di totalità)***

$R^{op};R = \{ (a,a)(a,a) \}$
$Id_B \subseteq R^{op};R$ ***(condizione di univalenza)***

quando invece non dà l'identita? quando la relazione *non è totale*, quindi non tutti gli elementi dell'inisieme A sono mappati in B (come dice il teorema di caratterizzazione). Prendiamo in esempio un'altra relazione.

$S= \{ (1,a)(1,b) \}$
$S^{op}= \{ (a,1)(b,1) \}$

$S;S^{op} = \{ (1,1)(1,1) \}$
$S;S^{op} \subseteq Id_A$ ***(condizione di iniettività)***

surgettività (tutti gli el di B mappati)
$S^{op};S = \{ (a,a)(b,b) \}$
$I_B \subseteq S^{op};S$ ***(condizione di surgettività)***

#### Proprietà di chiusura per composizione

Siano $R$ e $S$ due relazioni

- Se $R$ e $S$ sono ***totali*** allora $R;S$ è ***totale***
- Se $R$ e $S$ sono ***univalenti*** allora $R;S$ è ***univalente***
- Se $R$ e $S$ sono ***surgettive*** allora $R;S$ è ***surgettiva***
- Se $R$ e $S$ sono ***iniettive*** allora $R;S$ è ***iniettiva***

## Funzioni

> Una funzione è una relazione che soddisfa le proprietà **TOTALE** e **UNIVALENTE**

> Una funzione è parziale se rispetta solamente la proprietà **UNIVALENTE**

> Una funzione è biettiva quando soddisfa tutte e 4 le proprietà (**TOTALE**, **UNIVALENTE**, **SURGETTIVA**, **INIETTIVA**)

Le funzioni studiate in analisi matematica sono generalmente funzioni $f: \R \rightarrow \R$.
In informatica, invece, consideriamo funzioni tra insiemi che non sono numerici ed è quindi fondamentale specificarne sempre l'insieme di partenmza e di arrivo (segnatura della funzione).

Una proprietà $P$ su un insieme $A$ è un'entità che, per ogni elemento di $a \in A$, ci dice se soddifa la proprietà oppure no.
Più formalmente un proprietà $P$ su $A$ è una funzione $P: A \rightarrow Bool$.

Le funzioni possono essere composte, e abbiamo la garanzia che la composizione di due funzione sarà una funzione a sua volta.
La notazione $f;g$ significa intuitivamente che prima viene eseguita la funzione $f$ e l'output di questa viene indirizzato in g.
La notazione matematica invece funziona all'opposto e la stessa funzione di prima si indica con $g \circ f$.

$$ INPUT \rightarrow f \rightarrow g \rightarrow OUTPUT $$

#### Teorema di caratterizzazione

> $\text{Per tutti gli insiemi } A, B \text{ e per tutte le relazioni } R: A \leftrightarrow B \text{ vale che: } R \text{ è una funzione se e solo se } Id_A \subseteq R;R^{op} \text{ e } R^{op};R \subseteq Id_B$

### Biiezioni

Una biiezione è una funzione che gode di tutte e 4 le proprietà *totale, univalente, surgettiva, iniettiva*.

> Per tutti gli insiemi $A, B$ e per tutte le relazioni $R: A \leftrightarrow B$ vale che: $R$ è una biiezione se e solo se $R;R^{op}=Id_A$ e $R^{op};R = Id_B$

#### Proprietà di chiusura per funzioni

Siano $i: A \rightarrow B$ e $j: B \rightarrow C$ due funzioni, allora:

- $Id_A$ è una ***biezione***, essendo una relazione con se stesso
- Se $i$ e $j$ sono ***biezioni***, allora $i;j$ è a sua volta una ***biezione***

#### Caratterizzazione in biezione

> $\forall \ A, B \ . \ \forall \ R \in A \times B, R \text{ è in biezione } \iff Id_A = R;R^{op} \land Id_B = R^{op};R  $


## N-uple (tuple)

Le *n-uple* (o tuple) sono sequnze ordinate di n elementi dove l'ordine è importante e il numero di el è fisso.

Il prodotto cartesiano tra n insiemi contiene *n-uple*, ovvero tuple di lunghezza *n*.

Il numero totale di tutte le n-uple generabili si ottiene moltiplicando la cardinalità degli insiemi.

#### Sequenze di lunghezza arbitraria

> **Una sequenza su $A$ di lunghezza arbitraria**  è una sequenza su $A$ di lunghezza $n$ per un qualsiasi numero naturale $n \in \N$.
> L'insieme $ A^* $ di tutte le sequenze su $A$ di lunghezza arbitraria è definito come $A^* = \bigcup_{n \in \mathbb{N}} A^n$. Si noti che se l'insieme $A$  ha un numero finito di elementi, allora per ogni $n \in \mathbb{N}$ l'insieme $A^n$ è finito, ma in generale l'insieme $A^n$  non lo è: $A^* = A^0 \cup A^1 \cup A^2 \cup \cdots \cup A^n \cup \dots$

La chiusura di Kleene $ A^* $ è l'insieme di **tutte le sequenze finite** (anche di lunghezza zero) che possono essere generate dall'insieme $A$.
$ A^* $ ha cardinalità infinita in quanto ci sono infinite combinazioni possibli di lunghezze delle sequenze.
