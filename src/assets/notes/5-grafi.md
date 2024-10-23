# Capitolo 5: Grafi

In questo capitolo presentiamo i grafi e molti concetti collegati, introdotti dal matematico **Eulero**. I grafi permettono di modellare relazioni tra elementi di un insieme e risolvere vari problemi computazionali.

## 5.1 Grafi orientati

### Definizione di grafo orientato
Un **grafo orientato** è una relazione $E: V \leftrightarrow V$ su un insieme finito $V$. Gli elementi di $V$ sono i **nodi** o **vertici**, mentre gli elementi di $E$ sono gli **archi** o **lati diretti**. Un arco collega due vertici con una direzione specifica, formando una coppia ordinata $(v_1, v_2) \in E$.

- Un **nodo** è un elemento di $V$.
- Un **arco** è una coppia ordinata $(v_1, v_2) \in E$, che va dal nodo $v_1$ al nodo $v_2$.

### Grado di un nodo
- Il **grado entrante** di un nodo $v$, indicato con $\deg^-(v)$, è il numero di archi che entrano nel nodo.
- Il **grado uscente** di un nodo $v$, indicato con $\deg^+(v)$, è il numero di archi che escono dal nodo.

$$
\deg^-(v) = \text{numero di archi che entrano in } v
$$
$$
\deg^+(v) = \text{numero di archi che escono da } v
$$

## 5.2 Grafi non orientati

### Definizione di grafo non orientato
Un **grafo non orientato** è una coppia $G = (V, E)$ dove:
- $V$ è un insieme di **nodi**.
- $E$ è un insieme di **coppie non ordinate** di nodi $(v_1, v_2)$, chiamati **archi**.

In un grafo non orientato, un arco non ha una direzione specifica: $(v_1, v_2)$ e $(v_2, v_1)$ rappresentano lo stesso arco.

### Grado di un nodo (non orientato)
Il **grado** di un nodo $v$, indicato come $\deg(v)$, è il numero di archi che toccano quel nodo.

$$
\deg(v) = \text{numero di archi incidenti in } v
$$

## 5.3 Connettività

### Grafi connessi e componenti connesse
Un grafo non orientato $G$ è **connesso** se esiste un percorso tra ogni coppia di nodi. In caso contrario, possiamo dividere il grafo in **componenti connesse**, dove ogni componente è un sottografo connesso.

- **Percorso**: Una sequenza di nodi dove ogni coppia consecutiva è collegata da un arco.
- **Componente connessa**: Un sottografo in cui ogni coppia di nodi è connessa.

## 5.4 Cammini e circuiti

### Cammino
Un **cammino** in un grafo è una sequenza di nodi $(v_1, v_2, \dots, v_n)$ tale che esiste un arco tra ogni coppia consecutiva di nodi.

### Ciclo (o circuito)
Un **ciclo** è un cammino chiuso, cioè un cammino dove il primo e l'ultimo nodo coincidono.

### Ciclo di Eulero
Un **ciclo di Eulero** è un ciclo che passa per ogni arco del grafo esattamente una volta. Un grafo contiene un ciclo di Eulero se e solo se:
1. Ogni nodo ha lo stesso numero di archi entranti e uscenti (nei grafi orientati).
2. Ogni nodo ha grado pari (nei grafi non orientati).

## 5.5 Alberi

Un **albero** è un grafo connesso e aciclico. Un albero ha le seguenti proprietà:
- Tra ogni coppia di nodi esiste un unico cammino.
- Se un grafo ha $n$ nodi e $n-1$ archi, è un albero.
  
Un **albero radicato** è un albero con un nodo speciale chiamato **radice**, da cui parte la struttura gerarchica.

### Altezza di un albero
L'**altezza** di un albero è la lunghezza del cammino più lungo dalla radice a una foglia (un nodo senza figli).

$$
\text{Altezza} = \max \left( \text{lunghezza del cammino dalla radice a una foglia} \right)
$$

