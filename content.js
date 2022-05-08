// BIENVENUE et pas de peur, Cardy est là pour te guider <3 //

//-- > CHANGER LES FONDS D'ECRAN EN FONCTION DE LA VILLE DE RESIDENCE DU PERSONNAGE < --//

if(document.getElementById('PersoStatusBar') != null)
{
  const PersoStatusBar = document.getElementById('PersoStatusBar');
  ///////--> SETIA
  if (PersoStatusBar.textContent.includes('Setia'))
  {
    stylesheet = document.styleSheets[0];
//CHANGE LE LIEN SURLIGNE CI-DESSOUS PAR L'IMAGE DE TON CHOIX ;) (le 'https://...')
    stylesheet.insertRule("body.lay_standard { background-image: url('https://images3.alphacoders.com/953/95395.jpg') !important; background-repeat:round; background-attachment:fixed; color: black;}",0);
  }
  ///////--> BEGY
  else if (PersoStatusBar.textContent.includes('Begy'))
  {
    stylesheet = document.styleSheets[0];
//CHANGE LE LIEN SURLIGNE CI-DESSOUS PAR L'IMAGE DE TON CHOIX ;) (le 'https://...')
    stylesheet.insertRule("body.lay_standard { background-image: url('https://images.alphacoders.com/946/946424.jpg') !important; background-repeat:round; background-attachment:fixed; color: black;}",0);
  }
  ///////--> VESEN
  else if (PersoStatusBar.textContent.includes('Vésén'))
  {
    stylesheet = document.styleSheets[0];
//CHANGE LE LIEN SURLIGNE CI-DESSOUS PAR L'IMAGE DE TON CHOIX ;) (le 'https://...')
    stylesheet.insertRule("body.lay_standard { background-image: url('https://images7.alphacoders.com/804/804957.jpg') !important; background-repeat:round; background-attachment:fixed; color: black;}",0);
  }
  ///////--> TROPICO ISLANDS
    else if (PersoStatusBar.textContent.includes('Tropico Island'))
    {
      stylesheet = document.styleSheets[0];
//CHANGE LE LIEN SURLIGNE CI-DESSOUS PAR L'IMAGE DE TON CHOIX ;) (le 'https://...')
      stylesheet.insertRule("body.lay_standard { background-image: url('https://images6.alphacoders.com/675/675661.jpg') !important; background-repeat:round; background-attachment:fixed; color: black;}",0);
    }
    ///////--> TEGDIJ
      else if (PersoStatusBar.textContent.includes('Tegdij'))
      {
        stylesheet = document.styleSheets[0];
  //CHANGE LE LIEN SURLIGNE CI-DESSOUS PAR L'IMAGE DE TON CHOIX ;) (le 'https://...')
        stylesheet.insertRule("body.lay_standard { background-image: url('https://www.gamerspack.com/wp-content/uploads/2015/09/london-art-01.jpg') !important; background-repeat:round; background-attachment:fixed; color: black;}",0);
      }
  ///////--> PARADIS
      else if (PersoStatusBar.textContent.includes('Paradis'))
      {
      stylesheet = document.styleSheets[0];
//CHANGE LE LIEN SURLIGNE CI-DESSOUS PAR L'IMAGE DE TON CHOIX ;) (le 'https://...')
      stylesheet.insertRule("body.lay_standard { background-image: url('https://static.vecteezy.com/system/resources/previews/004/703/916/large_2x/blue-sky-with-white-clouds-sunshine-day-with-white-sky-in-morning-background-free-photo.jpg') !important; background-repeat:round; background-attachment:fixed; color: black;}",0);
      }
}
