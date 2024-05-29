var produse = [
	{
		nume: 'Telemea de vacă',
		pret: 20.0,
		poza: 'https://example.com/telemea-de-vaca.jpg',
	},
	{
		nume: 'Miere de salcâm',
		pret: 35.0,
		poza: 'https://example.com/miere-de-salcam.jpg',
	},
	{
		nume: 'Salam de Sibiu',
		pret: 60.0,
		poza: 'https://example.com/salam-de-sibiu.jpg',
	},
	{
		nume: 'Pastramă de oaie',
		pret: 55.0,
		poza: 'https://example.com/pastrama-de-oaie.jpg',
	},
	{
		nume: 'Mămăligă instant',
		pret: 5.0,
		poza: 'https://example.com/mamaliga-instant.jpg',
	},
	{
		nume: 'Brânză de burduf',
		pret: 40.0,
		poza: 'https://example.com/branza-de-burduf.jpg',
	},
	{
		nume: 'Ceafă de porc afumată',
		pret: 50.0,
		poza: 'https://example.com/ceafa-de-porc-afumata.jpg',
	},
	{
		nume: 'Jumări de porc',
		pret: 25.0,
		poza: 'https://example.com/jumari-de-porc.jpg',
	},
	{
		nume: 'Cozonac tradițional',
		pret: 30.0,
		poza: 'https://example.com/cozonac-traditional.jpg',
	},
	{
		nume: 'Pâine de casă',
		pret: 8.0,
		poza: 'https://example.com/paine-de-casa.jpg',
	},
	{
		nume: 'Sarmale',
		pret: 45.0,
		poza: 'https://example.com/sarmale.jpg',
	},
	{
		nume: 'Cârnați de casă',
		pret: 38.0,
		poza: 'https://example.com/carnati-de-casa.jpg',
	},
	{
		nume: 'Cașcaval afumat',
		pret: 42.0,
		poza: 'https://example.com/cascaval-afumat.jpg',
	},
	{
		nume: 'Murături asortate',
		pret: 15.0,
		poza: 'https://example.com/muraturi-asortate.jpg',
	},
	{
		nume: 'Zacuscă de vinete',
		pret: 12.0,
		poza: 'https://example.com/zacusca-de-vinete.jpg',
	},
	{
		nume: 'Ciorbă de burtă',
		pret: 20.0,
		poza: 'https://example.com/ciorba-de-burta.jpg',
	},
	{
		nume: 'Piftie de porc',
		pret: 28.0,
		poza: 'https://example.com/piftie-de-porc.jpg',
	},
	{
		nume: 'Mici',
		pret: 35.0,
		poza: 'https://example.com/mici.jpg',
	},
	{
		nume: 'Frigărui',
		pret: 30.0,
		poza: 'https://example.com/frigarui.jpg',
	},
	{
		nume: 'Papanași',
		pret: 18.0,
		poza: 'https://example.com/papanasi.jpg',
	},
	{
		nume: 'Covrigi',
		pret: 3.0,
		poza: 'https://example.com/covrigi.jpg',
	},
	{
		nume: 'Plăcintă cu mere',
		pret: 15.0,
		poza: 'https://example.com/placinta-cu-mere.jpg',
	},
	{
		nume: 'Mititei',
		pret: 25.0,
		poza: 'https://example.com/mititei.jpg',
	},
	{
		nume: 'Ghiveci de legume',
		pret: 20.0,
		poza: 'https://example.com/ghiveci-de-legume.jpg',
	},
	{
		nume: 'Ardei umpluți',
		pret: 22.0,
		poza: 'https://example.com/ardei-umpluti.jpg',
	},
	{
		nume: 'Tocană de vită',
		pret: 45.0,
		poza: 'https://example.com/tocana-de-vita.jpg',
	},
	{
		nume: 'Varză călită',
		pret: 18.0,
		poza: 'https://example.com/varza-calita.jpg',
	},
	{
		nume: 'Tocăniță de ciuperci',
		pret: 22.0,
		poza: 'https://example.com/tocanita-de-ciuperci.jpg',
	},
	{
		nume: 'Gogoși',
		pret: 10.0,
		poza: 'https://example.com/gogosi.jpg',
	},
	{
		nume: 'Ciorbă de fasole',
		pret: 15.0,
		poza: 'https://example.com/ciorba-de-fasole.jpg',
	},
];

var numarDeProduse = produse.length;
console.log(produse[0], produse[numarDeProduse - 1]);

for (var i = 0; i <= numarDeProduse - 1; i = i + 1) {
	if (produse[i].pret <= 15) {
		console.log(produse[i]);
	}
}
