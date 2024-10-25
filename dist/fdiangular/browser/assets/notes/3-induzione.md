# Induzione Matematica

L'induzione è un potente metodo per definire insiemi infiniti, funzioni su questi insiemi, e per dimostrare proprietà che valgono per tutti gli elementi di tali insiemi.

## 3.1 I Naturali, i Numeri Triangolari e la Formula di Gauss

### Definizione Induttiva dei Numeri Naturali
L'insieme $\mathbb{N}$ dei numeri naturali può essere definito induttivamente come:

1. $0 \in \mathbb{N}$
2. Se $n \in \mathbb{N}$, allora anche $n + 1 \in \mathbb{N}$
3. Nessun altro elemento appartiene a $\mathbb{N}$

### Numeri Triangolari
I numeri triangolari $T_n$ sono definiti come la somma dei primi $n$ numeri naturali:

$$
T_n = \sum_{i=0}^{n} i = \frac{n(n+1)}{2}
$$

### Esempio: La Formula di Gauss
La formula di Gauss per la somma dei numeri naturali può essere dimostrata per induzione.

1. **Caso Base**: Per $n = 0$, abbiamo $T_0 = 0$, che soddisfa la formula.
2. **Passo Induttivo**: Assumiamo che la formula sia valida per un generico $n$, ovvero $T_n = \frac{n(n+1)}{2}$. Dimostriamo che vale anche per $n+1$:
   
   $$
   T_{n+1} = T_n + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}
   $$

## 3.2 Esempi di Induzione sui Naturali

### Fattoriale
Il fattoriale di un numero $n \in \mathbb{N}$, indicato con $n!$, è definito come:

$$
n! = 
\begin{cases}
1 & \text{se } n = 0 \\
n \cdot (n-1)! & \text{se } n > 0
\end{cases}
$$

### Proposizione: Il Fattoriale Cresce Più Rapidamente dell'Esponenziale
Per ogni $n \in \mathbb{N^+}$, vale la disuguaglianza $n! \geq 2^{n-1}$.

### Esercizi di Induzione
1. Dimostrare che $\forall n \in \mathbb{N}, n^3 - n$ è divisibile per 3.
2. Dimostrare che la somma dei primi $n$ numeri dispari è uguale a $n^2$:

$$
\sum_{i=1}^{n} (2i - 1) = n^2
$$

## 3.3 Induzione Forte
In alcuni casi, si utilizza il **Principio di Induzione Forte**, che assume che una proprietà $P(m)$ sia vera per tutti i $m$ precedenti a $n$ per dimostrare $P(n+1)$.

### Esempio: Teorema Fondamentale dell'Aritmetica
Ogni intero maggiore di 1 o è un numero primo o può essere scritto come prodotto di numeri primi.

### Definizione Induttiva delle Funzioni
Un esempio paradigmatico è la funzione fattoriale:

$$
0! = 1, \quad (n+1)! = (n+1) \cdot n!
$$

L'induzione è essenziale per definire e dimostrare proprietà di molte strutture matematiche e informatiche.
