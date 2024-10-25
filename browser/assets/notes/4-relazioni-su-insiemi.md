# Relazioni su un insieme

## 4.1 Nozioni di base

Una **relazione** $R$ su un insieme $A$ è un sottoinsieme del prodotto cartesiano $A \times A$, ovvero:

$$
R \subseteq A \times A
$$

L'insieme di tutte le relazioni su $A$ è indicato con $\text{Rel}(A, A)$. In una relazione $R \in \text{Rel}(A, A)$, ogni coppia $(a, b) \in R$ viene rappresentata come una freccia dal nodo $a$ al nodo $b$.

### Grafi
Le relazioni su un insieme possono essere rappresentate come **grafi**, dove:
- Gli elementi di $A$ sono chiamati **nodi**.
- Le coppie $(a, b) \in R$ sono rappresentate come **archi** che collegano i nodi.

## 4.2 Proprietà delle relazioni

### Relazione Riflessiva
Una relazione $R$ su un insieme $A$ è detta **riflessiva** se per ogni $a \in A$, vale $(a, a) \in R$.

$$
\forall a \in A, \, (a, a) \in R
$$

Esempi di relazioni riflessive:
- La relazione identità $\text{id}_A$.
- Il prodotto cartesiano $A \times A$.

### Relazione Simmetrica
Una relazione $R$ è **simmetrica** se per ogni $(a, b) \in R$, anche $(b, a) \in R$.

$$
\forall a, b \in A, \, (a, b) \in R \implies (b, a) \in R
$$

### Relazione Transitiva
Una relazione $R$ è **transitiva** se per ogni $(a, b) \in R$ e $(b, c) \in R$, vale che $(a, c) \in R$.

$$
\forall a, b, c \in A, \, (a, b) \in R \, \text{e} \, (b, c) \in R \implies (a, c) \in R
$$

### Relazione Anti-simmetrica
Una relazione $R$ è **anti-simmetrica** se per ogni $(a, b) \in R$ e $(b, a) \in R$, vale $a = b$.

$$
\forall a, b \in A, \, (a, b) \in R \, \text{e} \, (b, a) \in R \implies a = b
$$

Esempio: Se $R = \{(1, 2), (2, 1)\}$ e $1 \neq 2$, la relazione **non è anti-simmetrica**. Invece, se la relazione contiene solo coppie del tipo $(a, a)$ oppure coppie che non hanno l'inversa, allora è anti-simmetrica.

## 4.3 Chiusure

Le **chiusure** di una relazione sono estensioni che la rendono rispettosa di determinate proprietà. Esistono chiusure **riflessive**, **simmetriche** e **transitive**.

- **Chiusura riflessiva**: Aggiunge tutte le coppie $(a, a)$ necessarie affinché la relazione diventi riflessiva.
  
  $$
  R \cup \text{id}_A
  $$

- **Chiusura simmetrica**: Aggiunge tutte le coppie $(b, a)$ necessarie affinché la relazione diventi simmetrica.

  $$
  R \cup R^{op}
  $$

- **Chiusura transitiva**: Aggiunge tutte le coppie $(a, c)$ derivanti dalla composizione di due coppie $(a, b)$ e $(b, c)$.

  $$
  R \cup (R ; R)
  $$

### Non esiste una chiusura anti-simmetrica

Una **chiusura anti-simmetrica** non esiste, perché l'anti-simmetria non può essere imposta aggiungendo coppie, come avviene per le altre chiusure. L'anti-simmetria richiede che, se esiste una coppia $(a, b)$, non deve esistere $(b, a)$ a meno che $a = b$. Aggiungere nuove coppie può violare questa proprietà, quindi non è possibile costruire una chiusura anti-simmetrica.

## 4.4 Relazioni di equivalenza

Una **relazione di equivalenza** è una relazione che è:
1. Riflessiva.
2. Simmetrica.
3. Transitiva.

Le relazioni di equivalenza partizionano un insieme in **classi di equivalenza**, dove gli elementi all'interno di ogni classe sono equivalenti tra loro.

### Esempio:
Per una relazione di equivalenza su un insieme $A = \{1, 2, 3\}$ con $R = \{(1, 1), (2, 2), (3, 3), (1, 3), (3, 1)\}$, le classi di equivalenza sono $\{1, 3\}$ e $\{2\}$.

## 4.5 Relazioni di ordinamento

Una **relazione di ordinamento** è una relazione che è:
1. Riflessiva.
2. Transitiva.
3. Anti-simmetrica.

Una **relazione di ordinamento totale** è una relazione di ordinamento in cui, per ogni coppia $a$ e $b$, vale sempre $(a, b) \in R$ oppure $(b, a) \in R$.

Esempio di relazione di ordinamento totale: $\leq$ sui numeri naturali $\mathbb{N}$.

### Ordinamento Parziale vs Ordinamento Totale
- **Ordinamento Parziale**: Non tutti gli elementi sono comparabili tra loro. Esempio: la relazione "$\leq$" sui sottoinsiemi di un insieme (inclusione).
- **Ordinamento Totale**: Ogni coppia di elementi è comparabile. Esempio: l'ordinamento standard dei numeri reali.
