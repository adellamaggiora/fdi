# Esercitazione analisi matematica 15/10/2024

$\lim_{x \to 0} \sin(\log(x^2)) =$

$\lim_{x \to 0} \sin(\log(x^2)) =$

$\lim_{x \to 0} \sin(\log(x) + \log(x)) =$

$\lim_{x \to 0} \sin(2\log(x)) =$

considerato che $\log{0} = - \infty$ la funzione $\sin$ oscilla continuamente tra -1 e 1 il limite della funzione non esiste.

$\lim_{x \to 0} \frac{(1 - \cos(2x)) \sin(x)}{\log(1 + x^2)} =$
$\lim_{x \to 0} \frac{0}{\log(1)} = $
$\lim_{x \to 0} \frac{0}{0}$ = forma indeterminata!

In questo caso potremmo pensare di risolvere il limite con il teorema di de l'Hôpital.

### Teorema dell'Hôpital

Esso permette di risolvere, sotto opportune ipotesi il limite associato ad un rapporto tra funzioni che genera una forma indeterminata del tipo:

.$\frac{\infty}{\infty}$

.$\frac{0}{0}$

#### Enunciato:

Siano $f$ e  $g$ due funzioni ad una varibile reale (segnatura $f: \R \rightarrow \R$), derivabili$^{*1}$ in un certo intervallo $(a, b)$

<span style='color: var(--color-caution)'>
*1 <u> che significa funzione derivabile? </u>
</span>

- Significa che tale funzione ha un derivata$^{*2}$ definita in ogni punto di quell'intervallo.
- Se è derivabile significa che è anche continua (continuità implicita).

<span style='color: var(--color-caution)'>
*2 <u> che cos'è la derivata? </u>
</span>

La *derivata* di una funzione in un punto è il coefficiente angolare$^{*3}$ della retta tangente$^{*4}$ alla curva nel punto.
Se la derivata in punto esiste, è un valore reale, ossia un numero.

La *funzione derivata* è la funzione che associa ad ogni punto $x$ del dominio di $f$ la corrispondente derivata in quel punto: $f'(x)$.

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$


<span style='color: var(--color-caution)'>
*3 <u> cos'è il coefficiente angolare della retta? </u>
</span> 
Il *coefficiente angolare* è quanto l'output della funzione ($y$) cresce rispetto all'input($x$) $\frac{\Delta y}{\Delta x}$

$$m = \frac{\Delta y}{\Delta x}  = \frac{f(x_0+h)-f(x_0)}{h}$$


<span style='color: var(--color-caution)'>
*3 <u> cos'è la retta tangente? </u>
</span> 
La *retta tangente* passa per due punti infinitamente vicini e "tocca" la curva della funzione senza attraversarla (quindi non è *secante*).

Ricordando che la derivata della funzione in un punto rappresenta il **coefficiente angolare** della retta tangente in quel punto, l'equazione della retta \( y = mx + q \) può essere riscritta in termini della derivata:

- $m = f'(x_0)$ è la pendenza della retta tangente.
- $q$ è l'intercetta $y$, che si calcola in base a $x_0$ e $f(x_0)$.

Pertanto, la retta tangente a una curva $f(x)$ nel punto $x_0$ ha la seguente equazione:

$$
y = f'(x_0)(x - x_0) + f(x_0)
$$



