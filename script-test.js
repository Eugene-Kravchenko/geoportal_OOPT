var catarray=['10','1','12','4','11','13'], custom_icon={ '10': '_10', '1': '_1', '12': '_12', '4': '_4', '11': '_11', '13': '_13'}, ncat=6;var cat_layers={};  
var map, layerControl, markgroups={}, markarray=[], size, offset, nmark, url, icon_path; 
        
   function init(){
      map = new L.Map('map').setView(L.latLng(58.45,82.5), 7);
       var osm_l=L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href=\"https://osm.org/copyright\">OpenStreetMap</a> contributors | <a href=\"https://mapicons.nicolasmollet.com\">mapicons</a>'
});


var dgis = L.tileLayer('https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}');

var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: "Map: <a href='https://www.arcgis.com/home/item.html?id=c4ec722a1cd34cf0a23904aadf8923a0'>ArcGIS - World Physical Map</a>"
    });
var gmap = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {subdomains:['mt0','mt1','mt2','mt3']});

var gsat = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {subdomains:['mt0','mt1','mt2','mt3']});


L.TileLayer.Rosreestr=L.TileLayer.extend({options:{tileSize:1024, opacity:0.9},getTileUrl:function(e){var t=this._map,r=t.options.crs,i=this.options.tileSize,o=e.multiplyBy(i),s=o.add([i,i]),l=r.project(t.unproject(o,e.z)),n=r.project(t.unproject(s,e.z)),a=[l.x,n.y,n.x,l.y].join(",");return L.Util.template(this._url,L.extend({s:this._getSubdomain(e),bbox:a},this.options))}}),L.tileLayer.Rosreestr=function(t,r){return r.clickable&&(L.TileLayer.Rosreestr=e(L.TileLayer.Rosreestr)),new L.TileLayer.Rosreestr(t,r)};


pkk5 = new L.tileLayer.Rosreestr('https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreObjects/MapServer/export?layers=show%3A30%2C27%2C24%2C23%2C22&dpi=96&format=PNG32&bbox={bbox}&bboxSR=102100&imageSR=102100&size=1024%2C1024&transparent=true&f=image', {
            subdomains: ['a', 'b', 'c', 'd'],
            zIndex:3
        });

var zouit = new L.tileLayer.Rosreestr('https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONES/MapServer/export?layers=show%3A0&dpi=96&format=PNG32&bbox={bbox}&bboxSR=102100&imageSR=102100&size=1024%2C1024&transparent=true&f=image', {
            subdomains: ['a', 'b', 'c', 'd'],
            zIndex:3
        });

map.options.maxZoom = 18;
map.options.minZoom = 6;
map.addLayer(osm_l);
//map.addLayer(dgis);

   

  var polr= L.tileLayer.wms("https://green.tsu.ru:8443/geoserver/wms?", {
    layers: 'polr2012',
    format: 'image/png',
    transparent: true
    });
    var oopt= L.tileLayer.wms("https://green.tsu.ru:8443/geoserver/wms?", {
    layers: 'zakazniki2014',
    format: 'image/png',
    transparent: true
   });
 
  var pamprir= L.tileLayer.wms("https://green.tsu.ru:8443/geoserver/wms?", {
    layers: 'pamprir2014',
    format: 'image/png',
    transparent: true
   });

   var ecotropa= L.tileLayer.wms("https://green.tsu.ru:8443/geoserver/wms?", {
    layers: 'ecotropa',
    format: 'image/png',
    transparent: true
   });
 
map.addLayer(polr);
map.addLayer(oopt);
map.addLayer(pamprir);
map.addLayer(ecotropa);

var baseMaps = {
        'Open Street Map':osm_l, '2ГИС': dgis,'ESRI (Спутник)':esri, 'Google Maps (Карта)':gmap, 'Google Maps (Спутник)': gsat
        /*,'Google Maps (Дороги)':road_l, 'Google Maps (Спутник)':sat_l, 'Google Maps (Гибрид)':hyb_l, 'Google Maps (Рельеф)':terr_l*/
        };

var overlayMaps = {'Вспомогательные слои': { '<img src ="https://green.tsu.ru:8443/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=32&HEIGHT=32&LAYER=Fires:Raion_TO">Районы':polr, '<img src = "https://green.tsu.ru:8443/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=32&HEIGHT=32&LAYER=Fires:OOPT">Заказники (площади)':oopt, '<img src = "https://green.tsu.ru:8443/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=32&HEIGHT=32&LAYER=TomskGis:pamprir2014">ООПТ (площади)':pamprir,
'<img src = "https://green.tsu.ru:8443/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=32&HEIGHT=32&LAYER=TomskGis:ecotropa">Экотропы':ecotropa,
 '<img src ="https://green.tsu.ru/oopt/cat-icons/cadastre.png">ПКК Росреестр': pkk5, '<img src ="https://green.tsu.ru/oopt/cat-icons/zouit.png">ПКК ЗОУИТ': zouit}};
