
// var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var Jawg_Light = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	minZoom: 0,
// 	maxZoom: 22,
// 	subdomains: 'abcd',
// 	accessToken: '<your accessToken>'
// }).addTo(map);\

let oopt_Oil =`
<table class="iksweb">
	<tbody>
		<tr class='table_head'>
			<td>Компонент
природной
среды</td>
			<td>Показатели мониторинга земель по компонентам
природной среды</td>
			<td>Значение</td>
			<td>Единица
измерения</td>
		</tr>
		<tr>
			<td rowspan="3">Земля</td>
			<td>Площадь нарушенных земель</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Площадь земель, загрязненных нефтью,
нефтепродуктами, подтоварной водой</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Содержание загрязняющих веществ и параметров в
пробах почв в границах лицензионных участков недр</td>
			<td></td>
			<td>мг/кг</td>
		</tr>
		<tr>
			<td>Воздух</td>
			<td>Показатели содержания загрязняющих веществ в
атмосферном воздухе на участках распределенного
фонда недр (среднее значение)</td>
			<td></td>
			<td>мг/м3</td>
		</tr>
		<tr>
			<td>Животный мир</td>
			<td>Кол-во представителей животного мира, занесенных
в Красные книги</td>
			<td></td>
			<td>шт</td>
		</tr>
		<tr>
			<td>Растительный
мир</td>
			<td>Нарушенность растительного покрова</td>
			<td></td>
			<td>%</td>
		</tr>
		<tr>
			<td>Вода</td>
			<td>Среднее содержание загрязняющих веществ и
параметров в поверхностных водах на территории
лицензионных участков недр</td>
			<td></td>
			<td>мг/дм3</td>
		</tr>
	</tbody>
</table>
`
let oopt_Les = `
<table class="iksweb table table-bordered">
	<tbody>
		<tr class='table_head'>
			<td>Компонент
природной
среды</td>
			<td>Показатели мониторинга земель по компонентам
природной среды</td>
			<td>Значение</td>
			<td>Единица
измерения</td>
		</tr>
		<tr>
			<td rowspan="3">Земля</td>
			<td>Площадь земель, на которых распространены
негативные процессы</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Земли под дорогами</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Площадь лесов с погибшими лесными культурами,
тыс. га</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Воздух</td>
			<td>Выбросы загрязняющих веществ в атмосферу от
передвижных источников</td>
			<td></td>
			<td>тыс. т.</td>
		</tr>
		<tr>
			<td>Животный мир</td>
			<td>Количество видов животного мира, ед.</td>
			<td></td>
			<td>шт.</td>
		</tr>
		<tr>
			<td>Растительный
мир</td>
			<td>Распределение площади, покрытой лесной
			растительностью, по полноте древостоев</td>
			<td></td>
			<td>%</td>
		</tr>
		<tr>
			<td>Вода</td>
			<td>Среднее содержание загрязняющих веществ и
			параметров в донных отложениях</td>
			<td></td>
			<td>мг/дм3</td>
		</tr>
	</tbody>
</table>
`
let oopt_Selskoe = `
 <table class="iksweb table table-bordered">
<tbody>
	<tr class='table_head'>
		<td>Компонент
природной
среды</td>
		<td>Показатели мониторинга земель по компонентам
природной среды</td>
		<td>Значение</td>
		<td>Единица
измерения</td>
	</tr>
	<tr>
		<td rowspan="3">Земля</td>
		<td>Площадь с/х угодий</td>
		<td></td>
		<td>тыс. га</td>
	</tr>
	<tr>
		<td>Земли под оленьими пастбищами</td>
		<td></td>
		<td>тыс. га</td>
	</tr>
	<tr>
		<td>Площадь нарушенных земель</td>
		<td></td>
		<td>тыс. га</td>
	</tr>
	<tr>
		<td>Воздух</td>
		<td>Среднее содержание загрязняющих веществ
снежного покрова</td>
		<td></td>
		<td>мг/м3</td>
	</tr>
	<tr>
		<td>Животный мир</td>
		<td>Количество видов животного мира, ед.</td>
		<td></td>
		<td>шт.</td>
	</tr>
	<tr>
		<td>Растительный
мир</td>
		<td>Количественный показатель видов, занесенных в
Красные книги, растительный мир, шт</td>
		<td></td>
		<td>%</td>
	</tr>
	<tr>
	<td>Вода</td>
	<td>Удельный комбинаторный индекс загрязненности
	воды</td>
	<td></td>
	<td>безразмерный</td>
</tr>
</tbody>
</table>
`
let oopt_Smeshanie = `
<table class="iksweb table table-bordered">
	<tbody>
		<tr class='table_head'>
			<td>Компонент
природной
среды</td>
			<td>Показатели мониторинга земель по компонентам
природной среды</td>
			<td>Значение</td>
			<td>Единица
измерения</td>
		</tr>
		<tr>
			<td rowspan="3">Земля</td>
			<td>Площадь нарушенных земель
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Площадь земель, загрязненных нефтью,  нефтепродуктами, подтоварной водой
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Содержание загрязняющих веществ и параметров в пробах почв в границах лицензионных участков недр
</td>
			<td></td>
			<td>мг/кг
</td>
		</tr>
		<tr>
			<td>Воздух</td>
			<td>Показатели содержания загрязняющих веществ в атмосферном воздухе на участках распределенного фонда недр (среднее значение)</td>
			<td></td>
			<td>мг/м3
</td>
		</tr>
		<tr>
			<td>Животный мир</td>
			<td>Кол-во представителей животного мира, занесенных в Красные книги
</td>
			<td></td>
			<td>шт.</td>
		</tr>
		<tr>
			<td>Растительный
мир</td>
			<td>Нарушенность растительного покрова</td>
			<td></td>
			<td>%</td>
		</tr>
		<tr>
			<td>Вода</td>
			<td>Среднее содержание загрязняющих веществ и параметров в поверхностных водах на территории лицензионных участков недр</td>
			<td></td>
			<td>мг/дм3</td>
		</tr>
	</tbody>
</table>
`
let oopt_Recreation = `
<table class="iksweb table table-bordered">
	<tbody>
		<tr class='table_head'>
			<td>Компонент
природной
среды</td>
			<td>Показатели мониторинга земель по компонентам
природной среды</td>
			<td>Значение</td>
			<td>Единица
измерения</td>
		</tr>
		<tr>
			<td rowspan="3">Земля</td>
			<td>Земли под водой, включая болота
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Площадь пожаров
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Прочие земли (полигоны отходов, свалки, пески, овраги и другие земли)
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Воздух</td>
			<td>Среднее содержание загрязняющих веществ в пробах снежного покрова
</td>
			<td></td>
			<td>мг/м3
</td>
		</tr>
		<tr>
			<td>Животный мир</td>
			<td>Количество видов животного мира, ед.
</td>
			<td></td>
			<td>шт.</td>
		</tr>
		<tr>
			<td>Растительный
мир</td>
			<td>Количественный показатель видов, занесенных в Красные книги, растительный мир, шт
</td>
			<td></td>
			<td>%</td>
		</tr>


		<tr>
			<td>Вода</td>
			<td>Удельный комбинаторный индекс загрязненности воды</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
	</tbody>
</table>
`
let oopt_Selitebnie = `
<table class="iksweb table table-bordered">
	<tbody>
		<tr class='table_head'>
			<td>Компонент
природной
среды</td>
			<td>Показатели мониторинга земель по компонентам
природной среды</td>
			<td>Значение</td>
			<td>Единица
измерения</td>
		</tr>
		<tr>
			<td rowspan="3">Земля</td>
			<td>Потери лесопокрытой площади (динамика)
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Земли застройки (динамика)
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Суммарный показатель загрязнения почвы
</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
		<tr>
			<td>Воздух</td>
			<td>Среднее содержание загрязняющих веществ в пробах снежного покрова
</td>
			<td></td>
			<td>мг/м3
</td>
		</tr>
		<tr>
			<td>Животный мир</td>
			<td>Индекс редких видов животных
</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
		<tr>
			<td>Растительный
мир</td>
			<td>Индекс редких видов растений
</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
		<tr>
			<td>Вода</td>
			<td>Удельный комбинаторный индекс загрязненности воды</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
	</tbody>
</table>
`
let oopt_Zapovednie = `
<table class="iksweb table table-bordered">
	<tbody>
		<tr class='table_head'>
			<td>Компонент
природной
среды</td>
			<td>Показатели мониторинга земель по компонентам
природной среды</td>
			<td>Значение</td>
			<td>Единица
измерения</td>
		</tr>
		<tr>
			<td rowspan="3">Земля</td>
			<td>Потери лесопокрытой площади (динамика)
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Земли застройки (динамика)
</td>
			<td></td>
			<td>тыс. га</td>
		</tr>
		<tr>
			<td>Суммарный показатель загрязнения почвы
</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
		<tr>
			<td>Воздух</td>
			<td>Среднее содержание загрязняющих веществ в пробах снежного покрова
</td>
			<td></td>
			<td>мг/м3
</td>
		</tr>
		<tr>
			<td>Животный мир</td>
			<td>Индекс редких видов животных
</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
		<tr>
			<td>Растительный
мир</td>
			<td>Индекс редких видов растений
</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
		<tr>
			<td>Вода</td>
			<td>Удельный комбинаторный индекс загрязненности воды</td>
			<td></td>
			<td>безразмерный</td>
		</tr>
	</tbody>
</table>
`
let map = L.map('map', { zoomControl: false }).setView([62.8, 68.09], 5.3);

let CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
let Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

let OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

let OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.control.zoom({
	position: 'topright'
}).addTo(map);

function getColor(dd) {
	return dd == 'Заповедный' ? 'rgb(167, 198, 5, 0.5)' :
				 dd == 'ООПТ с лесопромышленным комплексом'  ? 'rgb(38, 151, 45, 0.5)' :
				 dd == 'ООПТ с нефтегазовым освоением'  ? 'rgb(181, 75, 214, 0.5)' :
				 dd == 'ООПТ с сельскохозяйственной деятельностью'  ? 'rgb(165, 174, 45, 0.5)' :
				 dd == 'ООПТ с традиционным природопользованием'  ? 'rgb(253, 127, 111, 0.5)' :
				 dd == 'Рекреационные'  ? 'rgb(52, 198, 205, 0.5)' :
				 dd == 'Селитебные'  ? 'rgb(215, 132, 21, 0.5)' :
				 dd == 'Смешанные'  ? 'rgb(210, 248, 112, 0.5)' :
										'#d7191c';
}
function getColor2(ddd) {
	return ddd == 'Непроизводственный' ? '#333' :
				 ddd == 'Производственный'  ? '#A60000' :
										'#d7191c';
}
function testIF(dddd) {
	return dddd == 'hi'
}

let legend = L.control({ position: "bottomleft" });
legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Легенда</h4>";
	div.innerHTML += '<u><div style="padding-bottom: 10px">Типы ООПТ: </div></u>';
	div.innerHTML += '<i style="border: 1px solid #333;"></i><span>Непроизводственные ООПТ</span><br>';
  div.innerHTML += '<i style="border: 1px solid #A60000;"></i><span>Производственные ООПТ</span><br>';
	div.innerHTML += '<u><div style="padding-bottom: 10px">Виды ООПТ: </div></u>';
  div.innerHTML += '<i style="background: #D78415; border: 1px solid #333;"></i><span>Городские</span><br>';
  div.innerHTML += '<i style="background: #34C6CD; border: 1px solid #333;"></i><span>Рекреационные</span><br>';
  div.innerHTML += '<i style="background: #FD7F6F; border: 1px solid #333;"></i><span>ООПТ с традиционным природопользованием</span><br>';
  div.innerHTML += '<i style="background: #A7C605; border: 1px solid #333;"></i><span>Заповедный</span><br>';
  div.innerHTML += '<i style="background: #b54bd6; border: 1.35px solid #A60000;"></i><span>ООПТ с нефтегазовым освоением </span><br>';
	div.innerHTML += '<i style="background: #26972D; border: 1.35px solid #A60000;"></i><span>ООПТ с лесопромышленным комплексом </span><br>';
  div.innerHTML += '<i style="background: #A5AE2D; border: 1.35px solid #A60000;"></i><span>ООПТ с сельскохозяйственной деятельностью</span><br>';
  div.innerHTML += '<i style="background: #D2F870; border: 1.35px solid #A60000;"></i><span>Смешанные</span><br>';
  // div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  return div;
};
legend.addTo(map);

