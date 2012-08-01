var understood;
var interval;

function gen(s) {
	var c = "1234567890abcdefghijklmnopqrstuvwxyz";
	$("#c").val($("#c").val() + c.charAt(Math.floor(Math.random() * c.length)));
	if ($("#c").val().length >= s) {
		clearInterval(interval);
	}
}

$("#welcome").submit(function() {
	$("#c").val($("#c").val().toLowerCase());
	if (understood) {
		return true;
	}
	else if (!$("#c").val().match(/^\w+$/)) {
		$("#c").val(lettersonly);
		$("#c").click();
		return false;
	}
	else {
		$("#front").fadeIn('fast');
		$(window).keypress(function(e) {
			if (e.keyCode === 13) {
				$("#understand").click();
			}
		});
		return false;
	}
});

$("#c").click(function(){
	$("#c").focus();
	$("#c").select();
});

$("#random").click(function(){
	clearInterval(interval);
	$("#c").val('');
	interval = setInterval("gen(8)", 40);
});

$("#understand").click(function(){
	understood = 1;
	$("#welcome").submit();
});

$("#video").click(function(){
	$("#front").css('background-color', 'rgba(0, 0, 0, 0.8)');
	$("#note").html('<input type="button" id="close" value="x" /><span id="notetext"><iframe src="https://player.vimeo.com/video/38439169?color=97ceec&amp;autoplay=1" width="549" height="309" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></span>');
	$("#front").fadeIn();
	$("#close").click(function(){
		$("#front").fadeOut(function(){
			$("#note").html('');
			window.location.replace(document.getElementById("welcome").action);
		});
	});
});

var td1 = $("#td1").html();
var td2 = $("#td2").html();
var td3 = $("#td3").html();
var notetext = $("#notetext").html();
var understand = $("#understand").val();
var name = $("#c").val();
var create = $("#create").val();
var lettersonly = "letters and numbers only";