layerControl = L.control.groupedLayers(baseMaps, overlayMaps, {collapsed: true, groupCheckboxes: true});
  addLayers(0);
 map.addControl(layerControl); 

L.Control.measureControl().addTo(map);

var osmGeocoder = new L.Control.OSMGeocoder({text:'Найти по адресу', position: 'topleft'});
map.addControl(osmGeocoder);

L.control.coordinates({
            position:"bottomleft",
            enableUserInput:false,
            labelTemplateLat:"N {y}",
            labelTemplateLng:": E {x}",
            useLatLngOrder:true,
            useDMS:true,
        }).addTo(map);
        
    L.control.scale({imperial: false}).addTo(map);

map.on('click', onMapClick);     
 
  }

var popup = L.popup();

function ConvertDDToDMS(D, lng){
      var dir = D<0?lng?'W':'S':lng?'E':'N';
      var deg = 0|(D<0?D=-D:D);
      var min =0|D%1*60;
      var sec =Math.round(0|D*60%1*60);
    return ""+deg+"\xB0 "+min+"' "+sec+'" '+dir;
}


function onMapClick(e) {
    var lats = (e.latlng.lat>=0) ? "\xB0N":"\xB0S";
    var lngs = (e.latlng.lng>=0) ? "\xB0E":"\xB0W";
    popup
        .setLatLng(e.latlng)
        .setContent("<b>Координаты точки</b><br/>DD: "+Math.abs(e.latlng.lat.toFixed(6))+lats+", "+Math.abs(e.latlng.lng.toFixed(6))+lngs+"<br/>DMS: "+ConvertDDToDMS(e.latlng.lat, false)+", "+ConvertDDToDMS(e.latlng.lng, true))
        .openOn(map);
}


function setCoordMarker(){

  var form = document.forms.crdFrm;
  var lat_lng = [form.elements.lat.value, form.elements.lng.value];
  var lat_lng_f = [0,0];
  var ss='';

  var j = form.elements.coord.value;
  
  for (var i=0; i<2; i++) {
    lat_lng[i] = lat_lng[i].split(',').join('.');
    ss=lat_lng[i].split("°");
    
    switch (j) {
      case '0':
        lat_lng_f[i] = parseFloat(lat_lng[i]);
        break;
      case '1':
        lat_lng_f[i] = parseFloat(ss[0])+parseFloat(ss[1].split("'")[0])/60+parseFloat(ss[1].split("'")[1])/3600;
        break;
      case '2':
        lat_lng_f[i] = parseFloat(ss[0])+parseFloat(ss[1].split("'")[0])/60;
    }
  }
 
  var marker = L.marker(lat_lng_f).addTo(map);
  map.panTo(lat_lng_f);
}