const customPopupProps = {keepInView: true} //центрируется на попапе


/*OOPT -------------------------------------*/ 
const OOPT_URL = 'oopt3.geojson'
let OOPTdata = false
let filters = {}

fetch(OOPT_URL, {
	method: 'GET'
})

.then(response =>{
	return response.json()
})
.then(json => {
	// json.features.forEach(feature=> {
	// 	$('#info').append(`<option value="${feature.properties.name}">${feature.properties.name}</option>`)
	// })
	console.log(json)
	
	OOPTdata = L.geoJSON(json, {
		style: (feature) => {
			return {
				fillColor: getColor(feature.properties._type_2),
				weight: 1.3,
				opacity: 0.7,

				color: getColor2(feature.properties._type_1),
				fillOpacity: 1
			}
		},
	
		onEachFeature: (feature, layer) => {
			let result;
			if(feature.properties._type_2 == "ООПТ с нефтегазовым освоением") {
				result = oopt_Oil
			}
			if(feature.properties._type_2 == "ООПТ с лесопромышленным комплексом") {
				result = oopt_Les
			}
			if(feature.properties._type_2 == "ООПТ с сельскохозяйственной деятельностью") {
				result = oopt_Selskoe
			} 
			if(feature.properties._type_2 == "Смешанные") {
				result = oopt_Smeshanie
			}
			if(feature.properties._type_2 == "Рекреационные") {
				result = oopt_Recreation
			} 
			if(feature.properties._type_2 == "Селитебные") {
				result = oopt_Selitebnie
			}
			if(feature.properties._type_2 == "Заповедный") {
				result = oopt_Zapovednie
			}			
		
			layer
			.bindPopup (`
			<div class="customPopup">
				<ul class="tabs-example" data-tabs>
					<li><a data-tabby-default href="#sukiennice">Основная информация</a></li>
					<li><a href="#town-hall-tower">Показатели мониторинга</a></li>
					<li><a href="#town-hall-ocenkar">Оценка состояния ООПТ</a></li>
				</ul>
				<div id="sukiennice">
					<figure style = "text-align:  center"><img src="${feature.properties.photo_url}"></figure>
					<div style = "text-align:  center"><strong>${feature.properties.name}</strong></div>  
					<hr> 
					<div><strong> Тип ООПТ: </strong>${feature.properties._type_1}</div>
					<div><strong> Вид ООПТ: </strong>${feature.properties._type_2}</div>
					<div><strong> Категория ООПТ: </strong>${feature.properties._category}</div>
					<div><strong> Значение ООПТ: </strong>${feature.properties._prop}</div>
					<div><strong> Площадь: </strong>${feature.properties._square_ga} га</div>
					<div><strong> Муниципальное образование: </strong>${feature.properties.Лист8_Field3}</div>
					<div><strong> Основные объекты охраны: </strong> ${feature.properties.Лист8_Field4}  </div>
					<div><strong> Орган, осуществляющий управление ООПТ: </strong> ${feature.properties.Лист8_Field5}  </div>
				</div>
			
				<div id="town-hall-tower">
				<div>
					${result}
				</div>
				</div>

				<div id="town-hall-ocenkar">
				<div>
				</div>
				</div>

			</div>`)			
		}
		
	}, customPopupProps)
	.on("click", runTabs)
	.addTo(map)  
	// убрал

	// L.Control.geocoder().addTo(map);
})
.catch(err=> {
	console.log('errorr'+err)
})
/*----------------------------------------------------------*/ 