$('#en').click(function(){
	$("#td1").html(td1);
	$("#td2").html(td2);
	$("#td3").html(td3);
	$("#notetext").html(notetext);
	$("#understand").val(understand);
	$("#c").val(name);
	$("#create").val(create);
	lettersonly = "letters and numbers only";
});
$('#ca').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> li permet crear instantàniament converes segures i encriptades. Es tracta d'una alternativa de codi obert als serveis invasius, com ara el xat de Facebook.");
	$("#td2").html("Els missatges són xifrats dins el seu navegador utilitzant AES-256. Les dades són totalment eliminades després d'una hora d'inactivitat.");
	$("#td3").html('Cryptocat és totalment compatible amb <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) i també funciona en iPhone, Android i BlackBerry.');
	$("#notetext").html('Cryptocat ofereix un sistema d\'encriptació segur, però no és motiu per reemplaçar una forta cultura de seguretat. Podeu instalar l\'aplicació <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Cryptocat per Google Chrome</a> com a extra de seguretat i penseu responsablement a l\'hora d\'usarlo en situacions compromeses.');
	$("#understand").val("Ho entenc");
	$("#c").val("anomena el teu xat");
	$("#create").val("entrar");
	lettersonly = "unicament lletres i números";
});
$('#de').click(function(){
	$("#td1").html('<strong>Cryptocat</strong> kann sofort einen Chatraum mit sicherer Kommunikation einrichten. Es ist eine <a href="http://de.wikipedia.org/wiki/Freie_Software#Open_Source">quelloffene</a>, verschlüsselte, private Alternative zu Diensten wie dem Chat von Facebook.');
	$("#td2").html('Nachrichten werden im eigenen Browser mit AES-256 verschlüsselt. Daten werden nach einer Stunde Inaktivität sicher gelöscht.');
	$("#td3").html('Cryptocat ist voll mit <a target="_blank" href="https://torproject.org">Tor</a> kompatibel (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) und funktioniert auch auf iPhone, Android oder BlackBerry.');
	$("#notetext").html('Cryptocat bietet starke Verschlüsselung, aber sorgt nicht alleine für eine starke Sicherheits-Kultur. Wir empfehlen, zur weiteren Erhöhung der Sicherheit <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">die Cryptocat-App für Google Chrome</a> zu installieren, und in ernsten Situationen immer verantwortungsvoll zu handeln.');
	$("#understand").val('Ich verstehe');
	$("#c").val('name des chatraums');
	$("#create").val('betreten');
	lettersonly = "nur buchstaben und ziffern";
});
$('#eu').click(function(){
	$("#td1").html("<strong>Cryptocat</strong>-ek elkarrizketa seguruak momentuan eratzea ahalbidetzen du. Facebook-eko txataren moduko zerbitzuen alternatiba pribatu, zifratu eta kode-irekikoa da.");
	$("#td2").html("Mezuak AES-256 erabiliz zifratzen dira. Elkarrizketak era seguruan ezabatzen dira haietan jardunik gabeko ordu bat igaro ondoren.");
	$("#td3").html('Cryptocat guztiz bateragarria da <a target="_blank" href="https://torproject.org">Tor</a>-ekin (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) eta zure iPhone, Android edo BlackBerry-an ere badabil.');
	$("#notetext").html('Cryptocat-ek zifraketa sendoa eskaintzen du, baina ez da segurtasun kultura sendo baten ordezkoa. Segurtasun gehiagorako, <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Google Chrome-rako Cryptocat aplikazioa</a> instalatzea kontuan har ezazu eta jokatu arduraz egoera larriren batean bazaude.');
	$("#understand").val("Ulertzen dut");
	$("#c").val("izendatu zure elkarrizketa");
	$("#create").val("sartu");
	lettersonly = "letrak eta zenbakiak soilik";
});
$('#fr').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> vous laisse mettre en place des conversations sécurisées. C'est une alternative open source et privée à d'autres services tel que Facebook Chat.");
	$("#td2").html("Les messages sont cryptés à l'intérieur de votre navigateur avec AES-256. Toutes données sont effacés après une heure d'inactivité.");
	$("#td3").html('Cryptocat est entièrement compatible avec <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) et travaille aussi sur votre iPhone, Android et BlackBerry.');
	$("#notetext").html('Cryptocat fournit des communications fortement cryptés, mais n\'est pas un remplacement d\'une culture de sécurité forte. Envisagez l\'installation de l\'application <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Cryptocat pour Google Chrome</a> pour plus de sécurité, et pensez responsablement si vous êtes dans des situations extrêmes.');
	$("#understand").val("Je comprends");
	$("#c").val("nom de la conversation");
	$("#create").val("entrer");
	lettersonly = "lettres et chiffres seulement";
});
$('#it').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> ti permette di impostare istantaneamente conversazioni sicure. E' un servizio privato, crittografato, open source, alternativo ad altri servizi come la chat di Facebook.");
	$("#td2").html("I messaggi sono crittografati all'interno del tuo browser usando chiavi asimmetriche AES-256. I tuoi dati sono cancellati in modo sicuro dopo un'ora di inattività.");
	$("#td3").html('Cryptocat è completamente compatibile con <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) e funziona anche sul tuo smartphone iPhone, Android e BlackBerry.');
	$("#notetext").html('Cryptocat fornisce la crittografia forte, ma non è una sostituzione di una cultura della sicurezza forte. Considera l\'installazione di <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Cryptocat per Google Chrome</a> per una maggiore sicurezza e pensa sempre responsabilmente se ti trovi in situazioni gravi.');
	$("#understand").val("Sono consapevole");
	$("#c").val("nome della conversazione");
	$("#create").val("entra");
	lettersonly = "solo numeri e lettere";
});
$('#pt').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> permite você estabelecer conversas seguras. É uma alternativa de criptografia-livre para outros serviços como o chat do Facebook.");
	$("#td2").html("As mensagens são encriptadas seu navegador usando AES-256. Todas as dados são apagadas de forma segura após uma hora de inatividade.");
	$("#td3").html('Cryptocat é completamente compatível com <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) e também funciona no seu iPhone, Android ou Blackberry.');
	$("#notetext").html('Cryptocat prove uma encriptação forte, mas não substitui sozinho uma cultura de alta segurança. Considere instalar o aplicativo do <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Cryptocat para Google Chrome</a> para uma segurança maior e sempre pense de maneira responsável caso esteja envolvido em uma situação séria.');
	$("#understand").val("Eu compreendo");
	$("#c").val("nome da sala");
	$("#create").val("entrar");
	lettersonly = "somente letras e números";
});
$('#ru').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> позволяет быстро и безопасно обмениваться сообщениями. Это защищенная система с открытым исходным кодом, использующая шифрование.");
	$("#td2").html("Сообщения шифруются в вашем браузере с использованием AES-256. С сервера зашифрованные сообщения удаляются каждый час.");
	$("#td3").html('Cryptocat полностью совместим с сетью <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>), а также работает на iPhone, Android и BlackBerry.');
	$("#notetext").html('Cryptocat использует сильное шифрование, но не заменяет отвественное отношение к безопасности. Установите <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Приложение Cryptocat для Google Chrome</a> для усиления безопасности, и всегда будьте на чеку, если вы в сложной ситуации.');
	$("#understand").val("Я понимаю");
	$("#c").val("название вашего чата");
	$("#create").val("вход");
	lettersonly = "только буквы и цифры";
});
$('#da').click(function(){
  $("#td1").html("Med <strong>Cryptocat</strong> kan du nemt og hurtigt oprette sikrede samtaler med andre. Det er et fælleskode krypteret alternativ til andre mindre-sikre chat services (blandt andet Facebook). ");
  $("#td2").html("Beskeder er krypteret lokalt i din egen browser med AES-256 algoritmen. Krypterede samtaler slettes efter en times inaktivitet.");
  $("#td3").html('<strong>Cryptocat</strong> kører også som en skjult service ved hjælp af <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) og kan bruges fra din iPhone, Android eller BlackBerry.');
  $("#notetext").html('Cryptocat giver effektiv kryptering, men erstatter ikke en stærk sikkerhedskultur alene. Overvej at installere <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Cryptocat app for Google Chrome</a> for ekstra sikkerhed, og tænk altid ansvarligt, hvis du befinder dig i en alvorlige situation.');
  $("#understand").val("jeg forstår");
  $("#c").val("chat navn");
  $("#create").val("start");
  lettersonly = "du kan kun bruge bogstaver og tal";
});
$('#sv').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> tillåter dig att snabbt upprätta säkra konversationer. Det är ett privat alternativ till andra tjänster, såsom Facebooks chatt, baserat på öppen källkod.");
	$("#td2").html("Meddelanden krypteras i din webbläsare med AES-256. Uppgifter raderas säkert efter en timmes inaktivitet.");
	$("#td3").html('Cryptocat är fullt kompatibelt med <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>) och fungerar även på din iPhone, Android och BlackBerry.');
	$("#notetext").html('Cryptocat tillhandahåller en stark kryptering men ersätter inte en stark säkerhetskultur. Överväg att installera <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Cryptocat-appen för Google Chrome</a> för extra säkerhet, och tänk på att alltid vara ansvarsfull i nödställda situationer.');
	$("#understand").val("Jag förstår");
	$("#c").val("namnge din chatt");
	$("#create").val("öppna");
	lettersonly = "endast bokstäver och siffror";
});
$('#uk').click(function(){
	$("#td1").html("<strong>Cryptocat</strong> Дозволяє швидко та безпечно обмінюватися повідомленнями. Це захищена система з вільнодоступним відкритим кодом, яка використовує шифрування.");
	$("#td2").html("Повідомлення шифруються у вашому веб-браузері за допомогю шифру AES-256. Зашифровані повідомлення видаляються з сервера кожну годину");
	$("#td3").html('Cryptocat повністю сумісний з програмним забезпеченням мережі <a target="_blank" href="https://torproject.org">Tor</a> (<a href="http://xdtfje3c46d2dnjd.onion">http://xdtfje3c46d2dnjd.onion</a>), а також працює на iPhone, Android та BlackBerry.');
	$("#notetext").html('Cryptocat використовує стійке шифрування, але не може замінити відповідальне відношення до безпеки. Інсталюйте <a href="https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij" target="_blank">Додаток Cryptocat до Google Chrome</a> для посилення безпеки, і завжди будьте уважні, якщо ви потрапили у важку ситуацію.');
	$("#understand").val("Я розумію");
	$("#c").val("назва Вашого чата");
	$("#create").val("вхід");
	lettersonly = "тільки букви та цифри";
});

$("#c").click();