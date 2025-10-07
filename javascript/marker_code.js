var GreatIcons = L.Icon.extend({
    options: {
        //shadowUrl: 'leaf-shadow.png',
        iconSize:     [30, 30],
        //shadowSize:   [50, 64],
        iconAnchor:   [15, 15],
        shadowAnchor: [4, 62],
        popupAnchor:  [0, 180]
        
    }
});

var tajIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/taj_mahal.png'}),
    petraIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/petra.png'}),
    machuIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/machu_picchu.png'}),
    greatwallIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/great_wall.png'}),
    colosseumIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/colosseum.png'}),
    christIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/christ_the_redeemer.png'}),
    chichenIcon = new GreatIcons({iconUrl: 'images/MarkerIcons/chichen_itza.png'});
