(function(){
const q=new URLSearchParams(location.search);
let lang='de';
try{const s=localStorage.getItem('gaia_lang');if(s==='en'||s==='de')lang=s}catch(_){}
if(q.get('lang')==='en'||q.get('lang')==='de')lang=q.get('lang');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const NAV={de:{navServices:'Center of Excellence',navExample:'Beispiel',navCircle:'GAIA Circle',navPubs:'Publikationen',navAbout:'Über uns',navCycle:'Vorgehen',navUse:'Anwendungen',navContact:'Kontakt'},en:{navServices:'Center of Excellence',navExample:'Example',navCircle:'GAIA Circle',navPubs:'Publications',navAbout:'About',navCycle:'Approach',navUse:'Use cases',navContact:"Let's talk"}};
const T={
de:{
title:'Carrier Tower – KI-gestützte Bewerbungsunterlagen · GAIA PATH',
back:'← Zurück zu GAIA PATH',
heroEye:'Produkt · Carrier Tower · Für AVGS-Träger und Coaches',
heroTitle:'Bewerbungen, die nur sagen,<br><em>was wirklich stimmt.</em>',
heroText:'Carrier Tower ist das erste Produkt von GAIA PATH. Aus dem Lebenslauf entsteht ein geprüfter Master-Lebenslauf. Für jede passende Stelle schreibt die KI daraus einen Lebenslauf und ein Anschreiben, nur mit belegten Fakten. Was man prüfen sollte, ist markiert. Die KI zeigt, der Mensch entscheidet: Nichts blockiert, nichts wird automatisch versendet.',
badges:['KI-gestützt mit Claude von Anthropic','Nur belegte Fakten','Nichts wird automatisch versendet','Deutsch und US-Englisch'],
ctaDemo:'Demo anfragen',ctaHow:'So funktioniert es',
heroCap:'Stein auf Stein: Jede Aussage in den Unterlagen ruht auf einem Beleg.',
whyEye:'Warum Carrier Tower',
whyTitle:'Mehr gute Bewerbungen,<br><em>ohne erfundene Erfahrung.</em>',
whyText:'Gute Bewerbungen kosten Zeit, und in einer Maßnahme ist die Zeit des Coaches knapp. Allgemeine KI-Werkzeuge schreiben schnell, schmücken aber gern aus. Carrier Tower verbindet beides: Tempo durch KI und Verlässlichkeit durch Belege. Gebaut für Bildungs- und AVGS-Träger, ihre Coaches und Fach- und Führungskräfte in der Jobsuche.',
why:[['Für Teilnehmende','Passende Unterlagen für jede Stelle, alles an einem Ort, ein konkreter Vorschlag für heute und Coach Scotti als Begleiter auf jeder Seite. Nichts darin muss man im Vorstellungsgespräch zurücknehmen.'],['Für Coaches','Weniger Zeit für Formulieren und Formatieren, mehr Zeit für Gespräch und Vorbereitung. Der Stand jeder Bewerbung ist auf einen Blick sichtbar.'],['Für Träger','Strukturierte Bewerbungsbegleitung mit Nachweisen als CSV, eine eigene Instanz in der EU und volle Kostenkontrolle. Datenschutz und menschliche Freigabe sind von Anfang an eingebaut.']],
howEye:'So funktioniert es',
howTitle:'Fünf Schritte.<br><em>Entscheiden tut der Mensch.</em>',
howText:'Die KI liest, vergleicht, entwirft und zeigt Alternativen. Was gilt, was abgeschickt wird und wie es weitergeht, entscheiden Coach und Teilnehmende.',
steps:[['Master-Lebenslauf anlegen','Lebenslauf und auf Wunsch LinkedIn-Profil hochladen. Carrier Tower baut daraus einen Master-Lebenslauf. Die Person prüft und gibt ihn frei. Er ist die einzige Faktenquelle für alle Bewerbungen.','KI baut · Mensch gibt frei',1],['Stelle übernehmen','Über das Stellenradar, per Link oder mit dem Lesezeichen „→ CT“ direkt von der geöffneten Anzeige. Ansprechpartner, Abteilung und Anschrift werden gleich mit erfasst.','Mensch wählt',1],['Passt die Stelle?','Auf Wunsch zeigt die Fit-Analyse, welche Anforderungen belegt sind und wo Lücken sind, mit Belegstellen. Eine Hilfe, kein Zwang.','KI zeigt',0],['Bewerbungspaket entwerfen','Lebenslauf und Anschreiben für genau diese Stelle, in der Sprache und im Ton der Anzeige. Sätze, die man prüfen sollte, sind gelb markiert, mit zwei bis drei Umformulierungen zur Auswahl.','KI schreibt · markiert',0],['Freigeben, bewerben, dranbleiben','Prüfen, bearbeiten, freigeben. Carrier Tower öffnet die Bewerbungsseite des Arbeitgebers, abgeschickt wird selbst. Danach behält der Bewerbungsablauf alles im Blick.','Mensch entscheidet',1]],
exEye:'Beispiel · fiktiv',
exTitle:'Einmal durchgespielt<br><em>mit Lena Berger.</em>',
exText:'Lena Berger ist eine erfundene Person, dieselbe wie im Demo-Modus. So sieht es aus, wenn Carrier Tower eine Stelle übernimmt und das Anschreiben gegen den Master-Lebenslauf abgleicht.',
exHead:'Sachbearbeitung Kundenservice (m/w/d)',exSub:'Nordlicht Logistik GmbH (fiktiv) · Hamburg · für Lena Berger',
fict:'Fiktives Beispiel',
exChecksT:'1 · Stelle übernommen und eingeordnet',exStmtT:'2 · Jede Aussage gegen den Master-Lebenslauf',
checks:[['Anzeige gelesen','Titel, Firma, Ort, Job-ID'],['Arbeitgeber','direkt, keine Agentur'],['Briefkopf','Ansprechpartnerin, Abteilung, Anschrift'],['Schon gesehen?','nein, neue Stelle'],['Schon beworben?','nein, keine Doppelbewerbung'],['Fit (freiwillig)','4 von 5 Anforderungen belegt']],
stmts:[['ok','Belegt','„Drei Jahre Kundenbetreuung im Innendienst“','Beleg: Master-Lebenslauf, Station 2'],['ok','Belegt','„Sicher im Umgang mit Ticketsystemen“','Beleg: Master-Lebenslauf, Station 2, Aufgaben'],['warn','Gelb markiert','„Englisch verhandlungssicher“','Beleg sagt Englisch B2. Vorschläge: „gute Englischkenntnisse (B2)“ · „Englisch im Kundenkontakt (B2)“'],['warn','Gelb markiert','„Mehrjährige Erfahrung mit SAP“','Kein Beleg im Master-Lebenslauf. Vorschläge: Satz streichen · „bereit, mich schnell in SAP einzuarbeiten“']],
exStart:'Beispiel abspielen',exAgain:'Noch einmal',
exWait:'Starten Sie das Beispiel und sehen Sie, wie geprüft wird.',
exDone:'Entwurf bereit, nicht versendet. Lena wählt die passenden Formulierungen, gibt frei und bewirbt sich selbst beim Arbeitgeber.',
ftEye:'Funktionen',
ftTitle:'Was Carrier Tower<br><em>im Alltag leistet.</em>',
ftText:'Alles, was eine Bewerbung braucht, an einem Ort. Und überall dieselbe Regel: Die KI zeigt, der Mensch entscheidet.',
feats:[['','Master-Lebenslauf als Faktenbasis','Aus Lebenslauf und LinkedIn-Profil entsteht ein geprüfter Master-Lebenslauf. Versionen werden freigegeben, ältere bleiben nachvollziehbar.'],['','Keine erfundenen Fakten','Jede Aussage in Lebenslauf und Anschreiben muss im Master-Lebenslauf belegt sein. Prüfregeln markieren unbelegte Sätze.'],['','Deutsch und US-Englisch','Ein Klick schreibt den Lebenslauf in amerikanisches Business-Englisch um. Jede Version gibt es als Word-Datei mit Foto und Unterschrift.'],['','Stellenradar mit legalen Quellen','Sucht nach den eigenen Zielrollen in öffentlichen Jobbörsen und auf den Bewerberportalen der Wunsch-Arbeitgeber. Treffer werden bewertet, nicht versteckt.'],['','Link oder Lesezeichen „→ CT“','Link einfügen genügt, Carrier Tower liest die Karriereseite selbst. Für LinkedIn, StepStone, Indeed und Co. übernimmt das Lesezeichen nur die Seite, die man selbst geöffnet hat.'],['','Recruiter und Doppelbewerbungen erkannt','Carrier Tower erkennt, wenn eine Agentur statt des Arbeitgebers inseriert, Stellen, die man schon gesehen hat, und warnt vor einer zweiten Bewerbung.'],['','Fit-Analyse mit Belegen','Welche Anforderungen sind belegt, wo sind Lücken. Jeder legt seine eigenen Zielwerte fest. Freiwillig, Stellen lassen sich auch ohne Bewertung übernehmen.'],['','Lebenslauf und Anschreiben je Stelle','In der Sprache der Anzeige und im richtigen Ton: Du-Anzeige, Du-Brief. Korrekte Anrede und Briefkopf, auch für Personalvermittler.'],['','Altersneutral auf Knopfdruck','Ein optionaler Knopf im Bewerbungspaket entfernt Geburtsdatum, Ausbildungsjahre, Zeiträume älterer Stationen und Angaben wie „28 Jahre Erfahrung“ oder „seit 1994“. Die letzten 15 Jahre bleiben mit Daten stehen, damit Bewerbermanagement-Systeme den Lebenslauf gut lesen. Eine Liste zeigt jede Änderung. Sie gilt erst nach dem Speichern und lässt sich rückgängig machen. Ohne KI und ohne Kosten.'],['','Gelb markiert, mit Alternativen','Sätze, die man prüfen sollte, sind markiert, mit zwei bis drei Umformulierungen zur Auswahl. Jede Änderung nach der Freigabe hebt sie wieder auf.'],['','PDF und Word, direkt zum Arbeitgeber','Professionelles Layout mit Foto und Unterschrift. Carrier Tower öffnet die Bewerbungsseite des Arbeitgebers und sagt, wenn ein Link nur zum Jobportal führt.'],['','Bewerbungsablauf in Schubladen','In Vorbereitung, beworben, Gespräch, abgeschlossen, Absagen. Dazu Verlauf und Gespräche je Bewerbung mit Datum, und eine Übersicht mit Vorschlag für heute.'],['','Absage-Mail einfügen','Text der Absage hineinkopieren, Carrier Tower findet die passende Bewerbung und trägt sie mit Datum ein. Ohne KI und ohne Zugriff auf das Postfach.'],['','Coach Scotti','Scotti begleitet auf jeder Seite durch Carrier Tower, auch ganz am Anfang ohne Lebenslauf. Tipps zur Gesprächsvorbereitung, ein Nachfass-Text nach zehn Tagen ohne Antwort, aufbauende Worte nach einer Absage. Mit „Frag Scotti“ stellt man eigene Fragen.'],['','Nachweise als CSV','Berichte je Schublade als CSV, zum Beispiel als Nachweis der Eigenbemühungen für die Arbeitsagentur.'],['','Kostenkontrolle','KI-Schritte zeigen ihre ungefähren Kosten vorher. Für jede Instanz gilt ein Monatsbudget.']],
prEye:'Grundsätze',
prTitle:'Vier Regeln,<br><em>fest eingebaut.</em>',
prText:'Diese Regeln stehen nicht nur in einer Anleitung. Sie sind im System selbst verankert.',
prins:[['Nichts wird erfunden','Jede Aussage braucht einen Beleg im Master-Lebenslauf.'],['Die KI zeigt, der Mensch entscheidet','Die KI schlägt vor und zeigt Alternativen. Keine Funktion blockiert.'],['Nichts geht automatisch raus','Carrier Tower versendet nie selbst eine Bewerbung.'],['Alles bleibt nachvollziehbar','Versionen, Freigaben und der Verlauf jeder Bewerbung bleiben sichtbar.']],
dpEye:'Datenschutz und Betrieb',
dpTitle:'Sorgfalt mit Daten<br><em>von Anfang an.</em>',
dpText:'Es geht um Lebensläufe und damit um persönliche Daten. Deshalb arbeitet Carrier Tower mit so wenig Daten wie möglich, getrennt je Träger und mit klaren Verträgen.',
dpYesT:'So arbeiten wir',
dpYes:['Eigene Instanz je Träger mit getrennter Datenbank, Pilotbetrieb in der EU','Jede neue Instanz beginnt leer, ohne Vorkenntnisse','KI von Anthropic (Claude). Ihre Daten werden nicht zum Training verwendet','Datenminimierung: nur Angaben, die für Bewerbungen nötig sind','Vertrag zur Auftragsverarbeitung (AVV) vor dem Start','Löschung oder Übergabe aller Daten nach dem Pilot'],
dpNoT:'Das gibt es bei Carrier Tower nicht',
dpNo:['Kein automatisches Bewerben und kein automatischer Versand','Kein automatisches Auslesen von LinkedIn, StepStone oder Indeed','Kein Zugriff auf das Postfach','Keine Gesundheitsdaten, kein Geburtsdatum, keine Kundennummern der Agentur','Keine Weitergabe an Arbeitgeber ohne Zutun der Person'],
plEye:'Pilot',
plTitle:'Gemeinsam starten:<br><em>ein Pilot in zwölf Wochen.</em>',
plText:'Wir suchen AVGS-Träger, die Carrier Tower an einem Standort gemeinsam mit uns erproben. Klein, klar begrenzt und mit einer ehrlichen Auswertung am Ende.',
phases:[['2 Wochen','Einrichtung','Eigene Instanz einrichten, Coaches einweisen, Lebensläufe hochladen und Master-Lebensläufe freigeben.'],['8 Wochen','Pilotbetrieb','Teilnehmende arbeiten mit Carrier Tower. Wöchentlich eine kurze Runde mit den Coaches.'],['2 Wochen','Auswertung','Ergebnisbericht nach den vereinbarten Kriterien. Danach entscheiden Sie über die Fortsetzung.']],
scope:[['1','Standort mit eigener Instanz in der EU'],['bis 10','aktive Teilnehmende'],['12','Wochen Laufzeit'],['2 Std.','Einweisung für Coaches, danach 30 Min. pro Woche']],
plNote:'Die Erfolgskriterien legen wir gemeinsam fest, zum Beispiel die Zahl der abgeschickten Bewerbungen, die Zeit je Bewerbung aus Sicht der Coaches und die Zufriedenheit aller Beteiligten. Die Konditionen für den Pilot besprechen wir im ersten Gespräch.',
fqEye:'Häufige Fragen',
fqTitle:'Was Träger<br><em>uns oft fragen.</em>',
fqText:'Ihre Frage ist nicht dabei? Schreiben Sie uns, wir antworten gern.',
faq:[['Ersetzt Carrier Tower den Coach?','Nein. Carrier Tower nimmt Schreib- und Sortierarbeit ab. Beratung, Einschätzung und die Entscheidung, welche Stelle passt, bleiben beim Menschen. Auch Coach Scotti ist ein digitaler Begleiter in der Software, kein Ersatz für den Coach vor Ort.'],['Wer ist Coach Scotti?','Scotti ist der Begleiter in Carrier Tower: Er ist auf jeder Seite da (Knopf unten rechts), erklärt, was man dort tun kann, und führt Schritt für Schritt durch. Mit „Frag Scotti“ beantwortet er eigene Fragen mit KI, nur aus dem eigenen Master-Lebenslauf und, wenn gewählt, aus Anzeige und Verlauf. Er erfindet nichts und schlägt einen nächsten Schritt vor. Entscheiden tut der Mensch. Eine Frage kostet etwa 0,02 USD.'],['Hilft Carrier Tower Bewerberinnen und Bewerbern ab 50?','Ja, mit dem Knopf „Altersneutral machen“ im Bewerbungspaket. Er nimmt Geburtsdatum, alte Jahreszahlen und Angaben wie „seit 1994“ aus dem Lebenslauf, die letzten 15 Jahre bleiben mit Daten stehen. Der erste Filter sieht die Erfahrung, nicht das Geburtsjahr. Unsichtbar wird das Alter damit nicht, im Gespräch zählt die Person. Jede Änderung wird angezeigt und lässt sich rückgängig machen.'],['Verschickt Carrier Tower Bewerbungen?','Nein, nie. Carrier Tower bereitet Unterlagen als Entwurf vor und öffnet die Bewerbungsseite des Arbeitgebers. Abgeschickt wird von der Person selbst.'],['Liest Carrier Tower LinkedIn oder Jobportale automatisch aus?','Nein. Das Lesezeichen „→ CT“ übernimmt nur die Seite, die man selbst geöffnet hat. Carrier Tower ruft diese Portale nie selbst auf. Das Stellenradar nutzt nur legale Quellen.'],['Blockiert Carrier Tower Stellen, die nicht gut passen?','Nein. Die Fit-Analyse ist eine Hilfe, kein Zwang. Auch schwächere Treffer bleiben sichtbar, und jede Stelle lässt sich ohne Bewertung übernehmen.'],['Welche KI steckt dahinter, und was kostet sie?','Claude von Anthropic. Die Daten werden nicht zum Training verwendet. KI-Schritte zeigen ihre ungefähren Kosten vorher, und für jede Instanz gilt ein Monatsbudget.'],['Hilft Carrier Tower beim Nachweis der Eigenbemühungen?','Ja. Jede Schublade im Bewerbungsablauf lässt sich als CSV-Bericht exportieren, zum Beispiel für die Arbeitsagentur.'],['Ist Carrier Tower fertig?','Carrier Tower befindet sich in der Pilotphase. Die beschriebenen Funktionen laufen und sind getestet. Wir suchen Träger für einen ersten gemeinsamen Pilot im echten Alltag.'],['Was kostet der Pilot?','Für den Pilot gibt es ein festes, überschaubares Angebot je Standort. Die Einzelheiten besprechen wir im ersten Gespräch.']],
rqEye:'Demo anfragen',
rqTitle:'Sehen Sie Carrier Tower<br><em>in 30 Minuten.</em>',
rqText:'In einer Online-Demo zeigen wir Ihnen den ganzen Ablauf im Demo-Modus mit unserer Beispielperson Lena Berger. Ohne Verpflichtung.',
rqList:['Live-Durchlauf: Master-Lebenslauf, Stelle übernehmen, Bewerbungspaket, Bewerbungsablauf und Coach Scotti','Antworten auf Ihre Fragen zu Datenschutz, Betrieb und Kosten','Auf Wunsch ein Pilot-Vorschlag für Ihren Standort'],
rqMail:'Lieber direkt per E-Mail?',
fName:'Name',fOrg:'Träger / Organisation',fMail:'E-Mail',fSize:'Teilnehmende im Pilot',fMsg:'Nachricht (optional)',
sizes:['Noch offen','Bis 5','6 bis 10','Mehr als 10'],
fSend:'Demo anfragen',
fFine:'Ihre Angaben nutzen wir nur, um Ihre Anfrage zu beantworten. Mehr dazu in der <a href="datenschutz.html">Datenschutzerklärung</a>.',
fMissing:'Bitte Name und eine gültige E-Mail-Adresse angeben.',fSending:'Wird gesendet …',fOk:'Danke! Ihre Demo-Anfrage ist angekommen. Wir melden uns in Kürze.',fErr:'Das Senden hat nicht geklappt. Bitte schreiben Sie direkt an anda@gaiapath.ai.',
statusNote:'Carrier Tower befindet sich in der Pilotphase und ist noch nicht allgemein verfügbar. Die beschriebenen Funktionen entsprechen dem Stand vom 24. November 2026. Alle Beispiele auf dieser Seite sind fiktiv (Beispielperson „Lena Berger“). Es werden keine Zahlen aus Kundenprojekten gezeigt.'
},
en:{
title:'Carrier Tower – AI-supported application documents · GAIA PATH',
back:'← Back to GAIA PATH',
heroEye:'Product · Carrier Tower · For job coaching providers',
heroTitle:'Applications that only say<br><em>what is actually true.</em>',
heroText:'Carrier Tower is the first product of GAIA PATH. Your résumé becomes a verified master résumé. For every matching job, AI uses it to write a résumé and a cover letter with verified facts only. Anything worth a second look is highlighted. AI shows, people decide: nothing blocks you, nothing is sent automatically.',
badges:['AI-supported with Claude by Anthropic','Verified facts only','Nothing is sent automatically','German and US English'],
ctaDemo:'Request a demo',ctaHow:'How it works',
heroCap:'Stone by stone: every statement in the documents rests on evidence.',
whyEye:'Why Carrier Tower',
whyTitle:'More good applications,<br><em>no invented experience.</em>',
whyText:'Good applications take time, and in a coaching program the coach\'s time is limited. Generic AI tools write fast but like to embellish. Carrier Tower combines both: speed from AI and reliability from evidence. Built for training and job coaching providers, their coaches, and professionals and managers looking for a job.',
why:[['For participants','Tailored documents for every job, everything in one place, one concrete next step for today, and Coach Scotti as a guide on every page. Nothing in them has to be taken back in the interview.'],['For coaches','Less time spent wording and formatting, more time for conversation and preparation. The status of every application is visible at a glance.'],['For providers','Structured application support with CSV reports, your own instance in the EU and full cost control. Data protection and human approval are built in from the start.']],
howEye:'How it works',
howTitle:'Five steps.<br><em>People make the decisions.</em>',
howText:'AI reads, compares, drafts and shows alternatives. Coach and participant decide what counts, what gets sent and what happens next.',
steps:[['Create the master résumé','Upload a résumé and, if you like, a LinkedIn profile. Carrier Tower builds a master résumé from it. The person reviews and approves it. It is the single source of truth for every application.','AI builds · human approves',1],['Take over a job','From the job radar, by link, or with the "→ CT" bookmark straight from the posting you opened. Contact person, department and address are captured too.','Human chooses',1],['Does the job fit?','If you want, the fit analysis shows which requirements are backed and where the gaps are, with evidence. Guidance, not a gate.','AI shows',0],['Draft the application package','Résumé and cover letter for exactly this job, in the language and tone of the posting. Sentences worth a second look are highlighted, with two or three rewordings to choose from.','AI writes · highlights',0],['Approve, apply, follow through','Review, edit, approve. Carrier Tower opens the employer\'s application page, the person submits it. Afterwards the application tracker keeps everything in view.','Human decides',1]],
exEye:'Example · fictional',
exTitle:'One run-through<br><em>with Lena Berger.</em>',
exText:'Lena Berger is a made-up person, the same one as in demo mode. This is what it looks like when Carrier Tower takes over a job and checks the cover letter against the master résumé.',
exHead:'Customer Service Associate',exSub:'Northlight Logistics Inc. (fictional) · Hamburg · for Lena Berger',
fict:'Fictional example',
exChecksT:'1 · Job taken over and sorted',exStmtT:'2 · Every statement against the master résumé',
checks:[['Posting read','title, company, location, job ID'],['Employer','direct, no agency'],['Letter header','contact, department, address'],['Seen before?','no, new job'],['Applied before?','no, no duplicate'],['Fit (optional)','4 of 5 requirements backed']],
stmts:[['ok','Backed','"Three years of in-house customer support"','Evidence: master résumé, station 2'],['ok','Backed','"Confident with ticketing systems"','Evidence: master résumé, station 2, responsibilities'],['warn','Highlighted','"Business-fluent English"','Evidence says English B2. Suggestions: "good English skills (B2)" · "English in customer contact (B2)"'],['warn','Highlighted','"Several years of SAP experience"','No evidence in the master résumé. Suggestions: remove the sentence · "ready to learn SAP quickly"']],
exStart:'Play the example',exAgain:'Play again',
exWait:'Start the example and watch how it is checked.',
exDone:'Draft ready, not sent. Lena picks the wording she wants, approves and applies directly with the employer.',
ftEye:'Features',
ftTitle:'What Carrier Tower<br><em>does day to day.</em>',
ftText:'Everything an application needs, in one place. And the same rule everywhere: AI shows, people decide.',
feats:[['','Master résumé as the fact base','A verified master résumé built from your résumé and LinkedIn profile. Versions are approved, older ones stay traceable.'],['','No invented facts','Every claim in résumé and cover letter must be backed by the master résumé. Checks flag unsupported sentences.'],['','German and US English','One click rewrites the résumé in American business English. Every version comes as a Word file with photo and signature.'],['','Job radar using legal sources','Searches public job boards and the applicant portals of your target employers for your target roles. Hits are rated, not hidden.'],['','Link or "→ CT" bookmark','Just paste the link, Carrier Tower reads the career page itself. For LinkedIn, StepStone, Indeed and others, the bookmark takes over only the page you opened yourself.'],['','Recruiters and duplicates recognized','Carrier Tower recognizes when an agency posts instead of the employer, spots jobs you have seen before, and warns before a second application.'],['','Fit analysis with evidence','Which requirements are backed, where the gaps are. Everyone sets their own thresholds. Optional: jobs can be taken over without a rating.'],['','Résumé and cover letter per job','In the language of the posting and the right tone, formal or informal. Correct salutation and letter header, also for recruiters.'],['','Age-neutral at the click of a button','An optional button in the application package removes date of birth, years of education, the dates of older positions and phrases like "28 years of experience" or "since 1994". The last 15 years keep their dates so applicant tracking systems read the résumé well. A list shows every change. It only applies once saved and can be undone. No AI, no cost.'],['','Highlighted, with alternatives','Sentences worth a second look are highlighted, with two or three rewordings to choose from. Any change after approval withdraws it.'],['','PDF and Word, straight to the employer','Professional layout with photo and signature. Carrier Tower opens the employer\'s application page and tells you when a link only leads to a job board.'],['','Application tracker in drawers','In preparation, applied, interview, closed, rejected. Plus history and conversations per application with dates, and an overview with a suggestion for today.'],['','Paste a rejection email','Copy in the text of a rejection, Carrier Tower finds the right application and records it with the date. No AI and no inbox access.'],['','Coach Scotti','Scotti guides you through Carrier Tower on every page, even at the very start before your résumé is in. Interview prep tips, a follow-up text after ten days without a reply, supportive words after a rejection. With "Ask Scotti" you ask your own questions.'],['','CSV reports','Reports per drawer as CSV, for example as proof of job-search activity for the employment agency.'],['','Cost control','AI steps show their approximate cost upfront. Each instance has a monthly budget.']],
prEye:'Principles',
prTitle:'Four rules,<br><em>built in.</em>',
prText:'These rules are not just written in a manual. They are anchored in the system itself.',
prins:[['Nothing is invented','Every statement needs evidence in the master résumé.'],['AI shows, people decide','AI suggests and shows alternatives. Nothing blocks you.'],['Nothing goes out automatically','Carrier Tower never sends an application itself.'],['Everything stays traceable','Versions, approvals and the history of every application stay visible.']],
dpEye:'Data protection and operations',
dpTitle:'Care with data<br><em>from day one.</em>',
dpText:'Résumés are personal data. That is why Carrier Tower works with as little data as possible, separated per provider, and with clear contracts.',
dpYesT:'How we work',
dpYes:['Own instance per provider with a separate database, pilot operation in the EU','Every new instance starts empty, no prior knowledge needed','AI by Anthropic (Claude). Your data is not used for training','Data minimization: only what an application needs','Data processing agreement (GDPR) signed before the start','All data deleted or handed over after the pilot'],
dpNoT:'What Carrier Tower does not do',
dpNo:['No automatic applying and no automatic sending','No automatic reading of LinkedIn, StepStone or Indeed','No access to your inbox','No health data, no date of birth, no employment agency customer numbers','Nothing passed to employers without the person\'s action'],
plEye:'Pilot',
plTitle:'Start together:<br><em>a twelve-week pilot.</em>',
plText:'We are looking for job coaching providers in Germany (AVGS) who want to trial Carrier Tower with us at one site. Small, clearly scoped and with an honest evaluation at the end.',
phases:[['2 weeks','Setup','Set up your own instance, brief the coaches, upload résumés and approve the master résumés.'],['8 weeks','Pilot','Participants work with Carrier Tower. A short weekly check-in with the coaches.'],['2 weeks','Evaluation','Results report against the agreed criteria. Then you decide whether to continue.']],
scope:[['1','site with its own instance in the EU'],['up to 10','active participants'],['12','weeks'],['2 hrs','coach briefing, then 30 min per week']],
plNote:'We set the success criteria together, for example the number of applications submitted, the time per application as seen by the coaches, and satisfaction of everyone involved. We discuss the terms of the pilot in our first conversation.',
fqEye:'FAQ',
fqTitle:'What providers<br><em>often ask us.</em>',
fqText:'Your question is not listed? Write to us, we are happy to answer.',
faq:[['Does Carrier Tower replace the coach?','No. Carrier Tower takes writing and sorting work off the coach. Advice, judgment and the decision which job fits stay with people. Coach Scotti, too, is a digital guide inside the software, not a replacement for the coach on site.'],['Who is Coach Scotti?','Scotti is the guide inside Carrier Tower: on every page (button bottom right), he explains what you can do there and walks you through step by step. With "Ask Scotti" he answers your own questions with AI, using only your master résumé and, if chosen, the job ad and history. He invents nothing and suggests a next step. You decide. A question costs about $0.02.'],['Does Carrier Tower help applicants over 50?','Yes, with the "Make age-neutral" button in the application package. It takes the date of birth, old years and phrases like "since 1994" out of the résumé, while the last 15 years keep their dates. The first filter sees your experience, not your year of birth. It does not make age invisible: in the interview, the person counts. Every change is shown and can be undone.'],['Does Carrier Tower send applications?','No, never. Carrier Tower prepares documents as drafts and opens the employer\'s application page. The person submits it.'],['Does Carrier Tower read LinkedIn or job portals automatically?','No. The "→ CT" bookmark only takes over the page you opened yourself. Carrier Tower never crawls these portals. The job radar uses legal sources only.'],['Does Carrier Tower block jobs that are a weak fit?','No. The fit analysis is guidance, not a gate. Weaker hits stay visible, and any job can be taken over without a rating.'],['Which AI is behind it, and what does it cost?','Claude by Anthropic. Data is not used for training. AI steps show their approximate cost upfront, and each instance has a monthly budget.'],['Does Carrier Tower help document job-search activity?','Yes. Every drawer in the application tracker can be exported as a CSV report, for example for the employment agency.'],['Is Carrier Tower finished?','Carrier Tower is in its pilot phase. The functions described work and are tested. We are looking for providers for a first joint pilot in real everyday use.'],['What does the pilot cost?','There is a fixed, modest offer per site for the pilot. We go through the details in our first conversation.']],
rqEye:'Request a demo',
rqTitle:'See Carrier Tower<br><em>in 30 minutes.</em>',
rqText:'In an online demo we walk you through the whole process in demo mode with our example person Lena Berger. No obligation.',
rqList:['Live run-through: master résumé, taking over a job, application package, application tracker and Coach Scotti','Answers to your questions on data protection, operations and cost','On request, a pilot proposal for your site'],
rqMail:'Prefer email?',
fName:'Name',fOrg:'Provider / organization',fMail:'Email',fSize:'Participants in the pilot',fMsg:'Message (optional)',
sizes:['Not sure yet','Up to 5','6 to 10','More than 10'],
fSend:'Request a demo',
fFine:'We only use your details to answer your request. More in our <a href="datenschutz.html#en">privacy policy</a>.',
fMissing:'Please enter your name and a valid email address.',fSending:'Sending …',fOk:'Thank you! Your demo request has arrived. We will get back to you shortly.',fErr:'Sending did not work. Please write directly to anda@gaiapath.ai.',
statusNote:'Carrier Tower is in its pilot phase and not yet generally available. The functions described reflect the state of November 24, 2026. All examples on this page are fictional (example person "Lena Berger"). No figures from client projects are shown.'
}};
let timer=null;
function demoHTML(c){
return `<div class="ct-demo-head"><div><strong>${esc(c.exHead)}</strong><small>${esc(c.exSub)}</small></div><span class="ct-fict">${esc(c.fict)}</span></div>
<div class="ct-demo-body"><div class="ct-demo-col"><h3>${esc(c.exChecksT)}</h3><ol class="ct-checks">${c.checks.map((k,i)=>`<li><i>✓</i><span>${i+1} · ${esc(k[0])}</span><small>${esc(k[1])}</small></li>`).join('')}</ol></div>
<div class="ct-demo-col"><h3>${esc(c.exStmtT)}</h3><ul class="ct-stmts">${c.stmts.map(s=>`<li class="${s[0]}"><span class="tag">${esc(s[1])}</span><span class="txt">${esc(s[2])}</span><span class="ev">${esc(s[3])}</span></li>`).join('')}</ul></div></div>
<div class="ct-demo-foot"><p><span class="ct-wait">${esc(c.exWait)}</span><span class="ct-human">${esc(c.exDone)}</span></p><button type="button" class="btn btn-dark" id="ctPlay"><span>${esc(c.exStart)}</span><span>▶</span></button></div>`}
function play(c,instant){
const d=document.getElementById('ctDemo');clearTimeout(timer);d.classList.remove('done');
const items=[...d.querySelectorAll('.ct-checks li'),...d.querySelectorAll('.ct-stmts li')];items.forEach(x=>x.classList.remove('on'));
let i=0;const step=()=>{if(i<items.length){items[i++].classList.add('on');timer=setTimeout(step,instant?0:420)}else{d.classList.add('done');d.querySelector('#ctPlay span').textContent=c.exAgain}};
if(instant){items.forEach(x=>x.classList.add('on'));d.classList.add('done');d.querySelector('#ctPlay span').textContent=c.exAgain}else step()}
function draw(){
const c=T[lang];document.documentElement.lang=lang;document.title=c.title;
document.querySelectorAll('[data-t]').forEach(el=>{const v=c[el.dataset.t];if(v!=null)el.innerHTML=v});
document.getElementById('ctBack').textContent=c.back;
document.querySelectorAll('[data-i]').forEach(el=>{const v=NAV[lang][el.dataset.i];if(v==null)return;const sp=el.querySelector('span');if(el.classList.contains('nav-cta')&&sp){el.firstChild.nodeValue=v+' '}else el.textContent=v});
document.getElementById('ctBadges').innerHTML=c.badges.map(b=>`<span>${esc(b)}</span>`).join('');
document.getElementById('ctWhy').innerHTML=c.why.map((w,i)=>`<article class="ct-card"><span class="no">0${i+1}</span><h3>${esc(w[0])}</h3><p>${esc(w[1])}</p></article>`).join('');
document.getElementById('ctSteps').innerHTML=c.steps.map(s=>`<li><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p><span class="who${s[3]?' h':''}">${esc(s[2])}</span></li>`).join('');
const d=document.getElementById('ctDemo');d.innerHTML=demoHTML(c);d.querySelector('#ctPlay').addEventListener('click',()=>play(c,false));
if(q.get('ex')==='done')play(c,true);
document.getElementById('ctFeats').innerHTML=c.feats.map((f,i)=>`<article class="ct-feat"><span class="ico" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></article>`).join('');
document.getElementById('ctPrins').innerHTML=c.prins.map(p=>`<div class="ct-prin"><strong>${esc(p[0])}</strong><p>${esc(p[1])}</p></div>`).join('');
document.getElementById('ctDpYes').innerHTML=c.dpYes.map(x=>`<li>${esc(x)}</li>`).join('');
document.getElementById('ctDpNo').innerHTML=c.dpNo.map(x=>`<li>${esc(x)}</li>`).join('');
document.getElementById('ctPhases').innerHTML=c.phases.map(p=>`<div class="ct-phase"><small>${esc(p[0])}</small><strong>${esc(p[1])}</strong><p>${esc(p[2])}</p></div>`).join('');
document.getElementById('ctScope').innerHTML=c.scope.map(s=>`<div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join('');
document.getElementById('ctFaq').innerHTML=c.faq.map((f,i)=>`<details${i===0?' open':''}><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join('');
document.getElementById('ctRqList').innerHTML=c.rqList.map(x=>`<li>${esc(x)}</li>`).join('');
const sel=document.getElementById('fSize');const cur=sel.selectedIndex;sel.innerHTML=c.sizes.map(s=>`<option>${esc(s)}</option>`).join('');if(cur>0)sel.selectedIndex=cur;
document.querySelectorAll('#ctLang [data-lang]').forEach(b=>{const on=b.dataset.lang===lang;b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on))});
const st=document.getElementById('ctStatus');st.textContent='';st.className='status'}
document.getElementById('ctLang').addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(!b||b.dataset.lang===lang)return;lang=b.dataset.lang;try{localStorage.setItem('gaia_lang',lang)}catch(_){}q.set('lang',lang);history.replaceState(null,'','?'+q.toString()+location.hash);draw()});
document.getElementById('ctForm').addEventListener('submit',async e=>{e.preventDefault();const f=e.target,c=T[lang],st=document.getElementById('ctStatus'),btn=f.querySelector('button');
if(f._honey.value)return;const name=f.name.value.trim(),email=f.email.value.trim();
if(!name||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){st.className='status err';st.textContent=c.fMissing;return}
btn.disabled=true;st.className='status';st.textContent=c.fSending;
try{const r=await fetch('https://formsubmit.co/ajax/anda@gaiapath.ai',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name,email,_replyto:email,organisation:f.organisation.value.trim(),teilnehmende:f.teilnehmende.value,message:f.message.value.trim(),sprache:lang,_subject:'Carrier Tower Demo-Anfrage – '+(f.organisation.value.trim()||name),_template:'table',_captcha:'false'})});
const d=await r.json().catch(()=>({}));if(!r.ok||String(d.success)==='false')throw new Error(String(d.message||r.status));
st.className='status ok';st.textContent=c.fOk;f.reset()}catch(err){st.className='status err';st.textContent=c.fErr}finally{btn.disabled=false}});
const mt=document.getElementById('menuToggle'),mn=document.getElementById('mobileNav');if(mt&&mn){mt.addEventListener('click',()=>{mn.classList.toggle('show');mt.setAttribute('aria-expanded',String(mn.classList.contains('show')))});mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mn.classList.remove('show');mt.setAttribute('aria-expanded','false')}))}
draw();
})();