function checkRBformat (){
    var form = document.forms.crdFrm;
    var lat_lng = [["58,89°","82,78°"],["58° 18' 34''","82° 23' 51''"],["58° 25,67'","82° 30,89'"]];

    var i = parseInt(form.elements.coord.value);

    form.elements.lat.value=lat_lng[i][0];
    form.elements.lng.value=lat_lng[i][1]; 
}


 function addLayers(rkey){
 if (rkey>0) {
 for(var i=0; ncat>i;i++) {
     map.removeLayer(cat_layers[catarray[i]]);
     layerControl.removeLayer(cat_layers[catarray[i]]);
}
}

    for(var i=0;ncat>i;i++) {
        markgroups[catarray[i]]=[];
        }
   addMarkers(rkey);
for(var i=0; ncat>i;i++) {
    cat_layers[catarray[i]]= L.featureGroup(markgroups[catarray[i]]);
    cat_layers[catarray[i]].addTo(map);
    }

   layerControl.addOverlay( cat_layers['10'], '<img src=/oopt/cat-icons/marker_10.png />Ботанические сады', 'Информационные слои');layerControl.addOverlay( cat_layers['1'], '<img src=/oopt/cat-icons/marker_1.png />Государственные природные заказники', 'Информационные слои');layerControl.addOverlay( cat_layers['12'], '<img src=/oopt/cat-icons/marker_12.png />Охраняемые природные ландшафты (ландшафтные парки)', 'Информационные слои');layerControl.addOverlay( cat_layers['4'], '<img src=/oopt/cat-icons/marker_4.png />Памятники природы', 'Информационные слои');layerControl.addOverlay( cat_layers['11'], '<img src=/oopt/cat-icons/marker_11.png />Территории рекреационного назначения', 'Информационные слои');layerControl.addOverlay( cat_layers['13'], '<img src=/oopt/cat-icons/marker_13.png />Экологические тропы и маршруты', 'Информационные слои');   
 
}

   function addMarkers(rkey) {
    if (rkey==0) {createMarkArray();}
 for (var i=0; nmark>i;i++) {
     catn=(markarray[i][0]).toString();
     lat=markarray[i][1];
     lng=markarray[i][2];
     lats=(Math.round(Math.abs(lat)*1000000)/1000000).toString()+((lat>0)?"&degN":"&degS");
     lngs=(Math.round(Math.abs(lng)*1000000)/1000000).toString()+((lng>0)?"&degE":"&degW");
     ll = L.latLng(lat,lng);
     icon = L.icon({iconUrl:icon_path+custom_icon[catn]+'.png', shadowUrl:icon_path+'-shadow.png', iconSize: [32, 37], iconAnchor: [16, 37], popupAnchor: [0, -28]});
     marker_title=markarray[i][4];
     plink='<a href=\''+url+'?p='+markarray[i][3].toString()+'\' target=\'_blank\'>';
     pimage=markarray[i][5];
     if (pimage!='') {pimage='<img src=\''+pimage+'\' width=\'200\'/>';}
    pexcerpt=markarray[i][6];
    if (pexcerpt!='') {pexcerpt='<br><small>'+pexcerpt+'</small>';}
     popupContentHTML=plink+marker_title+'</a><br>Координаты: '+lats+','+lngs+pimage+pexcerpt+'<br>'+plink+'Подробнее</a>';
     marker=addMarker(ll, marker_title, popupContentHTML, icon);
    markgroups[catn].push(marker);
       }
} 

