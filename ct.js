(function(){
const q=new URLSearchParams(location.search);
let lang='de';
try{const s=localStorage.getItem('gaia_lang');if(s==='en'||s==='de')lang=s}catch(_){}
if(q.get('lang')==='en'||q.get('lang')==='de')lang=q.get('lang');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const T={
de:{
title:'Carrier Tower – KI-gestützte Bewerbungsunterlagen · GAIA PATH',
back:'← Zurück zu GAIA PATH',
heroEye:'Produkt · Carrier Tower · Für AVGS-Träger',
heroTitle:'Bewerbungen, die nur sagen,<br><em>was wirklich stimmt.</em>',
heroText:'Carrier Tower ist das erste Produkt von GAIA PATH. Für jede passende Stelle erstellt es einen Lebenslauf und ein Anschreiben, die nur auf belegten Angaben aus dem Lebenslauf der Person beruhen. Eine zweite KI prüft jede Aussage. Coach und Teilnehmende entscheiden und senden selbst.',
badges:['KI-gestützt mit Claude von Anthropic','Nur belegte Fakten','Nichts wird automatisch versendet','Deutsch und Englisch'],
ctaDemo:'Demo anfragen',ctaHow:'So funktioniert es',
heroCap:'Stein auf Stein: Jede Aussage in den Unterlagen ruht auf einem Beleg.',
whyEye:'Warum Carrier Tower',
whyTitle:'Mehr gute Bewerbungen,<br><em>ohne erfundene Erfahrung.</em>',
whyText:'Gute Bewerbungen kosten Zeit, und in einer Maßnahme ist die Zeit des Coaches knapp. Allgemeine KI-Werkzeuge schreiben schnell, schmücken aber gern aus. Carrier Tower verbindet beides: Tempo durch KI und Verlässlichkeit durch Prüfung.',
why:[['Für Teilnehmende','Passende Unterlagen für jede Stelle, die zur eigenen Geschichte passen. Nichts darin muss man im Vorstellungsgespräch zurücknehmen.'],['Für Coaches','Weniger Zeit für Formulieren und Formatieren, mehr Zeit für das Gespräch, die Vorbereitung und die Entscheidung, welche Stelle wirklich passt.'],['Für Träger','Ein nachvollziehbarer, dokumentierter Ablauf. Datenschutz und menschliche Freigabe sind von Anfang an eingebaut, nicht nachträglich angehängt.']],
howEye:'So funktioniert es',
howTitle:'Fünf Schritte.<br><em>Der letzte gehört dem Menschen.</em>',
howText:'Die KI übernimmt das Lesen, Prüfen und Entwerfen. Was gilt und was verschickt wird, entscheiden Coach und Teilnehmende.',
steps:[['Profil bestätigen','Der Lebenslauf wird hochgeladen. Die KI liest die beruflichen Stationen heraus, die Person prüft und bestätigt sie. Nur bestätigte Angaben werden später verwendet.','KI liest · Mensch bestätigt',1],['Stelle wählen','Eine Stelle wird per Link eingetragen oder in zugelassenen Quellen gefunden. Die Person entscheidet, für welche Stelle es weitergeht.','Mensch wählt',1],['Stelle prüfen','Acht Prüfschritte klären: Ist die Anzeige echt, aktiv und neu? Wer ist der Arbeitgeber? Welche Anforderungen sind belegt? Was unklar ist, wird angehalten.','KI prüft',0],['Unterlagen entwerfen','Claude schreibt Lebenslauf und Anschreiben für genau diese Stelle. Ein zweites Modell prüft jede Aussage gegen die Belege und markiert, was nicht gedeckt ist.','KI schreibt und prüft',0],['Freigeben und selbst senden','Coach und Teilnehmende lesen, ändern bei Bedarf und geben frei. Die Unterlagen gibt es als Word und PDF. Beworben wird selbst, beim Arbeitgeber.','Mensch entscheidet',1]],
exEye:'Beispiel · fiktiv',
exTitle:'Einmal durchgespielt<br><em>mit Alex Beispiel.</em>',
exText:'Alex Beispiel ist eine erfundene Person. So sieht es aus, wenn Carrier Tower eine Stelle prüft und ein Anschreiben gegen den Lebenslauf abgleicht.',
exHead:'Sachbearbeitung Kundenservice (m/w/d)',exSub:'Nordlicht Logistik GmbH (fiktiv) · Hamburg · für Alex Beispiel',
fict:'Fiktives Beispiel',
exChecksT:'1 · Acht Prüfschritte zur Stelle',exStmtT:'2 · Jede Aussage im Anschreiben geprüft',
checks:[['Quelle','Unternehmensseite, zulässig'],['Aktiv','Anzeige online, Frist offen'],['Arbeitgeber','direkt, kein Vermittler'],['Dublette','keine zweite Anzeige'],['Historie','noch nicht beworben'],['Aktualität','Profil diese Woche bestätigt'],['Eignung','4 von 5 Anforderungen belegt'],['Bericht','alle Belege angehängt']],
stmts:[['ok','Belegt','„Drei Jahre Kundenbetreuung im Innendienst“','Beleg: Lebenslauf, Station 2, Beispiel Handel GmbH'],['ok','Belegt','„Sicher im Umgang mit Ticketsystemen“','Beleg: Lebenslauf, Station 2, Aufgaben'],['bad','Angepasst','„Englisch verhandlungssicher“','Beleg sagt Englisch B2. Neuer Vorschlag: „gute Englischkenntnisse (B2)“'],['bad','Entfernt','„Mehrjährige Erfahrung mit SAP“','Kein Beleg im Lebenslauf. Die Aussage wird gestrichen und als Lücke offen genannt.']],
exStart:'Beispiel abspielen',exAgain:'Noch einmal',
exWait:'Starten Sie das Beispiel und sehen Sie, wie geprüft wird.',
exDone:'Entwurf bereit, nicht versendet. Alex und der Coach lesen ihn, ändern bei Bedarf, geben frei und bewerben sich selbst.',
ftEye:'Funktionen',
ftTitle:'Was Carrier Tower<br><em>im Alltag leistet.</em>',
ftText:'Alles, was eine Bewerbung braucht, an einem Ort. Und überall dieselbe Regel: Die KI bereitet vor, der Mensch entscheidet.',
feats:[['◎','Karriereprofil aus belegten Fakten','Aus dem Lebenslauf entsteht ein Profil mit allen Stationen. Die Person bestätigt es. Nur bestätigte Angaben dürfen in Unterlagen auftauchen.'],['⌕','Stellen eintragen oder finden','Stellen per Link eintragen oder in Quellen suchen, deren Bedingungen das erlauben: nach Zielrolle, Region und Arbeitsmodell.'],['✓','Acht Prüfschritte je Stelle','Quelle, aktiv, Arbeitgeber, Dublette, Historie, Aktualität, Eignung, Bericht. Jedes Ergebnis mit Begründung.'],['❚❚','HALT statt Raten','Fehlt eine Information, hält Carrier Tower an und sagt, was fehlt. Eine hohe Passung allein hebt einen HALT nicht auf.'],['✎','Lebenslauf und Anschreiben je Stelle','Für genau diese Stelle geschrieben. Erfahrungen werden ausgewählt und geordnet, nie erfunden.'],['⇄','Zweite KI prüft jede Aussage','Ein zweites Modell gleicht jeden Satz mit den Belegen ab, bevor ein Mensch den Entwurf sieht. Nicht Belegtes wird markiert.'],['⬇','Bearbeiten, freigeben, herunterladen','Entwürfe direkt anpassen und freigeben. Jede spätere Änderung hebt die Freigabe auf. Download als Word (DOCX) und PDF.'],['◐','Ehrlicher Status','Vorbereitet, freigegeben und versendet sind drei verschiedene Zustände. „Versendet“ gilt erst, wenn die Person es bestätigt.'],['↺','Verlauf und Wiedererkennung','Frühere Bewerbungen bleiben sichtbar. Dieselbe Stelle unter anderem Titel oder über einen Vermittler wird erkannt.']],
prEye:'Grundsätze',
prTitle:'Vier Regeln,<br><em>fest eingebaut.</em>',
prText:'Diese Regeln stehen nicht nur in einer Anleitung. Sie sind im System selbst verankert und werden bei jedem Schritt durchgesetzt.',
prins:[['Nichts wird erfunden','Jede Aussage braucht einen Beleg aus dem bestätigten Profil.'],['Unklar heißt HALT','Was nicht belegt ist, wird nicht geraten, sondern offen benannt.'],['Nichts geht automatisch raus','Carrier Tower versendet keine Bewerbung. Das tun die Menschen.'],['Alles bleibt nachvollziehbar','Jede Prüfung und jede Statusänderung wird protokolliert.']],
dpEye:'Datenschutz und Technik',
dpTitle:'Sorgfalt mit Daten<br><em>von Anfang an.</em>',
dpText:'Es geht um Lebensläufe und damit um persönliche Daten. Deshalb arbeitet Carrier Tower mit so wenig Daten wie möglich und mit klaren Verträgen.',
dpYesT:'So arbeiten wir',
dpYes:['Datenminimierung: nur Angaben, die für Bewerbungen nötig sind','Je teilnehmender Person ein eigener, getrennter Zugang','KI von Anthropic (Claude). Ihre Daten werden nicht zum Training verwendet','Vertrag zur Auftragsverarbeitung (AVV) vor dem Start','Löschung oder Übergabe aller Daten nach dem Pilot'],
dpNoT:'Das gibt es bei Carrier Tower nicht',
dpNo:['Keine Gesundheitsdaten, kein Geburtsdatum, keine Kundennummern der Agentur','Kein automatischer Versand von Bewerbungen','Keine Bewertung oder Rangliste von Personen','Keine Weitergabe an Arbeitgeber ohne Zutun der Person'],
plEye:'Pilot',
plTitle:'Gemeinsam starten:<br><em>ein Pilot in zwölf Wochen.</em>',
plText:'Wir suchen AVGS-Träger, die Carrier Tower an einem Standort gemeinsam mit uns erproben. Klein, klar begrenzt und mit einer ehrlichen Auswertung am Ende.',
phases:[['2 Wochen','Einrichtung','Zugänge einrichten, Coaches einweisen, Lebensläufe hochladen und bestätigen.'],['8 Wochen','Pilotbetrieb','Teilnehmende arbeiten mit Carrier Tower. Wöchentlich eine kurze Runde mit den Coaches.'],['2 Wochen','Auswertung','Ergebnisbericht nach den vereinbarten Kriterien. Danach entscheiden Sie über die Fortsetzung.']],
scope:[['1','Standort'],['bis 10','aktive Teilnehmende, je mit eigenem Zugang'],['12','Wochen Laufzeit'],['2 Std.','Einweisung für Coaches, danach 30 Min. pro Woche']],
plNote:'Die Erfolgskriterien legen wir gemeinsam fest, zum Beispiel die Zahl der versendeten Bewerbungen, die Zeit je Bewerbung aus Sicht der Coaches und die Zufriedenheit aller Beteiligten. Die Konditionen für den Pilot besprechen wir im ersten Gespräch.',
fqEye:'Häufige Fragen',
fqTitle:'Was Träger<br><em>uns oft fragen.</em>',
fqText:'Ihre Frage ist nicht dabei? Schreiben Sie uns, wir antworten gern.',
faq:[['Ersetzt Carrier Tower den Coach?','Nein. Carrier Tower nimmt dem Coach Schreibarbeit ab. Beratung, Einschätzung und die Entscheidung, welche Stelle passt, bleiben beim Menschen.'],['Verschickt Carrier Tower Bewerbungen?','Nein, nie automatisch. Carrier Tower bereitet Unterlagen als Entwurf vor. Die Person gibt frei, lädt sie herunter und bewirbt sich selbst beim Arbeitgeber.'],['Welche KI steckt dahinter?','Claude von Anthropic. Ein Modell schreibt, ein zweites prüft jede Aussage gegen die Belege. Die Verarbeitung erfolgt in den USA auf Grundlage der EU-Standardvertragsklauseln. Daten werden nicht zum Training verwendet.'],['Woher kommen die Stellen?','Teilnehmende können jede Stelle per Link eintragen. Zusätzlich nutzt Carrier Tower nur Quellen, deren Bedingungen das erlauben.'],['Was passiert, wenn etwas unklar ist?','Dann hält Carrier Tower an und sagt genau, was fehlt, zum Beispiel ob eine Anzeige noch aktiv ist oder wer der eigentliche Arbeitgeber ist. Erst neue Belege lösen den HALT.'],['Ist Carrier Tower fertig?','Carrier Tower befindet sich in der Pilotphase. Die Kernfunktionen laufen, und wir suchen Träger für einen ersten gemeinsamen Pilot, um es im echten Alltag zu erproben.'],['Was kostet der Pilot?','Für den Pilot gibt es ein festes, überschaubares Angebot je Standort. Die Einzelheiten besprechen wir im ersten Gespräch.']],
rqEye:'Demo anfragen',
rqTitle:'Sehen Sie Carrier Tower<br><em>in 30 Minuten.</em>',
rqText:'In einer Online-Demo zeigen wir Ihnen den ganzen Ablauf mit unserer Beispielperson Alex Beispiel. Ohne Verpflichtung.',
rqList:['Live-Durchlauf: Profil, Stellenprüfung, Unterlagen, Freigabe','Antworten auf Ihre Fragen zu Datenschutz und Ablauf','Auf Wunsch ein Pilot-Vorschlag für Ihren Standort'],
rqMail:'Lieber direkt per E-Mail?',
fName:'Name',fOrg:'Träger / Organisation',fMail:'E-Mail',fSize:'Teilnehmende im Pilot',fMsg:'Nachricht (optional)',
sizes:['Noch offen','Bis 5','6 bis 10','Mehr als 10'],
fSend:'Demo anfragen',
fFine:'Ihre Angaben nutzen wir nur, um Ihre Anfrage zu beantworten. Mehr dazu in der <a href="datenschutz.html">Datenschutzerklärung</a>.',
fMissing:'Bitte Name und eine gültige E-Mail-Adresse angeben.',fSending:'Wird gesendet …',fOk:'Danke! Ihre Demo-Anfrage ist angekommen. Wir melden uns in Kürze.',fErr:'Das Senden hat nicht geklappt. Bitte schreiben Sie direkt an anda@gaiapath.ai.',
statusNote:'Carrier Tower befindet sich in der Pilotphase und ist noch nicht allgemein verfügbar. Die beschriebenen Funktionen entsprechen dem Entwicklungsstand im November 2026. Alle Beispiele auf dieser Seite sind fiktiv (Beispielperson „Alex Beispiel“). Es werden keine Zahlen aus Kundenprojekten gezeigt.'
},
en:{
title:'Carrier Tower – AI-supported application documents · GAIA PATH',
back:'← Back to GAIA PATH',
heroEye:'Product · Carrier Tower · For job coaching providers',
heroTitle:'Applications that only say<br><em>what is actually true.</em>',
heroText:'Carrier Tower is the first product of GAIA PATH. For every matching job it creates a résumé and a cover letter built only from verified facts in the person\'s résumé. A second AI checks every statement. Coach and participant decide and send it themselves.',
badges:['AI-supported with Claude by Anthropic','Verified facts only','Nothing is sent automatically','German and English'],
ctaDemo:'Request a demo',ctaHow:'How it works',
heroCap:'Stone by stone: every statement in the documents rests on evidence.',
whyEye:'Why Carrier Tower',
whyTitle:'More good applications,<br><em>no invented experience.</em>',
whyText:'Good applications take time, and in a coaching program the coach\'s time is limited. Generic AI tools write fast but like to embellish. Carrier Tower combines both: speed from AI and reliability from checking.',
why:[['For participants','Tailored documents for every job that fit their own story. Nothing in them has to be taken back in the interview.'],['For coaches','Less time spent wording and formatting, more time for conversation, preparation and deciding which job really fits.'],['For providers','A traceable, documented process. Data protection and human approval are built in from the start, not bolted on later.']],
howEye:'How it works',
howTitle:'Five steps.<br><em>The last one belongs to people.</em>',
howText:'AI does the reading, checking and drafting. Coach and participant decide what counts and what gets sent.',
steps:[['Confirm the profile','The résumé is uploaded. AI extracts the career stations, the person reviews and confirms them. Only confirmed facts are used later.','AI reads · human confirms',1],['Choose a job','A job is added by link or found in approved sources. The person decides which job to pursue.','Human chooses',1],['Check the job','Eight checks clarify: is the posting real, open and new? Who is the employer? Which requirements are backed by evidence? Anything unclear is put on hold.','AI checks',0],['Draft the documents','Claude writes the résumé and cover letter for exactly this job. A second model checks every statement against the evidence and flags what is not covered.','AI writes and checks',0],['Approve and send yourself','Coach and participant read, edit if needed and approve. Documents come as Word and PDF. The person applies directly with the employer.','Human decides',1]],
exEye:'Example · fictional',
exTitle:'One run-through<br><em>with Alex Example.</em>',
exText:'Alex Example is a made-up person. This is what it looks like when Carrier Tower checks a job and compares a cover letter with the résumé.',
exHead:'Customer Service Associate',exSub:'Northlight Logistics Inc. (fictional) · Hamburg · for Alex Example',
fict:'Fictional example',
exChecksT:'1 · Eight checks on the job',exStmtT:'2 · Every statement in the cover letter checked',
checks:[['Source','company website, allowed'],['Open','posting online, deadline open'],['Employer','direct, no agency'],['Duplicate','no second posting'],['History','not applied before'],['Freshness','profile confirmed this week'],['Fit','4 of 5 requirements backed'],['Report','all evidence attached']],
stmts:[['ok','Backed','"Three years of in-house customer support"','Evidence: résumé, station 2, Example Retail Ltd.'],['ok','Backed','"Confident with ticketing systems"','Evidence: résumé, station 2, responsibilities'],['bad','Adjusted','"Business-fluent English"','Evidence says English B2. New suggestion: "good English skills (B2)"'],['bad','Removed','"Several years of SAP experience"','No evidence in the résumé. The statement is removed and named openly as a gap.']],
exStart:'Play the example',exAgain:'Play again',
exWait:'Start the example and watch how it is checked.',
exDone:'Draft ready, not sent. Alex and the coach read it, edit if needed, approve and apply themselves.',
ftEye:'Features',
ftTitle:'What Carrier Tower<br><em>does day to day.</em>',
ftText:'Everything an application needs, in one place. And the same rule everywhere: AI prepares, people decide.',
feats:[['◎','Career profile from verified facts','The résumé becomes a profile with every career station. The person confirms it. Only confirmed facts may appear in documents.'],['⌕','Add or find jobs','Add jobs by link or search sources whose terms allow it: by target role, region and work model.'],['✓','Eight checks per job','Source, open, employer, duplicate, history, freshness, fit, report. Every result comes with a reason.'],['❚❚','HOLD instead of guessing','If information is missing, Carrier Tower stops and says what is missing. A high match alone never lifts a HOLD.'],['✎','Résumé and cover letter per job','Written for exactly this job. Experience is selected and ordered, never invented.'],['⇄','A second AI checks every statement','A second model compares every sentence with the evidence before a person sees the draft. Anything unbacked is flagged.'],['⬇','Edit, approve, download','Edit drafts directly and approve them. Any later change cancels the approval. Download as Word (DOCX) and PDF.'],['◐','Honest status','Prepared, approved and sent are three different states. "Sent" only counts once the person confirms it.'],['↺','History and recognition','Earlier applications stay visible. The same job under a different title or via an agency is recognized.']],
prEye:'Principles',
prTitle:'Four rules,<br><em>built in.</em>',
prText:'These rules are not just written in a manual. They are anchored in the system itself and enforced at every step.',
prins:[['Nothing is invented','Every statement needs evidence from the confirmed profile.'],['Unclear means HOLD','What is not backed is not guessed but named openly.'],['Nothing goes out automatically','Carrier Tower never sends an application. People do.'],['Everything stays traceable','Every check and every status change is logged.']],
dpEye:'Data protection and technology',
dpTitle:'Care with data<br><em>from day one.</em>',
dpText:'Résumés are personal data. That is why Carrier Tower works with as little data as possible and with clear contracts.',
dpYesT:'How we work',
dpYes:['Data minimization: only what an application needs','A separate, individual account for each participant','AI by Anthropic (Claude). Your data is not used for training','Data processing agreement (GDPR) signed before the start','All data deleted or handed over after the pilot'],
dpNoT:'What Carrier Tower does not do',
dpNo:['No health data, no date of birth, no employment agency customer numbers','No automatic sending of applications','No scoring or ranking of people','Nothing passed to employers without the person\'s action'],
plEye:'Pilot',
plTitle:'Start together:<br><em>a twelve-week pilot.</em>',
plText:'We are looking for job coaching providers in Germany (AVGS) who want to trial Carrier Tower with us at one site. Small, clearly scoped and with an honest evaluation at the end.',
phases:[['2 weeks','Setup','Set up accounts, brief the coaches, upload and confirm résumés.'],['8 weeks','Pilot','Participants work with Carrier Tower. A short weekly check-in with the coaches.'],['2 weeks','Evaluation','Results report against the agreed criteria. Then you decide whether to continue.']],
scope:[['1','site'],['up to 10','active participants, each with their own account'],['12','weeks'],['2 hrs','coach briefing, then 30 min per week']],
plNote:'We set the success criteria together, for example the number of applications sent, the time per application as seen by the coaches, and satisfaction of everyone involved. We discuss the terms of the pilot in our first conversation.',
fqEye:'FAQ',
fqTitle:'What providers<br><em>often ask us.</em>',
fqText:'Your question is not listed? Write to us, we are happy to answer.',
faq:[['Does Carrier Tower replace the coach?','No. Carrier Tower takes writing work off the coach. Advice, judgment and the decision which job fits stay with people.'],['Does Carrier Tower send applications?','No, never automatically. Carrier Tower prepares documents as drafts. The person approves them, downloads them and applies directly with the employer.'],['Which AI is behind it?','Claude by Anthropic. One model writes, a second checks every statement against the evidence. Processing takes place in the US under the EU Standard Contractual Clauses. Data is not used for training.'],['Where do the jobs come from?','Participants can add any job by link. In addition, Carrier Tower only uses sources whose terms allow it.'],['What happens when something is unclear?','Carrier Tower stops and says exactly what is missing, for example whether a posting is still open or who the actual employer is. Only new evidence lifts the HOLD.'],['Is Carrier Tower finished?','Carrier Tower is in its pilot phase. The core functions work, and we are looking for providers for a first joint pilot to test it in real everyday use.'],['What does the pilot cost?','There is a fixed, modest offer per site for the pilot. We go through the details in our first conversation.']],
rqEye:'Request a demo',
rqTitle:'See Carrier Tower<br><em>in 30 minutes.</em>',
rqText:'In an online demo we walk you through the whole process with our example person Alex Example. No obligation.',
rqList:['Live run-through: profile, job check, documents, approval','Answers to your questions on data protection and process','On request, a pilot proposal for your site'],
rqMail:'Prefer email?',
fName:'Name',fOrg:'Provider / organization',fMail:'Email',fSize:'Participants in the pilot',fMsg:'Message (optional)',
sizes:['Not sure yet','Up to 5','6 to 10','More than 10'],
fSend:'Request a demo',
fFine:'We only use your details to answer your request. More in our <a href="datenschutz.html#en">privacy policy</a>.',
fMissing:'Please enter your name and a valid email address.',fSending:'Sending …',fOk:'Thank you! Your demo request has arrived. We will get back to you shortly.',fErr:'Sending did not work. Please write directly to anda@gaiapath.ai.',
statusNote:'Carrier Tower is in its pilot phase and not yet generally available. The functions described reflect the state of development in November 2026. All examples on this page are fictional (example person "Alex Example"). No figures from client projects are shown.'
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
draw();
})();