/*---------ADM ---------------------------------------------*/ 
const adm_url = 'adm.geojson'
let adm = false
let filters1 = {}
fetch(adm_url, {
	method: 'GET'
})

.then(response =>{
	return response.json()
})

.then(json => {
	json.features.forEach(feature=> {
		$('#info').append(`<option value="${feature.properties.name}">${feature.properties.name}</option>`)
	})
	console.log(json)
	adm = L.geoJSON(json, {
		style: (feature) => {
			return {
				// fillColor: getColor(feature.properties.year_int),
				weight: 1.5,
				opacity: 1,
				color: 'grey',
				dashArray: '0',
				fill: 0,
			}
		},
		onEachFeature: (feature, layer) => {
			// get max and min 
			if (feature.properties.year_int < min || min ===0) {
				min = feature.properties.year_int
			}
			if (feature.properties.year_int > max) {
				max = feature.properties.year_int
			}
		}
	}).addTo(map)
})

.catch(err=> {
	console.log('errorr'+err)
})
/*----------------------------------------------------------*/ 









/*--------ADM_IN -------------------------------------------*/ 
const adm_in_url = 'adm_in.geojson'
let adm_in = false
let min2 = 0
let max2 = 0
let filters2 = {}
fetch(adm_in_url, {
	method: 'GET'
})