function createMarkArray() {
     markarray=[[4,56.492424395112636, 84.98823881149292,'3417','Михайловская роща','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/20-июля-19-общий-вид-Михайловской-рощи-летом.-300x199.jpg',''],[13,56.21749145212391, 85.01336574554443,'3286','Экологическая тропа «В Ларинском» ландшафтного заказника «Ларинский»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/sZH6g9lTwjQ-300x300.jpg',''],[13,56.23519350842461, 84.97478485107422,'3282','Экологический маршрут «По реке Тугояковке» памятника природы «Звёздный ключ»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/Звездный-2020-006-300x200.jpg',''],[13,56.4231649061846, 84.86763596534729,'3275','Эколого-образовательная прогулочная тропа памятника природы «Кисловский бор (поселение муравьёв)»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/Муравейник2-300x225.jpg',''],[13,56.35292008260058, 85.04831492900848,'3269','Экологическая тропа «Кедровичок» памятника природы «Лучаново-Ипатовский припоселковый кедровник»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/Кедровичок-300x200.jpg',''],[13,56.357618990000496, 85.14464378356934,'3263','Экологическая тропа «Берендеево царство» памятника природы «Богашёвский припоселковый кедровник»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/Берендеево-царство1-300x300.jpg',''],[13,56.45248355049498, 84.94997978210449,'3260','Эколого-туристический маршрут «Лагерный сад»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/Титул-300x200.jpg',''],[13,56.33090984082951, 84.91933822631836,'3257','Экологический маршрут памятника природы «Синий утёс»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/титул-300x200.jpg',''],[13,56.46663950526813, 84.94576334953308,'3253','Экологическая тропа «В Заповедном парке» Сибирского ботанического сада ТГУ','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/20200831_121645-e1605149244406-225x300.jpg',''],[13,56.296586246590536, 85.42093276977539,'3249','Экологический маршрут памятника природы «Таловские чаши»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/Таловские-15-300x300.jpg',''],[13,56.4686427275903, 84.9601399898529,'3241','Учебно-экологическая тропа «Биотопы Томской области» ООПТ «Парк Игуменский»','http://green.tsu.ru/oopt/wp-content/uploads/2020/11/2020-09-03-17-10-22-300x300.jpg',''],[12,57.078813879033284, 88.21884155273436,'2269','Сосновые боры Причетья','http://green.tsu.ru/oopt/wp-content/uploads/2020/01/-new-e1587111953763-300x212.jpg',''],[13,56.49199498792089, 84.98230040073393,'2258','Экотропа в Михайловской роще, 28С','','Маршрутная точка 28С - выход (б) на Комсомольский проспект '],[13,56.49129311880422, 84.98184442520142,'2256','Экотропа в Михайловской роще, 27С','','Маршрутная точка 27С -выход (а) на Комсомольский проспект "Волонтёрский" '],[13,56.491396771178785, 84.98299777507782,'2254','Экотропа в Михайловской роще, 26С','','Маршрутная точка 26С - Путь к выходу из Михайловской рощи  '],[13,56.49109765927017, 84.98290121555328,'2252','Экотропа в Михайловской роще, 25С','','Маршрутная точка 25С -Исток родника Ключевского '],[13,56.49129311880422, 84.98289585113525,'2250','Экотропа в Михайловской роще, 24С','','Маршрутная точка 24С - тропа к роднику Ключевскому (народное название Три Сестры)  '],[13,56.491044351949725, 84.98286366462708,'2248','Экотропа в Михайловской роще, 23С','','Маршрутная точка 23С - выход в сторону бетонной круговой тропы 1 порядка '],[13,56.490499428377646, 84.98278856277466,'2246','Экотропа в Михайловской роще, 22С','','Маршрутная точка 22С - Обзорная точка, тропа вдоль оврага  '],[13,56.49007888418275, 84.98287439346313,'2244','Экотропа в Михайловской роще, 21С','','Маршрутная точка 21С - Арт-поляна (на опушке берёзовой рощи) '],[13,56.490295080020125, 84.98328745365141,'2242','Экотропа в Михайловской роще, 20С','','Маршрутная точка 20С - суходольный луг южной экспозиции и спуск к пойменному оврагу '],[13,56.49040169669183, 84.98360395431519,'2240','Экотропа в Михайловской роще, 19С','','Маршрутная точка 19С - типичная опушка леса на высоком яру над пойменным оврагом '],[13,56.490499428377646, 84.98389899730682,'2238','Экотропа в Михайловской роще, 18С','','Маршрутная точка 18С - кромка (верх) оврага '],[13,56.490996967602, 84.98440325260162,'2236','Экотропа в Михайловской роще, 17С','','Маршрутная точка 17С - Тропа с бетонной дороги вниз на опушку берёзовой рощи  '],[13,56.48999892102667, 84.98579800128937,'2234','Экотропа в Михайловской роще, 16С','','Маршрутная точка 16С - Исток родника" Королёвский" '],[13,56.49040169669183, 84.98559415340424,'2232','Экотропа в Михайловской роще, 15С','','Маршрутная точка 15С - начало лестницы вниз, на перекрёстке тропинок к роднику '],[13,56.49077485268315, 84.9863988161087,'2230','Экотропа в Михайловской роще, 14С','','Маршрутная точка 14С - Вяз "на чём душа держится" '],[13,56.490600121366384, 84.98589992523193,'2228','Экотропа в Михайловской роще, 13С','','Маршрутная точка 13С -Вязовая рощица и тропа к роднику Королёвскому '],[13,56.49099992912547, 84.98599648475647,'2226','Экотропа в Михайловской роще, 12С','','Маршрутная точка 12С - остатки усадьбы купца Михайлова  '],[13,56.490680083255285, 84.98476803302765,'2224','Экотропа в Михайловской роще, 11С','','Маршрутная точка 11С - на пути к усадьбе Михайлова '],[13,56.490795583463935, 84.9858945608139,'2222','Экотропа в Михайловской роще, 10С','','Маршрутная точка 10С -Выход на бетонную тропу 1 порядка между усадьбой купца Михайлова и родником '],[13,56.49173437980676, 84.98503088951111,'2220','Экотропа в Михайловской роще, 9С','','Маршрутная точка 9С - Обзорный вид. "Перекрёсток" '],[13,56.49213713704672, 84.98339474201202,'2218','Экотропа в Михайловской роще, 8С','','Маршрутная точка 8С - Обзорное место '],[13,56.49225263281924, 84.98363614082336,'2216','Экотропа в Михайловской роще, 7С','','Маршрутная точка 7С - Тополь бальзамический '],[13,56.492193404261876, 84.98370051383972,'2213','Экотропа в Михайловской роще, 6С','','Маршрутная точка 6 С - Свитые, скрученные между собой сосны '],[13,56.49239774239394, 84.98330354690552,'2211','Экотропа в Михайловской роще, 5С','','Маршрутная точка 5С - береза для росписи и поросль ясеней '],[13,56.49247770049383, 84.98359322547913,'2209','Экотропа в Михайловской роще, 4С','','Маршрутная точка 4С - высотный геодезический репер,который использовался во времена СССР '],[13,56.493345383110096, 84.98344302177429,'2207','Экотропа в Михайловской роще, 3С','','Маршрутная точка 3С - Заросли дикой яблони (ранетки) '],[13,56.493197315808715, 84.98369514942169,'2205','Экотропа в Михайловской роще, 2С','','Маршрутная точка 2С-"Северная поляна" '],[13,56.49370666489989, 84.98444080352783,'2197','Экотропа в Михайловской роще, 1С','','Маршрутная точка 1С - начало тропы '],[13,56.491826185142116, 84.98461246490479,'2180','Экологическая тропа памятника природы «Михайловская роща»','http://green.tsu.ru/oopt/wp-content/uploads/2019/08/20-июля-19-общий-вид-Михайловской-рощи-летом.-300x199.jpg','Тропа С имени томского краеведа,заслуженного учителя РСФСР Валентина Григорьевича Рудского '],[12,57.397624055000456, 88.7530517578125,'2056','Болотная система Улух-Чаях','http://green.tsu.ru/oopt/wp-content/uploads/2019/02/Болотная-система-УлухЧаях-212x300.jpg',''],[1,59.76746035005358, 81.7218017578125,'467','Польто','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Польто-212x300.jpg',''],[1,56.08966099959167, 84.13330078125,'465','Томский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Томский-1-211x300.jpg',''],[1,57.021673164037196, 87.99293518066405,'463','Южнотаежный','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Южнотаежный-new-211x300.jpg',''],[1,57.669645160717295, 87.82196044921874,'461','Чичка-Юльский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Чичка-юльский-1-212x300.jpg',''],[1,56.79711839361342, 87.75054931640625,'459','Тонгульский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Тонгульский-211x300.jpg',''],[1,57.849866833936524, 82.21893310546875,'457','Поскоевский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Поскоевский-2-212x300.jpg',''],[1,57.29982213299729, 84.30770874023438,'455','Першинский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Першинский-212x300.jpg',''],[1,57.46545041710856, 88.78360748291016,'453','Осетрово-нельмовый','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/-нельмовый-new-e1640587035786-300x212.jpg',''],[1,57.66744178531675, 86.26052856445312,'451','Октябрьский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Октябрьский-2-211x300.jpg',''],[1,58.56252272853734, 78.914794921875,'449','Оглатский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Оглатский-2-210x300.jpg',''],[1,57.2872074875199, 85.37612915039062,'446','Малоюксинский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Мало-Юксинский-1-211x300.jpg',''],[1,56.20746779531319, 85.05168914794922,'444','Ларинский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Ларинский-актуальная-схема-233x300.jpg',''],[1,59.108308258604964, 88.494873046875,'442','Кеть-Касский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/-касский-e1639036308560-216x300.jpg',''],[1,57.74374737648046, 84.254150390625,'440','Карегодский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Карегодский-1-211x300.jpg',''],[1,56.16543539253529, 84.61807250976562,'438','Калтайский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Калтайский-1-214x300.jpg',''],[1,56.74895812546826, 83.82431030273438,'436','Иловский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Иловский-213x300.jpg',''],[1,57.54383895665799, 84.22943115234375,'434','Верхне-Соровский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Верхне-Соровский-178x300.jpg',''],[1,56.60486209416893, 81.0955810546875,'432','Васюганский','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Приложение-2-300x212.jpg',''],[4,56.32643666866059, 84.95607376098631,'295','Коларовские водно-болотные угодья имени С.С. Москвитина','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Коларовские-озера-new-210x300.jpg',''],[4,57.8841972364453, 84.451904296875,'293','Суйгинский лесопарк','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Суйга-new-212x300.jpg',''],[11,56.72786857096676, 84.56451416015625,'269','Петропавловская','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Петропавловская-212x300.jpg',''],[11,56.468346399587915, 84.96015071868896,'267','Парк "Игуменский"','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Игуменский-new-211x300.jpg',''],[11,56.36486980433698, 84.95710372924805,'265','Береговой склон р. Томи между п. Аникино, с. Синий Утес и автодорогой Томск-Коларово','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Береговой-склон-new-212x300.jpg',''],[10,56.45409622031294, 84.99581336975098,'263','Сибирский ботанический сад','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/охранные-зоны-300x212.jpg',''],[4,56.53341186778391, 84.81462478637695,'261','Петровский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Петровский-new-212x300.jpg',''],[4,57.93531250142576, 82.58680343627928,'259','Древостои черного тополя','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Древостои-черного-тополя-new-212x300.jpg',''],[4,57.8947819215352, 82.61787414550781,'257','Остров липы','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/остров-липы-new-212x300.jpg',''],[4,59.44795477036904, 80.44137954711914,'255','Озеро Мундштучное','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Мундштучное-new-212x300.jpg',''],[4,57.49036855478959, 85.75309753417969,'253','Лесопарк у д. Комаровка','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Комаровка-new-1-212x300.jpg',''],[4,59.517602921437295, 80.4037857055664,'251','Белый Яр','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Белый-яр-new-214x300.jpg',''],[4,57.11219858563151, 85.97042083740234,'249','Болотное урочище "Челбак"','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Челбак-new-212x300.jpg',''],[4,57.18985535714817, 85.90827941894531,'247','Болото Ишколь','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Ишколь-new-210x300.jpg',''],[4,57.67194020107353, 83.36245536804199,'245','Прогрессовский пруд','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Прогрессовский-пруд-213x300.jpg',''],[4,59.377463371526304, 80.29237747192383,'243','Тымский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Тымск-new-211x300.jpg',''],[4,58.92901775230976, 81.60309791564941,'241','Лесопарк в с. Нарым','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/лесопарк-в-селе-нарым-211x300.jpg',''],[4,56.34622886171257, 84.96740341186523,'239','Склон с реликтовой растительностью у с. Коларово','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/коларово-new-1-211x300.jpg',''],[4,56.03968507649173, 83.82207870483398,'237','Вороновский Яр и фрагмент степи у с. Вороново','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Вороновский-Яр-new-211x300.jpg',''],[4,55.94893549805954, 83.74826431274413,'235','Реликтовый участок степи у с. Еловка','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Еловка-new-211x300.jpg',''],[4,56.144880084903384, 83.9470911026001,'233','Уртамский Яр и фрагмент степи у с. Уртам','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Уртам-210x300.jpg',''],[4,57.36246018688461, 85.89866638183594,'231','Озеро Тургайское и озеро Щучье','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Тургайское_Щучье-new-210x300.jpg',''],[4,57.74732025691468, 83.40219497680664,'229','Обнажение у села Обское','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Обское-new-212x300.jpg',''],[4,58.731331835818935, 76.6062068939209,'226','Дальний Яр','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/ДальнийЯр-new-212x300.jpg',''],[4,57.50664844839273, 83.85658264160156,'224','Амбарцевские обнажения','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Амбарцевские-обнажения-new-213x300.jpg',''],[4,59.07630074312198, 79.41226959228516,'219','Озеро Окуневое','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Окуневое-new-213x300.jpg',''],[12,60.075589339241716, 79.17915344238281,'217','Озеро Большой Ентарь и верховье р. Пех-Еган','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Большой-ентарь-new-212x300.jpg',''],[4,58.988236526384746, 79.82185363769531,'215','Волков бугор','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Схема-Волков-бугор-2-300x186.jpg',''],[4,59.77152246998897, 85.726318359375,'213','Белоярская грива (верховья р.Лисица)','',''],[4,59.381922562296104, 79.68915939331055,'211','Обнажение Вертикос','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Схема-Вертикосский-яр-300x168.jpg',''],[4,56.622620932500055, 84.17449951171875,'209','Болотный массив у д. Новоуспенка','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/НовоУспенка-new-211x300.jpg',''],[4,57.593781308114394, 83.77667427062988,'207','Озеро Колмахтон','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Колмахтон-new-212x300.jpg',''],[4,56.18340032491241, 85.06404876708984,'205','Маршанциевый ключ','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/1-1-300x183.jpg',''],[4,58.80431809450027, 76.65611743927,'203','Конев Яр','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/КоневЯр-new-211x300.jpg',''],[12,60.10430719690548, 83.20341110229492,'201','Компасский бор','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Компасский-бор-new-212x300.jpg',''],[4,55.7642131648377, 83.5345458984375,'197','Пойменное болото «Симанский бор»','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Симанский-бор-212x300.jpg',''],[11,58.3572514296907, 82.96463012695311,'195','Первое Светлое озеро','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/-new-1-e1587050987617-300x212.jpg',''],[12,57.638234420786176, 83.65779876708984,'193','Майковский лесной парк','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Майковский-new-211x300.jpg',''],[4,56.327269479787255, 84.10205841064453,'191','Киреевский Яр','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Киреевский-Яр-new-212x300.jpg',''],[12,56.84146141472321, 84.55009460449219,'189','Игловский болотный массив','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Игловский-new-211x300.jpg',''],[4,56.11402649987675, 84.98353958129883,'187','Аникин камень','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Аникин-камень-new-212x300.jpg',''],[4,56.98540114322277, 82.5018310546875,'185','Участок Бакчарского водораздельного болота в междуречьи Иксы и Бакчара в 7 км от д.Полынянка','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Схема-Бакчарское-болото-2-300x247.jpg',''],[12,57.61194607809095, 83.50296020507811,'183','Тунгусовский лесопарк','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Тунгусово-new-211x300.jpg',''],[4,57.46969693066552, 85.78262329101562,'181','Озеро Федоткин тол у п.Осколково','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Федоткин-тол-1-300x280.jpg',''],[4,58.07710472542862, 82.83502578735352,'179','Минеральный источник у с.Чажемто','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/1-2-300x216.jpg',''],[4,56.42453555088341, 84.86595153808594,'177','Кисловский бор (поселение муравьев)','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Кисловский-бор-new-300x213.jpg',''],[4,56.837611665741974, 87.19385147094725,'175','Болото Симоновское и Голубичное в окр.д. Симоновки','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/11-300x218.jpg',''],[4,56.29930088538822, 83.4316349029541,'173','Ювалинский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/10/Ювалинский-new-1-211x300.jpg',''],[4,56.736814246955525, 83.56329917907715,'170','Лесной парк у д. Тызырачево','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Тызырачево-new-211x300.jpg',''],[4,56.39666200277857, 85.02482414245604,'168','Писаревский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/кедр3-300x276.jpg',''],[4,56.34014004952999, 85.05409240722655,'166','Лучаново-Ипатовский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Лучаново-Ипатовский-new-212x300.jpg',''],[4,56.50590234816621, 84.64141845703125,'164','Нижне-Сеченовский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Нижне-Сеченовский-new-212x300.jpg',''],[12,56.437729187631454, 84.41036224365234,'162','Лесной парк у д.Лаврово','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Лаврово-new-1-211x300.jpg',''],[4,56.78038218281774, 84.94182586669922,'160','Брасовский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Брасовский-кедровник-300x198.jpg',''],[4,56.46993469065731, 84.94937896728516,'158','Университетская роща','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Схема-Ун-роща-170x300.jpg',''],[4,56.424915287862355, 85.10220050811768,'154','Трубачевский припоселковый лесопарк','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Трубачевский-new-213x300.jpg',''],[4,56.2976459311722, 85.42155504226685,'150','Таловские чаши','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/таловские-чаши-new-1-211x300.jpg',''],[4,56.22025942882301, 84.95075225830078,'148','Вершининский сосновый бор','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Вершининский-new-212x300.jpg',''],[4,56.16543539253529, 84.94766235351562,'142','Лесной парк у с. Яр','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Ярское-new-212x300.jpg',''],[4,56.607507556888976, 85.36840438842773,'137','Припоселковый лесопарк у д. Семилужки','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/19-300x162.jpg',''],[12,56.87721698262444, 86.2675666809082,'135','Припоселковый лесопарк у села Семеновка','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Семеновка-new-300x211.jpg',''],[12,56.776432100320186, 86.99764251708984,'133','Припоселковый лесопарк у с. Окунеево','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Окунеево-new-211x300.jpg',''],[12,56.62509989305871, 85.1469612121582,'131','Конининский припоселковый лесопарк','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Конинино-new-213x300.jpg',''],[12,58.914751112171736, 81.65760040283203,'127','Болотно-лесной массив у с. Нарым','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Нарым-new-300x212.jpg',''],[4,56.416560198433906, 85.1557159423828,'125','Протопоповский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/протопоповский-new-212x300.jpg',''],[4,56.520014716873284, 84.72965240478516,'119','Зоркальцевский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Зоркальцевский-new-212x300.jpg',''],[4,56.59484544959666, 84.64605331420898,'117','Губинский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Космо-Губинский-1-300x229.jpg',''],[4,56.3796999607553, 85.25167465209961,'110','Плотниковский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Плотниковский-new-209x300.jpg',''],[4,56.33176634591226, 85.27450561523438,'108','Петуховский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Петуховский-new-210x300.jpg',''],[4,56.458412146851586, 84.88088607788086,'104','Озеро Песчаное','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Песчаное-new-211x300.jpg',''],[4,56.33095742494948, 84.92131233215332,'100','Синий Утес','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Синий-утес-new-212x300.jpg',''],[4,56.375184979370644, 85.09275913238525,'88','Магадаевский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Магадаевский-new-212x300.jpg',''],[4,56.38606755124684, 85.14241218566895,'83','Лоскутовский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Лоскутовский-new-210x300.jpg',''],[4,57.06500359552304, 85.93025207519531,'81','Лиственничное урочище','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Лиственное-урочище-new-211x300.jpg',''],[4,56.46495624267281, 85.05460739135742,'79','Куташевский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Рисунок1-300x229.jpg',''],[4,56.23330917712916, 84.9816083908081,'74','Звездный ключ','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Звездный-ключ-new-213x300.jpg',''],[12,56.482591232591915, 85.18987655639648,'71','Корниловский припоселковый лесопарк','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Корнилово-new-212x300.jpg',''],[4,56.451345154112786, 84.95023727416992,'69','Классические геологические обнажения под Лагерным садом на правом берегу р. Томи','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Лагерный-сад-new-212x300.jpg',''],[4,56.59392397391216, 85.07941246032713,'65','Каспаранский Яр','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/КаспаранскийЯр-new-212x300.jpg',''],[12,56.340948775861726, 85.22807121276855,'63','Вороновский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Вороновский-new-211x300.jpg',''],[4,56.47614498201882, 85.24635314941406,'61','Бражкинский припоселковый лесопарк','',''],[4,56.357452561679324, 85.15331268310547,'55','Богашевский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Богашевский-new-211x300.jpg',''],[4,56.31082404675251, 85.1718521118164,'53','Белоусовский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Белоусовский-new-212x300.jpg',''],[4,56.41769963687874, 84.97976303100585,'47','Басандайский лесопарк у д.Аникино','',''],[4,55.745086295331475, 83.33095550537108,'45','Базойский кедрово-болотный комплекс','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Базойский-new-214x300.jpg',''],[4,56.319202344862056, 85.12773513793944,'42','Аксеновский припоселковый кедровник','http://green.tsu.ru/oopt/wp-content/uploads/2014/09/Аксеновский-new-212x300.jpg','']]; nmark=146;url='https://green.tsu.ru/oopt/';icon_path='/oopt/cat-icons/marker'; //size = new L.Point(32,37);
 //offset = new L.Point(size.x/2, size.y-1);
 
}

    function addMarker(ll, marker_title, popupContentHTML, c_icon) {       
      var marker =L.marker(ll,{icon: c_icon, title: marker_title});
        marker.bindPopup(popupContentHTML);
     return marker;
    }
    
    init();

    

    var dialContent="<form name='crdFrm'><p><input type='radio' name='coord' value='0' onchange='checkRBformat()'>Градусы с десятичными долями</input><br/><input type='radio' name='coord' value='1' checked onchange='checkRBformat()'>Градусы, минуты, секунды</input><br/><input type='radio' name='coord' value='2' onchange='checkRBformat()'>Градусы, минуты с десятичными долями</input></p><p>Широта: <input type='text' name='lat' value=\"58° 18' 34''\"></input><br/><br/>Долгота: <input type='text' name='lng' value=\"82° 23' 51''\"></input></p></form><p align='right'><button onclick='setCoordMarker();'>Добавить маркер</button>  <button onclick='dialog.close();'>Закрыть</button></p>";

    var dialog = L.control.dialog({initOpen: false, anchor: [0,30], size:[350,250]}).setContent(dialContent).addTo(map);
    dialog.hideResize();

    L.easyButton({states:[{icon: 'fa-crosshairs fa-lg', title: 'Добавить маркер по координатам', onClick: function(btn,map){dialog.open();}}]}).addTo(map);

    //if (L.Browser.mobile) {
    /*
    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("Вы в радиусе " + Math.round(radius) + " м от этой точки").openPopup();

    }

    function onLocationError(e) {
        alert(e.message);
    }
*/
var glmarker=false;
    function onAccuratePositionFound (e) {
    //  var message = 'Most accurate position found (Accuracy: ' + e.accuracy + ')';
    //  addStatus(message, 'done');
      map.setView(e.latlng, 16);
      glmarker=L.marker(e.latlng);
      glmarker.addTo(map);
    }

    map.on('accuratepositionfound', onAccuratePositionFound);
    
    function getLocationLeaflet() {
    /*
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
        map.locate({setView: true, maxZoom: 16});
        */
        if (glmarker) {
        glmarker.remove();}
        map.findAccuratePosition({maxWait: 15000, desiredAccuracy: 20 });
    }

//    L.easyButton({states:[{icon: '<span class="target">&target;</span>', title: 'Геолокация', onClick: function(btn,map){getLocationLeaflet();}}]}).addTo(map);
    L.easyButton({states:[{icon: 'fa-map-marker fa-lg', title: 'Геолокация',onClick: function(btn, map){getLocationLeaflet();}}]}).addTo(map);
    
//}

   // L.browserPrint().addTo(map);