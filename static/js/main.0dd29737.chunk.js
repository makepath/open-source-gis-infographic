(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){"use strict";(function(e){var o=t(0),r=t.n(o),n=t(6),s=t(11);Object(n.setConfig)({logLevel:"debug"}),a.a=Object(n.hot)(e)((function(){return r.a.createElement(s.a,null)}))}).call(this,t(17)(e))},,function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var o=t(0),r=t.n(o),n=t(1),s=t(2),i=t(4),l=t(3),c=t(5),p=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.first,n=e.side,s=e.last,i=t(18),l=t(19)("./".concat("right"!==n?"Right":"Left","-Snake.svg")),c=t(22)("./".concat("right"!==n?"Right":"Left","-Head.svg"));return r.a.createElement(o.Fragment,null,a?r.a.createElement("div",{style:{backgroundImage:"url(".concat(i)},className:"snake-tail"}):null,r.a.createElement("div",{style:{backgroundImage:"url(".concat(l)},className:"snake-body ".concat(n)}),s?r.a.createElement("div",{style:{backgroundImage:"url(".concat(c)},className:"snake-head ".concat(n)}):null)}}]),a}(o.Component),d=function(e){function a(){var e,t;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).getOffsets=function(e,a){var o=e.getBoundingClientRect(),r=window.pageYOffset||document.documentElement.scrollTop;if(!e.classList.contains("tool"))return t.getOffsets(e.parentElement,a);var n=o.top+r,s=e.getElementsByTagName("h3")[0];return{offsetTop:n,offsetHorizontal:"left"===a?s.offsetLeft:o.width-s.offsetLeft-s.offsetWidth}},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.side,o=a.name,n=a.category,s=a.releaseYear,i=a.first,l=a.last,c=a.openPopup,d=a.selected;return r.a.createElement("div",{className:"home-tool"},r.a.createElement("div",{className:"tool ".concat(t," ").concat(n).concat(d?" selected":""),onClick:function(a){return c(o,t,e.getOffsets(a.target,t),l)}},"left"===t?r.a.createElement("div",{className:"text left"},r.a.createElement("h3",null,s),r.a.createElement("h2",null,o)):r.a.createElement("div",{className:"text right"},r.a.createElement("h2",null,o),r.a.createElement("h3",null,s))),r.a.createElement(p,{side:t,first:i,last:l}))}}]),a}(o.Component),g=t(10),u=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.open,t=e.side,o=e.offsetTop,n=e.offsetHorizontal,s=e.name,i=e.url,l=e.description,c=e.releaseYear,p=e.language,d=e.creators,u=e.developerQuote,m=e.closePopup,h={top:o,left:"left"===t?n:"unset",right:"right"===t?n:"unset"};return r.a.createElement(g.a.div,{className:"popup-wrapper ".concat(t),style:h,initial:"hidden",animate:a?"visible":"hidden",transition:{type:"spring",damping:50,stiffness:500},variants:{hidden:{opacity:0,scale:.5,transitionEnd:{display:"none"}},visible:{opacity:1,scale:1,display:"block"}}},r.a.createElement("button",{className:"close",onClick:m}),r.a.createElement("span",{className:"box"}),r.a.createElement("div",{className:"tool-popup"},r.a.createElement("div",{className:"content"},r.a.createElement("a",{href:i,target:s},r.a.createElement("h2",null,s)),r.a.createElement("p",null,l),r.a.createElement("span",null,r.a.createElement("h4",null,"Date Started:"),r.a.createElement("h5",null,c)),r.a.createElement("span",null,r.a.createElement("h4",null,"Language(s):"),r.a.createElement("h5",null,p)),r.a.createElement("span",null,r.a.createElement("h4",null,"Creator(s):"),r.a.createElement("h5",null,d)),u?r.a.createElement("span",null,r.a.createElement("i",null,u)):null)))}}]),a}(o.Component),m=function(e){function a(e){var o;return Object(n.a)(this,a),(o=Object(i.a)(this,Object(l.a)(a).call(this,e))).handleOpenPopup=function(e,a,t,r){e===o.state.selectedTool&&o.state.popupOpen?o.hanldeClosePopup():o.state.popupOpen?(o.hanldeClosePopup(),window.setTimeout((function(){o.setState({popupOpen:!0,paddingBottom:r,selectedTool:e,selectedToolSide:a,popupOffsetTop:t.offsetTop,offsetHorizontal:t.offsetHorizontal})}),400)):(o.setState({popupOpen:!0,paddingBottom:r,selectedTool:e,selectedToolSide:a,popupOffsetTop:t.offsetTop,offsetHorizontal:t.offsetHorizontal}),window.setTimeout((function(){}),10))},o.hanldeClosePopup=function(){o.setState({popupOpen:!1})},o.state={tools:t(25),popupOpen:!1,paddingBottom:!1,selectedTool:null,selectedToolSide:null,popupOffsetTop:null,offsetHorizontal:null},o}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.tools,o=a.popupOpen,n=a.paddingBottom,s=a.selectedTool,i=a.selectedToolSide,l=a.popupOffsetTop,c=a.offsetHorizontal,p=s?t.filter((function(e){return e.name===s}))[0]:null;return r.a.createElement("div",{className:"home-info-graphic"},r.a.createElement("a",{id:"github-fork-me",href:"https://github.com/makepath/open-source-gis-infographic",target:"#blank"},r.a.createElement("img",{loading:"lazy",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",class:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})),r.a.createElement("header",null,r.a.createElement("h2",null,"make",r.a.createElement("span",null,"path")),r.a.createElement("p",null,"Spatial Data Science. Your Way.")),r.a.createElement("main",null,r.a.createElement("h1",null,"A History of",r.a.createElement("br",null)," Open Source GIS Tools"),r.a.createElement("h3",null,"Click on the name of the tool to learn more about it."),r.a.createElement("div",{className:"categories"},r.a.createElement("h4",null,"Category"),r.a.createElement("span",{className:"vector"},"Vector"),r.a.createElement("span",{className:"raster"},"Raster"),r.a.createElement("span",{className:"both"},"Both"),r.a.createElement("span",{className:"other"},"Other"))),r.a.createElement("div",{className:"tools",style:o&&n?{paddingBottom:"20rem"}:{transition:"0.5s ease-in-out"}},t.map((function(a,n){return r.a.createElement(d,{key:"".concat(a.name,"-").concat(a.releaseYear),name:a.name,category:a.category,releaseYear:a.releaseYear,side:n%2===0?"left":"right",first:0===n,last:n===t.length-1,openPopup:e.handleOpenPopup,selected:a.name===s&&o})})),r.a.createElement(u,Object.assign({open:o,side:i},p,{offsetTop:l,offsetHorizontal:c,closePopup:this.hanldeClosePopup}))),r.a.createElement("footer",null,r.a.createElement("h2",null,"make",r.a.createElement("span",null,"path")),r.a.createElement("p",null,"Spatial Data Science. Your Way.")))}}]),a}(o.Component);function h(e){e.children;return r.a.createElement("div",{className:"home-app"},r.a.createElement(m,null))}},function(e,a,t){e.exports=t(29)},,,,,,function(e,a,t){e.exports=t.p+"static/media/Right-Tail.10753814.svg"},function(e,a,t){var o={"./Left-Snake.svg":20,"./Right-Snake.svg":21};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(o,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id=19},function(e,a,t){e.exports=t.p+"static/media/Left-Snake.7f09dcf8.svg"},function(e,a,t){e.exports=t.p+"static/media/Right-Snake.c57a708b.svg"},function(e,a,t){var o={"./Left-Head.svg":23,"./Right-Head.svg":24};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(o,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id=22},function(e,a,t){e.exports=t.p+"static/media/Left-Head.4baba7df.svg"},function(e,a,t){e.exports=t.p+"static/media/Right-Head.b01fa118.svg"},function(e){e.exports=JSON.parse('[{"name":"GRASS","url":"https://grass.osgeo.org/","category":"both","image":"https://gisgeography.com/wp-content/uploads/2016/07/GRASS-GIS-logo-2.png","description":"GRASS (Geographic Resources Analysis Support System) started out as a land management and environmental planning tool for the U.S. military. Since then it has become a popular tool for geospatial analysis and visualizations.","releaseYear":"1982","language":"C, C++, Python","creators":"U.S. Army Construction Engineering Research Laboratories","developerQuote":""},{"name":"HDF","url":"https://www.hdfgroup.org/","category":"raster","image":"https://www.esipfed.org/wp-content/uploads/2014/05/logo_bluegreen_txt.jpg","description":"HDF (Hierarchical Data Format) is a file system that is relatively flexible and useful for high performance computing and storing large amounts of data. It is useful for scientific data analysis, particularly for climatology which heavily relies on HDF as its primary container for storing data.","releaseYear":"1988","language":"N/A","creators":"Tim Krauskopf, Gaige B. Paulsen, The HDF Group","developerQuote":"\\"People don\u2019t ask me about HDF very often and it is one of those things we did that turned out very well.\\" - Tim Krauskopf"},{"name":"NetCDF","url":"https://www.unidata.ucar.edu/software/netcdf/","category":"raster","image":"https://registry.opendata.aws/img/logos/unidata-logo.png","description":"NetCDF (Network Common Data Form) consists of an interface, libraries and formats for creating, working with and sharing labelled, albeit nested data structure. It is particularly useful for scientific data.","releaseYear":"1989","language":"N/A","creators":"Unidata","developerQuote":""},{"name":"OGC","url":"https://www.ogc.org/","category":"other","image":"https://www.ogc.org/pub/www/files/ogc_logo_0.jpg","description":"OGC (Open Geospatial Consortium) is a global consortium of over 500 businesses, government agencies, research organizations, and universities. It connects the broader GIS community and promotes increased access to and sharing of geospatial information. OGC also sets standards for open source geospatial tools and has created many libraries that have contributed to the rich history of foss4G (Free and Open Source for Geo).","releaseYear":"1994","language":"N/A","creators":"N/A","developerQuote":""},{"name":"MapServer","url":"https://mapserver.org/","category":"both","image":"https://demo.mapserver.org/images/mapserver-logo.jpg","description":"MapServer is a tool (with old ties to NASA) used to publish geospatial data and interactive mapping apps. It does not require a strong technical background but users can enhance its capabilities with languages like Java and JavaScript.","releaseYear":"1994","language":"C, C++","creators":"Steve Lime","developerQuote":""},{"name":"GeoTiff","url":"https://www.ogc.org/standards/geotiff","category":"raster","image":"https://reference.wolfram.com/language/ref/format/Files/GeoTIFF.en/O_1.png","description":"GeoTIFF (Geo Tagged Image File Format) is a file format that allows users to georeference data in TIFF files (which store raster images). It was originally created for use by NASA and is used to share geographic image data.","releaseYear":"1995","language":"N/A","creators":"Niles Ritter","developerQuote":""},{"name":"GML","url":"https://www.ogc.org/standards/gml","category":"vector","image":"https://en.wikipedia.org/wiki/Geography_Markup_Language#/media/File:Simple_vector_map.svg","description":"GML (Geography Markup Language) is XML-based and is used to define geographic features within a broader GIS system. It is useful for encoding and sharing geographic information,is relatively data agnostic and is popular with municipal governments.","releaseYear":"2000","language":"XML","creators":"Open Geospatial Consortium","developerQuote":""},{"name":"GDAL","url":"https://gdal.org/","category":"raster","image":"https://www.osgeo.org/wp-content/uploads/GDAL-1_740x412_acf_cropped-370x206.png","description":"GDAL is a geospatial data abstraction library which contains input, output, and analysis functions for over 200 geospatial data formats. It supports APIs for all popular programming languages and includes a command line interface for quick raster processing tasks.","releaseYear":"2000","language":"C, C++, Python","creators":"Frank Warmerdam","developerQuote":"\\"It is in some ways a reincarnation of the proprietary GeoGateway library I created at PCI Geomatics in the 90\'s but it did not get much traction outside the company *because* it was proprietary. I picked writing a data translation library as a basis for consulting in large part because it was seen as a low prestige activity so folks were happy to have someone else do it!  It also grew a bit out of my collaboration on the GeoTIFF format efforts in earlier years (with Spot Image, and USGS), and the libgeotiff code that went with it. GRASS and MapServer were early applications using GDAL and really helped it\'s popularity.\\" - Frank Warmerdam"},{"name":"GeoServer","url":"http://geoserver.org/","category":"both","image":"https://www.osgeo.org/wp-content/uploads/GeoServer.png","description":"GeoServer is used to share and analyze geospatial data. It provides a simple way to connect data to web map apps and virtual globes and allows users to design and build maps in a variety of formats.","releaseYear":"2001","language":"Java","creators":"The Open Planning Project (TOPP)","developerQuote":""},{"name":"KML","url":"https://developers.google.com/kml","category":"both","image":"https://developers.google.com/kml/documentation/images/landing_page.png","description":"KML is a file format used to store, display and share geographic data. It is useful for sharing data tied to multiple aspects of a layer or map and can be viewed in several mapping applications.","releaseYear":"2001","language":"XML","creators":"Keyhole, Inc., Google","developerQuote":""},{"name":"QGIS","url":"https://qgis.org/en/site/","category":"both","image":"https://en.wikipedia.org/wiki/QGIS#/media/File:QGIS_logo,_2017.svg","description":"QGIS is a popular GIS suite for geospatial data analysis and visualization, particularly due to the breadth of its capabilities and compatibility with many open source GIS tools.","releaseYear":"2002","language":"C++, Python, Qt","creators":"Gary Sherman","developerQuote":""},{"name":"LAS","url":"https://www.ogc.org/standards/LAS#:~:text=The%20LAS%20file%20is%20intended,other)%20point%20cloud%20data%20records.&text=The%20intention%20of%20the%20data,data%20in%20a%20common%20format.","category":"both","image":"https://rapidlasso.files.wordpress.com/2014/01/kidarview.png ","description":"LAS (LASer) is a file format for storing and sharing airborne lidar data and 3D point cloud data. It is recognized as the gold standard for lidar data.","releaseYear":"2003","language":"N/A","creators":"American Society for Photogrammetry and Remote Sensing","developerQuote":""},{"name":"R-Spatial","url":"https://rspatial.org/","category":"both","image":"https://www.sylvaindurand.org/img/carto/density.jpg","description":"R-Spatial is used to analyze geospatial data for spatial modeling purposes. It is similar to geopanda but for the R language and adds in spatial columns for dataframes.","releaseYear":"2003","language":"R","creators":"Edzer Pebesma","developerQuote":""},{"name":"SAGA","url":"http://www.saga-gis.org/","category":"both","image":"https://gisgeography.com/wp-content/uploads/2016/01/SAGA-3D-Mapping-Anaglyph.png","description":"SAGA (System for Automated Geoscientific Analyses) is used to edit geospatial data and implement geospatial methods and algorithms, particularly for high-level apps. It is also very useful for terrain analysis.","releaseYear":"2004","language":"C++","creators":"Department of Physical Geography, University of G\xf6ttingen","developerQuote":""},{"name":"NumPy","url":"https://numpy.org/","category":"both","image":"https://numpy.org/images/logos/numpy.svg","description":"NumPy was created to be the core package for scientific computing with Python. It provides tools and support for processing high performing, multidimensional arrays.","releaseYear":"2005","language":"Python, C","creators":"Travis Oliphant","developerQuote":""},{"name":"NetworkX","url":"http://networkx.github.io/","category":"other","image":"http://networkx.github.io/_static/networkx_logo.svg","description":"NetworkX is a library used for the analysis of graphs and complex networks. It is notable for working with a variety of data types and large volumes of data.","releaseYear":"2005","language":"Python","creators":"Aric Hagberg, Pieter Swart and Dan Schult","developerQuote":""},{"name":"PyProj","url":"https://pyproj4.github.io/pyproj/stable/","category":"other","image":"https://miro.medium.com/max/12224/1*lJdtMMP8Q0xuIiO3v_xVwQ.png","description":"PyProj is a Python interface for PROJ for map projections. It performs cartographic transformations between coordinate reference systems.","releaseYear":"2006","language":"Python","creators":"Jeff Whitaker","developerQuote":""},{"name":"MapShaper","url":"https://mapshaper.org/","category":"vector","image":"https://i.ytimg.com/vi/MTfpQ2cG9CU/maxresdefault.jpg","description":"Mapshaper provides users with tools to make maps from existing files and supports multiple data formats. It is useful due to its ease of use, especially for tasks that are time-consuming.","releaseYear":"2006","language":"JavaScript","creators":"Matthew Bloch","developerQuote":""},{"name":"GeoDjango","url":"https://docs.djangoproject.com/en/3.0/ref/contrib/gis/","category":"vector","image":"https://img-a.udemycdn.com/course/750x422/305714_e8f2_3.jpg","description":"GeoDjango is a geographic framework built atop Django and is useful for easing the process of building GIS web apps and working with geospatial data. It has python interfaces for several open source (and proprietary) GIS libraries.","releaseYear":"2006","language":"Python","creators":"Justin Bronn","developerQuote":""},{"name":"RTree","url":"https://github.com/Toblerity/rtree","category":"other","image":"https://secureservercdn.net/198.71.233.197/hb9.c63.myftpupload.com/wp-content/uploads/2020/04/RTree.png","description":"RTree is a Python interface for libspatialindex (which is the real meat of what RTree does and is used to build and query large indexes of rectangles). It provides advanced spatial indexing features as well as efficient data storage.","releaseYear":"2007","language":"Python","creators":"Sean Gillies","developerQuote":""},{"name":"Shapely","url":"https://github.com/Toblerity/Shapely","category":"vector","image":null,"description":"Shapely is a Python interface for GEOS and defines geometric objects and the spatial relationships between them. It is a useful dependency for higher-level GIS packages.","releaseYear":"2008","language":"Python","creators":"Sean Gillies","developerQuote":""},{"name":"GeoJSON","url":"https://geojson.org/","category":"vector","image":"https://lh3.googleusercontent.com/proxy/bm_8zsnKwpkH6eC0Mfcb2Pu9kjmjbL-ZZ3BSq4fUllTh24_5-9Oxf0r5Ezrtd7hG1NRLO0xiIDD8hasBMhn8qrO19DOAyN7xmf4Z","description":"GeoJSON is a format used to represent geospatial elements alongside their nonspatial attributes and is based on the JSON format. It is beloved for its ease of use.","releaseYear":"2008","language":"JavaScript","creators":"Howard Butler,  Martin Daly, Allan Doyle, Sean Gillies, Tim Schaub, Christopher Schmidt","developerQuote":""},{"name":"GEOS","url":"https://trac.osgeo.org/geos/","category":"vector","image":"https://trac.osgeo.org/geos/chrome/site/geos.gif","description":"GEOS (Geometry Engine Open Source) is an alternative to JTS (Java Topography Suite) and is used to program with 2D geometries and spatial predicates. It serves as an underlying geometry implementation for many open source tools.","releaseYear":"2008","language":"C++","creators":"Refractions Research","developerQuote":""},{"name":"GeoODK","url":"http://geoodk.com/","category":"other","image":"https://lh3.googleusercontent.com/a4tBqdzeHk_lIsycjyr4KrHQH7W46xwPuboq5vxdNNbcvi6wOTDtD6ikspdoOmXOTpyZ=s360-rw","description":"GeoODK is used to collect, store, analyze and visualize georeferenced data. It is helpful for remote data collection, even while offline, and can be applied to a wide variety of tasks.","releaseYear":"2008","language":"N/A","creators":"Jon Nordling","developerQuote":"\\"Some of the impetus for GeoODK was that alternatives for collecting data at that time (around 2008) were not available. So Jon developed GeoODK which integrates with ODK for doing large scale surveys of developing nations. People have used ODK to be able to do large scale data collection projects that have a geo component.\\" - (Based on Jon Nordling\u2019s chat with makepath)"},{"name":"PySAL","url":"https://pysal.org/","category":"vector","image":"https://secureservercdn.net/198.71.233.197/hb9.c63.myftpupload.com/wp-content/uploads/2020/05/PySAL.png","description":"PySAL: PySAL (Python Spatial Analysis Library) is a spatial data science suite used to develop advanced spatial analytics applications.","releaseYear":"2010","language":"Python","creators":"Luc Anselin, Sergio Ray","developerQuote":"\\"The idea was to build a library of advanced spatial analytical functionality... And that is how PySAL was born. A second motivation for PySAL stemmed from the recognition that Python was starting to make inroads into other sciences...yet it had seen only limited adoption in regional science and geographical information science (GIS).\\" - Sergio Rey"},{"name":"HOT","url":"https://www.hotosm.org/","category":"other","image":"https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/10153119_809691102392643_1092519214_n.png?_nc_cat=104&_nc_sid=85a577&_nc_ohc=JWKjiiT0RooAX_p-sHG&_nc_ht=scontent-dfw5-2.xx&oh=cc01c1526d7ab4a9a082960001109ffb&oe=5F5B2096","description":"HOT (Humanitarian OpenStreetMap Team) is an offshoot of OpenStreetMap focused on humanitarian work and community development and engagement. The map data provided by HOT is used to manage disasters and work towards ongoing sustainable goals.","releaseYear":"2010","language":"Javascript, Ruby","creators":"Steve Coast, Mikel Maron, OpenStreetMaps team","developerQuote":"\\"OpenStreetMap in 2005 was a crazy, barely working idea. Using OSM for humanitarian response was even crazier. After I got confused with so many new acronyms in the humanitarian system, it was clear we needed our own. Humanitarian OpenStreetMap Team, or HOT, was a bit of a joke name with a very serious mission. OSM is now the default map for humanitarian response, and HOT is a very active global organization and community.\\" - Mikel Maron"},{"name":"Leaflet","url":"https://leafletjs.com/","category":"raster","image":"https://leafletjs.com/docs/images/logo.png","description":"Leaflet is used to create interactive maps and is accessible to users with a limited GIS background. It prides itself in \u201cmaking the basic things work perfectly\u201d and was designed to be the most mobile-friendly interactive mapping solution.","releaseYear":"2011","language":"JavaScript","creators":"Vladimir Agofonkin","developerQuote":"\\"...everyone around me told me I would certainly fail in something that I really strongly believe in, so I\'m like, \u201cchallenge accepted\u201d, and I came up with a super plan. I decided to build the mapping software from scratch and didn\'t tell anyone about it. I started writing day and night... a couple weeks later when I had to present my results to my boss and company managers, I had a first version of my mapping API that was really lightweight and fast and easy use and looked pretty nice... when they saw it... they were absolutely blown away because... they never saw an interactive map working so fast in a web browser before.\\" - Vladimir Agofonkin"},{"name":"Fiona","url":"https://github.com/Toblerity/Fiona","category":"vector","image":null,"description":"Fiona is used to read and write geospatial vector data and can integrate with several GIS libraries. It\u2019s not as extensive as other Python packages, but was designed to be a simple, reliable tool for specific types of tasks.","releaseYear":"2011","language":"Python","creators":"Sean Gillies","developerQuote":""},{"name":"CesiumJS","url":"https://cesium.com/cesiumjs/","category":"raster","image":"https://cesium.com/images/logos/cesium/cesium_color_white.png","description":"CesiumJS is a platform for creating 3D globes, maps and geospatial applications. It\u2019s adept at wrangling huge amounts of data and enabling developers to easily create and share 3D content.","releaseYear":"2012","language":"JavaScript","creators":"Patrick Cozzi, AGI Graphic Developers","developerQuote":""},{"name":"Field Papers","url":"http://fieldpapers.org/","category":"other","image":"http://fieldpapers.org/assets/atlases-large-ba4ed3f78a48fb82b659a68702a986efe90bd55a8d39a098cca2314b2e809312.gif","description":"Field Papers is a web-based tool for creating printable maps. It is an important tool for offline data recording and is useful for recording field data and updating maps as needed. It allows users to print, mark up, and scan maps for field surveys.","releaseYear":"2012","language":"JavaScript, Ruby, C++, Python","creators":"Mike Migurski, Stamen Design","developerQuote":"\\"When Stamen created Field Papers in 2009 and presented it at the annual OpenStreetMap conference that year, we envisioned it as a component of a casual, low-tech mapping flow for use in OSM\u2019s core areas of strength in Northern Europe and the United States. Then in 2010 volunteers used Field Papers after Haiti\u2019s devastating earthquake. They opened our eyes to critical humanitarian applications of paper-based surveying and moved OSM as a whole into an entirely new range of uses in traditionally under-mapping areas.\\" - Mike Migurski"},{"name":"folium","url":"https://python-visualization.github.io/folium/","category":"other","image":"https://secureservercdn.net/198.71.233.197/hb9.c63.myftpupload.com/wp-content/uploads/2020/05/Folium.jpg","description":"Folium is used to create striking Leaflet maps from Python data. One cool feature is that it produces interactive results, which is helpful in building dashboards. It also includes a number of plugins that supercharge its capabilities.","releaseYear":"2013","language":"Python","creators":"Rob Story","developerQuote":"\\"At the time I was working at Vestas, a wind turbine manufacturer, and needed some libraries to help me build map visualizations for work. I didn\'t actually end up using Folium very much at Vestas, but started spending a lot of free time on it because it was a really fun project to tinker with. Fun fact: all of the examples are Portland and Mt Hood because that\'s where I live.\\" - Rob Story"},{"name":"Rasterio","url":"https://github.com/mapbox/rasterio/blob/master/docs/index.rst","category":"raster","image":"https://images.squarespace-cdn.com/content/v1/58c95854c534a56689231265/1548370217283-U5YO0IG6L09ESUJRN2GC/ke17ZwdGBToddI8pDm48kLVZfsNZCpV8XwyMNjNEyZR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYiipimX1CPzPMsJx2tmJt0yszX88epfttwxVNvKBA9EG6v6ULRah83RgHXAWD5lbQ/falsecolor.PNG?format=2500w","description":"Rasterio is a wrapper around GDAL for use within the Python scientific data stack and integrates well with Xarray and Numpy. It is used to read, write and organize raster data with minimal cognitive load.","releaseYear":"2013","language":"Python","creators":"Sean Gillies","developerQuote":""},{"name":"OpenDroneMap","url":"https://www.opendronemap.org/","category":"other","image":"https://raw.githubusercontent.com/OpenDroneMap/OpenDroneMap/master/img/odm_image.png","description":"OpenDroneMap is a drone mapping software that supports a command line toolkit (ODM) and user interface (WebODM) for working with aerial imagery from drones. It can transform 2D images into 3D representations such as classified point clouds.","releaseYear":"2013","language":"Python, C++, JavaScript, Shell, Go","creators":"Open Source Geospatial Foundation, Piero Toffanin","developerQuote":""},{"name":"GeoPackage","url":"https://www.geopackage.org/","category":"other","image":"http://www.geopackage.org/img/geopkg.png","description":"GeoPackage is a SQLite-based data container used as a compact format to store and transfer geospatial (both vector and raster) data. Unlike many GIS tools, it\u2019s designed to work well on mobile devices, even when dealing with connectivity and bandwidth issues.","releaseYear":"2014","language":"N/A","creators":"Open Geospatial Consortium, U.S. Military","developerQuote":""},{"name":"Cartopy","url":"https://scitools.org.uk/cartopy/docs/latest/","category":"vector","image":"https://warehouse-camo.ingress.cmh1.psfhosted.org/ba5e90f299bbc5539b2bbba4514d367a1ad6bec3/68747470733a2f2f736369746f6f6c732e6f72672e756b2f636172746f70792f646f63732f6c61746573742f5f7374617469632f636172746f70792e706e67","description":"Cartopy is used for geospatial analysis and map production. It was originally designed to help scientists at the UK Met Office create easy and accurate data visualizations.","releaseYear":"2014","language":"Python","creators":"UK Met Office","developerQuote":""},{"name":"GeoPandas","url":"https://geopandas.org/","category":"vector","image":"https://miro.medium.com/max/2478/1*ZKyfhg_HVBf-YnyIAfOa9Q.png","description":"GeoPandas has a simple goal: make working with geospatial data in Python easier. It integrates well with Shapely and Fiona and expands on the built-in pandas data types within a new data structure called the GeoDataFrame.","releaseYear":"2014","language":"Python","creators":"Joris Van den Bossche","developerQuote":""},{"name":"Xarray","url":"http://xarray.pydata.org/en/stable/#","category":"both","image":"http://xarray.pydata.org/en/stable/_static/dataset-diagram-logo.png","description":"Xarray makes working with labelled multi-dimensional arrays as pleasant as it can possibly be. It builds upon pandas and integrates well with Dask.","releaseYear":"2014","language":"Python","creators":"Stefan Hoyer, Alex Kleeman, Eugene Brevdo","developerQuote":""},{"name":"Datashader","url":"https://datashader.org/","category":"raster","image":"https://datashader.org/_static/logo_horizontal.png","description":"Datashader is a general-purpose rasterization pipeline used to handle large datasets and generate meaningful visualizations. It allows you to intelligently grid your data, which is especially useful if you want to convert from a vector type to a raster type.","releaseYear":"2016","language":"Python","creators":"Peter Wang, Jim Bednar","developerQuote":""},{"name":"GeoRSS","url":"https://www.ogc.org/standards/georss","category":"vector","image":"https://www.turismo.gal/imaxes/mdaw/mtaw/~edisp/~extract/TURGA100631~1~staticrendition/tg_sinescalar.jpg","description":"GeoRSS is a live web feed that includes geographic features and locations and allows users to encode location data in an interoperable manner.","releaseYear":"2017","language":"N/A","creators":"Carl Reed and Associates, Mikel Maron, Tumblingwalls, Galdos, IBM","developerQuote":"\\"There was a time when RSS was going to be the backbone of a distributed web of easy and automatic sharing and linking. RSS was extensible, so adding geo to it would make the whole web a map. I was inspired by a lot of very creative hacking in the wake of the dotcom bust. By the time we finished standardizing, the moment for GeoRSS had passed. Nowadays, GeoJSON is the transport format of choice.\\" - Mikel Maron"},{"name":"H3","url":"https://github.com/uber/h3","category":"other","image":"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Twitter-H3.png","description":"H3 uses indexes with hexagons for geospatial analysis. This more effectively accounts for the mobility of data points and minimizes errors in quantization.","releaseYear":"2018","language":"C","creators":"Isaac Brodsky","developerQuote":"\\"H3 has made it possible to aggregate, process, and visualize geospatial big data, starting with dynamic pricing at Uber. Since being published as open source, H3 has helped in use cases ranging from wildfire analysis to videogames. H3 offers a way to join diverse datasets together and efficiently analyze them.\\" - Isaac Brodsky"},{"name":"deck.gl","url":"http://deck.gl/","category":"other","image":"https://miro.medium.com/max/3600/0*bMnk_yNFAWnMQjOw.png","description":"\\"deck.gl has pushed the boundaries for visualization and processing of big geospatial data and showed performance and capabilities that are possible in the browser. Its architecture as a composable toolbox has enabled a wide array of use cases across different industries and supported the creation of a wide array of beautiful WebGL powered visualization components (\\"layers\\").\\" - Ib Green","releaseYear":"2018","language":"Javascript","creators":"Ib Green","developerQuote":""},{"name":"kepler.gl","url":"http://kepler.gl/","category":"other","image":"https://camo.githubusercontent.com/c98e8bfb69c993dfe96e6a210371bc279668e878/68747470733a2f2f6431613366347370617a7a7270342e636c6f756466726f6e742e6e65742f6b65706c65722e676c2f776562736974652f69636f6e732f6b65706c65722e676c2d6c6f676f2e706e67","description":"\\"Kepler.gl is a data-agnostic, high-performance web-based application for visual exploration of large-scale geospatial datasets. kepler.gl can render millions of points representing thousands of trips and perform spatial aggregations on the fly. It is built for users with a variety of experience and skill levels to navigate the vast amount of geospatial data and create meaningful data visualizations within minutes, no code required.\\" - Shan He","releaseYear":"2018","language":"Python","creators":"Shan He","developerQuote":""},{"name":"SpatialPandas","url":"https://github.com/holoviz/spatialpandas","category":"vector","image":"https://secureservercdn.net/198.71.233.197/hb9.c63.myftpupload.com/wp-content/uploads/2020/04/Spatialpandas-1-1.png","description":"SpatialPandas supports Pandas and Dask extensions for vector-based spatial and geometric operations. It is useful for working with vectorized geometric algorithms using Numba or Python. The library was first used for polygon rasterization with Datashader and since has become its own standalone project.","releaseYear":"2019","language":"Python","creators":"Jon Mease","developerQuote":""},{"name":"Xarray-Spatial","url":"https://github.com/makepath/xarray-spatial","category":"raster","image":"https://repository-images.githubusercontent.com/239188894/eab68a80-84b5-11ea-8221-0a1a63bc02f1","description":"Xarray-Spatial is used to implement common raster analysis functions using Numba and provides an easy-to-install, easy-to-extend codebase for raster analysis. It originated from the Datashader project and includes tools for surface, proximity, and zonal/focal analyses.","releaseYear":"2020","language":"Python","creators":"makepath","developerQuote":""}]')},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(8),s=t.n(n),i=t(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(27);s.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.0dd29737.chunk.js.map