.then(response =>{
	return response.json()
})

.then(json => {
	console.log(json)
	adm_in = L.geoJSON(json, {
		style: (feature) => {
			return {
				// fillColor: getColor(feature.properties.year_int),
				weight: 1,
				opacity: 1,
				color: 'grey',
				dashArray: '3',
				fill: 0,
			}
		},
	}).addTo(map)
})

.catch(err=> {
	console.log('errorr'+err)
})
/*----------------------------------------------------------*/ 


let baseMaps = {
	"Светлая тема": CartoDB_Positron,
	"Космоснимок": Esri_WorldImagery,
	"OpenStreetMap": OpenStreetMap_Mapnik,
	"OpenTopoMap": OpenTopoMap,
};

L.control.layers(baseMaps).addTo(map);



let layerControl
layerControl = L.control.groupedLayers(baseMaps, OOPTdata, {collapsed: true, groupCheckboxes: true});
//   addLayers(0);
//  map.addControl(layerControl); 

//  L.Control.measureControl().addTo(map);

//  var osmGeocoder = new L.Control.OSMGeocoder({text:'Найти по адресу', position: 'topleft'});
// map.addControl(osmGeocoder);

// L.control.coordinates({
//             position:"bottomleft",
//             enableUserInput:false,
//             labelTemplateLat:"N {y}",
//             labelTemplateLng:": E {x}",
//             useLatLngOrder:true,
//             useDMS:true,
//         }).addTo(map);
        
//     L.control.scale({imperial: false}).addTo(map);

// map.on('click', onMapClick); 









// let legend = L.control({position: 'bottomleft'});

// legend.onAdd = function (map) {

// 	var div = L.DomUtil.create('div', 'info legend'),
// 			grades = ['Производственные','Непроизводственные'],
// 			labels = [];

// 	// loop through our density intervals and generate a label with a colored square for each interval
// 	for (var i = 0; i < grades.length; i++) {
// 			div.innerHTML +=
// 					'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
// 					grades[i] + (grades[i + 1] ? '' + '<br>' : '');
// 	}

// 	return div;
// };

// legend.addTo(map);

// МАСШТАБ

L.control
  .scale({
    imperial: false,
  })
  .addTo(map);


$('.legend-btn').on('click', function(e) {  // находим legend-btn и когда выполнится клик то вы выполняем функцию
	e.preventDefault()
	console.log(e)
	$('.legend').toggleClass('legend-active');
})

$('.popup-btn').on('click', function(e) { 
	// e.preventDefault()
	console.log(e)
	// $('.leaflet-popup-content-wrapper').toggleClass('popup-active');
})
// из библиотеки с переключением вкладок
function runTabs() {
	console.log(runTabs)
  const tabs = new Tabby("[data-tabs]");
	console.log(tabs)
}

