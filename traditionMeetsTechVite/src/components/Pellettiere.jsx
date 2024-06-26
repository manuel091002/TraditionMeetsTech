import './interviste.css';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function Pellettiere(){
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
    return (
      <div className="body">
        <Header 
        urlBackground='https://www.turismo.it/typo3temp/pics/5a3a9bfe84.jpg'/>
        
        <Paragrafo text="Angelica e il marito hanno trasformato la loro attività artigianale in un'azienda moderna, integrando tecnologie digitali e piattaforme online. Con quasi 30 anni di esperienza, continuano a offrire prodotti unici e di qualità. In questa intervista, Angelica condivide il loro percorso e le sfide affrontate."
        textTitle="Tradizione Artigianale e Tecnologie Moderne nella Pelletteria"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?" sezioneId="domanda1" />
          <Answer answer="Sono Angelica, un'artigiana e io e mio marito siamo entrati in questo settore quasi per caso, lui lavorava come capo cameriere in una sala matrimoni per cui spesso era a contatto con fotografi e sposi. I primi si lamentavano dei costi di acquisto degli album che diventavano lo scrigno dei ricordi della coppia, i secondi si lamentavano per i costi dei servizi e i tempi molto lunghi per la consegna dei servizi… siamo partiti così dal produrre 4 album quasi per gioco e oggi abbiamo un'azienda che si è evoluta anche con la produzione di bomboniere per gli sposi, oggettistica in pelle ed ecopelle dal semplice portachiavi a consolle con specchio per ingresso passando da articoli per l'ufficio ad articoli per la casa e bomboniere, vantando quasi 30 anni di esperienza." sezioneId="risposta1"/>

          <Question question="Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?" sezioneId="domanda1" />
          <Answer answer="Si, nel corso dei nostri 27 anni di produzione, ci siamo quasi sentiti in ''dovere'' di adattare la produzione e le vendite ad un nuovo tipo di mercato… abbiamo dovuto aprire un nostro sito web, delle pagine social ma anche la vendita su diverse piattaforme online come Amazon, E-bay.. " sezioneId="risposta1"/>

          <Question question="In che modo la presenza online ha influenzato la sua clientela e il suo business?" sezioneId="domanda1" />
          <Answer answer="La presenza online ha influenzato radicalmente il nostro business, la nostra azienda inizialmente produceva ordini in grandi quantità che venivano venduti ai negozianti e successivamente erano loro ad occuparsi della vendita al dettaglio, questo implicava una produzione totalmente diversa da quella che gestiamo ora e soprattutto una dedizione al cliente molto minore. Il digitale ha avuto per noi due risvolti della medaglia, da una parte ci ha permesso di aprirci ad un nuovo mercato ma dall'altra con sé ha portato tutte le difficoltà che ne conseguono. Prima il cliente non entrava quasi mai in contatto diretto con noi, aveva i nostri prodotti in casa senza neanche conoscere la nostra azienda, ora invece gli acquirenti entrano in contatto diretto tramite il nostro sito web ed effettuano le scelte a qualsiasi ora del giorno e della notte secondo necessità e disponibilità con la comodità di ricevere il tutto a casa." sezioneId="risposta1"/>

          <Question question="Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?" sezioneId="domanda1" />
          <Answer answer="Nel corso degli anni il nostro mercato di vendita è cambiato radicalmente all'inizio erano i rappresentanti ad occuparsi della ricerca dei clienti ma negli ultimi anni con l'introduzione del digitale sono spesso i clienti che si rivolgono a noi. Nel 2015 abbiamo fatto realizzare il primo sito per vendita online e molto lentamente abbiamo presentato i nostri prodotti anche su piattaforme come Amazon, solo nel 2020 con l'arrivo della pandemia abbiamo capito le vere potenzialità di questi canali, abbiamo quindi spinto l'acceleratore sulla vendita online migliorando il nostro sito web e dedicandoci maggiormente ad Amazon ed oggi questo ci porta il maggior fatturato aziendale. È cambiato inoltre il nostro magazzino, siamo passati dall'album tradizionale cartaceo che era prodotto in grandi quantità e poi riposto in magazzino nell'attesa della vendita, ad album digitali commissionati on-line tramite PDF e quindi poi stampati e personalizzati per il cliente. Dal punto di vista aziendale le vendite online non sono state sempre facili da gestire, le piattaforme di vendita spesso impongono tempi di lavorazione molto brevi e talvolta difficili da sostenere (soprattutto in concomitanza con le festività). Iniziare a vendere online ha significato riadattare il modello aziendale a questi tempi e soprattutto sentirsi a volte dipendenti di altre aziende piuttosto che imprenditori." sezioneId="risposta1"/>

          <Question question="Ha introdotto nuove tecniche o tecnologie nel suo processo produttivo? Potrebbe fornire degli esempi?" sezioneId="domanda1" />
          <Answer answer="Certo per i nuovi macchinari e per il nuovo approccio al mercato sono serviti hardware software di nuova generazione. Anche delle nuove tecnologie di produzione sono state introdotte all'interno della nostra azienda stravolgendo il modo di produrre e facendo fronte alle richieste di mercato con gli anni abbiamo introdotto macchine per la stampa e taglio laser che ci hanno permesso di realizzare prodotti richiesti per il mercato " sezioneId="risposta1"/>

          <Question question="Come si tiene aggiornato con le nuove tecnologie e tendenze del suo settore?" sezioneId="domanda1" />
          <Answer answer="Mi mantengo aggiornato sulle ultime tecnologie e tendenze digitali che possono influenzare il mio settore con la visita periodica a fiere (principalmente in Europa o in Cina) oppure attraverso il web. Le tecnologie sono sempre state una delle mie passioni quindi non ha mai rappresentato per me un grande sforzo." sezioneId="risposta1"/>

          <Question question="La digitalizzazione ha cambiato il suo rapporto con i clienti?" sezioneId="domanda1" />
          <Answer answer="Oggi affrontando le vendite online si affronta anche il giudizio dei clienti che non sempre è favorevole e quando riceviamo delle recensioni negative rispondiamo sempre e quando a nostro dire giuste ammettendo le nostre colpe e quando a nostro dire ingiuste cerchiamo di far capire al cliente il motivo di quello che è successo" sezioneId="risposta1"/>

          <Question question="Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?" sezioneId="domanda1" />
          <Answer answer="Il mio mestiere, l'azienda e la nostra realtà offrono dei prodotti artigianali che integrano una lavorazione manuale oltre quella dei macchinari, ogni prodotto che esce dalla nostra azienda passa dalle mani di persone che nella lavorazione ci mettono il loro impegno e la loro manualità e noi crediamo che questo sia un tratto riconoscibile dal cliente." sezioneId="risposta1"/>

          <Question question="Quali sono le maggiori sfide che prevede per il suo mestiere nell'era digitale nei prossimi anni?" sezioneId="domanda1" />
          <Answer answer="La sfida maggiore che prevedo è soprattutto la competitività a livello mondiale, il digitale ha introdotto questa grande variabile e per ovvi motivi le piccole aziende rischiano molto di più di esser schiacciata dalle multinazionali. Tuttavia credo e spero che l'artigianalità e la produzione italiana siano fattori che vengano apprezzati dal mercato." sezioneId="risposta1"/> 

          <Question question="Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?" sezioneId="domanda1" />
          <Answer answer="Io personalmente credo nelle tecnologie e nel loro avanzamento, credo nel progresso quindi in futuro immagino nuovi macchinari che possano aiutare la produzione, nuovi software gestionali e nuove piattaforme per la vendita. Se dovessi invece pensare alla nostra realtà nello specifico nel prossimo futuro spero di migliorare la comunicazione digitale e il settore di marketing." sezioneId="risposta1"/>

          <Question question="Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?" sezioneId="domanda1" />
          <Answer answer="Oggi se dovessi dare dei consigli a qualcuno che vuole aprire un'attività simile alla mia direi prima di tutto avere delle capacità informatiche e di esser sempre consapevoli di quanto il mercato cambia, e dopo consiglierei di imparare il lavoro prima senza supporto della tecnologia e dopo con la tecnologia per capire bene il processo produttivo e cosa ha portato l'integrazione dei sistemi informatici." sezioneId="risposta1"/>

          <Question question="C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?" sezioneId="domanda1" />
          <Answer answer="Se potessi tornare indietro avrei investito molto prima nei strumenti digitali e soprattutto nelle vendite online. " sezioneId="risposta1"/>

          <Question question="Come ha integrato l'automazione e i sistemi informatici nella catena di produzione per aumentare l'efficienza?" sezioneId="domanda1" />
          <Answer answer="In realtà gran parte dei macchinari sono stati introdotti non per aumentare l'efficienza ma per darci la possibilità di produrre nuove linee di prodotti e permetterci nuove lavorazioni. Inizialmente in azienda non avevamo macchinari ma tutta la produzione era manuale, nel tempo ci siamo modernizzati soprattutto per adattarci ai cambiamenti del mercato. La nostra azienda produceva per la maggior parte album fotografici e bomboniere per matrimoni ma lo sviluppo delle tecnologie ha reso questi articoli meno richiesti poiché sostituiti in gran parte da prodotti digitali. " sezioneId="risposta1"/>

          <Question question="Quali sfide ha affrontato nell'integrare le tecnologie digitali nel processo produttivo tradizionale?" sezioneId="domanda1" />
          <Answer answer="Non sempre è stato facile, mio marito si è occupato di comprendere i funzionamenti dei nuovi macchinari in azienda, spesso son passate settimane prima che riuscissimo a comprendere totalmente le loro potenzialità, altre volte è stato necessario il supporto di alcuni tecnici, tuttavia l'azienda ha sempre supportato questi tipi di cambiamenti quindi tutti i collaboratori hanno sviluppato una sorta di flessibilità. " sezioneId="risposta1"/>

          <Question question="Qual è l'impatto delle recensioni sul tuo business e come risponde alle critiche?" sezioneId="domanda1" />
          <Answer answer="	Una delle sfide da affrontare nella vendita online è proprio quella delle recensioni, spesso si deve affrontare un giudizio che non è conforme all'impegno che si applica. Tendenzialmente quando riceviamo delle critiche cerchiamo sempre di esporre il nostro punto di vista e di spiegare quali sono i retroscena della lavorazione (offrendo anche possibilità di rimborsi o cambi articoli). La tecnologia separa i volti e i rapporti umani, esporre un commento negativo è più facile quando si è dietro uno schermo ma cerchiamo di far comprendere che dall'altra parte ci sono delle persone che ogni giorno si impegnano nel loro lavoro per offrire il miglior servizio possibile, certo non sempre si piace a tutti ma anche questo è parte della diversità umana. " sezioneId="risposta1"/>
        



          
        </div>
      
      
        <Footer />
        
      </div> 

);
}