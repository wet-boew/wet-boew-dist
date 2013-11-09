/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-09
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Portuguese (Brazilian) dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "pt-BR",
	"%lang-en": "Portuguese (Brazilian)",
	"%lang-fr": "portugais (brésilien)",
	"%lang-nat": "Português do Brasil",
	"%all": "Tudo",
	"%home": "Página inicial",
	"%main-page": "Página principal",
	"%tphp": "Início da Página",
	"%you-are-in": "Você está no:",
	"%welcome-to": "Bem-vindo à:",
	"%load": "carregando ...",
	"%process": "processando ...",
	"%srch": "Buscar",
	"%srch-terms": "Buscar por palavra(s):",
	"%no-match": "Nenhum resultado encontrado",
	"%matches": {
		"mixin": "[MIXIN] Resulatdo(s) Encontrado(s)"
	},
	"%menu": "Menu",
	"%settings": "Configurações",
	"%langs": "Idiomas",
	"%about": "Sobre",
	"%curr": "(atual)",
	"%hide": "Ocultar",
	"%err": "Erro",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Iniciar",
	"%stop": "Parar",
	"%back": "Voltar",
	"%cancel": "Cancelar",
	"%new-win": " (Abre em uma nova janela)",
	"%min-ago": "há um minuto",
	"%coup-mins": "há dois minutos",
	"%mins-ago": {
		"mixin": "há [MIXIN] minutos"
	},
	"%hour-ago": "há uma hora",
	"%hours-ago": {
		"mixin": "há [MIXIN] horas"
	},
	"%days-ago": {
		"mixin": "há [MIXIN] dias"
	},
	"%yesterday": "ontem",

	"%nxt": "Próximo",
	"%nxt-r": "Próximo (tecla seta para a direita)",
	"%prv": "Anterior",
	"%prv-l": "Anterior (tecla seta para a esquerda)",
	"%first": "Primeiro",
	"%last": "Último",
	"%close-esc": "Fechar (botão ESC)",
	"%show": "Exibir",

	/* Archived Web page template */
	"%arch-pg": "Está página foi arquiva na internet.",
	/* Menu bar */
	"%sm-hlp": "(abrir o sub-menu com o botão ENTER e fechá-lo com o botão ESC)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Interromper a rotação das abas",
		"on": "Iniciar a rotação das abas"
	},
	"%tab-list": "Lista de Abas",
	"%tab-pnl-end1": "Final deste painel da guia.",
	"%tab-pnl-end2": "Voltar para a lista de guias",
	"%tab-pnl-end3": "ou continuar com o restante da página.",
	/* Multimedia player */
	"%play": "Executar",
	"%pause": "Pausar",
	"%open": "Abrir",
	"%close": "Fechar",
	"%rew": "Voltar",
	"%ffwd": "Avançar",
	"%mute": {
		"on": "Ativar o modo silencioso",
		"off": "Desativar o modo silencioso"
	},
	"%cc": {
		"off": "Ocultar a legenda",
		"on": "Mostrar a legenda"
	},
	"%cc-err": "Ocorreu um erro no carregamento da legenda",
	"%adesc": {
		"on": "Ativar a descrição de áudio",
		"off": "Desativar a descrição de áudio"
	},
	"%prog-bar": "usar os botões de seta ESQUERDA e DIREITA para voltar ou avançar a execução da mídia",
	"%no-video": "Seu navegador não parece ter capacidade para reproduzir este vídeo. Favor baixar o vídeo abaixo.",
	"%pos": "Posição atual:",
	"%perc": "Porcentagem de reprodução:",
	"%dur": "Tempo total:",
	"%buff": "Armazenado em área de memória temporária",
	/* Share widget */
	"%fav": "Favoritos",
	"%email": "Correio eletrônico",
	"%shr-txt": "Compartilhar esta página",
	"%shr-hnt": " com {s} ",
	"%shr-email-sub": "Página interessante",
	"%shr-email-bd": "Espero que esta página seja do seu interesse:\n{t} ({u})",
	"%shr-fav-ttl": "(salvar esta página)",
	"%shr-man": "Favor fechar este diálogo e teclar Ctrl+D para adicionar esta página aos seus favoritos.",
	"%shr-all": "Mostrar tudo ({n})",
	"%shr-all-ttl": "Todas as páginas salvas em favoritos",
	"%shr-disc": "Nenhum endosso, expresso ou implícito, é concedido a quaisquer produtos ou serviços",
	/* Form validation */
	"%frm-nosubmit": "O formulário não pode ser submetido porque ",
	"%errs-fnd": " foram encontrados erros.",
	"%err-fnd": " foi encontrado um erro.",
	/* Date picker */
	"%date-hide": "Ocultar o calendário",
	"%date-show": "Selecionar uma data de um calendário para o campo:",
	"%date-sel": "Selecionado",
	/* Calendar */
	"%days": ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
	"%mnths": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	"%cal": "Calendário",
	"%currDay": "(hoje)",
	"%cal-goToLnk": "Ir para o<span class=\"wb-inv\"> mês do ano</span>",
	"%cal-goToTtl": "Ir para o mês do ano",
	"%cal-goToMnth": "Mês:",
	"%cal-goToYr": "Ano:",
	"%cal-goToBtn": "Ir",
	"%prvMnth": "Mês anterior: ",
	"%nxtMnth": "Próximo mês: ",
	/* Slideout */
	"%show-toc": "Ver o índice",
	"%hide-toc": "Ocultar o índice",
	"%toc": "Índice",
	/* Lightbox */
	"%lb-curr": "Ítem %curr% de %total%",
	"%lb-xhr-err": "O carragemento deste conteúdo falhou.",
	"%lb-img-err": "O carregamento desta imagem falhou.",
	/* Charts widget */
	"%table-mention": "Tabela",
	"%table-following": "Gráfico. Mais detalhes na tabela a seguir.",
	/* Session timeout */
	"%st-to-msg-bgn": "Sua sessão expira automaticamente em #min# min #sec# sec.",
	"%st-to-msg-end": "Selecione \"Continuar sessão\" para estender sua sessão.",
	"%st-msgbx-ttl": "Aviso de término da sessão",
	"%st-alrdy-to-msg": "Desculpe, sua sessão já expirou. Por favor, faça novo login.",
	"%st-btn-cont": "Continuar sessão",
	"%st-btn-end": "Terminar sessão agora",
	/* Toggle details */
	"%td-toggle": "Alternar todos",
	"%td-open": "Expandir todos",
	"%td-close": "Ocultar tudo",
	"%td-ttl-open": "Expandir todas as seções do conteúdo",
	"%td-ttl-close": "Ocultar todas as seções do conteúdo",
	/* Table enhancement */
	"%sortAsc": "ativar classificação ascendente",
	"%sortDesc": "ativar para descer tipo",
	"%emptyTbl": "Não há dados disponíveis na tabela",
	"%infoEntr": "Exibindo _START_ a _END_ de _TOTAL_ entradas",
	"%infoEmpty": "Exibindo 0 a 0 de 0 entradas",
	"%infoFilt": "(filtrado de _MAX_ entradas no total)",
	"%info1000": "&#160;",
	"%lenMenu": "Mostrar _MENU_ entradas",
	/* Geomap */
	"%geo-mapcontrol": "Controle de mapa",
	"%geo-zoomin": "Ampliar",
	"%geo-zoomout": "Reduzir",
	"%geo-zoomworld": "Reduzir até o tamanho do mapa",
	"%geo-zoomfeature": "Ampliar elemento",
	"%geo-scaleline": "escala do mapa",
	"%geo-mouseposition": "Latitude e longitude do cursor do mouse",
	"%geo-ariamap": "Objeto do mapa. As descrições das características do mapa estão na tabela abaixo.",
	"%geo-accessibilize": "<strong>Usuários de teclado:</strong> Quando o mapa estiver em foco, use as teclas de seta para mover o mapa e as teclas de mais e de menos para ampliar e reduzir, respectivamente. As teclas de seta não funcionarão quando a imagem estiver reduzida ao tamanho do mapa.",
	"%geo-accessibilizetitle": "Instruções: Como navegar pelo mapa",
	"%geo-togglelayer": "Alternar a exibição da camada",
	"%geo-hiddenlayer": "Esta camada está oculta.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Canadá mapa base (Inglês ou francês)",
	"%geo-select": "Selecionar",
	"%geo-labelselect": "Clicar para selecionar o elemento no mapa",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Versão HTML simplificada",
	"%wb-enable": "Versão padrão",
	/* Template */
	"%tmpl-signin": "Iniciar a sessão"
};

window.i18nObj = ind;

})( window );
